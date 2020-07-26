import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import settings from '../../globals/js/settings';
const { prefix } = settings;

/**
Links are typically used as a means of navigation either within the application, to a place outside, or to a resource. For anything else, especially things that change data and actions, you should be using a `button`.
Links can have the same properties as a regular `<a>`-element.

### Content
- Use text for links rather than graphics or icons.
- Links should be three words or less.
- Text should be consistent with the title of the intended destination.
- Use caution with links that are several words long. It is recommended that links are long enough to be understood by the user, but short enough to prevent text wrapping.
- Avoid the term “click here,” other links to “here,” or the web address itself. Instead, use a meaningful descriptive label for the link, and match the destination site name.
 */

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
   *
   * - https://wfp.org
   */
  href: PropTypes.string,
};

export default Link;
