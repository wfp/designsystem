import * as React from 'react';

declare namespace SidebarContentHeader  {
  interface SidebarContentHeaderProps extends React.HTMLProps<SidebarContentHeader> {
    children?: React.ReactNode
  }
}

declare class SidebarContentHeader extends React.Component<SidebarContentHeader.SidebarContentHeaderProps>{ }
export = SidebarContentHeader