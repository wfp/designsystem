import * as React from 'react'
import { IIcon, StatusKind } from './utils';

declare namespace Blockquote {
  interface BlockquoteProps extends Omit<React.HTMLAttributes<Blockquote>, 'title'> {
    children?: React.ReactNode
    code?: boolean
    light?: boolean
    toggable?: boolean
    title?: React.ReactNode
    kind?: StatusKind
    withIcon?: boolean
    icon?: React.ReactNode | IIcon
  }
}

declare class Blockquote extends React.Component<Blockquote.BlockquoteProps> { }
export = Blockquote