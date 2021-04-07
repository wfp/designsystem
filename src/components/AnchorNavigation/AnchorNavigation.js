import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function AnchorNavigation({title, children, className, ...other}) {
    const wrapperClasses = classNames('wfp--anchor-navigation', className);
    return (
        <div className={wrapperClasses}  {...other} >
            <div className="wfp--anchor-header-title"> 
                {title}
            </div>
            <div className="wfp--anchor-content"> 
                {children}
            </div>
            
        </div>
    )
}

AnchorNavigation.propTypes = {
    /**
     * The `title` is represented in the header
     */
    title: PropTypes.string,
    /**
     * The content usually consisting out of `Links`
     */
    children: PropTypes.node,
    /**
     * The CSS class name to be placed on the wrapping element.
     */
    className: PropTypes.string
  };

export default AnchorNavigation;