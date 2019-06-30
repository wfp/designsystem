import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import { iconUser } from '@wfp/icons';

const User = ({
  alt,
  className,
  children,
  description,
  ellipsis,
  extendedDescription,
  image,
  small,
  name,
  ...other
}) => {
  var avatar;
  if (image === undefined) {
    avatar = (
      <Icon
        icon={iconUser}
        fill="#ffffff"
        width="14"
        height="14"
        description={alt}
        className="wfp--user__icon wfp--user__icon--empty"
        {...other}
      />
    );
  } else {
    avatar = <img alt={alt} className="wfp--user__icon" src={image} />;
  }

  const classes = classNames('wfp--user', className, {
    'wfp--user--has-description': description,
    'wfp--user--has-extended-description': extendedDescription,
  });

  const titleClasses = classNames({
    'wfp--user__title': true,
    'wfp--user__title--ellipsis': ellipsis,
    'wfp--user__title--small': small,
  });

  return (
    <div className={classes} {...other}>
      {avatar}
      {name && (
        <span className={titleClasses}>
          <span>{name}</span>
          {description && (
            <div className="wfp--user__description">{description}</div>
          )}
        </span>
      )}
      {children}
      {extendedDescription && (
        <div className="wfp--user__extended-description">
          {extendedDescription}
        </div>
      )}
    </div>
  );
};

User.propTypes = {
  /**
   * The alt-text of the avatar
   */
  alt: PropTypes.string,
  /**
   * Sets the max-width of the user name to 130px and shows an ellipsis
   */
  ellipsis: PropTypes.bool,
  /**
   * Provide a custom className that is applied directly to the underlying
   * &lt;textarea&gt; node
   */
  className: PropTypes.string,
  /**
   * Additional description under the Name will also increase the size
   * of the Avatar use &lt;List kind="simple" small /&gt; as default content
   */
  description: PropTypes.node,
  /**
   * Extended Description column can be added only use if the description
   * is also set
   */
  extendedDescription: PropTypes.node,
  /**
   * Url to an avatar image The size of the image is 25px * 25px.
   * Provide at least 50px * 50px to support HiDPI displays.
   */
  image: PropTypes.string,
  name: PropTypes.string,
};

User.defaultProps = {
  alt: 'User Icon',
  ellipsis: false,
};

export default User;
