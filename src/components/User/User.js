import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const UserIcon = ({
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

UserIcon.propTypes = {
  image: PropTypes.string,

};

UserIcon.defaultProps = {
  alt: 'User Icon',

};

export default UserIcon;
