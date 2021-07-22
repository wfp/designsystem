"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextMenuGroup = ContextMenuGroup;
exports.ContextMenuItem = ContextMenuItem;
exports.default = exports.ContextMenu = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tooltip = _interopRequireDefault(require("../Tooltip"));

var _classnames4 = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _excluded = ["children", "className", "content", "href", "inline", "trigger"],
    _excluded2 = ["className"],
    _excluded3 = ["className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _settings.default.prefix;
/** Context menu are used as navigational elements. They should contain commands that apply to the target object. */

var ContextMenu = function ContextMenu(_ref) {
  var children = _ref.children,
      className = _ref.className,
      content = _ref.content,
      href = _ref.href,
      inline = _ref.inline,
      _ref$trigger = _ref.trigger,
      trigger = _ref$trigger === void 0 ? 'click' : _ref$trigger,
      other = _objectWithoutProperties(_ref, _excluded);

  var classNames = (0, _classnames4.default)(_defineProperty({}, "".concat(prefix, "--context-menu"), true), className);
  return /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    className: classNames,
    content: content,
    noPadding: true,
    trigger: "click"
  }, children);
};

exports.ContextMenu = ContextMenu;

function ContextMenuGroup(_ref2) {
  var className = _ref2.className,
      other = _objectWithoutProperties(_ref2, _excluded2);

  var classNames = (0, _classnames4.default)(_defineProperty({}, "".concat(prefix, "--context-menu__group"), true), className);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classNames
  }, other));
}

function ContextMenuItem(_ref3) {
  var className = _ref3.className,
      other = _objectWithoutProperties(_ref3, _excluded3);

  var classNames = (0, _classnames4.default)(_defineProperty({}, "".concat(prefix, "--context-menu__item"), true), className);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classNames
  }, other));
}

ContextMenu.propTypes = {
  /**
   * Provide the content for the Link
   */
  children: _propTypes.default.node,

  /**
   * Provide a custom className to be applied to the containing <a> node
   */
  className: _propTypes.default.string,

  /**
   * Inline links are used within a sentence or paragraph and are styled with an underline. They should not be paired with an icon.
   */
  inline: _propTypes.default.bool
};
var _default = ContextMenu;
exports.default = _default;