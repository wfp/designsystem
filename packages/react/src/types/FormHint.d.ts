import * as React from 'react';
import { IIcon } from './utils';

declare namespace FormHint  {
  interface FormHintProps extends React.HTMLProps<FormHint> {
    children?: React.ReactNode
    icon?: IIcon
  }
}

declare class FormHint extends React.Component<FormHint.FormHintProps>{ }
export = FormHint
