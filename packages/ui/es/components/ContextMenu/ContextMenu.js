var _excluded = ["children", "className", "content", "href", "inline", "trigger"],
    _excluded2 = ["className"],
    _excluded3 = ["className"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip';
import classnames from 'classnames';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
/** Context menu are used as navigational elements. They should contain commands that apply to the target object. */

export var ContextMenu = function ContextMenu(_ref) {
  var children = _ref.children,
      className = _ref.className,
      content = _ref.content,
      href = _ref.href,
      inline = _ref.inline,
      _ref$trigger = _ref.trigger,
      trigger = _ref$trigger === void 0 ? 'click' : _ref$trigger,
      other = _objectWithoutProperties(_ref, _excluded);

  var classNames = classnames(_defineProperty({}, "".concat(prefix, "--context-menu"), true), className);
  return /*#__PURE__*/React.createElement(Tooltip, {
    className: classNames,
    content: content,
    noPadding: true,
    trigger: "click"
  }, children);
};
export function ContextMenuGroup(_ref2) {
  var className = _ref2.className,
      other = _objectWithoutProperties(_ref2, _excluded2);

  var classNames = classnames(_defineProperty({}, "".concat(prefix, "--context-menu__group"), true), className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames
  }, other));
}
export function ContextMenuItem(_ref3) {
  var className = _ref3.className,
      other = _objectWithoutProperties(_ref3, _excluded3);

  var classNames = classnames(_defineProperty({}, "".concat(prefix, "--context-menu__item"), true), className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames
  }, other));
}
ContextMenu.propTypes = {
  /**
   * Provide the content for the Link
   */
  children: PropTypes.node,

  /**
   * Provide a custom className to be applied to the containing <a> node
   */
  className: PropTypes.string,

  /**
   * Inline links are used within a sentence or paragraph and are styled with an underline. They should not be paired with an icon.
   */
  inline: PropTypes.bool
};
export default ContextMenu;