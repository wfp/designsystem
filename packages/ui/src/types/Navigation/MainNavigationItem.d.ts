import * as React from 'react';

declare namespace MainNavigationItem  {
  interface MainNavigationItemProps extends React.HTMLProps<MainNavigationItem> {
    children: React.ReactNode
    subNavigation?: React.ReactNode
    activeMenuItem?: number | string
    menuItem?: number | string
    subNavWideAsContent?: boolean
    onChangeSub: () => void
  }
}

declare class MainNavigationItem extends React.Component<MainNavigationItem.MainNavigationItemProps>{ }
export = MainNavigationItem