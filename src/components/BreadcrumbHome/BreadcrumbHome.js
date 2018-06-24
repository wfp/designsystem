import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Link from '../Link';

const BreadcrumbHome = ({ className, ...other }) => {
  const classNames = classnames('wfp--breadcrumb-home', className);
  return <div className={classNames} {...other} />;
};

BreadcrumbHome.propTypes = {
  type: PropTypes.string,
};

export default BreadcrumbHome;
