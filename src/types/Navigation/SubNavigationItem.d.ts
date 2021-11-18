import * as React from 'react';

declare namespace SubNavigationItem  {
  interface SubNavigationItemProps extends React.HTMLProps<SubNavigationItem> {
    children?: React.ReactNode
  }
}

declare class SubNavigationItem extends React.Component<SubNavigationItem.SubNavigationItemProps>{ }
export = SubNavigationItem
