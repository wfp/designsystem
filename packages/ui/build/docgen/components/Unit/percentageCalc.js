"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.percentageCalc = void 0;

var _react = _interopRequireDefault(require("react"));

var _InvalidUnit = require("./InvalidUnit");

var _StringUnit = _interopRequireDefault(require("./StringUnit"));

var _SvgUnit = _interopRequireDefault(require("./SvgUnit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var percentageCalc = function percentageCalc(props, after, before) {
  var calcOnly = props.calcOnly,
      children = props.children,
      from = props.from,
      string = props.string,
      svg = props.svg,
      hideZero = props.hideZero,
      maximumSignificantDigits = props.maximumSignificantDigits,
      maximumFractionDigits = props.maximumFractionDigits; // Remove commas

  var value = typeof children === 'string' ? children.replace(/,/g, '') : children; // Parse as float

  value = parseFloat(value);

  if (parseFloat(from) === 0) {
    value = false;
  } else if (from) {
    value = value / parseFloat(from) * 100;
  } // Convert to Locale String


  value = value.toLocaleString('en-EN', {
    minimumFractionDigits: maximumSignificantDigits ? maximumSignificantDigits : 0,
    maximumSignificantDigits: maximumSignificantDigits,
    maximumFractionDigits: value <= 0.5 ? 5 : maximumFractionDigits ? maximumFractionDigits : 1
  });
  var calcObject = {
    value: value,
    before: before,
    after: after,
    output: undefined
  };
  if ((!value || value === 'NaN' || parseFloat(value) === 0) && hideZero) return false;else if (calcOnly) return calcObject;else if (svg) return (0, _SvgUnit.default)(calcObject, props);else if (string) return (0, _StringUnit.default)(calcObject, props);else if (value !== false) return /*#__PURE__*/_react.default.createElement("span", {
    className: props.className
  }, value);else return /*#__PURE__*/_react.default.createElement(_InvalidUnit.Invalid, {
    className: props.className
  });
};

exports.percentageCalc = percentageCalc;
var _default = percentageCalc;
exports.default = _default;