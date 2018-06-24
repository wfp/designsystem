import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const User = ({ alt, className, ellipsis, image, small, name, ...other }) => {
  var avatar;
  if ((image && image.includes('auto')) || image === undefined) {
    avatar = (
      <div className="wfp--user__icon wfp--user__icon--empty" alt={alt} />
    );
  } else {
    avatar = <img alt={alt} className="wfp--user__icon" src={image} />;
  }

  const classes = classNames('wfp--user', {
    className,
  });

  const titleClasses = classNames({
    'wfp--user__title': true,
    'wfp--user__title--ellipsis': ellipsis,
    'wfp--user__title--small': small,
  });

  return (
    <div className={classes} {...other}>
      {avatar}
      {name && <span className={titleClasses}>{name}</span>}
    </div>
  );
};

User.propTypes = {
  alt: PropTypes.string,
  ellipsis: PropTypes.bool,
  image: PropTypes.string,
  name: PropTypes.string,
};

User.defaultProps = {
  alt: 'User Icon',
};

export default User;
