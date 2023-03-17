import * as React from 'react';

declare namespace ListItem  {
  interface ListItemProps extends Omit<React.HTMLProps<ListItem>, 'title'> {
    kind?: 'checkmark' | 'cross'
    small?: boolean
    title?: React.ReactNode
  }
}

declare class ListItem extends React.Component<ListItem.ListItemProps>{ }
export = ListItem
