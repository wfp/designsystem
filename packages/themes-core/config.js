const StyleDictionary = require('style-dictionary');
const { formatHelpers } = require('style-dictionary');
const ChangeCase = require('change-case');

const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;

const config = ({ source = `tokens/**/*.json`, buildPath = `dist` } = {}) => {
  StyleDictionary.registerFormat({
    name: 'css/variables-themed',
    formatter: function ({ dictionary, file, options }) {
      const { outputReferences, theme } = options;
      //console.log(dictionary);
      return (
        fileHeader({ file }) +
        `@mixin theme-${theme} () {\n` +
        formattedVariables({ format: 'css', dictionary, outputReferences }) +
        '\n}\n'
      );
    },
  });

  StyleDictionary.registerFormat({
    name: 'myCustomFormat',
    formatter: function ({ dictionary, file, options }) {
      //return formattedVariables('css', dictionary, options.outputReferences);
      return JSON.stringify(
        dictionary.tokens, //formatHelpers.minifyDictionary(dictionary.tokens),
        null,
        2
      );
    },
  });

  StyleDictionary.registerFormat({
    name: `scss/variables`,
    formatter: function ({ dictionary }) {
      return dictionary.allTokens
        .map((token) => {
          if (typeof token.value === 'object') {
            return null;
          }
          let value = JSON.stringify(token.value);
          // the `dictionary` object now has `usesReference()` and
          // `getReferences()` methods. `usesReference()` will return true if
          // the value has a reference in it. `getReferences()` will return
          // an array of references to the whole tokens so that you can access their
          // names or any other attributes.
          if (dictionary.usesReference(token.original.value)) {
            // Note: make sure to use `token.original.value` because
            // `token.value` is already resolved at this point.
            const refs = dictionary.getReferences(token.original.value);
            refs.forEach((ref) => {
              value = value.replace(ref.value, function () {
                return `${ref.name}`;
              });
            });
          }
          return `$${token.name}: var(--${token.name}, ${value}) !default;`;
        })
        .join(`\n`);
    },
  });

  const scssTokenName = (token, options) => {
    const tokenPath = token.path.filter(function (item, i) {
      return !(
        item === 'color' ||
        (item === 'primary' && i === 1) ||
        (item === 'form' && i === 1)
      );
    });

    return ChangeCase.paramCase([options.prefix].concat(tokenPath).join(' '));
  };

  StyleDictionary.registerTransform({
    type: 'name',
    transitive: true,
    name: `name/scss`,
    transformer: (token, options) => {
      return scssTokenName(token, options);
    },
  });

  StyleDictionary.registerTransform({
    type: 'name',
    transitive: true,
    name: `name/scssDarkName`,
    transformer: (token, options) => {
      return scssTokenName(token, options).replace('dark-', '');
    },
  });

  StyleDictionary.registerTransform({
    type: `value`,
    name: `value/fontSizePxToRem`,
    matcher: (token) => {
      //console.log(token);
      return token.type === 'dimension';
    },
    transformer: (token) => {
      //token.value = 1232132;
      return token.value / 16 + 'em';
      // token.value will be resolved and transformed at this point
    },
  });

  StyleDictionary.registerTransform({
    type: `attribute`,
    name: `attribute/variablenames`,
    matcher: (token) => {
      //console.log(token);
      return true;
      //return token.type === 'dimension';
    },
    transformer: (token, options) => {
      //token.value = 1232132;
      token.cssName = scssTokenName(token, options);
      return token;
      // token.value will be resolved and transformed at this point
    },
  });

  StyleDictionary.extend({
    parsers: [
      {
        pattern: /\.json$/,
        parse: ({ contents, filePath }) => {
          var content = JSON.parse(contents);
          return content;
          if (content.color) {
            const { color, typography, ...other } = content;
            const { primary, form, background, ...otherColors } = color;
            //console.log(JSON.parse(color.background));
            return {
              ...otherColors,
              //...color.background,
              ...form,
              ...typography,
              ...primary,
              background: background,
              ...other,
              //background: color.background.background,
            };
          }
          return content;
        },
      },
    ],
    source: [source],
    platforms: {
      figma: {
        buildPath: buildPath + '/json/',
        transforms: [
          'attribute/cti',
          'attribute/color',
          'attribute/variablenames',
        ],
        files: [
          {
            destination: 'variables-full.json',
            format: 'json',
          },
        ],
      },
      scss: {
        transformGroup: 'scss',
        buildPath: buildPath + '/scss/',
        transforms: ['name/scss', 'value/fontSizePxToRem'],
        files: [
          {
            destination: 'tokens.scss',
            format: 'scss/variables',
            options: {
              themeable: true,
            },
          },
        ],
      },
      scss: {
        transformGroup: 'scss',
        buildPath: buildPath + '/scss/',
        transforms: ['name/scss', 'value/fontSizePxToRem'],
        files: [
          {
            destination: 'tokensMapFlat.scss',
            format: 'scss/map-flat',
            options: {
              themeable: true,
            },
          },
        ],
      },
      scss: {
        transformGroup: 'scss',
        buildPath: buildPath + '/scss/',
        transforms: ['name/scss', 'value/fontSizePxToRem'],
        files: [
          {
            destination: 'tokensMapDeep.scss',
            format: 'scss/map-deep',
            options: {
              themeable: true,
            },
          },
        ],
      },
      scssB: {
        transformGroup: 'css',
        buildPath: buildPath + '/scss/',
        transforms: ['name/scss', 'value/fontSizePxToRem'],
        files: [
          {
            destination: 'default-css-theme.scss',
            format: 'css/variables-themed',
            options: {
              outputReferences: true,
              theme: 'default',
            },
          },
          /* {
          destination: 'tokens.scss',
          format: 'scss/variables',
          transforms: ['name/scss'],
          options: {
            outputReferences: true,
            theme: 'default',
          },
        },*/
        ],
      },
      scssDark: {
        transformGroup: 'css',
        buildPath: buildPath + '/scss/',
        transforms: ['name/scssDarkName', 'value/fontSizePxToRem'],
        files: [
          {
            destination: 'dark-css-theme.scss',
            format: 'css/variables-themed',
            filter: function (token) {
              return token.path[1] === 'dark';
            },
            options: {
              outputReferences: true,
              theme: 'dark',
            },
          },

          /* {
          destination: 'tokens.scss',
          format: 'scss/variables',
          transforms: ['name/scss'],
          options: {
            outputReferences: true,
            theme: 'default',
          },
        },*/
        ],

        parse: ({ contents, filePath }) => {
          var content = JSON.parse(contents);
          return null;
          // return content;
          if (content.color) {
            const { color, typography, ...other } = content;
            const { primary, form, background, ...otherColors } = color;
            //console.log(JSON.parse(color.background));
            return {
              // ...otherColors,
              //...color.background,
              //...form,
              ...typography,
              // ...primary,
              //background: background,
              // ...other,
              //background: color.background.background,
            };
          }
          return content;
        },
      },
    },
  }).buildAllPlatforms();
};

module.exports = { config };
