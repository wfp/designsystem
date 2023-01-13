import * as React from 'react';
import { ScreenSize } from './utils';

declare namespace Footer  {
  interface FooterProps extends React.HTMLProps<Footer> {
    external?: boolean
    children?: React.ReactNode
    metaContent?: React.ReactNode
    logo?: string | React.ReactNode
    logoExtended?: string | React.ReactNode
    pageWidth?: ScreenSize
    sdgLogo?: React.ReactNode
    subTitle?: string | React.ReactNode
  }
}

declare class Footer extends React.Component<Footer.FooterProps>{ }
export = Footer
