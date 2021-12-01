import * as React from 'react';
import { ScreenSize } from './utils';

declare namespace InfoBar  {
  interface InfoBarProps extends React.HTMLProps<InfoBar> {
    children: React.ReactNode
    pageWidth?: ScreenSize
    wrapperClassName?: string
  }
}

declare class InfoBar extends React.Component<InfoBar.InfoBarProps>{ }
export = InfoBar