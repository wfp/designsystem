import * as React from 'react';

declare namespace SidebarScroll  {
  interface SidebarScrollProps extends React.HTMLProps<SidebarScroll> {
    children?: React.ReactNode
  }
}

declare class SidebarScroll extends React.Component<SidebarScroll.SidebarScrollProps>{ }
export = SidebarScroll