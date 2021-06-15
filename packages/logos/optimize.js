'use strict';

const FS = require('fs');
const PATH = require('path');
const { optimize } = require('svgo');

const config = {
  plugins: [
    'cleanupAttrs',
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeTitle',
    'removeDesc',
    'removeUselessDefs',
    'removeEditorsNSData',
    'removeEmptyAttrs',
    'removeHiddenElems',
    'removeEmptyText',
    'removeEmptyContainers',
    // 'removeViewBox',
    'cleanupEnableBackground',
    'convertStyleToAttrs',
    'convertColors',
    'convertPathData',
    'convertTransform',
    'removeUnknownsAndDefaults',
    'removeNonInheritableGroupAttrs',
    'removeUselessStrokeAndFill',
    'removeUnusedNS',
    'cleanupIDs',
    'cleanupNumericValues',
    'moveElemsAttrsToGroup',
    'moveGroupAttrsToElems',
    'collapseGroups',
    // 'removeRasterImages',
    'mergePaths',
    'convertShapeToPath',
    'sortAttrs',
    'removeDimensions',
    { name: 'removeAttrs', params: { attrs: '(stroke|fill)' } },
  ],
};
var readmeCdnLinks = '';

function optimizeFile(file) {
  const filepath = PATH.resolve(__dirname, `src/${file}`);

  const newName = file
    .replace('Type=', '')
    .replace(', Color=', '')
    .replace(', Language=', '')
    .replace('@1x', '');

  FS.readFile(filepath, 'utf8', function (err, data) {
    if (err) {
      throw err;
    }

    const result = optimize(data, { path: filepath, ...config });

    // const modifiers = newName.split(",")

    FS.writeFile(`optimized/wfpLogo${newName}`, result.data, (err) => {
      if (err) throw err;
    });
  });
  return `- https://uikit.wfp.org/cdn/logos/latest/wfpLogo${newName}\n`;
}

if (FS.existsSync(PATH.resolve(__dirname, 'optimized'))) {
  FS.rmdirSync(PATH.resolve(__dirname, 'optimized'), { recursive: true });
}

FS.mkdirSync(PATH.resolve(__dirname, 'optimized'));

FS.readdir(PATH.resolve(__dirname, 'src'), function (err, files) {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  files.forEach(function (file, index) {
    console.log(file);
    if (file.split('.').pop().toLowerCase() === 'svg') {
      readmeCdnLinks = readmeCdnLinks + optimizeFile(file);
    }
  });
});

/* Update readme */
FS.readFile('readme.md', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  const readmeSplit = data.split(`<!---CDN Urls-->`);
  console.log(readmeSplit.length);

  FS.writeFile(
    `readme.md`,
    readmeSplit[0] + '\n<!---CDN Urls-->\n' + readmeCdnLinks,
    (err) => {
      if (err) throw err;
      console.log('readme written!');
    }
  );
});
