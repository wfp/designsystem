var _excluded = ["children", "className", "disableLink", "href"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Link from '../Link';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;

var newChild = function newChild(children, disableLink, href) {
  if (disableLink === true) {
    return /*#__PURE__*/React.createElement("span", null, children);
  } else if (typeof children === 'string' && !(href === undefined)) {
    return /*#__PURE__*/React.createElement(Link, {
      href: href
    }, children);
  } else {
    return /*#__PURE__*/React.cloneElement(React.Children.only(children), {
      className: "".concat(prefix, "--link")
    });
  }
};

var BreadcrumbItem = function BreadcrumbItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      disableLink = _ref.disableLink,
      href = _ref.href,
      other = _objectWithoutProperties(_ref, _excluded);

  var classNames = classnames("".concat(prefix, "--breadcrumb-item"), className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames
  }, other), newChild(children, disableLink, href));
};

BreadcrumbItem.propTypes = {
  /**
   * The children elements, usually a link
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be added to the `BreadcrumbItem` Icon
   */
  className: PropTypes.string,

  /**
   * Specify an link for the `BreadcrumbItem`
   */
  href: PropTypes.string,

  /**
   * Specify `BreadcrumbItem` to be interactive/enabled or non-interactive/disabled
   */
  disableLink: PropTypes.bool
};
export default BreadcrumbItem;