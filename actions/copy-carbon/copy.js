const fetch = require('node-fetch');
const unzipper = require('unzipper');
const del = require('del');
const replaceInFiles = require('replace-in-files');
var fs = require('fs-extra');

async function get_request() {
  // Babel presets
  await del(
    ['../../config/babel-preset-wfp', '../../config/babel-preset-carbon'],
    { force: true }
  );

  fs.copy(
    'output/carbon-main/config/babel-preset-carbon',
    '../../config/babel-preset-wfp',
    function (err) {
      if (err) return console.error(err);
      console.log('success!');
    }
  );

  // babel-preset-wfp
  // TODO: optimize code
  let oldRawdataBabel = fs.readFileSync(
    '../../config/babel-preset-carbon/package.json'
  );
  let oldPackageJsonBabel = JSON.parse(oldRawdataBabel);

  let rawdataBabel = fs.readFileSync(
    'output/carbon-main/config/babel-preset-carbon/package.json'
  );
  let packageJsonBabel = JSON.parse(rawdataBabel);
  packageJsonBabel.private = false;
  console.log('packageJson', packageJsonBabel);

  fs.writeFileSync(
    'output/carbon-main/packages/babel-preset-carbon/package.json',
    JSON.stringify(packageJsonBabel, null, 4)
  );

  // CLI

  let oldRawdata = fs.readFileSync('../../packages/cli/package.json');
  let oldPackageJson = JSON.parse(oldRawdata);

  let rawdata = fs.readFileSync('output/carbon-main/packages/cli/package.json');
  let packageJson = JSON.parse(rawdata);
  packageJson.version = oldPackageJson.version;
  console.log('packageJson', packageJson);

  fs.writeFileSync(
    'output/carbon-main/packages/cli/package.json',
    JSON.stringify(packageJson, null, 4)
  );

  await del(['../../packages/cli', '../../packages/cli'], { force: true });

  if (fs.existsSync('output/carbon-main/packages/cli/bin/carbon-cli.js'))
    fs.rename(
      'output/carbon-main/packages/cli/bin/carbon-cli.js',
      'output/carbon-main/packages/cli/bin/wfp-cli.js'
    );

  fs.copy(
    'output/carbon-main/packages/cli',
    '../../packages/cli',
    function (err) {
      if (err) return console.error(err);
      console.log('success!');
    }
  );

  console.log('download done');
}

get_request();
