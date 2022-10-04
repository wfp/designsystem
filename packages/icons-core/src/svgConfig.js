export function svgConfig() {
  return {
    plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
    replaceAttrValues: {
      '#000000': 'currentColor',
      '#000': 'currentColor',
      //'url(#a)': 'undefined',
    },
    /*svgoConfig: {
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
    },*/
    icon: true,
  };
}
