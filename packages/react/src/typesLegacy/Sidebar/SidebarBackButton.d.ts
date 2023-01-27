import * as React from 'react';

declare namespace SidebarBackButton  {
  interface SidebarBackButtonProps extends React.HTMLProps<SidebarBackButton> {
    children?: React.ReactNode
  }
}

declare class SidebarBackButton extends React.Component<SidebarBackButton.SidebarBackButtonProps>{ }
export = SidebarBackButton
