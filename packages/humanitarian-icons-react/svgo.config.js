module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // customize default plugin options
          inlineStyles: {
            onlyMatchedOnce: false,
          },
          removeDoctype: false,
          convertColors: false,
          removeViewBox: false,
        },
      },
    },
  ],
};
