import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const TYPES = {
  beta: 'Beta',
  custom: 'Custom',
  wfp: 'WFP',
  error: 'error',
  success: 'Success',
  warning: 'Warning',
};

const Tag = ({ children, className, type, ...other }) => {
  const tagClass = `wfp--tag--${type}`;
  const tagClasses = classNames('wfp--tag', tagClass, className);
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
};

export const types = Object.keys(TYPES);
export default Tag;
