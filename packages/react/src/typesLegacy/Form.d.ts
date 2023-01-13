import * as React from 'react';

declare namespace Form  {
  interface FormProps extends React.FormHTMLAttributes<Form> {
    longForm?: boolean
    children?: React.ReactNode
  }
}

declare class Form extends React.Component<Form.FormProps>{ }
export = Form
