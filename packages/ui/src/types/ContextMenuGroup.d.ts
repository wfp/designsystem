import * as React from 'react';

declare namespace ContextMenuGroup  {
  interface ContextMenuGroupProps extends React.HTMLProps<ContextMenuGroup> {
    children?: React.ReactNode
  }
}

declare class ContextMenuGroup extends React.Component<ContextMenuGroup.ContextMenuGroupProps>{ }
export = ContextMenuGroup