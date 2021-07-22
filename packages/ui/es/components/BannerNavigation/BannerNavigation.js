var _excluded = ["children", "className", "pageWidth"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Wrapper from '../Wrapper';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;

var BannerNavigationItem = function BannerNavigationItem(_ref) {
  var className = _ref.className,
      children = _ref.children;
  var wrapperClasses = classNames("".concat(prefix, "--banner-navigation__item"), className);
  return /*#__PURE__*/React.createElement("li", {
    className: wrapperClasses
  }, children);
};

BannerNavigationItem.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
/**
 * A thin bar on top of the main navigation used to crosslink among apps or pages.
 */

var BannerNavigation = function BannerNavigation(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      pageWidth = _ref2.pageWidth,
      props = _objectWithoutProperties(_ref2, _excluded);

  var wrapperClasses = classNames("".concat(prefix, "--banner-navigation"), className);
  return /*#__PURE__*/React.createElement("div", {
    className: wrapperClasses
  }, /*#__PURE__*/React.createElement(Wrapper, props, /*#__PURE__*/React.createElement("ul", {
    className: "".concat(prefix, "--banner-navigation__list")
  }, children)));
};

BannerNavigation.propTypes = {
  /**
   * The content usually consisting out of `BannerNavigationItem`
   */
  children: PropTypes.node.isRequired,

  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,

  /**
   * Specify the max-width on desktop devices (same as \`Wrapper\` component)
   */
  pageWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'full'])
};
BannerNavigation.defaultProps = {
  pageWidth: 'lg'
};
export { BannerNavigationItem, BannerNavigation };