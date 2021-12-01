import * as React from 'react';

declare namespace SubNavigationContent  {
  interface SubNavigationContentProps extends React.HTMLProps<SubNavigationContent> {
    children?: React.ReactNode
  }
}

declare class SubNavigationContent extends React.Component<SubNavigationContent.SubNavigationContentProps>{ }
export = SubNavigationContent