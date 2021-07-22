var _excluded = ["children", "className", "href", "inline"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
/** Links are used as navigational elements. They may appear on their own, within a sentence or paragraph, or directly following the content. */

export var Link = function Link(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      href = _ref.href,
      inline = _ref.inline,
      other = _objectWithoutProperties(_ref, _excluded);

  var classNames = classnames((_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "--link"), true), _defineProperty(_classnames, "".concat(prefix, "--link--inline"), inline), _classnames), className);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: classNames
  }, other), children);
};
Link.propTypes = {
  /**
   * Provide the content for the Link
   */
  children: PropTypes.node,

  /**
   * Provide a custom className to be applied to the containing <a> node
   */
  className: PropTypes.string,

  /**
   * Provide the `href` attribute for the <a> node
   */
  href: PropTypes.string,

  /**
   * Inline links are used within a sentence or paragraph and are styled with an underline. They should not be paired with an icon.
   */
  inline: PropTypes.bool
};
export default Link;