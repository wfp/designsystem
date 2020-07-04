const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/Table.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
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
      },
      /*{
        test: /\.scss$/,
        loader: [
          require.resolve('style-loader'),
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
};
