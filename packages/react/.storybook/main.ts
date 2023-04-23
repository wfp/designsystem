import type { StorybookConfig } from '@storybook/react';
const config: StorybookConfig = {
  stories: ['../src/**/*stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/blocks', '@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-create-react-app', '@storybook/addon-interactions', '@storybook/addon-mdx-gfm'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  }
  /* typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },*/
  /*webpackFinal: async (config, { configType }) => {
    const tsConfigIndex = config.plugins.findIndex(
      (v) => v.constructor.name === 'ForkTsCheckerWebpackPlugin'
    );
    config.plugins.splice(tsConfigIndex, 1);
    return config;
  },*/,
  docs: {
    autodocs: true
  }
};
export default config;