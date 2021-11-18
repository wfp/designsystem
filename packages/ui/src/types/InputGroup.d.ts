import * as React from 'react';

declare namespace InputGroup  {
  interface InputGroupProps extends React.HTMLProps<InputGroup> {
    children?: React.ReactNode
    controlled?: boolean
    defaultSelected?: string | number
    valueSelected?: boolean
    hideLabel?: boolean
    helperText?: React.ReactNode
    labelText?: React.ReactNode
  }
}

declare class InputGroup extends React.Component<InputGroup.InputGroupProps>{ }
export = InputGroup