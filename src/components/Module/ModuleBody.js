import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const ModuleBody = ({ children, className, centered, noPadding, ...other }) => {
  const wrapperClasses = classNames('wfp--module__content', className, {
    'wfp--module__content--centered': centered,
    'wfp--module__content--no-padding': noPadding,
  });

  return (
    <div className={wrapperClasses} {...other}>
      {children}
    </div>
  );
};

ModuleBody.propTypes = {
  /**
   * Specify the content of the `ModuleBody`
   */
  children: PropTypes.node,
  /**
   * Specify wheater the content should be centered.
   */
  centered: PropTypes.bool,
  /**
   * Specify wheater the body should have no padding.
   */
  noPadding: PropTypes.bool,
  /**
   * The CSS class name for the slider.
   */
  className: PropTypes.string,
};
ModuleBody.defaultProps = {};

export default ModuleBody;
