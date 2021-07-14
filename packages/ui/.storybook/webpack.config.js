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

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  console.log('config', config);
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

  config.module.rules.unshift({
    test: /\.twig$/i,
    use: [
      {
        loader: 'raw-loader',
        options: {
          esModule: false,
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  });

  /*config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          //includePaths: ['node_modules', '../../node_modules'],
          sassOptions: {
            includePaths: ['node_modules', '../../node_modules'],
          },
          //implementation: require('sass'),
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });*/

  return config;
};
