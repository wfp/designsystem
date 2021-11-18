import * as React from 'react';

declare namespace ContextMenuItem  {
  interface ContextMenuItemProps extends React.HTMLProps<ContextMenuItem> {
    children?: React.ReactNode
  }
}

declare class ContextMenuItem extends React.Component<ContextMenuItem.ContextMenuItemProps>{ }
export = ContextMenuItem