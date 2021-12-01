import * as React from 'react';

declare namespace Link  {
  interface LinkProps extends React.HTMLProps<Link> {
    href?: string
    inline?: boolean
  }
}

declare class Link extends React.Component<Link.LinkProps>{ }
export = Link