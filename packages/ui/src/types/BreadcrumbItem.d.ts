import * as React from 'react';

declare namespace BreadcrumbItem  {
  interface BreadcrumbItemProps extends React.HTMLProps<BreadcrumbItem> {
    href?: string
    children?: React.ReactNode
    disableLink?: boolean
  }
}

declare class BreadcrumbItem extends React.Component<BreadcrumbItem.BreadcrumbItemProps>{ }
export = BreadcrumbItem