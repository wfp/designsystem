import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import useSettings from '../../hooks/useSettings';

/** Links are used as navigational elements. They may appear on their own, within a sentence or paragraph, or directly following the content. */

export const Link = ({ children, className, href, inline, ...other }) => {
  const { prefix } = useSettings();

  const classNames = classnames(
    {
      [`${prefix}--link`]: true,
      [`${prefix}--link--inline`]: inline,
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
  inline: PropTypes.bool,
};

export default Link;
