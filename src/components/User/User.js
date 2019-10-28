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
  missingImage,
  name,
  ...other
}) => {
  var avatar;
  if (image === undefined && missingImage === 'avatar') {
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
  } else if (image === undefined && missingImage === 'letter') {
    avatar = (
      <svg
        id="Layer_1"
        className="wfp--user__icon wfp--user__icon--empty"
        x="0px"
        y="0px"
        viewBox="0 0 25 25"
        height="25px"
        width="25px">
        <text
          x="50%"
          y="56%"
          dominant-baseline="middle"
          text-anchor="middle"
          class="text">
          {name && name.toUpperCase()[0]}
        </text>
      </svg>
    );
  } else {
    avatar = (
      <div className="wfp--user__icon">
        <img alt={alt} src={image} />
      </div>
    );
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
   * Selects the generated empty icon if no image is provided.
   * Can be `avatar` or `letter`.
   */
  missingImage: PropTypes.oneOf(['avatar', 'letter']),
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
  missingImage: 'avatar',
  ellipsis: false,
};

export default User;
