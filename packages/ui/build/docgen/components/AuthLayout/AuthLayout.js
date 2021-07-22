"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AuthLayout;
exports.BackgroundContent = BackgroundContent;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _excluded = ["image", "backgroundContent", "children", "className"],
    _excluded2 = ["children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _settings.default.prefix;

function AuthLayout(_ref) {
  var _classNames;

  var image = _ref.image,
      backgroundContent = _ref.backgroundContent,
      children = _ref.children,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, _excluded);

  var style = image ? {
    backgroundImage: "url(".concat(image, ")")
  } : {};
  var wrapperClasses = (0, _classnames.default)("".concat(prefix, "--auth-background-wrapper"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--auth-background-image"), image), _defineProperty(_classNames, "".concat(className), className), _classNames));
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "".concat(prefix, "--auth-wrapper")
  }, other), /*#__PURE__*/_react.default.createElement("div", {
    className: wrapperClasses,
    style: style
  }, backgroundContent), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--auth-content-wrapper")
  }, children));
}

AuthLayout.propTypes = {
  /**
   * The content usually consisting out of forms
   */
  children: _propTypes.default.node.isRequired,

  /**
   * The image is set as background on the left section when provided
   */
  image: _propTypes.default.node,

  /**
   * This usually consist of `<BackgroundContent/>` if you wish to provide content and background color instead of an image
   */
  backgroundContent: _propTypes.default.node,

  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: _propTypes.default.string
};

function BackgroundContent(_ref2) {
  var children = _ref2.children,
      other = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, other, {
    className: "".concat(prefix, "--auth-background-content")
  }), children);
}

BackgroundContent.propTypes = {
  /**
   * The content usually consisting out of `<BackgroundContent/>`
   */
  children: _propTypes.default.node.isRequired,

  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: _propTypes.default.string
};