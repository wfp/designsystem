import * as React from 'react';
import type { PropsWithChildren } from 'react';
import classNames from 'classnames';

type ModuleBodyProps = PropsWithChildren<{
  className?: string;
  centered?: boolean;
  noPadding?: boolean;
}>;

const ModuleBody: React.FC<ModuleBodyProps> = ({
  children,
  className,
  centered,
  noPadding,
  ...other
}) => {
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

export default ModuleBody;
