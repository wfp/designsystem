import * as React from 'react';

declare namespace SecondaryNavigationTitle {
  interface SecondaryNavigationTitleProps
    extends React.HTMLProps<SecondaryNavigationTitle> {
    children: React.ReactNode;
  }
}

declare class SecondaryNavigationTitle extends React.Component<SecondaryNavigationTitle.SecondaryNavigationTitleProps> {}
export = SecondaryNavigationTitle;
