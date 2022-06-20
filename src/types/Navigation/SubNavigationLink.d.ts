import * as React from 'react';

declare namespace SubNavigationLink {
  interface SubNavigationLinkProps extends React.HTMLProps<SubNavigationLink> {
    children?: React.ReactNode | string;
  }
}

declare class SubNavigationLink extends React.Component<SubNavigationLink.SubNavigationLinkProps> {}
export = SubNavigationLink;
