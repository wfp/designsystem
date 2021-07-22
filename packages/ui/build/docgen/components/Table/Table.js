"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Table;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _excluded = ["className", "children", "responsive", "withBorder"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _settings.default.prefix;
/** Tables are used to make large volumes of data easy to understand and to access. */

function Table(_ref) {
  var _classNames;

  var className = _ref.className,
      children = _ref.children,
      responsive = _ref.responsive,
      withBorder = _ref.withBorder,
      other = _objectWithoutProperties(_ref, _excluded);

  var classes = (0, _classnames.default)("".concat(prefix, "--table"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--table--responsive"), responsive), _defineProperty(_classNames, "".concat(prefix, "--table--with-border"), withBorder), _classNames), className);
  return /*#__PURE__*/_react.default.createElement("table", _extends({}, other, {
    className: classes
  }), children);
}

Table.propTypes = {
  /**
   * Provide the content for the Table, usually `<thead />` or `<tbody/>`
   */
  children: _propTypes.default.node,

  /**
   * Provide a custom className to be applied to the containing `<table />` node
   */
  className: _propTypes.default.string,

  /**
   * Displays the `<table />` as a responsive layout on small devices
   */
  responsive: _propTypes.default.bool,

  /**
   * Displays a border around the `<table />` node
   */
  withBorder: _propTypes.default.bool
};