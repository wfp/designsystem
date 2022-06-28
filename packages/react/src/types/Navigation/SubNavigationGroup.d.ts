import * as React from 'react';

declare namespace SubNavigationGroup  {
  interface SubNavigationGroupProps extends Omit<React.HTMLProps<SubNavigationGroup>, 'title'> {
    columns?: number
    title?: React.ReactNode
    image?: string
  }
}

declare class SubNavigationGroup extends React.Component<SubNavigationGroup.SubNavigationGroupProps>{ }
export = SubNavigationGroup
