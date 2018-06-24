import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

/* TODO: Icon Wrapper for custom Icons */

const Icon = ({ children, className, ...other }) => {
  const classNames = classnames('wfp--icon', className);
  return (
    <div className={classNames} {...other}>
      {children}
    </div>
  );
};

Icon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Icon;
