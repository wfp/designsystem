import * as React from 'react';
import * as HookForm from 'react-hook-form'
import { InputModes } from './utils';

declare namespace TextInput  {
  interface TextInputProps extends React.InputHTMLAttributes<TextInput> {
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
    type?: InputModes
    value?: string | number
  }
}

declare class TextInput extends React.Component<TextInput.TextInputProps>{ }
export = TextInput
