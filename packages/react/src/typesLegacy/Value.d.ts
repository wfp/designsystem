import * as React from 'react';

declare namespace Value  {
  interface ValueProps extends Omit<React.HTMLProps<Value>, 'value' | 'title'> {
    value?: React.ReactNode
    secondaryValue?: React.ReactNode
    title?: React.ReactNode
  }
}

declare class Value extends React.Component<Value.ValueProps>{ }
export = Value
