const path = require('path');

module.exports = (storybookBaseConfig, configType) => {
  const newConfig = {
    ...storybookBaseConfig,
  };

  // Add this:
  // Export bundles as libraries so we can access them on page scope.
  newConfig.output.library = '[name]';

  var modules = [
    {
      test: /\.(png|jpg|gif|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {},
        },
      ],
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
    },
    {
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: { importLoaders: 2 },
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              require('autoprefixer')({
                browsers: ['last 1 version', 'ie >= 11'],
              }),
            ],
          },
        },
        {
          loader: 'sass-loader',
          options: {
            includePaths: [path.resolve(__dirname, '..', 'node_modules')],
          },
        },
      ],
    },
  ];

  const modulesOld = newConfig.module.rules;

  console.log('aaaaaaa', modulesOld);

  console.log('bbbbbbbb', modules);

  newConfig.module.rules = modules.concat(modulesOld);

  //console.log("cccccc", modulesNew);

  return newConfig;
};
