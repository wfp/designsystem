import * as React from 'react';
import * as HookForm from 'react-hook-form';

declare namespace TextArea {
  interface TextAreaProps
    extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    defaultValue?: string | number;
    labelText?: string;
    rows?: number;
    children?: React.ReactNode;
    value?: string | number;
    invalid?: boolean | HookForm.FieldError;
    invalidText?: string;
    helperText?: React.ReactNode;
    hideLabel?: boolean;
    fullWidth?: boolean;
    viewOnly?: boolean;
  }
}

declare class TextArea extends React.Component<TextArea.TextAreaProps> {}
export = TextArea;
