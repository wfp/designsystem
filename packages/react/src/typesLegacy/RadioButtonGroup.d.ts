import * as React from 'react';

declare namespace RadioButtonGroup  {
  interface RadioButtonGroupProps extends React.HTMLProps<RadioButtonGroup> {
    children?: React.ReactNode
    controlled?: boolean
    defaultSelected?: string | number
    name: string
    valueSelected?: string | number
    vertical?: boolean
    hideLabel?: boolean
    helperText?: React.ReactNode
    labelText?: React.ReactNode
  }
}

declare class RadioButtonGroup extends React.Component<RadioButtonGroup.RadioButtonGroupProps>{ }
export = RadioButtonGroup
