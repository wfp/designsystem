import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { settings } from '../../globals/js';
const { prefix } = settings;

/** The Empty component can be used whenever a section should indicate that there is no content available. This can be the case for a empty list table or search results. */
export const Empty = ({
  button,
  children,
  className,
  href,
  icon,
  title,
  kind = 'large',
  ...other
}) => {
  const classNames = classnames(
    {
      [`${prefix}--empty`]: true,
      [`${prefix}--empty--${kind}`]: kind,
    },
    className
  );
  return (
    <div className={classNames} {...other}>
      <div className={`${prefix}--empty__icon`}>{icon}</div>
      <div className={`${prefix}--empty__text`}>
        {title && <h2>{title}</h2>}
        <p>{children}</p>
      </div>
      <div className={`${prefix}--empty__button`}>{button}</div>
    </div>
  );
};

Empty.propTypes = {
  /**
   * Provide the description for the Empty content
   */
  children: PropTypes.node,

  /**
   * Provide the title for the Empty contet
   */
  title: PropTypes.node,

  /**
   * Provide the icon for the Empty content
   */
  icon: PropTypes.node,

  /**
   * Provide one or multiple buttons
   */
  button: PropTypes.node,

  /**
   * Provide a custom className to be applied to the containing <a> node
   */
  className: PropTypes.string,

  /**
   * Provide a kind to use different appearances.
   */
  kind: PropTypes.oneOf(['undefined', 'large']),
};

export default Empty;
