import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import settings from '../../globals/js/settings';
const { prefix } = settings;

/** Links are used as navigational elements. They may appear on their own, within a sentence or paragraph, or directly following the content. */

export const Link = ({ children, className, href, ...other }) => {
  const classNames = classnames(
    {
      [`${prefix}--link`]: true,
    },
    className
  );
  return (
    <a href={href} className={classNames} {...other}>
      {children}
    </a>
  );
};

Link.propTypes = {
  /**
   * Provide the content for the Link
   */
  children: PropTypes.string,

  /**
   * Provide a custom className to be applied to the containing <a> node
   */
  className: PropTypes.string,

  /**
   * Provide the `href` attribute for the <a> node
   */
  href: PropTypes.string,
};

export default Link;
