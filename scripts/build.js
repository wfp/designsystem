'use strict';

const { execSync } = require('child_process');
const { inInstall } = require('in-publish');
const path = require('path');
const rimraf = require('rimraf');
const { promisify } = require('util');

if (inInstall()) {
  process.exit(0);
}

const rootDir = path.resolve(__dirname, '../');
const babelPath = path
  .resolve(__dirname, '../node_modules/.bin/babel')
  .replace(/ /g, '\\ ');
const rollupPath = path
  .resolve(__dirname, '../node_modules/.bin/rollup')
  .replace(/ /g, '\\ ');
const rimrafAsync = promisify(rimraf);

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, extraEnv),
  });

const ignoreGlobs = ['**/__tests__/*', '**/*-test.js', '**/*-story.js', '**/rtl-addon'].join(
  ','
);

console.log('Deleting old build folders...'); // eslint-disable-line no-console

Promise.all([
  rimrafAsync(`${rootDir}/cjs`),
  rimrafAsync(`${rootDir}/source`),
  rimrafAsync(`${rootDir}/es`),
  rimrafAsync(`${rootDir}/umd`),
])
  .then(() => {
    exec(`${babelPath} src -q -d es --ignore "${ignoreGlobs}"`, {
      BABEL_ENV: 'es',
    });
    exec(`${babelPath} src -q -d lib --ignore "${ignoreGlobs}"`, {
      BABEL_ENV: 'cjs',
    });
    exec(
      `${rollupPath} -c scripts/rollup.config.js -o umd/wfp-components-react.js`,
      {
        NODE_ENV: 'development',
      }
    );
    exec(
      `${rollupPath} -c scripts/rollup.config.js -o umd/wfp-components-react.min.js`,
      {
        NODE_ENV: 'production',
      }
    );
    exec(
      `rsync -av --progress ./src/* ./source --exclude-from ./scripts/exclude.txt`,
      {
        NODE_ENV: 'production',
      }
    );
    exec(
      `node-sass ./src/globals/scss -o ./css --output-style compressed --source-map true`,
      {
        NODE_ENV: 'production',
      }
    );
  })
  .catch(error => {
    console.error('One of the commands failed:', error.stack); // eslint-disable-line no-console
    process.exit(1);
  });
