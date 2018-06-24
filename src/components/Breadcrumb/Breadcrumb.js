import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const Breadcrumb = ({ children, className, ...other }) => {
  const classNames = classnames(
    'wfp--breadcrumb wfp--breadcrumb--no-trailing-slash',
    className
  );
  return (
    <div className={classNames} {...other}>
      {children}
    </div>
  );
};

Breadcrumb.propTypes = {
  /**
   * The children elements, usually multiple <BreadcrumbItem>
   */
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Breadcrumb;
