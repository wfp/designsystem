import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { settings } from '../../globals/js';

const { prefix } = settings;

/**
 * The breadcrumb is a secondary navigation pattern that helps a user understand the hierarchy among levels and navigate back through them. */

const Breadcrumb = ({ children, className, ...other }) => {
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

Breadcrumb.propTypes = {
  /**
   * Pass in the BreadcrumbItem's for your Breadcrumb
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,
};

export default Breadcrumb;
