import React from 'react'
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

export default SidebarItem;
