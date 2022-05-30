import * as React from 'react';
import { ScreenSize, Spacing } from './utils';

declare namespace Wrapper {
  interface WrapperProps extends React.HTMLProps<Wrapper> {
    children?: React.ReactNode;
    pageWidth?: ScreenSize;
    mobilePageWidth?: ScreenSize;
    spacing?: Spacing;
    background?: 'lighter' | 'dark';
  }
}

declare class Wrapper extends React.Component<Wrapper.WrapperProps> {}
export = Wrapper;
