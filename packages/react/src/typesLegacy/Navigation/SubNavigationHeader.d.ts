import * as React from 'react';

declare namespace SubNavigationHeader  {
  interface SubNavigationHeaderProps extends React.HTMLProps<SubNavigationHeader> {
    children?: React.ReactNode
  }
}

declare class SubNavigationHeader extends React.Component<SubNavigationHeader.SubNavigationHeaderProps>{ }
export = SubNavigationHeader
