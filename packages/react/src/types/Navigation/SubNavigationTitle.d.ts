import * as React from 'react';

declare namespace SubNavigationTitle  {
  interface SubNavigationTitleProps extends React.HTMLProps<SubNavigationTitle> {
    children?: React.ReactNode
  }
}

declare class SubNavigationTitle extends React.Component<SubNavigationTitle.SubNavigationTitleProps>{ }
export = SubNavigationTitle
