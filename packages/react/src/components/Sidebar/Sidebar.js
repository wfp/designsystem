import React from 'react';
import PropTypes from 'prop-types';
// import Icon from '../Icon';
import classNames from 'classnames';
import { ChevronLeft } from '@un/icons-react';
import useSettings from '../../hooks/useSettings';

export default function Sidebar({
  active,
  children,
  className,
  // sidebarMobileHeader,
  sidebar,
  ...other
}) {
  const { prefix } = useSettings();
  const classes = classNames(
    `${prefix}--sidebar-content__container`,
    className,
    {
      [`${prefix}--sidebar-content__container--active`]: active,
    }
  );

  return (
    <div className={classes} {...other}>
      <div className={`${prefix}--sidebar-item-content`}>{sidebar}</div>
      <div className={`${prefix}--content-section`}>{children}</div>
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
  const { prefix } = useSettings();
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

export function SidebarContentHeader({
  className,
  children,
  noPadding,
  ...other
}) {
  const { prefix } = useSettings();
  const mobileClasses = classNames(
    `${prefix}--sidebar-content-mobile-header`,
    className,
    {}
  );

  return (
    <div className={mobileClasses} {...other}>
      {children}
    </div>
  );
}

SidebarContentHeader.propTypes = {
  /**
   The children of header of content area
 */
  children: PropTypes.node,
  /**
   Additional classname of the SidebarContentHeader
 */
  className: PropTypes.string,
};

export function SidebarContentBody({
  className,
  children,
  noPadding,
  ...other
}) {
  const { prefix } = useSettings();
  const classes = classNames(
    `${prefix}--sidebar-content__children`,
    className,
    {}
  );

  return (
    <div id="scroll-container" className={classes} {...other}>
      {children}
    </div>
  );
}

SidebarContentBody.propTypes = {
  /**
   The children of header of content area
 */
  children: PropTypes.node,
};

export function SidebarScroll({ children, ...other }) {
  const { prefix } = useSettings();
  return (
    <div className={`${prefix}--sidebar-content__scroll`} {...other}>
      {children}
    </div>
  );
}

SidebarScroll.propTypes = {
  /**
  children will be sidebar items beneath the header. `SidebarScroll` wraps around the children to keep them scrolling while the header content is fixed
 */
  children: PropTypes.node,
};

export function SidebarBackButton({ children, ...other }) {
  const { prefix } = useSettings();
  return (
    <div className={`${prefix}--sidebar-content__back-button`} {...other}>
      <ChevronLeft />
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
