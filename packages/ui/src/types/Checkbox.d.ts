import * as React from 'react';

declare namespace Checkbox  {
  interface CheckboxProps extends React.InputHTMLAttributes<Checkbox> {
    indeterminate?: boolean
    labelText?: string
    hideLabel?: boolean
    wrapperClassName?: string
  }
}

declare class Checkbox extends React.Component<Checkbox.CheckboxProps>{ }
export = Checkbox