import * as React from 'react';

declare namespace Sidebar  {
  interface SidebarProps extends React.HTMLProps<Sidebar> {
    children?: React.ReactNode
    active?: boolean
    Sidebar?: React.ReactNode
    sidebarMobileHeader?: React.ReactNode
  }
}

declare class Sidebar extends React.Component<Sidebar.SidebarProps>{ }
export = Sidebar
