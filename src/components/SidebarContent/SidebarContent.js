import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { iconChevronLeft } from '@wfp/icons';

export function SidebarContent({
  active,
  children,
  sidebarMobileHeader,
  sidebarContent,
  ...other
}) {
  return (
    <div
      className={`wfp--sidebar-content__container wfp--sidebar-content__container-${
        active ? 'active' : ''
      }`}
      {...other}>
      <div className="wfp--sidebar-item-content">{sidebarContent}</div>
      <div className="wfp--content-section">
        <div className="wfp--sidebar-content-mobile-header">
          {sidebarMobileHeader}
        </div>
        {children}
      </div>
    </div>
  );
}

SidebarContent.propTypes = {
  /**
   The children of content area
 */
  children: PropTypes.node,
  /**
   The sidebarContent is usually where the sidebar items will be. 
   `<SidebarHeader/>` can be called in `sidebarContent` and example search can be used in here
 */
  sidebarContent: PropTypes.node,
  /**
     The sidebarMobileHeader is shwon when view is in mobile version. 
     `<SidebarBackButton/>` can used in the `sidebarMobileHeader` prop
  */
  sidebarMobileHeader: PropTypes.node
};



export function SidebarHeader({ children }) {
  return <div className="wfp--sidebar-content__header">{children}</div>;
}

SidebarHeader.propTypes = {
  /**
   The children of header of content area
 */
  children: PropTypes.node,
};

export function SidebarBackButton({ children, ...other }) {
  return (
    <div className="wfp--sidebar-content__back-button" {...other}>
      <Icon icon={iconChevronLeft} />
      {children}
    </div>
  );
}


SidebarBackButton.propTypes = {
  /**
   The children of back button of content area
 */
  children: PropTypes.node,
};

