const { formatHelpers } = require('style-dictionary');

const ChangeCase = require('change-case');

const StyleDictionary = require('style-dictionary'); /*.extend('config.json')*/
const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;

StyleDictionary.registerFormat({
  name: 'css/variables-themed',
  formatter: function ({ dictionary, file, options }) {
    const { outputReferences, theme } = options;
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

StyleDictionary.registerTransform({
  type: 'name',
  transitive: true,
  name: `name/scss`,
  transformer: (token, options) => {
    //return helloow;
    console.log(token.path);

    const tokenPath = token.path.filter(function (item, i) {
      return !(
        item === 'color' ||
        (item === 'primary' && i === 1) ||
        (item === 'form' && i === 1)
      );
    });

    return ChangeCase.paramCase([options.prefix].concat(tokenPath).join(' '));
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
  source: [`tokens/**/*.json`],
  platforms: {
    figma: {
      buildPath: 'dist/json/',
      transforms: ['attribute/cti', 'attribute/color'],
      files: [
        {
          destination: 'variables-full.json',
          format: 'json',
        },
      ],
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'dist/scss/',
      transforms: ['name/scss'],
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
    scssB: {
      transformGroup: 'css',
      buildPath: 'dist/scss/',
      transforms: ['name/scss'],
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
  },
}).buildAllPlatforms();

/*
module.exports = {
  // Or you can add parsers directly on the configuration object here like this:
  parsers: [
    {
      pattern: /\.json$/,
      parse: ({ contents, filePath }) => {
        var content = JSON.parse(contents);
        if (content.color) {
          const { color,typography, ...other } = content;
          return {  ...color, ...typography...other,};
        }
        console.log('contents', content);
        return content;
      },
    },
  ],

  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
};
*/
