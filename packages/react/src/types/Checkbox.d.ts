import * as React from 'react';

declare namespace Checkbox {
  interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    indeterminate?: boolean;
    labelText?: React.ReactNode;
    hideLabel?: boolean;
    wrapperClassName?: string;
  }
}

declare class Checkbox extends React.Component<Checkbox.CheckboxProps> {}
export = Checkbox;
