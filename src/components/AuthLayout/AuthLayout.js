import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
    
    const wrapperClasses = classNames("wfp--auth-background-wrapper",{
        'wfp--auth-background-image': image,
        [`${className}`]: className,
      });

    return (
        <div className="wfp--auth-wrapper" {...other}>
            <div className={wrapperClasses} style={style}>{backgroundContent}</div>
            <div className="wfp--auth-content-wrapper">{children}</div>
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
        <div {...other} className="wfp--auth-background-content">{children}</div>
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
  