import * as React from 'react';

declare namespace SidebarHeader  {
  interface SidebarHeaderProps extends React.HTMLProps<SidebarHeader> {
    children?: React.ReactNode
    noPadding?: boolean
  }
}

declare class SidebarHeader extends React.Component<SidebarHeader.SidebarHeaderProps>{ }
export = SidebarHeader
