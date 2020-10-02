import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

/** Credits are mostly used when a photo need a source attribution. */
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
  /**
 Specify the image or content
*/
  children: PropTypes.node,
  /**
 Additional className which will be added
*/
  className: PropTypes.string,
  /**
 Specifiy the info content
*/
  info: PropTypes.string,
};

export default Credits;
