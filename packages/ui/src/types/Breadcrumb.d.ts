import * as React from 'react';

declare namespace Breadcrumb   {
  interface BreadcrumbProps extends React.HTMLProps<Breadcrumb > {
    children?: React.ReactNode
  }
}

declare class Breadcrumb extends React.Component<Breadcrumb.BreadcrumbProps>{ }
export = Breadcrumb