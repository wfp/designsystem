import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import classNames from 'classnames';
import { iconChevronLeft } from '@wfp/icons';
import settings from '../../globals/js/settings';
const { prefix } = settings;

export default function Sidebar({
  active,
  children,
  sidebarMobileHeader,
  sidebar,
  ...other
}) {
  return (
    <div
      className={`wfp--sidebar-content__container wfp--sidebar-content__container-${
        active ? 'active' : ''
      }`}
      {...other}>
      <div className="wfp--sidebar-item-content">{sidebar}</div>
      <div id="scroll-container" className="wfp--content-section">
        <div className="wfp--sidebar-content-mobile-header">
          {sidebarMobileHeader}
        </div>
        <div className="wfp--sidebar-content__children">{children}</div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  /**
   The children of content area
 */
  children: PropTypes.node,
  /**
   The `active` prop show the content section when an item is clicked. It's useful in mobile view 
 */
  active: PropTypes.bool,
  /**
   The Sidebar is usually where the sidebar items will be. 
   `<SidebarHeader/>` can be called in `Sidebar` and example search can be used in here
 */
  Sidebar: PropTypes.node,
  /**
     The sidebarMobileHeader is shwon when view is in mobile version. 
     `<SidebarBackButton/>` can used in the `sidebarMobileHeader` prop
  */
  sidebarMobileHeader: PropTypes.node,
};

export function SidebarHeader({ className, children, noPadding, ...other }) {
  const classes = classNames(`${prefix}--sidebar-content__header`, className, {
    [`${prefix}--sidebar-content__header--no-padding`]: noPadding,
  });

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
}

SidebarHeader.propTypes = {
  /**
   The children of header of content area
 */
  children: PropTypes.node,
  /**
   Disable the default padding of the SidebarHeader
 */
  noPadding: PropTypes.bool,
};

export function SidebarScroll({ children, ...other }) {
  return (
    <div className="wfp--sidebar-content__scroll" {...other}>
      {children}
    </div>
  );
}

SidebarScroll.propTypes = {
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
