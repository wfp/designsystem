import React from 'react';
import classNames from 'classnames';

const ModuleFooter = ({ centered, children, className, ...other }) => {
  const wrapperClasses = classNames('wfp--module__footer', className);

  return (
    <div className={wrapperClasses} {...other}>
      {children}
    </div>
  );
};

export default ModuleFooter;
