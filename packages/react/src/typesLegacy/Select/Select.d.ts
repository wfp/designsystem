import * as React from 'react';
import * as HookForm from 'react-hook-form';

declare namespace Select {
  interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
    children?: React.ReactNode;
    inline?: boolean;
    labelText?: React.ReactNode;
    defaultValue?: any;
    iconDescription?: string;
    hideLabel?: boolean;
    invalid?: boolean | HookForm.FieldError;
    invalidText?: string;
    helperText?: React.ReactNode;
    light?: boolean;
    small?: boolean;
  }
}

declare class Select extends React.Component<Select.SelectProps> {}
export = Select;
