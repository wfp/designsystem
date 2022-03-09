import * as React from 'react';

declare namespace ContentSwitcher  {
  interface ContentSwitcherProps extends React.HTMLProps<ContentSwitcher> {
    selectedIndex?: number
    children?: React.ReactNode
  }
}

declare class ContentSwitcher extends React.Component<ContentSwitcher.ContentSwitcherProps>{ }
export = ContentSwitcher
