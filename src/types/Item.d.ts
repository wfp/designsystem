import * as React from 'react';
import { IIcon } from './utils';

declare namespace Item {
  interface ItemProps extends Omit<React.HTMLProps<Item>, 'title'> {
    title?: React.ReactNode;
    children?: React.ReactNode;
    icon?: React.ReactNode | IIcon;
    button?: React.ReactNode;
    kind?: 'undefined' | 'large' | 'horizontal';
    wrapper?: 'undefined' | 'sidebar' | 'repeater';
    showAdditionalIcon?: boolean;
    subContent?: string;
    additional?: string;
    hint?: React.ReactNode;
  }
}

declare class Item extends React.Component<Item.ItemProps> {}
export = Item;
