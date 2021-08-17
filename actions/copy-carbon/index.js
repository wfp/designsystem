const fetch = require('node-fetch');
const unzipper = require('unzipper');
const fs = require('fs');
const del = require('del');
const replaceInFiles = require('replace-in-files');

async function get_request() {
  const options = {
    // See more: https://www.npmjs.com/package/globby
    // Multiple files or globs
    files: ['output/**'],

    // See more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    // Replacement
    from: /Carbon/g, // string or regex
    to: 'WFP', // string or fn  (fn: carrying last argument - path to replaced file)

    // See more: https://www.npmjs.com/package/glob
    optionsForFiles: {
      // default
      ignore: ['**/node_modules/**'],
    },

    // format: `${fileName}-${year}-${month}-${day}_${hour}:${minute}:${second}.{fileExtension}`
    //            fileName-2017-11-01_21:29:55.js
    // date of createFile old file or last modificate (if not find create date)
    saveOldFile: false, // default

    //Character encoding for reading/writing files
    encoding: 'utf8', // default

    shouldSkipBinaryFiles: true, // default
    onlyFindPathsWithoutReplace: false, // default
    returnPaths: true, // default
    returnCountOfMatchesByPaths: true, // default
  };

  try {
    const { changedFiles, countOfMatchesByPaths, replaceInFilesOptions } =
      await replaceInFiles(options)
        .pipe({
          from: /carbon/g,
          to: () => 'wfp',
        })
        .pipe({
          from: /browserslist-config-wfp/g,
          to: () => 'browserslist-config-carbon',
        });

    console.log('Modified files:', changedFiles);
    console.log('Count of matches by paths:', countOfMatchesByPaths);
    console.log('was called with:', replaceInFilesOptions);
  } catch (error) {
    console.log('Error occurred:', error);
  }

  try {
    const { changedFiles, countOfMatchesByPaths, replaceInFilesOptions } =
      await replaceInFiles({
        ...options,
        files: ['output/**/*.js'],
        from: /^/g,
        to: () =>
          '/** \n* Do not modify this file. The file is comming from IBM Carbon and created by copy-carbon \n**/\n',
      });
    console.log('Modified files:', changedFiles);
    console.log('Count of matches by paths:', countOfMatchesByPaths);
    console.log('was called with:', replaceInFilesOptions);
  } catch (error) {
    console.log('Error occurred:', error);
  }
}

get_request();
