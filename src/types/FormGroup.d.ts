import * as React from 'react';
import * as HookForm from 'react-hook-form'

declare namespace FormGroup  {
  interface FormGroupProps extends React.HTMLProps<FormGroup> {
    legendText?: string
    children?: React.ReactNode
    breakpoint?: 'none' | 'sm' | 'md' | 'lg'
    invalid?: boolean | HookForm.FieldError
    message?: boolean
    messageText?: string
    align?: 'vertical' | 'horizontal'
    inputSpacing?: 'none' | 'md' | 'lg'
  }
}

declare class FormGroup extends React.Component<FormGroup.FormGroupProps>{ }
export = FormGroup
