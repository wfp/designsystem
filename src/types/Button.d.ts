import * as React from 'react';
import { ButtonKind, IIcon } from './utils';

declare namespace Button {
  interface ButtonProps extends React.ButtonHTMLAttributes<Button> {
    children?: React.ReactNode;
    disabled?: boolean;
    small?: boolean;
    large?: boolean;
    kind?: ButtonKind;
    href?: string;
    tabIndex?: number;
    type?: 'button' | 'reset' | 'submit';
    role?: string;
    icon?: IIcon;
    iconReverse?: boolean;
    // todo: revise iconDescription
    iconDescription?: string;
  }
}

declare class Button extends React.Component<Button.ButtonProps> {}
export = Button;
