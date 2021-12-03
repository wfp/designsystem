import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
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

const BreadcrumbItem = ({
  children,
  className,
  disableLink,
  href,
  ...other
}) => {
  const { prefix } = useSettings();
  const classNames = classnames(`${prefix}--breadcrumb-item`, className);
  return (
    <div className={classNames} {...other}>
      {newChild(children, disableLink, href)}
    </div>
  );
};

BreadcrumbItem.propTypes = {
  /**
   * The children elements, usually a link
   */
  children: PropTypes.node,
  /**
   * Specify an optional className to be added to the `BreadcrumbItem` Icon
   */
  className: PropTypes.string,
  /**
   * Specify an link for the `BreadcrumbItem`
   */
  href: PropTypes.string,
  /**
   * Specify `BreadcrumbItem` to be interactive/enabled or non-interactive/disabled
   */
  disableLink: PropTypes.bool,
};

export default BreadcrumbItem;
