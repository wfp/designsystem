import React from 'react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';

type ModuleFooterProps = PropsWithChildren<{
  className?: Argument;
}>;

const ModuleFooter: React.FC<ModuleFooterProps> = ({
  children,
  className,
  ...other
}) => {
  const wrapperClasses = classNames('wfp--module__footer', className);

  return (
    <div className={wrapperClasses} {...other}>
      {children}
    </div>
  );
};

export default ModuleFooter;
