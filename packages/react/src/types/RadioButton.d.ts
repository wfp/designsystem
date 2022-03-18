import * as React from 'react';

declare namespace RadioButton  {
  interface RadioButtonProps extends React.InputHTMLAttributes<RadioButton> {
    checked?: boolean
    defaultChecked?: boolean
    labelText: string
    children?: React.ReactNode
    value: string | number
  }
}

declare class RadioButton extends React.Component<RadioButton.RadioButtonProps>{ }
export = RadioButton
