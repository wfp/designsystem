"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _InvalidUnit = require("./InvalidUnit");

var _excluded = ["style"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SvgUnit = function SvgUnit(value, props) {
  var style = props.style,
      other = _objectWithoutProperties(props, _excluded);

  if (value) return /*#__PURE__*/_react.default.createElement("text", _extends({
    className: props.className
  }, other), /*#__PURE__*/_react.default.createElement("tspan", {
    style: style
  }, value.before, " "), /*#__PURE__*/_react.default.createElement("tspan", {
    style: style
  }, value.value), /*#__PURE__*/_react.default.createElement("tspan", {
    style: style
  }, ' ', value.output ? value.output.default.after + '' : '', value.after));else return /*#__PURE__*/_react.default.createElement(_InvalidUnit.InvalidSvg, {
    className: props.className
  });
};

var _default = SvgUnit;
exports.default = _default;