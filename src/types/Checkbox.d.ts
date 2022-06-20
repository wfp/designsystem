import * as React from 'react';

declare namespace Checkbox {
  interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    checked?: boolean;
    defaultChecked?: boolean;
    indeterminate?: boolean;
    id?: string;
    disabled?: boolean;
    labelText?: React.ReactNode;
    hideLabel?: boolean;
    onChange?: () => {};
    title?: string;
    wrapperClassName?: string;
  }
}

declare class Checkbox extends React.Component<Checkbox.CheckboxProps> {}
export = Checkbox;
