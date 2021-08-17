const fetch = require('node-fetch');
const unzipper = require('unzipper');
const fs = require('fs');
const del = require('del');
const replaceInFiles = require('replace-in-files');

async function get_request() {
  await del('output');

  await fs
    .createReadStream('carbon-design-system.zip')
    .pipe(unzipper.Extract({ path: 'output' }));
}

get_request();
