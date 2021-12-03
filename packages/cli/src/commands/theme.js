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
const { rollup } = require('rollup');
const { babel } = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const execa = require('execa');
const pathToThemes = path.dirname(
  require.resolve('@unitednations/themes/package.json')
);

require('@babel/register')({
  presets: ['@babel/preset-env'],
});

var exec = require('child_process').exec;

const logger = createLogger('bundle');

async function theme({ entrypoint, name, source, output, globals }) {
  logger.start('bundle');

  const cwd = process.cwd();

  async function buildSass() {
    const stream = execa(
      'npx',
      [
        'babel-node',
        '--presets',
        '@babel/preset-env',
        '--ignore',
        '/node_modules/',
        path.resolve(pathToThemes, './tasks/build.js'),
      ],
      {
        cwd: path.resolve(__dirname),
        env: {
          sourceLib: path.join(cwd, source),
          outputDir: path.join(cwd, output),
          defaultTheme: 'memo',
        },
      }
    );

    if (stream !== undefined) {
      stream.stdout.on('data', (chunk) => {
        logger.info(chunk.toString());
      });
      stream.stderr.on('data', (chunk) => {
        logger.info(chunk.toString());
      });
    }
  }

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

    /*console.log(path.resolve(__dirname, 'theme/entry.js'));

    const bundled = await rollup({
      //input: './theme/entry.js',
      input: path.resolve(__dirname, 'theme/entry.js'),
      plugins: [
        babel({
          //exclude: 'node_modules/**',
          //ignore: ['/node_modules/'],
          //babelrc: false,
          presets: [['@babel/preset-env']],
          //babelHelpers: 'bundled',
        }),
        nodeResolve(),
        /*commonjs({
          include: [/node_modules/],
          extensions: ['.js'],
        }),
      ],
    });*/

    await buildSass();
  } catch (error) {
    logger.info(`Unexpected error occurred while bundling ${entrypoint}:`);
    console.log(error);
    process.exit(1);
  }

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
