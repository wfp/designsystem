import * as React from 'react';

declare namespace SubNavigation  {
  interface SubNavigationProps extends React.HTMLProps<SubNavigation> {
    children: React.ReactNode
  }
}

declare class SubNavigation extends React.Component<SubNavigation.SubNavigationProps>{ }
export = SubNavigation