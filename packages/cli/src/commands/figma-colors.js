/**
 * Copyright World Food Programme 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const path = require('path');
const { createLogger } = require('../logger');
const bundlers = require('./bundle/bundlers');
const execa = require('execa');

const { colorsExporter } = require('@un/figma-connect');
const rimraf = require('rimraf');
const fs = require('fs');

const logger = createLogger('bundle');

async function figmaColors({ entrypoint, name, output }) {
  console.log({ entrypoint, name, output });
  logger.start('bundle');

  const cwd = process.cwd();
  const extension = path.extname(entrypoint);

  try {
    colorsExporter({
      fileName: path.join(process.cwd(), output, `${name}.js`),
      fileNameMeta: path.join(process.cwd(), output, `${name}Meta.js`),
    });
  } catch (error) {
    logger.info(`Unexpected error occurred while bundling ${entrypoint}:`);
    console.log(error);
    process.exit(1);
  }

  logger.stop();
}

module.exports = {
  command: 'figma-colors <entrypoint>',
  desc: 'creates a theme from a given figma entrypoint',
  builder(yargs) {
    yargs.options({
      n: {
        alias: 'name',
        describe: 'the name of the module for the UMD build',
        type: 'string',
      },
      o: {
        alias: 'output',
        describe: 'global module names',
        type: 'string',
      },
    });
  },
  handler: figmaColors,
};
