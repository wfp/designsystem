'use strict';

const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const customProperties = require('postcss-custom-properties');
const rtlcss = require('rtlcss');

const {
  CARBON_REACT_STORYBOOK_USE_CUSTOM_PROPERTIES = 'false',
  CARBON_REACT_STORYBOOK_USE_RTL,
  CARBON_REACT_STORYBOOK_USE_SASS_LOADER,
  NODE_ENV = 'development',
} = process.env;

const useSassLoader = CARBON_REACT_STORYBOOK_USE_SASS_LOADER === 'true';
const useExternalCss = NODE_ENV === 'production';
const useRtl = CARBON_REACT_STORYBOOK_USE_RTL === 'true';

module.exports = {
  addons: [
    '@storybook/addon-docs',
    'storybook-addon-designs',
    '@storybook/addon-toolbars',
    '@storybook/addon-viewport',
  ],
  stories: [
    '../src/**/*.stories.@(js|tsx|mdx)',
    '../src/**/*-story.@(js|tsx|mdx)',
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  managerWebpack: async (config, options) => {
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /StorybookLogo/,
        path.resolve(__dirname, 'Logo.js')
      )
    );
    return config;
  },
  webpack(config) {
    const babelLoader = config.module.rules.find((rule) => {
      return rule.use.some(({ loader }) => {
        return loader.includes('babel-loader');
      });
    });

    // This is a temporary trick to get `babel-loader` to ignore packages that
    // are brought in that have an es, lib, or umd directory.
    //
    // Typically this is covered by /node_modules/ (which is the default), but
    // in our case it seems like these dependencies are resolving to where their
    // symlink points to. In other words, `@carbon/icons-react` becomes
    // `../icons-react/es/index.js`.
    //
    // This results in these files being included in `babel-loader` and causing
    // the build times to increase dramatically
    babelLoader.exclude = [
      /node_modules\/(?!@un).*/,
      /packages\/.*\/(es|lib|umd)/,
    ];

    const sassLoader = {
      loader: require.resolve('sass-loader'),
      options: {
        additionalData(content) {
          return `
             $feature-flags: (
               ui-shell: true,
               enable-css-custom-properties: ${CARBON_REACT_STORYBOOK_USE_CUSTOM_PROPERTIES},
             );
             ${content}
           `;
        },
        sassOptions: {
          implementation: require('sass'),
          includePaths: [path.resolve(__dirname, '..', 'node_modules')],
        },
        sourceMap: true,
      },
    };

    const fastSassLoader = {
      loader: require.resolve('fast-sass-loader'),
      options: {
        data: `
           $feature-flags: (
             ui-shell: true,
             enable-css-custom-properties: ${CARBON_REACT_STORYBOOK_USE_CUSTOM_PROPERTIES},
           );
         `,
        implementation: require('sass'),
        includePaths: [
          path.resolve(
            __dirname,
            '..',
            '..',
            '../',
            '../../../node_modules',
            'node_modules'
          ),
        ],
      },
    };

    config.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json', // Required by Webpack v4
      use: 'yaml-loader',
    });

    config.module.rules.push({
      test: /-story\.(js|ts)?(x)$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: {
            prettierConfig: {
              parser: 'babylon',
              printWidth: 80,
              tabWidth: 2,
              bracketSpacing: true,
              trailingComma: 'es5',
              singleQuote: true,
            },
          },
        },
      ],
      enforce: 'pre',
    });

    config.module.rules.push({
      test: /\.scss$/,
      sideEffects: true,
      use: [
        {
          loader: useExternalCss ? MiniCssExtractPlugin.loader : 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            sourceMap: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: () => {
                const autoPrefixer = require('autoprefixer')({
                  overrideBrowserslist: ['last 1 version', 'ie >= 11'],
                });
                return [
                  customProperties(),
                  autoPrefixer,
                  ...(useRtl ? [rtlcss] : []),
                ];
              },
            },
            sourceMap: true,
          },
        },
        NODE_ENV === 'production' || useSassLoader ? sassLoader : sassLoader,
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

    if (useExternalCss) {
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
        })
      );
    }

    config.module.rules = config.module.rules.filter((e) => {
      return e.test !== '/.tsx?$/';
    });
    return config;
  },
};
