const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const useExperimentalFeatures =
  process.env.WFP_UI_USE_EXPERIMENTAL_FEATURES === 'true';

const useExternalCss =
  process.env.WFP_UI_REACT_STORYBOOK_USE_EXTERNAL_CSS === 'true';

const useStyleSourceMap =
  process.env.WFP_UI_REACT_STORYBOOK_USE_STYLE_SOURCEMAP === 'true';

const replaceTable = {
  componentsX: useExperimentalFeatures,
};

const styleLoaders = [
  {
    loader: 'css-loader',
    options: {
      importLoaders: 2,
      sourceMap: useStyleSourceMap,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => [
        require('autoprefixer')({
          browsers: ['last 1 version', 'ie >= 11'],
        }),
      ],
      sourceMap: useStyleSourceMap,
    },
  },
  {
    loader: 'sass-loader',
    options: {
      includePaths: [path.resolve(__dirname, '..', 'node_modules')],
      data: `
        $feature-flags: (
          components-x: ${useExperimentalFeatures},
          grid: ${useExperimentalFeatures},
          ui-shell: true,
        );
      `,
      sourceMap: useStyleSourceMap,
    },
  },
];

/*
module.exports = function (baseConfig, env, defaultConfig) {
  defaultConfig.module.rules.push({
    test: /\-story\.js$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  return defaultConfig;
};
*/

module.exports = {
  async managerWebpack(baseConfig, options) {
    baseConfig.devtool = useStyleSourceMap ? 'source-map' : '';
    baseConfig.optimization = {
      ...baseConfig.optimization,
      minimizer: [
        new TerserPlugin({
          sourceMap: true,
          terserOptions: {
            mangle: false,
          },
        }),
      ],
    };

    baseConfig.module.rules.push({
      test: /(\/|\\)FeatureFlags\.js$/,
      loader: 'string-replace-loader',
      options: {
        multiple: Object.keys(replaceTable).map(key => ({
          search: `export\\s+const\\s+${key}\\s*=\\s*false`,
          replace: `export const ${key} = ${replaceTable[key]}`,
          flags: 'i',
        })),
      },
    });

    /* config.module.rules.push({
      test: /-story\.jsx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/addon-storysource/loader'),
          options: {
            prettierConfig: {
              parser: 'babel',
              printWidth: 80,
              tabWidth: 2,
              bracketSpacing: true,
              trailingComma: 'es5',
              singleQuote: true,
              sourceMaps: 'inline',
            },
          },
        },
      ],
      enforce: 'pre',
    }); */

    baseConfig.module.rules.push({
      test: /\.scss$/,
      sideEffects: true,
      use: [
        {
          loader: useExternalCss ? MiniCssExtractPlugin.loader : 'style-loader',
        },
        ...styleLoaders,
      ],
    });

    baseConfig.module.rules.push({
      test: /\.hbs$/,
      sideEffects: true,
      loader: 'raw-loader',
    });

    if (useExternalCss) {
      baseConfig.plugins.push(
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
        })
      );
    }
    return baseConfig;
  },
};
