const StyleDictionary = require('style-dictionary');

const styleDictionaryConfig = {
  source: ['properties/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'build/scss/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables',
        },
      ],
    },
    css: {
      transformGroup: 'css',
      buildPath: 'build/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
        },
        {
          destination: 'tokens.scss',
          format: 'scss/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    android: {
      transformGroup: 'android',
      buildPath: 'build/android/',
      files: [
        {
          destination: 'font_dimens.xml',
          format: 'android/fontDimens',
        },
        {
          destination: 'colors.xml',
          format: 'android/colors',
        },
      ],
    },
    css: {
      transformGroup: 'css',
      buildPath: 'build/scss/',
      files: [
        {
          destination: `css-variables.scss`,
          format: 'custom/format/custom-media',
        },
      ],
    },
  },
};

/**
 * Custom Format: Custom Media
 * This converts our viewport tokens to the very specific `@custom-media`
 * variable definition format.
 *
 * 1. Some of our tokens are named using underscores. Convert to hyphens.
 */
StyleDictionary.registerFormat({
  name: 'custom/format/custom-media',
  formatter(dictionary) {
    return dictionary.allProperties
      .map((prop) => {
        const { attributes, name, value } = prop;
        const size = attributes.type.replace(/_/g, '-'); // 1
        return `$${name}: var(--${name},${value});`;
      })
      .join('\n');
  },
});

const StyleDictionaryExtended = StyleDictionary.extend(styleDictionaryConfig);
StyleDictionaryExtended.buildAllPlatforms();
