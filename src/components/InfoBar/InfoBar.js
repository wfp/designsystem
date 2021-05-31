import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Wrapper from '../Wrapper';
import settings from '../../globals/js/settings';

const { prefix } = settings;

/** The InfoBar shows very important information on top of the page. */

const InfoBar = ({ children, className, id, pageWidth }) => {
  const wrapperClasses = classNames(`${prefix}--info-bar`, className);

  return (
    <div id={id} className={wrapperClasses}>
      <Wrapper pageWidth={pageWidth}>{children}</Wrapper>
    </div>
  );
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
  wrapperClassName: PropTypes.string,
};

InfoBar.defaultProps = {
  pageWidth: 'lg',
};

export default InfoBar;
