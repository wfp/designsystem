import * as React from 'react';

declare namespace FormLabel  {
  interface FormLabelProps extends React.HTMLProps<FormLabel> {
    children?: React.ReactNode
  }
}

declare class FormLabel extends React.Component<FormLabel.FormLabelProps>{ }
export = FormLabel