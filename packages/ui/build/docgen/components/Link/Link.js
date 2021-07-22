"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Link = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _excluded = ["children", "className", "href", "inline"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _settings.default.prefix;
/** Links are used as navigational elements. They may appear on their own, within a sentence or paragraph, or directly following the content. */

var Link = function Link(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      href = _ref.href,
      inline = _ref.inline,
      other = _objectWithoutProperties(_ref, _excluded);

  var classNames = (0, _classnames2.default)((_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "--link"), true), _defineProperty(_classnames, "".concat(prefix, "--link--inline"), inline), _classnames), className);
  return /*#__PURE__*/_react.default.createElement("a", _extends({
    href: href,
    className: classNames
  }, other), children);
};

exports.Link = Link;
Link.propTypes = {
  /**
   * Provide the content for the Link
   */
  children: _propTypes.default.node,

  /**
   * Provide a custom className to be applied to the containing <a> node
   */
  className: _propTypes.default.string,

  /**
   * Provide the `href` attribute for the <a> node
   */
  href: _propTypes.default.string,

  /**
   * Inline links are used within a sentence or paragraph and are styled with an underline. They should not be paired with an icon.
   */
  inline: _propTypes.default.bool
};
var _default = Link;
exports.default = _default;