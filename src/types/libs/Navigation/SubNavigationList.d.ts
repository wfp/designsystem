import * as React from 'react';

declare namespace SubNavigationList  {
  interface SubNavigationListProps extends React.HTMLProps<SubNavigationList> {
    children?: React.ReactNode
  }
}

declare class SubNavigationList extends React.Component<SubNavigationList.SubNavigationListProps>{ }
export = SubNavigationList
