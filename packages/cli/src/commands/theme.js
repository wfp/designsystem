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

const logger = createLogger('bundle');

async function theme({ entrypoint, name, source, output, globals }) {
  const cwd = process.cwd();

  async function buildSass() {
    const stream = execa(
      'babel-node',
      [
        '--presets',
        '@babel/preset-env',
        '--ignore',
        '/node_modules/',
        path.resolve(__dirname, '../../../themes/tasks/build.js'),
      ],
      {
        env: {
          sourceLib: path.join(cwd, source),
          outputDir: path.join(cwd, output),
          defaultTheme: 'memo',
          //stdio: 'inherit',
        },
      }
    );

    if (stream.stdout !== undefined) {
      stream.stdout.on('data', (chunk) => {
        console.log(chunk.toString());
      });
      stream.stderr.on('data', (chunk) => {
        console.log(chunk.toString());
      });
    }
  }

  logger.start('bundle');

  const extension = path.extname(entrypoint);

  if (!bundlers.has(extension)) {
    logger.info(
      `Invalid extension: \`${extension}\` on entrypoint: \`${entrypoint}\``
    );
    process.exit(1);
  }

  try {
    const bundle = bundlers.get(extension);
    await bundle(path.join(cwd, entrypoint), {
      name,
      globals,
    });
  } catch (error) {
    logger.info(`Unexpected error occurred while bundling ${entrypoint}:`);
    console.log(error);
    process.exit(1);
  }

  await buildSass();

  logger.stop();
}

module.exports = {
  command: 'theme <entrypoint>',
  desc: 'creates a theme from the given .js entrypoint',
  builder(yargs) {
    yargs.positional('entrypoint', {
      type: 'string',
      describe: 'the entrypoint Javascript file',
    });

    yargs.options({
      n: {
        alias: 'name',
        describe: 'the name of the module for the UMD build',
        type: 'string',
      },
      s: {
        alias: 'source',
        describe: 'the name of the module for the UMD build',
        type: 'string',
      },
      o: {
        alias: 'output',
        describe: 'the name of the module for the UMD build',
        type: 'string',
      },
      g: {
        alias: 'globals',
        describe: 'global module names',
        type: 'string',
      },
    });
  },
  handler: theme,
};
