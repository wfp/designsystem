import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import settings from '../../globals/js/settings';

const { prefix } = settings;

export default function AuthLayout({
    image,
    backgroundContent, 
    children,
    className, 
    ...other
}) 
{
    const style = image ? {
        backgroundImage: `url(${image})`,
      }
    : {};
    
    const wrapperClasses = classNames(`${prefix}--auth-background-wrapper`,{
        [`${prefix}--auth-background-image`]: image,
        [`${className}`]: className,
      });

    return (
        <div className={`${prefix}--auth-wrapper`} {...other}>
            <div className={wrapperClasses} style={style}>{backgroundContent}</div>
            <div className={`${prefix}--auth-content-wrapper`}>{children}</div>
        </div>
    )
}

AuthLayout.propTypes = {
    /**
     * The content usually consisting out of forms
     */
    children: PropTypes.node.isRequired,

    /**
     * The image is set as background on the left section when provided
     */
    image: PropTypes.node,

    /**
     * This usually consist of `<BackgroundContent/>` if you wish to provide content and background color instead of an image
     */
    backgroundContent: PropTypes.node,

    /**
     * The CSS class name to be placed on the wrapping element.
     */
    className: PropTypes.string,
  };


export function BackgroundContent({children, ...other}){
    return(
        <div {...other} className={`${prefix}--auth-background-content`}>{children}</div>
    )
}


BackgroundContent.propTypes = {
    /**
     * The content usually consisting out of `<BackgroundContent/>`
     */
    children: PropTypes.node.isRequired,
    /**
     * The CSS class name to be placed on the wrapping element.
     */
    className: PropTypes.string,
  };
  