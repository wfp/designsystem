import React from 'react';

const StringUnit = (value, props) => {
  if (value) {
    const before = value.before ? value.before + ' ' : '';
    const afterOutput =
      value.output && value.output.default
        ? value.output.default.after + ''
        : '';
    const after = value.after ? ' ' + value.after : '';
    return before + value.value + afterOutput + after;
  } else return '';
};

export default StringUnit;
