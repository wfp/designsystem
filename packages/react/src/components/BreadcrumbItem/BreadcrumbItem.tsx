import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import Link from '../Link';
import useSettings from '../../hooks/useSettings';

const newChild = (children, disableLink, href) => {
  const { prefix } = useSettings();
  if (disableLink === true) {
    return <span>{children}</span>;
  } else if (typeof children === 'string' && !(href === undefined)) {
    return <Link href={href}>{children}</Link>;
  } else {
    return React.cloneElement(React.Children.only(children), {
      className: `${prefix}--link`,
    });
  }
};

interface BreadcrumbItemProps {
  /**
   * Specify an link for the `BreadcrumbItem`
   */
  href?: string;
  /**
   * The children elements, usually a link
   */
  children?: React.ReactNode;
  /**
   * Specify `BreadcrumbItem` to be interactive/enabled or non-interactive/disabled
   */
  disableLink?: boolean;
  /**
   * Specify an optional className to be added to the `BreadcrumbItem` Icon
   */
  className?: string;
}

const BreadcrumbItem: React.FC<PropsWithChildren<BreadcrumbItemProps>> = ({
  children,
  className,
  disableLink,
  href,
  ...other
}) => {
  const { prefix } = useSettings();
  const classes = classNames(`${prefix}--breadcrumb-item`, className);
  return (
    <div className={classes} {...other}>
      {newChild(children, disableLink, href)}
    </div>
  );
};

export default BreadcrumbItem;
