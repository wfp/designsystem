const fetch = require('node-fetch');
const unzipper = require('unzipper');
const fs = require('fs');
const del = require('del');
const replaceInFiles = require('replace-in-files');

async function get_request() {
  await del('carbon-design-system.zip');

  console.log('zip deleted');

  const url =
    'https://github.com/carbon-design-system/carbon/archive/refs/heads/main.zip';
  const res = await fetch(url);
  const fileStream = fs.createWriteStream('carbon-design-system.zip');
  await new Promise((resolve, reject) => {
    res.body.pipe(fileStream);
    res.body.on('error', reject);
    fileStream.on('finish', resolve);
  });
  console.log('download done');
}

get_request();
