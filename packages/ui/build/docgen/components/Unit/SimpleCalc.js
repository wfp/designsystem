"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgUnit = _interopRequireDefault(require("./SvgUnit"));

var _StringUnit = _interopRequireDefault(require("./StringUnit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleCalc = function SimpleCalc(props, after, before) {
  var calcOnly = props.calcOnly,
      className = props.className,
      children = props.children,
      string = props.string,
      svg = props.svg,
      hideUnit = props.hideUnit; // Remove commas

  var value = children;
  var afterCalc = after ? after : '';
  var unit = hideUnit ? '' : before + children + afterCalc;
  var calcObject = {
    value: value,
    before: before,
    after: after,
    output: value + unit
  };
  if (calcOnly) return calcObject;else if (svg) return (0, _SvgUnit.default)({
    value: value + unit,
    before: before,
    after: after
  }, props);else if (string) return (0, _StringUnit.default)(calcObject, props);else if (value !== false) return /*#__PURE__*/_react.default.createElement("span", {
    className: className
  }, value);
};

var _default = SimpleCalc;
exports.default = _default;