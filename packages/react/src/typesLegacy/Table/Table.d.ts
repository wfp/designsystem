import * as React from 'react';

declare namespace Table  {
  interface TableProps extends React.HTMLProps<Table> {
    children?: React.ReactNode
    responsive?: boolean
    withBorder?: boolean
  }
}

declare class Table extends React.Component<Table.TableProps>{ }
export = Table
