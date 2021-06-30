import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const ModuleHeader = ({ filter, children, className, ...other }) => {
  const wrapperClasses = classNames('wfp--module__header', className);

  return (
    <div className={wrapperClasses} {...other}>
      <h1 className="wfp--module__title">{children}</h1>
      {filter && <div className="wfp--module__filter">{filter}</div>}
    </div>
  );
};

ModuleHeader.propTypes = {
  /**
   * Specify the content of the `ModuleHeaders`
   */
  children: PropTypes.node,
  /**
   * The CSS class name for the `ModuleHeaders`.
   */
  className: PropTypes.string,
};

export default ModuleHeader;
