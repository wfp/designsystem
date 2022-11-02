import React from 'react';
import type { PropsWithChildren } from 'react';
import classnames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';

/**
 * The breadcrumb is a secondary navigation pattern that helps a user understand the hierarchy among levels and navigate back through them. */
type BreadcrumbProps = PropsWithChildren<{
  className?: Argument;
}>;

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  children,
  className,
  ...other
}) => {
  const { prefix } = useSettings();
  const classNames = classnames(className, {
    [`${prefix}--breadcrumb`]: true,
    [`${prefix}--breadcrumb--no-trailing-slash`]: true,
  });
  return (
    <div className={classNames} {...other}>
      {children}
    </div>
  );
};

export default Breadcrumb;
