import * as React from 'react';

declare namespace SidebarContentBody  {
  interface SidebarContentBodyProps extends React.HTMLProps<SidebarContentBody> {
    children?: React.ReactNode
  }
}

declare class SidebarContentBody extends React.Component<SidebarContentBody.SidebarContentBodyProps>{ }
export = SidebarContentBody