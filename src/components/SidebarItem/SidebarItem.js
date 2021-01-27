import React from 'react'
import PropTypes from 'prop-types';
import { iconUser } from '@wfp/icons';
import Icon from '../../components/Icon';

function SidebarItem({
    image, 
    title,
    content,
    subContent,
    additionalInfo,
    noImage,
    ...other
}) {

    var profile_image;
    if(image){
        profile_image =(
            <img alt="img" src={image} /> 
        )
    }else{
            profile_image = (<Icon
                icon={iconUser}
                fill="#ffffff"
                width="14"
                height="14"
                className="wfp--profile-image--empty"
                {...other}
            />)
    }
    

    return (
        <div className="wfp--sidebar-item-wrapper" {...other}>
            { !noImage ? 
            (<div className="wfp--profile-image">
                {profile_image} 
            </div> )
            : '' }
            <div className="wfp--sidebar-item__content">
                <div className="wfp--sidebar-content-wrapper">
                    {title && <div className="wfp--item-title">{title}</div>}
                    {content && <div className="wfp--item-content">{content}</div>}
                    {subContent && <div className="wfp--item-subcontent">{subContent}</div>}
                </div>
                <div className="wfp--sidebar-info-wrapper">
                    <span>additional info</span>
                </div>
            </div>

        </div>
    )
}

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
  };

export default SidebarItem;
