import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Link from '../Link';

const newChild = (children, disableLink, href) => {
  if (disableLink === true) {
    return <span>{children}</span>;
  } else if (typeof children === 'string' && !(href === undefined)) {
    return <Link href={href}>{children}</Link>;
  } else {
    return React.cloneElement(React.Children.only(children), {
      className: 'wfp--link',
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
  const classNames = classnames('wfp--breadcrumb-item', className);
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
  className: PropTypes.string,
  href: PropTypes.string,
};

export default BreadcrumbItem;
