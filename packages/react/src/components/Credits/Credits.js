import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import useSettings from '../../hooks/useSettings';

/** Credits are mostly used when a photo need a source attribution. */
const Credits = ({ children, className, info, ...other }) => {
  const { prefix } = useSettings();
  const classNames = classnames(`${prefix}--credits`, className);
  return (
    <div className={classNames} {...other}>
      <div className={`${prefix}--credits__info`}>{info}</div>
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
