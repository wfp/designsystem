import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import settings from '../../globals/js/settings';

const { prefix } = settings;

function AnchorNavigation({title, children, className, ...other}) {
    const wrapperClasses = classNames(`${prefix}--anchor-navigation`, className);
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