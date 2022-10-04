import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { User as UserIcon } from '@un/icons-react';
import useSettings from '../../hooks/useSettings';

/** The User is used inside the MainNavigation and form, and can display an avatar and username. */
const User = ({
  alt,
  className,
  children,
  description,
  ellipsis,
  extendedDescription,
  image,
  showName,
  small,
  missingImage,
  name,
  ...other
}) => {
  const { prefix } = useSettings();

  var avatar;
  if (!image && missingImage === 'avatar') {
    avatar = (
      <UserIcon
        fill="#ffffff"
        width="14"
        height="14"
        description={alt}
        className={`${prefix}--user__icon ${prefix}--user__icon--empty`}
        {...other}
      />
    );
  } else if (image === undefined && missingImage === 'letter') {
    avatar = (
      <svg
        id="Layer_1"
        className={`${prefix}--user__icon ${prefix}--user__icon--empty ${prefix}--user__icon--letter`}
        x="0px"
        y="0px"
        viewBox="0 0 25 25"
        height="25px"
        width="25px">
        <text x="50%" y="57%" dominantBaseline="middle" textAnchor="middle">
          {name && name.toUpperCase()[0]}
        </text>
      </svg>
    );
  } else {
    avatar = (
      <div className={`${prefix}--user__icon`}>
        <img alt={alt} src={image} />
      </div>
    );
  }

  const classes = classNames(`${prefix}--user`, className, {
    [`${prefix}--user--has-description`]: description,
    [`${prefix}--user--has-extended-description`]: extendedDescription,
  });

  const titleClasses = classNames({
    [`${prefix}--user__title`]: true,
    [`${prefix}--user__title--ellipsis`]: ellipsis,
    [`${prefix}--user__title--small`]: small,
  });

  return (
    <div className={classes} {...other}>
      {avatar}
      {showName && (
        <span className={titleClasses}>
          <span>{name}</span>
          {description && (
            <div className={`${prefix}--user__description`}>{description}</div>
          )}
        </span>
      )}
      {children}
      {extendedDescription && (
        <div className={`${prefix}--user__extended-description`}>
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
   * Extended Description column
   */
  extendedDescription: PropTypes.node,
  /**
   * Url to an avatar image The size of the image is 25px * 25px.
   * Provide at least 50px * 50px to support HiDPI displays.
   */
  image: PropTypes.string,
  /**
   * Show the name next to the avatar
   */
  showName: PropTypes.bool,
  /**
   * The username which will be displayed. Usually `Firstname Lastname`.
   */
  name: PropTypes.string,
};

User.defaultProps = {
  alt: 'User Icon',
  missingImage: 'avatar',
  ellipsis: false,
  showName: true,
};

export default User;
