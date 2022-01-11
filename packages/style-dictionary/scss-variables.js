const StyleDictionary = require('style-dictionary').extend('config.json');

StyleDictionary.registerTransform({
  name: 'time/seconds',
  type: 'value',
  matcher: function (prop) {
    return prop.attributes.category === 'time';
  },
  transformer: function (prop) {
    return (parseInt(prop.original.value) / 1000).toString() + 's';
  },
});

StyleDictionary.registerFormat({
  name: 'json',
  formatter: function ({ dictionary, platform, options, file }) {
    return JSON.stringify(dictionary.tokens, null, 2);
  },
});

function cssVariable(name, value) {
  return `var(--${name}, ${value})`;
}

StyleDictionary.buildAllPlatforms();
