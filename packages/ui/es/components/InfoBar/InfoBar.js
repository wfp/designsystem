import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Wrapper from '../Wrapper';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
/** The InfoBar shows very important information on top of the page. */

var InfoBar = function InfoBar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      pageWidth = _ref.pageWidth;
  var wrapperClasses = classNames("".concat(prefix, "--info-bar"), className);
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: wrapperClasses
  }, /*#__PURE__*/React.createElement(Wrapper, {
    pageWidth: pageWidth
  }, children));
};

InfoBar.propTypes = {
  children: PropTypes.node.isRequired,

  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,

  /**
   * Additional `id` provided to the wrapping element
   */
  id: PropTypes.string,

  /**
   *  `pageWidth` for the `<Wrapper />` component
   */
  pageWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'full']),

  /**
   * Additional `className` for the `<Wrapper />` component
   */
  wrapperClassName: PropTypes.string
};
InfoBar.defaultProps = {
  pageWidth: 'lg'
};
export default InfoBar;