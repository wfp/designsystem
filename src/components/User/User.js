import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const User = ({
  alt,
  className,
  image,
  title,
  ...other
}) => {

  var avatar;
  if ((image && image.includes("auto") || image === undefined)) {
    avatar = ( 
      <div
        className="wfp--user-icon wfp--user-icon--empty"
        alt={alt}
      />
    );
  }
  else {
    avatar = (
        <img alt={alt} className="wfp--user-icon" src={image} />
    );
  }

  const classes = classNames('wfp--user', {
    className
  });

  return (
      <div className={classes} {...other}>
        {avatar}
        <span>{title}</span>
      </div>
    );
}

User.propTypes = {
  alt: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string

};

User.defaultProps = {
  alt: 'User Icon',
  title: 'No Name'

};

export default User;
