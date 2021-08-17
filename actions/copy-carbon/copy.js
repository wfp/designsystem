const fetch = require('node-fetch');
const unzipper = require('unzipper');
const del = require('del');
const replaceInFiles = require('replace-in-files');
var fs = require('fs-extra');

async function get_request() {
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

  console.log('download done');
}

get_request();
