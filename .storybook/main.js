const webpack = require('webpack');
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    //'../.storybook/wfp-storybook',
  ],
  managerWebpack: async (config, options) => {
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /StorybookLogo/,
        path.resolve(__dirname, 'Logo.js')
      )
    );
    return config;
  },
};
