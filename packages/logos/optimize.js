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

function optimizeFile(file) {
  const filepath = PATH.resolve(__dirname, `src/${file}`);

  FS.readFile(filepath, 'utf8', function (err, data) {
    if (err) {
      throw err;
    }

    const result = optimize(data, { path: filepath, ...config });

    console.log(result);

    const newName = file
      .replace('Type=', '')
      .replace(', Color=', '')
      .replace(', Language=', '')
      .replace('@1x', '');

    // const modifiers = newName.split(",")

    FS.writeFile(`optimized/wfpLogo${newName}`, result.data, (err) => {
      if (err) throw err;
      console.log('SVG written!');
    });
  });
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
      optimizeFile(file);
    }
  });
});
