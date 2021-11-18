import * as React from 'react';

declare namespace SelectItem  {
  interface SelectItemProps extends React.HTMLProps<SelectItem> {
    value?: any
    text: string
  }
}

declare class SelectItem extends React.Component<SelectItem.SelectItemProps>{ }
export = SelectItem