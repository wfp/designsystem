import * as React from 'react';

declare namespace ContextMenu  {
  interface ContextMenuProps extends Omit<React.HTMLProps<ContextMenu>, 'content'> {
    content?: React.ReactNode,
    href?: string
    inline?: boolean
    children?: React.ReactNode
  }
}

declare class ContextMenu extends React.Component<ContextMenu.ContextMenuProps>{ }
export = ContextMenu
