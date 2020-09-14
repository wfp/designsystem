import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import settings from '../../globals/js/settings';
const { prefix } = settings;

<<<<<<< HEAD
/**
 * _Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience._ */
=======
/** Links are used as navigational elements. They may appear on their own, within a sentence or paragraph, or directly following the content. */
>>>>>>> a6cfcd71a44b7c9294739834a260bbcb383d7f0c

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
