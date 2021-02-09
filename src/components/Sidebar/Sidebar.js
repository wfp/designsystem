import React from 'react';
import PropTypes from 'prop-types';
import SidebarItem from '../SidebarItem/SidebarItem';
import Icon from '../Icon';
import { iconChevronLeft } from '@wfp/icons';

function Sidebar({
  //data,
  active,
  children,
  sidebarMobileHeader,
  sidebarMobileHeaderLink,
  sidebarContent,
  //updateContent,
  //enableSearch,
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

export default Sidebar;

export function SidebarHeader({ children }) {
  return <div className="wfp--sidebar-content__header">{children}</div>;
}

export function SidebarContent({ children }) {
  return <div className="wfp--sidebar-content__content">{children}</div>;
}

export function SidebarBackButton({ children, ...other }) {
  return (
    <div className="wfp--sidebar-content__back-button" {...other}>
      <Icon icon={iconChevronLeft} />
      {children}
    </div>
  );
}
