import * as React from 'react';
import classNames from 'classnames';

interface ModuleFooterProps extends React.AllHTMLAttributes<HTMLDivElement> {
  className?: string;
}

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
