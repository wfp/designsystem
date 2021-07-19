const webpack = require('webpack');
const path = require('path');

module.exports = {
  /*core: {
    builder: 'webpack5',
  },*/
  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    'storybook-addon-designs',
    '@storybook/addon-docs',
    '@storybook/addon-toolbars',
    '@storybook/addon-viewport',
    /*{
      name: '@storybook/addon-docs',
      /*options: {
        configureJSX: true,
        babelOptions: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
        },
        sourceLoaderOptions: null,
      },
    },*/
    '@storybook/addon-controls',
  ],

  managerWebpack: async (config, options) => {
    /*config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /Tree/,
        path.resolve(__dirname, 'Tree.tsx')
      )
    );*/

    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /StorybookLogo/,
        path.resolve(__dirname, 'Logo.js')
      )
    );
    return config;
  },

  /*webpack: async (config, options) => {
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /StorybookLogo/,
        path.resolve(__dirname, 'Logo.js')
      )
    );
    return config;
  },*/

  /*
  webpackFinal: async (config, { configType }) => {

    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules.slice(1),

          {
            test: /\.(mjs|js?|jsx?|tsx?)$/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: `.cache/storybook`,
                  presets: [
                    [
                      '@babel/preset-env',
                      {
                        shippedProposals: true,
                        useBuiltIns: 'usage',
                        corejs: 3,
                      },
                    ],
                    '@babel/preset-typescript',
                    configType === 'PRODUCTION' && [
                      'babel-preset-minify',
                      { builtIns: false, mangle: false },
                    ],
                    '@babel/preset-react',
                    '@babel/preset-flow',
                  ].filter(Boolean),
                  plugins: [
                    '@babel/plugin-proposal-object-rest-spread',
                    '@babel/plugin-proposal-class-properties',
                    '@babel/plugin-syntax-dynamic-import',
                    [
                      'babel-plugin-emotion',
                      { sourceMap: true, autoLabel: true },
                    ],
                    'babel-plugin-macros',
                    'babel-plugin-add-react-displayname',
                    [
                      'babel-plugin-react-docgen',
                      {
                        DOC_GEN_COLLECTION_NAME: 'STORYBOOK_REACT_CLASSES',
                        handlers: [
                          'react-docgen-deprecation-handler',
                          'react-docgen-external-proptypes-handler'
                        ],
                      },
                    ],
                  ],
                },
              },
            ],
            exclude: [/node_modules/, /dist/],
          },
        ],
      },
    };
  },*/
};
