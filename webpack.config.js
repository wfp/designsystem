const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
