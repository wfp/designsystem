import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ModuleFooter = ({ centered, children, className, ...other }) => {
  const wrapperClasses = classNames('wfp--module__footer', className);

  return (
    <div className={wrapperClasses} {...other}>
      {children}
    </div>
  );
};

ModuleFooter.propTypes = {
  /**
   * Specify the content of the `ModuleFooter`
   */
  children: PropTypes.node,
  /**
   * The CSS class name for the `ModuleFooter`.
   */
  className: PropTypes.string,
};

export default ModuleFooter;
