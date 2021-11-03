const convertStylesStringToObject = (stringStyles) =>
  typeof stringStyles === 'string'
    ? stringStyles.split(';').reduce((acc, style) => {
        const colonPosition = style.indexOf(':');

        if (colonPosition === -1) {
          return acc;
        }

        const camelCaseProperty = style
            .substr(0, colonPosition)
            .trim()
            .replace(/^-ms-/, 'ms-')
            .replace(/-./g, (c) => c.substr(1).toUpperCase()),
          value = style.substr(colonPosition + 1).trim();

        return value ? { ...acc, [camelCaseProperty]: value } : acc;
      }, {})
    : {};

module.exports = convertStylesStringToObject;
