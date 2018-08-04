import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const Credits = ({ children, className, info, ...other }) => {
  const classNames = classnames('wfp--credits', className);
  return (
    <div className={classNames} {...other}>
      <div className="wfp--credits__info">{info}</div>
      {children}
    </div>
  );
};

Credits.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  info: PropTypes.string,
};

export default Credits;
