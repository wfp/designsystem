'use strict';

const path = require('path');
const rimraf = require('rimraf');
const fs = require('fs');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

const { svgExporter } = require('@un/figma-connect');

const folder = path.resolve(__dirname, '../src/svg/');
async function build() {
  if (fs.existsSync(folder)) {
    rimraf.sync(folder);
  }
  await fs.promises.mkdir(folder, { recursive: true });

  svgExporter({
    svgOutputFolder: folder,
    figmaProjectId: '73iYBLNZ4LnSXe43cWUPDz',
    figmaProjectNodeId: '0:1',
  });
}

build().catch((error) => {
  console.log(error);
  process.exit(1);
});
