import * as React from 'react';
import * as HookForm from 'react-hook-form';

declare namespace List {
  interface ListProps extends React.HTMLProps<List> {
    colon?: boolean;
    kind?:
      | 'unstyled'
      | 'simple-inline'
      | 'details'
      | 'unordered'
      | 'ordered'
      | 'tooltip'
      | 'bullets';
    small?: boolean;
    children?: React.ReactNode;
  }
}

declare class List extends React.Component<List.ListProps> {}
export = List;
