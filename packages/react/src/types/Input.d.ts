import * as React from 'react';
import * as HookForm from 'react-hook-form'

declare namespace Input  {
  interface InputProps extends React.InputHTMLAttributes<Input> {
    helperText?: string
    labelText?: string
    defaultValue?: string | number
    formItemClassName?: string
    inputWrapperClassName?: string
    hideLabel?: boolean
    invalid?: boolean | HookForm.FieldError
    invalidText?: string | React.ReactNode
    additional?: React.ReactNode
    children?: React.ReactNode
    light?: boolean
  }
}

declare class Input extends React.Component<Input.InputProps>{ }
export = Input
