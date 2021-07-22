"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var StringUnit = function StringUnit(value) {
  if (value) {
    var before = value.before ? value.before + ' ' : '';
    var afterOutput = value.output && value.output.default ? value.output.default.after + '' : '';
    var after = value.after ? ' ' + value.after : '';
    return before + value.value + afterOutput + after;
  } else return '';
};

var _default = StringUnit;
exports.default = _default;