import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Wrapper from '../Wrapper';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;

var SecondaryNavigationTitle = function SecondaryNavigationTitle(_ref) {
  var className = _ref.className,
      children = _ref.children;
  var wrapperClasses = classNames("".concat(prefix, "--secondary-navigation__title"), className);
  return /*#__PURE__*/React.createElement("h1", {
    className: wrapperClasses
  }, children);
};

SecondaryNavigationTitle.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,

  /**
   * The content of the SecondaryNavigation can be fully customized.
   */
  children: PropTypes.node.isRequired
};
/** The SecondaryNavigation shows the page title and and optional tab navigation. */

var SecondaryNavigation = function SecondaryNavigation(_ref2) {
  var additional = _ref2.additional,
      children = _ref2.children,
      className = _ref2.className,
      id = _ref2.id,
      pageWidth = _ref2.pageWidth;
  var wrapperClasses = classNames("".concat(prefix, "--secondary-navigation"), className);
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: wrapperClasses
  }, /*#__PURE__*/React.createElement(Wrapper, {
    pageWidth: pageWidth,
    className: "".concat(prefix, "--secondary-navigation__wrapper")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--secondary-navigation__list")
  }, children), additional && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--secondary-navigation__additional")
  }, additional)));
};

SecondaryNavigation.propTypes = {
  children: PropTypes.node.isRequired,

  /**
   * The CSS class name to be placed on the wrapping element
   */
  className: PropTypes.string,
  id: PropTypes.string,

  /**
   * Specify the max-width on desktop devices (same as \`Wrapper\` component)
   */
  pageWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'full']),
  wrapperClassName: PropTypes.string
};
SecondaryNavigation.defaultProps = {
  pageWidth: 'lg'
};
export { SecondaryNavigationTitle, SecondaryNavigation };