import * as React from 'react';

declare namespace SubNavigationFilter  {
  interface SubNavigationFilterProps extends React.HTMLProps<SubNavigationFilter> {
    children?: React.ReactNode
  }
}

declare class SubNavigationFilter extends React.Component<SubNavigationFilter.SubNavigationFilterProps>{ }
export = SubNavigationFilter
