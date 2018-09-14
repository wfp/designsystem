import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import Icon from '../Icon';

const BreadcrumbHome = ({ className, hometext, ...other }) => {
  const classNames = classnames('wfp--breadcrumb-home', className);
  return (
    <Icon
      name="home"
      fill="#0b77c2"
      width="14"
      height="14"
      description={hometext}
      className={classNames}
      {...other}
    />
  );
};

BreadcrumbHome.propTypes = {
  type: PropTypes.string,
};

export default BreadcrumbHome;
