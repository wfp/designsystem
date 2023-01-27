import * as React from 'react';

declare namespace ListItem  {
  interface ListItemProps extends React.HTMLProps<ListItem> {
    kind?: 'checkmark' | 'cross'
    small?: boolean
  }
}

declare class ListItem extends React.Component<ListItem.ListItemProps>{ }
export = ListItem
