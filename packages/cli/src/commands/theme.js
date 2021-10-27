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

async function theme({ entrypoint, name, globals }) {
  logger.start('bundle');

  const cwd = process.cwd();
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
        sourceLib: '/Applications/MAMP/htdocs/memo-web/lib',
        outputDir: '/Applications/MAMP/htdocs/memo-web/src/themes/output',
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
      g: {
        alias: 'globals',
        describe: 'global module names',
        type: 'string',
      },
    });
  },
  handler: theme,
};
