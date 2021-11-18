import * as React from 'react';
import { ButtonKind, IIcon } from './utils';

declare namespace Button  {
  interface ButtonProps extends React.ButtonHTMLAttributes<Button> {
    children?: React.ReactNode
    small?: boolean
    large?: boolean
    kind?: ButtonKind
    href?: string
    icon?: IIcon
    iconReverse?: boolean
    // todo: revise iconDescription
    iconDescription?: () => void
  }
}

declare class Button extends React.Component<Button.ButtonProps>{ }
export = Button