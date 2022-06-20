import * as React from 'react';
import { IIcon } from './utils';

declare namespace Switch {
  interface SwitchProps extends React.HTMLProps<Switch> {
    index?: number;
    kind: 'button' | 'anchor';
    name?: string | number;
    onClick?: () => void;
    onKeyDown?: () => void;
    selected?: boolean;
    text: string;
    icon?: IIcon;
    href?: string;
  }
}

declare class Switch extends React.Component<Switch.SwitchProps> {}
export = Switch;
