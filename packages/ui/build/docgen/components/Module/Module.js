"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _excluded = ["dark", "light", "centered", "children", "className", "margin", "fullHeight", "noMargin", "withHover"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _settings.default.prefix;
/** A Module is identifiable as a single, contained unit. */

var Module = function Module(_ref) {
  var _classnames;

  var dark = _ref.dark,
      light = _ref.light,
      centered = _ref.centered,
      children = _ref.children,
      className = _ref.className,
      margin = _ref.margin,
      fullHeight = _ref.fullHeight,
      noMargin = _ref.noMargin,
      withHover = _ref.withHover,
      other = _objectWithoutProperties(_ref, _excluded);

  var wrapperClasses = (0, _classnames2.default)((_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "--module--dark"), dark), _defineProperty(_classnames, "".concat(prefix, "--module--no-margin"), noMargin), _defineProperty(_classnames, "".concat(prefix, "--module--full-height"), fullHeight), _defineProperty(_classnames, "".concat(prefix, "--module--margin-x"), margin === 'xs'), _defineProperty(_classnames, "".concat(prefix, "--module--margin-md"), margin === 'md'), _defineProperty(_classnames, "".concat(prefix, "--module--margin-lg"), margin === 'lg'), _defineProperty(_classnames, "".concat(prefix, "--module--light"), light), _defineProperty(_classnames, "".concat(prefix, "--module--with-hover"), withHover), _classnames), className, ["".concat(prefix, "--module")]);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: wrapperClasses
  }, other), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--module__inner")
  }, children));
};

Module.propTypes = {
  /**
   * * Specify the content of the `Module`, usually a `ModuleHeader` `ModuleBody` and `ModuleFooter`component.
   */
  children: _propTypes.default.node,

  /**
   * The CSS class name for the slider.
   */
  className: _propTypes.default.string,

  /**
   * Disables the default margin
   */
  noMargin: _propTypes.default.bool,

  /**
   * Use 100% height of parent container
   */
  fullHeight: _propTypes.default.bool,

  /**
   * Light appearance (for white backgrounds)
   */
  light: _propTypes.default.bool,

  /**
   * Dark appearance
   */
  dark: _propTypes.default.bool,

  /**
   * Additional hover styling
   */
  withHover: _propTypes.default.bool
};
var _default = Module;
exports.default = _default;