import * as React from 'react';
import * as ReactHook from 'react-hook-form'

declare namespace SingleDatePickerInput  {
  interface SingleDatePickerInputProps extends React.InputHTMLAttributes<SingleDatePickerInput> {
    datePicker: ()=> void
    labelText: string
    placeholder?: string
    hideLabel?: boolean
    showClearDate?: boolean
    invalid?: boolean | ReactHook.FieldError
    invalidText?: string
    showDefaultInputIcon?: boolean
    inputIconPosition?: string
    helperText?: string
    startDatePlaceholderText?: string
    endDatePlaceholderText?: string
  }
}

declare class SingleDatePickerInput extends React.Component<SingleDatePickerInput.SingleDatePickerInputProps>{ }
export = SingleDatePickerInput