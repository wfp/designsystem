var _excluded = ["button", "children", "className", "href", "icon", "title", "kind"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
/** The Empty component can be used whenever a section should indicate that there is no content available. This can be the case for a empty list table or search results. */

export var Empty = function Empty(_ref) {
  var _classnames;

  var button = _ref.button,
      children = _ref.children,
      className = _ref.className,
      href = _ref.href,
      icon = _ref.icon,
      title = _ref.title,
      _ref$kind = _ref.kind,
      kind = _ref$kind === void 0 ? 'large' : _ref$kind,
      other = _objectWithoutProperties(_ref, _excluded);

  var classNames = classnames((_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "--empty"), true), _defineProperty(_classnames, "".concat(prefix, "--empty--").concat(kind), kind), _classnames), className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames
  }, other), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--empty__icon")
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--empty__text")
  }, title && /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("p", null, children)), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--empty__button")
  }, button));
};
Empty.propTypes = {
  /**
   * Provide the description for the Empty content
   */
  children: PropTypes.node,

  /**
   * Provide the title for the Empty contet
   */
  title: PropTypes.node,

  /**
   * Provide the icon for the Empty content
   */
  icon: PropTypes.node,

  /**
   * Provide one or multiple buttons
   */
  button: PropTypes.node,

  /**
   * Provide a custom className to be applied to the containing <a> node
   */
  className: PropTypes.string,

  /**
   * Provide a kind to use different appearances.
   */
  kind: PropTypes.oneOf(['undefined', 'large'])
};
export default Empty;