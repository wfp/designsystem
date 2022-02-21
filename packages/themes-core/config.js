const { formatHelpers } = require('style-dictionary');

const StyleDictionary = require('style-dictionary').extend('config.json');
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

StyleDictionary.registerTransform({
  type: `attribute`,
  transitive: true,
  name: `myTransitiveTransform`,
  matcher: (token) => true,
  transformer: (token) => {
    console.log('token', token.attributes);
    token.valueRgba = '123'; //formattedVariables({ format: 'css', dictionary, outputReferences }); //token.value;
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

StyleDictionary.extend({
  platforms: {
    scssB: {
      transformGroup: 'css',
      buildPath: 'dist/scss/',
      files: [
        {
          destination: 'default-css-theme.scss',
          format: 'css/variables-themed',
          options: {
            outputReferences: true,
            theme: 'default',
          },
        },
        {
          destination: 'theme.scss',
          format: 'scss/variables',
          options: {
            outputReferences: true,
            theme: 'default',
          },
        },
      ],
    },
  },
}).buildAllPlatforms();
