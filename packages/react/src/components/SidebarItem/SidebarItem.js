import React from 'react';
import PropTypes from 'prop-types';
import { iconUser } from '@un/icons-react';
import Icon from '../../components/Icon';
import useSettings from '../../hooks/useSettings';

function SidebarItem({
  image,
  title,
  content,
  subContent,
  additionalInfo,
  noImage,
  hintInfo,
  ...other
}) {
  const { prefix } = useSettings();

  var profile_image;
  if (image) {
    profile_image = <img alt="img" src={image} />;
  } else {
    profile_image = (
      <Icon
        icon={iconUser}
        fill="#ffffff"
        width="14"
        height="14"
        className={`${prefix}--profile-image--empty`}
        {...other}
      />
    );
  }

  return (
    <div className={`${prefix}--sidebar-item-wrapper`} {...other}>
      <div className={`${prefix}--sidebar-item__content`}>
        {!noImage ? (
          <div className={`${prefix}--profile-image`}>{profile_image}</div>
        ) : (
          ''
        )}
        <div className={`${prefix}--sidebar-content-wrapper`}>
          {title && <div className={`${prefix}--item-title`}>{title}</div>}
          {content && (
            <div className={`${prefix}--item-content`}>{content}</div>
          )}
          {subContent && (
            <div className={`${prefix}--item-subcontent`}>{subContent}</div>
          )}
        </div>
      </div>

      <div className={`${prefix}--sidebar-right-content-wrapper`}>
        <div className={`${prefix}--sidebar-info-wrapper`}>
          <span>additional</span>
        </div>
        <div>{hintInfo}</div>
      </div>
    </div>
  );
}
// wfp--sidebar-item__content

SidebarItem.propTypes = {
  /**
     The image will be placed in place of the avatar
   */
  image: PropTypes.string,
  /**
     title is the string given to the first text, usually name
   */
  title: PropTypes.string,
  /**
     content is what follows the text
   */
  content: PropTypes.string,
  /**
    subContent, usually additional information below the content
   */
  subContent: PropTypes.string,
  /**
     additional info section is mainly for any short text like job title
   */
  additionalInfo: PropTypes.string,
  /**
     noImage is passed if the user wants to remove the avatar section
   */
  noImage: PropTypes.boolean,
  /**
     hintInfo is passed to give additonal hint to your content, optional
   */
  hintInfo: PropTypes.node,
};

SidebarItem.defaultProps = {
  noImage: false,
};

export default SidebarItem;
