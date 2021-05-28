import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import settings from '../../globals/js/settings';

const { prefix } = settings;

const TYPES = {
  info: 'Info',
  error: 'error',
  success: 'Success',
  warning: 'Warning',
  custom: 'Custom',
};

/** Tag is used to label, categorize, or organize items using keywords that describe them. */
const Tag = ({ children, className, type, ...other }) => {
  const tagClass = `${prefix}--tag--${type}`;
  const tagClasses = classNames(`${prefix}--tag`, tagClass, className);
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

Tag.defaultProps = {
  type: 'info',
};

export const types = Object.keys(TYPES);
export default Tag;
