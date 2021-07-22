var StringUnit = function StringUnit(value) {
  if (value) {
    var before = value.before ? value.before + ' ' : '';
    var afterOutput = value.output && value.output.default ? value.output.default.after + '' : '';
    var after = value.after ? ' ' + value.after : '';
    return before + value.value + afterOutput + after;
  } else return '';
};

export default StringUnit;