import * as React from 'react';

declare namespace BreadcrumbHome  {
  interface BreadcrumbHomeProps extends React.HTMLProps<BreadcrumbHome> {
    hometext?: React.ReactNode
  }
}

declare class BreadcrumbHome extends React.Component<BreadcrumbHome.BreadcrumbHomeProps>{ }
export = BreadcrumbHome