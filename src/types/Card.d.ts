import * as React from 'react';
import { CardKind } from './utils';

declare namespace Card {
  interface CardProps extends Omit<React.HTMLProps<Card>, 'title'> {
    image?: string;
    isExternal?: boolean;
    isLink?: boolean;
    subTitle?: React.ReactNode;
    title?: React.ReactNode;
    metadata?: string;
    children?: React.ReactNode;
    kind: CardKind;
    url?: string;
    cardWidth?: string;
    cardHeight?: string;
  }
}

declare class Card extends React.Component<Card.CardProps> {}
export = Card;
