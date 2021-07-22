"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.types = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _excluded = ["children", "className", "type"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _settings.default.prefix;
var TYPES = {
  info: 'Info',
  error: 'error',
  success: 'Success',
  warning: 'Warning',
  custom: 'Custom'
};
/** Tag is used to label, categorize, or organize items using keywords that describe them. */

var Tag = function Tag(_ref) {
  var children = _ref.children,
      className = _ref.className,
      type = _ref.type,
      other = _objectWithoutProperties(_ref, _excluded);

  var tagClass = "".concat(prefix, "--tag--").concat(type);
  var tagClasses = (0, _classnames.default)("".concat(prefix, "--tag"), tagClass, className);
  return /*#__PURE__*/_react.default.createElement("span", _extends({
    className: tagClasses
  }, other), children || TYPES[type]);
};

Tag.propTypes = {
  /**
   * Provide content to be rendered inside of a <Tag>
   */
  children: _propTypes.default.node,

  /**
   * Provide a custom className that is applied to the containing <span>
   */
  className: _propTypes.default.string,

  /**
   * Specify the type of the <Tag>
   */
  type: _propTypes.default.oneOf(Object.keys(TYPES)).isRequired,

  /**
   * Wrap the line if too long.
   */
  wrap: _propTypes.default.bool
};
Tag.defaultProps = {
  type: 'info'
};
var types = Object.keys(TYPES);
exports.types = types;
var _default = Tag;
exports.default = _default;