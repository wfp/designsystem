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
        <div className="wfp--sidebar-content__children">{children}</div>
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
   The `active` prop show the content section when an item is clicked. It's useful in mobile view 
 */
  active: PropTypes.bool,
  /**
   The sidebarContent is usually where the sidebar items will be. 
   `<SidebarHeader/>` can be called in `sidebarContent` and example search can be used in here
 */
  sidebarContent: PropTypes.node,
  /**
     The sidebarMobileHeader is shwon when view is in mobile version. 
     `<SidebarBackButton/>` can used in the `sidebarMobileHeader` prop
  */
  sidebarMobileHeader: PropTypes.node,
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

export function SidebarScroll({ children }) {
  return <div className="wfp--sidebar-content__scroll">{children}</div>;
}

SidebarScroll.propTypes = {
  /**
  children will be sidebar items beneath the header. `SidebarScroll` wraps around the children to keep them scrolling while the header content is fixed
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

