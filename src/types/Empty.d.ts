import * as React from 'react';
import { IIcon } from './utils';

declare namespace Empty {
  interface EmptyProps extends Omit<React.HTMLProps<Empty>, 'title'> {
    title: React.ReactNode
    children?: React.ReactNode
    kind?: 'undefined' | 'large'
    icon?: IIcon | React.ReactNode
    button?: React.ReactNode
  }
}

declare class Empty extends React.Component<Empty.EmptyProps> {}
export = Empty;
