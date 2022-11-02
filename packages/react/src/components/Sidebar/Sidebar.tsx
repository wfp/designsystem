import React from 'react';
import PropTypes from 'prop-types';
// import Icon from '../Icon';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';
import { ChevronLeft } from '@un/icons-react';
import useSettings from '../../hooks/useSettings';

type SidebarProps = PropsWithChildren<{
  active?: boolean | string | number;
  sidebar?: React.ReactNode;
  sidebarMobileHeader?: React.ReactNode;
  className?: Argument;
}>;

const Sidebar: React.FC<SidebarProps> = ({
  active,
  children,
  className,
  // sidebarMobileHeader,
  sidebar,
  ...other
}) => {
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
};

type SidebarHeaderProps = PropsWithChildren<{
  noPadding?: boolean;
  className?: Argument;
}>;

const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  className,
  children,
  noPadding,
  ...other
}) => {
  const { prefix } = useSettings();
  const classes = classNames(`${prefix}--sidebar-content__header`, className, {
    [`${prefix}--sidebar-content__header--no-padding`]: noPadding,
  });

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

type SidebarContentHeaderProps = PropsWithChildren<{
  className?: Argument;
}>;

const SidebarContentHeader: React.FC<SidebarContentHeaderProps> = ({
  className,
  children,
  ...other
}) => {
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
};

type SidebarContentBodyProps = PropsWithChildren<{
  className?: Argument;
}>;

const SidebarContentBody: React.FC<SidebarContentBodyProps> = ({
  className,
  children,
  ...other
}) => {
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
};

const SidebarScroll = ({ children, ...other }) => {
  const { prefix } = useSettings();
  return (
    <div className={`${prefix}--sidebar-content__scroll`} {...other}>
      {children}
    </div>
  );
};

const SidebarBackButton = ({ children, ...other }) => {
  const { prefix } = useSettings();
  return (
    <div className={`${prefix}--sidebar-content__back-button`} {...other}>
      <ChevronLeft />
      {children}
    </div>
  );
};

export {
  Sidebar,
  SidebarHeader,
  SidebarContentHeader,
  SidebarContentBody,
  SidebarScroll,
  SidebarBackButton,
};
