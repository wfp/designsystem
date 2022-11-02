import React from 'react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';

type ModuleHeaderProps = PropsWithChildren<{
  className?: Argument;
  filter?: any;
}>;

const ModuleHeader: React.FC<ModuleHeaderProps> = ({
  filter,
  children,
  className,
  ...other
}) => {
  const wrapperClasses = classNames('wfp--module__header', className);

  return (
    <div className={wrapperClasses} {...other}>
      <h1 className="wfp--module__title">{children}</h1>
      {filter && <div className="wfp--module__filter">{filter}</div>}
    </div>
  );
};

export default ModuleHeader;
