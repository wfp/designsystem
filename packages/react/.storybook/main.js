const path = require('path');
module.exports = {
  stories: ['../src/**/*stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    enabled: true,
    defaultName: 'Documentation',
    //👇 Use only one of the following options to auto-generate documentation
    autodocs: true,
  },
  staticDirs: ['../public'],
  managerWebpack: async (config, options) => {
    console.log('dsdsddasdssdsadsas');
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /StorybookLogo/,
        path.resolve(__dirname, 'Logo.tsx')
      )
    );
    return config;
  },
  typescript: {
    check: false,
  },
};
