import * as React from 'react';

declare namespace Checkbox {
  interface CheckboxProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    indeterminate?: boolean;
    labelText?: React.ReactNode;
    hideLabel?: boolean;
    wrapperClassName?: string;
    onChange?(
      event: React.ChangeEvent<HTMLInputElement>,
      checked: boolean,
      customId: string
    ): void;
  }
}

declare class Checkbox extends React.Component<Checkbox.CheckboxProps> {}
export = Checkbox;
