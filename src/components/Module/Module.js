import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['single', 'double']),
};

const moduleBodyPropTypes = {
  children: PropTypes.node,
  centered: PropTypes.bool,
  className: PropTypes.string,
};

const moduleHeaderPropTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  size: 'double',
};

const moduleBodydefaultProps = {
  centered: false,
};

const Module = ({ dark, children, className, noMargin, ...other }) => {
  const wrapperClasses = classNames(
    {
      'wfp--module--dark': dark,
      'wfp--module--no-margin': noMargin,
    },
    className,
    'wfp--module'
  );

  return (
    <div className={wrapperClasses} {...other}>
      <div className="wfp--module__inner">{children}</div>
    </div>
  );
};

const ModuleBody = ({ children, className, centered, ...other }) => {
  const wrapperClasses = classNames('wfp--module__content', className, {
    'wfp--module__content--centered': centered,
  });

  return (
    <div className={wrapperClasses} {...other}>
      {children}
    </div>
  );
};

const ModuleHeader = ({ filter, children, className, ...other }) => {
  const wrapperClasses = classNames('wfp--module__header', className);

  return (
    <div className={wrapperClasses} {...other}>
      <h1 className="wfp--module__title">{children}</h1>
      {filter && <div className="wfp--module__filter">{filter}</div>}
    </div>
  );
};

const ModuleFooter = ({ children, className, ...other }) => {
  const wrapperClasses = classNames('wfp--module__footer', className);

  return (
    <div className={wrapperClasses} {...other}>
      {children}
    </div>
  );
};

Module.propTypes = propTypes;
ModuleBody.propTypes = moduleBodyPropTypes;
Module.defaultProps = defaultProps;
ModuleBody.defaultProps = moduleBodydefaultProps;
ModuleHeader.propTypes = moduleHeaderPropTypes;
ModuleFooter.defaultProps = moduleBodydefaultProps;

export { Module, ModuleBody, ModuleHeader, ModuleFooter };
