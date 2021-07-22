"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Item = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _icons = require("@wfp/icons");

var _excluded = ["active", "additional", "button", "children", "className", "href", "subContent", "image", "hint", "noImage", "showAdditionalIcon", "title", "kind", "wrapper"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _settings.default.prefix;

/** The item component to show entries inside a list, like a sidebar or an overview page. */
var Item = function Item(_ref) {
  var _classnames;

  var active = _ref.active,
      additional = _ref.additional,
      button = _ref.button,
      children = _ref.children,
      className = _ref.className,
      href = _ref.href,
      subContent = _ref.subContent,
      image = _ref.image,
      hint = _ref.hint,
      noImage = _ref.noImage,
      showAdditionalIcon = _ref.showAdditionalIcon,
      title = _ref.title,
      _ref$kind = _ref.kind,
      kind = _ref$kind === void 0 ? 'large' : _ref$kind,
      _ref$wrapper = _ref.wrapper,
      wrapper = _ref$wrapper === void 0 ? 'none' : _ref$wrapper,
      other = _objectWithoutProperties(_ref, _excluded);

  var classNames = (0, _classnames2.default)((_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "--item"), true), _defineProperty(_classnames, "".concat(prefix, "--item--").concat(kind), kind), _defineProperty(_classnames, "".concat(prefix, "--item--").concat(wrapper), wrapper), _defineProperty(_classnames, "".concat(prefix, "--item--active"), active), _classnames), className);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classNames
  }, other), image ? /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--item__image")
  }, image) : noImage ? /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--item__image ").concat(prefix, "--item__image-empty")
  }) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--item__content")
  }, title && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--item__title-wrapper")
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "".concat(prefix, "--item__title")
  }, title), additional && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--item__additional")
  }, additional, showAdditionalIcon && /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon: _icons.iconChevronRight,
    className: "".concat(prefix, "--item__additional-icon")
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--item__text-wrapper")
  }, /*#__PURE__*/_react.default.createElement("div", null, children && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--item__text")
  }, children), subContent && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--item__sub-content")
  }, subContent)), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--item__right")
  }, hint && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--item__hint")
  }, hint)))));
};

exports.Item = Item;
Item.propTypes = {
  /**
   * Provide the description for the item content
   */
  children: _propTypes.default.node,

  /**
   * Provide the title for the item contet
   */
  title: _propTypes.default.node,

  /**
   * Provide the icon for the item content
   */
  icon: _propTypes.default.node,

  /**
   * Provide one or multiple buttons
   */
  button: _propTypes.default.node,

  /**
   * Provide a custom className to be applied to the containing <a> node
   */
  className: _propTypes.default.string,

  /**
   * Provide a kind to use different appearances.
   */
  kind: _propTypes.default.oneOf(['undefined', 'large']),

  /**
   * Provide a wrap to use different borders.
   */
  wrapper: _propTypes.default.oneOf(['undefined', 'sidebar', 'repeater'])
};
var _default = Item;
exports.default = _default;