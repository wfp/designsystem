import * as React from 'react';
import { ButtonKind, IIcon } from './utils';

declare namespace Button {
  interface ButtonBaseProps  {
    children?: React.ReactNode;
    small?: boolean;
    large?: boolean;
    kind?: ButtonKind;
    icon?: IIcon;
    iconReverse?: boolean;
    // todo: revise iconDescription
    iconDescription?: string;
  }

  interface ButtonButtonProps extends ButtonBaseProps, React.ButtonHTMLAttributes<Button> {
  }

  interface ButtonLinkProps extends ButtonBaseProps, React.LinkHTMLAttributes<Button> {
    href?: string;
    target?: string;
  }

  type ButtonProps = ButtonButtonProps | ButtonLinkProps
}

declare class Button extends React.Component<Button.ButtonProps> {}
export = Button;
