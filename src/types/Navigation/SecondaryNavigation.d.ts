import * as React from 'react';
import { ScreenSize } from '../utils';

declare namespace SecondaryNavigation {
  interface SecondaryNavigationProps
    extends React.HTMLProps<SecondaryNavigation> {
    children: React.ReactNode;
    pageWidth?: ScreenSize;
    wrapperClassName?: string;
    id?: string;
    additional?: React.ReactNode;
  }
}

declare class SecondaryNavigation extends React.Component<SecondaryNavigation.SecondaryNavigationProps> {}
export = SecondaryNavigation;
