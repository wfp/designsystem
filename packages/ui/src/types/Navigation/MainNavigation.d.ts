import * as React from 'react';
import { ScreenSize } from '../utils';

declare namespace MainNavigation  {
  interface MainNavigationProps extends React.HTMLProps<MainNavigation> {
    children: React.ReactNode
    logo?: string | React.ReactNode
    pageWidth?: ScreenSize
    mobilePageWidth?: ScreenSize
    wrapperClassName?: string
  }
}

declare class MainNavigation extends React.Component<MainNavigation.MainNavigationProps>{ }
export = MainNavigation