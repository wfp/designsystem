const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const cssesc = require('cssesc');
const normalizePath = require('normalize-path');
const {
  stringifyRequest,
  urlToRequest,
  interpolateName,
} = require('loader-utils');

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

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin()],
  externals: [{ '@wfp/icons': 'icons' }],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /styles.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          //'style-loader',
          'css-loader',
          'sass-loader',
        ],
        include: path.resolve(__dirname, './'),
      },
      {
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
          require.resolve('sass-loader'),
        ],
      }
      /*{
        test: /\.scssa$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/public/path/to/',
            },
          },
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: {
                mode: 'local',
                localIdentName: 'wfp--[name]__[local]',
                // localIdentName: '[sha1:hash:hex:4]',
                context: path.resolve(__dirname, 'src'),
                hashPrefix: 'my-custom-hash',
              },
            },
          },
          require.resolve('sass-loader'),
        ],
      },*/
    ],
  },
  optimization: {
    // minimizer: [new UglifyJsPlugin()],
  },
};
