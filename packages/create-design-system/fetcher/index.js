const fs = require('fs');
const os = require('os');
const url = require('url');
const axios = require('axios');
const shell = require('shelljs');
const argsParser = require('args-parser');
const isOnline = require('is-online');
const progress = require('./progress');

function filesFetcher(properties) {
  function thisPromiseCount() {
    console.log('thisPromiseCount');
  }
  return new Promise(function (resolve, reject) {
    const AUTHOR = 1;
    const REPOSITORY = 2;
    const BRANCH = 4;

    // Progress managment
    const progressBar = progress.bar;
    const fileStats = {
      downloaded: 0,
      currentTotal: 0,
      done: false,
      doesDownloadDirectory: false,
    };

    // A utility function for expand `~`
    function tilde(pathString) {
      if (pathString[0] === '~') {
        return os.homedir() + pathString.substring(1);
      }
      return pathString;
    }

    // The default output directory is the current directory
    let outputDirectory = `${process.cwd()}/`;
    let localRootDirectory = '';
    let currentDownloadingFile = '';
    // Default authentication setting
    const authentication = {};
    let authenticationSwitch = {};
    let doesUseAuth = false;
    // Defalut configuration file
    let configFile = tilde('~/.download_github');
    // `timeout` specifies the number of milliseconds to exit after the internet is detected disconnected.
    let timeout;
    let timer;
    // Root directory when clean up
    let rootDirectoryForCleanUp;

    function checkGithubRepoURLValidity(downloadUrl) {
      const { hostname, pathname } = url.parse(downloadUrl, true);

      if (hostname !== 'github.com') {
        throw new Error('Invalid domain: github.com is expected!');
      }

      if (pathname.split('/').length < 3) {
        throw new Error(
          'Invalid url: https://github.com/user/repository is expected'
        );
      }
    }

    function printHelpInformation() {
      console.log(`
  Usage: download [OPTION]... 
  Example: download --url='https://github.com/user/repository'  --out='~/output'
  
  Resource URL:
  --url=URL                     the url of resource to be downloaded
  
  Output:
  --out=output_directory        the directory holds your download resource
  
  Authentication:
  --auth=username:password      the password can be either you login password of github account or access token
  --alwaysUseAuth               if set true, every request is authenticated and in this way we can have more API
                                access rate
  
  Configuration file:
  --file=config_file            the default configuration file is the '~/.download_github'

  Timeout: 
  --timeout=number(ms)          timeout specifies the number of milliseconds to exit after the internet is detected disconnected
`);
    }

    // Find root directory for clean up when exit unexpectedly
    function findRootDirectoryForCleanUp(out) {
      const segments = out.split(/\/+/);
      let path = segments[0];
      let rootDirectoryForCleanUp;

      for (let i = 1; i < segments.length; i++) {
        path = `${path}/${segments[i]}`;
        if (!fs.existsSync(path)) {
          rootDirectoryForCleanUp = path;
          break;
        }
      }

      return rootDirectoryForCleanUp;
    }

    const args = properties ? properties : argsParser(process.argv);
    let doseJustPrintHelpInfo = args.help || Object.keys(args).length === 0;
    try {
      (function tackleArgs() {
        if (doseJustPrintHelpInfo) {
          printHelpInformation();
          return;
        }

        // The url is required and should be a valid github repository url
        if (!args.url) {
          throw new Error('  Bad option: a URL is needed!');
        } else {
          checkGithubRepoURLValidity(args.url);
        }

        if (args.out) {
          outputDirectory = tilde(args.out);
          if (outputDirectory[args.out.length - 1] !== '/') {
            outputDirectory = `${outputDirectory}/`;
          }
          rootDirectoryForCleanUp =
            findRootDirectoryForCleanUp(outputDirectory);
        }

        if (args.auth) {
          const { auth } = args;

          const colonPos = auth.indexOf(':');
          if (colonPos === -1 || colonPos === auth.length - 1) {
            throw new Error('Bad auth option: username:password is expected!');
          }

          const [username, password] = auth.split(':');
          authentication.auth = {
            username,
            password,
          };

          if (args.alwaysUseAuth) {
            authenticationSwitch = authentication;
            doesUseAuth = true;
          }
        }

        if (args.timeout !== undefined) {
          timeout = parseInt(args.timeout, 10);
          // [eslint] Unexpected use of 'isNaN'. (no-restricted-globals)
          timeout = Number.isNaN(timeout) ? undefined : timeout;
        }

        if (args.file) {
          configFile = tilde(args.file);
        }
      })();
    } catch (error) {
      console.log(error.message);
      printHelpInformation();
      // No more action, just quit after printing help information
      doseJustPrintHelpInfo = true;
    }

    const parameters = {
      url: args.url,
      fileName: undefined,
      rootDirectory: undefined,
    };

    // If there no `auth`, `alwaysUseAuth`, `timeout` provided in the commandline, then we need
    // to read the configuration file
    function doesNeedReadConfiguration() {
      if (!args.auth || !args.alwaysUseAuth || !args.timeout) return true;
      return false;
    }

    // Read the configuration file if exists
    // WARNING: options provided in commandline prioritize those in configuration file
    if (fs.existsSync(configFile) && doesNeedReadConfiguration()) {
      const data = fs.readFileSync(configFile, 'utf8');
      const config = JSON.parse(data);

      if (!args.auth && config.auth) authentication.auth = config.auth;

      if (!args.alwaysUseAuth && config.alwaysUseAuth) {
        authenticationSwitch = authentication;
        doesUseAuth = true;
      }

      if (!args.timeout && config.timeout) {
        timeout = parseInt(config.timeout, 10);
        timeout = Number.isNaN(timeout) ? undefined : timeout;
      }
    }

    function preprocessURL(repoURL) {
      // We just simply fix issue#2(https://github.com/Gyumeijie/github-files-fetcher/issues/2)
      // not to guarantee the validity of the url of the repository
      const len = repoURL.length;
      if (repoURL[len - 1] === '/') {
        return repoURL.slice(0, len - 1);
      }

      return repoURL;
    }

    function parseInfo(repoInfo) {
      const repoURL = preprocessURL(repoInfo.url);
      const repoPath = url.parse(repoURL, true).pathname;
      const splitPath = repoPath.split('/');
      const info = {};

      info.author = splitPath[AUTHOR];
      info.repository = splitPath[REPOSITORY];
      info.branch = splitPath[BRANCH];
      info.rootName = splitPath[splitPath.length - 1];

      // Common parts of url for downloading
      info.urlPrefix = `https://api.github.com/repos/${info.author}/${info.repository}/contents/`;
      info.urlPostfix = `?ref=${info.branch}`;

      if (splitPath[BRANCH]) {
        info.resPath = repoPath.substring(
          repoPath.indexOf(splitPath[BRANCH]) + splitPath[BRANCH].length + 1
        );
      }

      if (!repoInfo.fileName || repoInfo.fileName === '') {
        info.downloadFileName = info.rootName;
      } else {
        info.downloadFileName = repoInfo.fileName;
      }

      if (repoInfo.rootDirectory === 'false') {
        info.rootDirectoryName = '';
      } else if (
        !repoInfo.rootDirectory ||
        repoInfo.rootDirectory === '' ||
        repoInfo.rootDirectory === 'true'
      ) {
        info.rootDirectoryName = `${info.rootName}/`;
      } else {
        info.rootDirectoryName = `${parameters.rootDirectory}/`;
      }

      return info;
    }

    const basicOptions = {
      method: 'get',
      responseType: 'arrayBuffer',
    };
    // Global variable
    let repoInfo = {};

    function cleanUpOutputDirectory() {
      if (rootDirectoryForCleanUp !== undefined) {
        shell.rm('-rf', rootDirectoryForCleanUp);
        return;
      }

      if (fileStats.doesDownloadDirectory) {
        shell.rm('-rf', localRootDirectory);
      } else {
        // Mainly for remove .zip file, when download a whole repo
        shell.rm('-f', localRootDirectory + currentDownloadingFile);
      }
    }

    function processClientError(error, retryCallback) {
      // Due to the cli-process, all console output before `stop` will be cleared,
      // to avoid that we put `stop` before the console output
      progressBar.stop();

      // WARNING: never trust the returned data
      if (error.response === undefined) {
        console.error(`
      No internet, try:\n
      - Checking the network cables, modem, and router
      - Reconnecting to Wi-Fi`);
        if (localRootDirectory !== '') cleanUpOutputDirectory();
        // Must use exit here not return
        process.exit();
      }

      if (error.response.status === 401) {
        // Unauthorized
        console.error(
          '\nBad credentials, please check your username or password(or access token)!'
        );
      } else if (error.response.status === 403) {
        if (authentication.auth) {
          // If the default API access rate without authentication exceeds and the command line
          // authentication is provided, then we switch to use authentication
          console.warn(
            '\nThe unauthorized API access rate exceeded, we are now retrying with authentication......\n'
          );
          authenticationSwitch = authentication;
          doesUseAuth = true;
          retryCallback();
        } else {
          // API rate limit exceeded
          console.error(
            '\nAPI rate limit exceeded, Authenticated requests get a higher rate limit.' +
              ' Check out the documentation for more details. https://developer.github.com/v3/#rate-limiting'
          );

          // If there already has part of files downloaded, then clean up the output directory
          if (localRootDirectory !== '') cleanUpOutputDirectory();
        }
      } else {
        let errMsg = `\n${error.message}`;
        if (error.response.status === 404) {
          errMsg += ', please check the repo URL!';
        }
        console.error(errMsg);
      }

      // Must use exit here not return
      process.exit();
    }

    function extractFilenameAndDirectoryFrom(path) {
      const components = path.split('/');
      const filename = components[components.length - 1];
      const directory = path.substring(0, path.length - filename.length);

      return {
        filename,
        directory,
      };
    }

    /*
     * @example
     * take fether --url='https://github.com/reduxjs/redux/tree/master/examples/async' for example:
     * all paths of files under the 'async' directory are prefixed with the so-called 'resPath', which
     * equals to 'example/async', and the 'rootDirectoryName' is 'async'. The 'resPath' could be very long,
     * and we don't need that deep path locally in fact. So we just remove the 'resPath' from the path of a file.
     */

    function removeResPathFrom(path) {
      return path.substring(decodeURI(repoInfo.resPath).length + 1);
    }

    function constructLocalPathname(repoPath) {
      const partialPath = extractFilenameAndDirectoryFrom(
        removeResPathFrom(repoPath)
      );
      localRootDirectory = outputDirectory /* + repoInfo.rootDirectoryName*/;
      const localDirectory = localRootDirectory + partialPath.directory;

      return {
        filename: partialPath.filename,
        directory: localDirectory,
      };
    }

    const pathCache = [];
    function downloadFile(url, pathname) {
      axios({
        ...basicOptions,
        responseType: 'stream',
        url,
        ...authenticationSwitch,
      })
        .then((response) => {
          if (pathCache.indexOf(pathname.directory) === -1) {
            shell.mkdir('-p', pathname.directory);
            pathCache.push(pathname.directory);
          }

          const localPathname = pathname.directory + pathname.filename;
          response.data
            .pipe(fs.createWriteStream(localPathname))
            .on('error', (error) =>
              processClientError(
                {
                  response: {},
                  message: error,
                },
                null
              )
            )
            .on('close', () => {
              fileStats.downloaded++;
              // Avoid falsy 100% progress, it is a sheer trick of presentation, not the logic
              if (fileStats.downloaded < fileStats.currentTotal) {
                progressBar.update(fileStats.downloaded, {
                  doesUseAuth,
                });
              }

              if (
                fileStats.downloaded === fileStats.currentTotal &&
                fileStats.done
              ) {
                progressBar.update(fileStats.downloaded, {
                  status: 'downloaded',
                });
                progressBar.stop();
                resolve(1);
                //process.exit();
              }
            });
        })
        .catch((error) => {
          processClientError(error, downloadFile.bind(null, url, pathname));
        });
    }

    function iterateDirectory(dirPaths) {
      axios({
        ...basicOptions,
        url: repoInfo.urlPrefix + dirPaths.pop() + repoInfo.urlPostfix,
        ...authenticationSwitch,
      })
        .then((response) => {
          const { data } = response;
          for (let i = 0; i < data.length; i++) {
            if (data[i].type === 'dir') {
              dirPaths.push(data[i].path);
            } else if (data[i].download_url) {
              const pathname = constructLocalPathname(data[i].path);
              downloadFile(data[i].download_url, pathname);

              fileStats.currentTotal++;
              progressBar.setTotal(fileStats.currentTotal);
            } else {
              console.log(data[i]);
            }
          }

          if (dirPaths.length !== 0) {
            iterateDirectory(dirPaths);
          } else {
            fileStats.done = true;
          }
        })
        .catch((error) => {
          processClientError(error, iterateDirectory.bind(null, dirPaths));
        });
    }

    function downloadDirectory() {
      const dirPaths = [];
      dirPaths.push(repoInfo.resPath);
      iterateDirectory(dirPaths);
    }

    function initializeDownload(paras) {
      repoInfo = parseInfo(paras);

      if (!repoInfo.resPath || repoInfo.resPath === '') {
        if (!repoInfo.branch || repoInfo.branch === '') {
          repoInfo.branch = 'master';
        }

        // Download the whole repository as a zip file
        const repoURL = `https://github.com/${repoInfo.author}/${repoInfo.repository}/archive/${repoInfo.branch}.zip`;
        downloadFile(repoURL, {
          directory: outputDirectory,
          filename: `${repoInfo.repository}.zip`,
        });
        localRootDirectory = outputDirectory;
        currentDownloadingFile = `${repoInfo.repository}.zip`;
        fileStats.done = true;
        fileStats.currentTotal = 1;
        progressBar.setTotal(fileStats.currentTotal);
      } else {
        // Download part(s) of repository
        axios({
          ...basicOptions,
          url: repoInfo.urlPrefix + repoInfo.resPath + repoInfo.urlPostfix,
          ...authenticationSwitch,
        })
          .then((response) => {
            if (response.data instanceof Array) {
              downloadDirectory();
              fileStats.doesDownloadDirectory = true;
            } else {
              const partialPath = extractFilenameAndDirectoryFrom(
                decodeURI(repoInfo.resPath)
              );
              downloadFile(response.data.download_url, {
                ...partialPath,
                directory: outputDirectory,
              });
              localRootDirectory = outputDirectory;
              currentDownloadingFile = partialPath.filename;
              fileStats.done = true;
              fileStats.currentTotal = 1;
              progressBar.setTotal(fileStats.currentTotal);
            }
          })
          .catch((error) => {
            processClientError(error, initializeDownload.bind(null, paras));
          });
      }
    }

    // Enable to detect CTRL+C
    process.on('SIGINT', () => {
      if (localRootDirectory !== '') cleanUpOutputDirectory();
      progressBar.stop(); // Recover cursor
      process.exit();
    });

    // Enable to detect internet connectivity
    function detectInternetConnectivity() {
      isOnline().then((online) => {
        if (!online && timeout !== undefined) {
          setTimeout(() => {
            clearInterval(timer);
            // Construct a falsy error object to indicate the disconnectivity
            processClientError({ response: undefined }, null);
          }, timeout);
        }
      });
    }

    timer = setInterval(detectInternetConnectivity, 2000);

    if (!doseJustPrintHelpInfo) {
      // Initialize progress bar
      console.log('');
      progressBar.start(fileStats.currentTotal, fileStats.downloaded, {
        status: 'downloading...',
        doesUseAuth,
      });

      initializeDownload(parameters);
    } else {
      clearInterval(timer);
    }
  });
}

module.exports = filesFetcher;
