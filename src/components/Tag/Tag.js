import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const TYPES = {
  info: 'Info',
  error: 'error',
  success: 'Success',
  warning: 'Warning',
  custom: 'Custom',
};

/** Tag is used to label, categorize, or organize items using keywords that describe them. */
const Tag = ({ children, className, type, wrap, ...other }) => {
  const tagClasses = classNames(
    'wfp--tag',
    `wfp--tag--${type}`,
    {
      'wfp--tag--wrap': wrap,
    },
    className
  );
  return (
    <span className={tagClasses} {...other}>
      {children || TYPES[type]}
    </span>
  );
};

Tag.propTypes = {
  /**
   * Provide content to be rendered inside of a <Tag>
   */
  children: PropTypes.node,

  /**
   * Provide a custom className that is applied to the containing <span>
   */
  className: PropTypes.string,

  /**
   * Specify the type of the <Tag>
   */
  type: PropTypes.oneOf(Object.keys(TYPES)).isRequired,

  /**
   * Wrap the line if too long.
   */
  wrap: PropTypes.bool,
};

Tag.defaultProps = {
  type: 'info',
};

export const types = Object.keys(TYPES);
export default Tag;
