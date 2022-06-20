import * as React from 'react';
import { IIcon } from './utils';

declare namespace Icon {
  interface IconProps extends React.HTMLProps<Icon> {
    description: string;
    fill?: string;
    fillRule?: string;
    height?: string | number;
    icon?: IIcon | React.ReactNode;
    name?: string;
    role?: string;
    viewBox?: string;
    width?: string | number;
    iconRef?: () => void;
  }
}

declare class Icon extends React.Component<Icon.IconProps> {}
export = Icon;
