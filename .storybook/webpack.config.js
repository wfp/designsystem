const cssesc = require('cssesc');
const normalizePath = require('normalize-path');
const webpack = require('webpack');
const {
  stringifyRequest,
  urlToRequest,
  interpolateName,
} = require('loader-utils');

const path = require('path');

const filenameReservedRegex = /[<>:"/\\|?*\x00-\x1F]/g;
const reControlChars = /[\u0000-\u001f\u0080-\u009f]/g;
const reRelativePath = /^\.+/;
const reFileName = /([^\/]+)(?=\.\w+$)/g;

function getLocalIdent(loaderContext, localIdentName, localName, options) {
  if (!options.context) {
    // eslint-disable-next-line no-param-reassign
    options.context = loaderContext.rootContext;
  }

  var request = normalizePath(
    path.relative(options.context || '', loaderContext.resourcePath)
  );

  const find =
    loaderContext.resourcePath.match(reFileName)[0].replace('.module', '') ===
    localName;
  // eslint-disable-next-line no-param-reassign
  options.content = `${options.hashPrefix + request}+${unescape(localName)}`;

  // Using `[path]` placeholder outputs `/` we need escape their
  // Also directories can contains invalid characters for css we need escape their too
  let name = cssesc(
    interpolateName(loaderContext, localIdentName, options)
      // For `[hash]` placeholder
      .replace(/^((-?[0-9])|--)/, '_$1')
      .replace(filenameReservedRegex, '-')
      .replace(reControlChars, '-')
      .replace(reRelativePath, '-')
      .replace(/\./g, '-')
      .replace('-module', ''),
    { isIdentifier: true }
  ).replace(/\\\[local\\\]/gi, localName);

  if (find) name = name.replace('wfp--' + localName + '__', 'wfp--');
  return name;
}

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need

  config.module.rules.unshift({
    test: /\.md$/i,
    use: [
      {
        loader: 'raw-loader',
        options: {
          esModule: false,
        },
      },
    ],
  });

  /*config.module.rules.push({
    test: /\.module.scss$/,
    loaders: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
          modules: {
            mode: 'local',
            localIdentName: 'wfp--[name]__[local]',
            getLocalIdent,
            context: path.resolve(__dirname, 'src'),
            hashPrefix: 'my-custom-hash',
          },
        },
      },
      require.resolve('fast-sass-loader'),
    ],
  });*/

  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'fast-sass-loader'],
    include: path.resolve(__dirname, '../src'),
  });

  config.module.rules.push({
    test: /storybook.scss$/,
    use: ['style-loader', 'css-loader', 'fast-sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  return config;
};
