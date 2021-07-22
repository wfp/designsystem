"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["centered", "children", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ModuleFooter = function ModuleFooter(_ref) {
  var centered = _ref.centered,
      children = _ref.children,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, _excluded);

  var wrapperClasses = (0, _classnames.default)('wfp--module__footer', className);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: wrapperClasses
  }, other), children);
};

ModuleFooter.propTypes = {
  /**
   * Specify the content of the `ModuleFooter`
   */
  children: _propTypes.default.node,

  /**
   * The CSS class name for the `ModuleFooter`.
   */
  className: _propTypes.default.string
};
var _default = ModuleFooter;
exports.default = _default;