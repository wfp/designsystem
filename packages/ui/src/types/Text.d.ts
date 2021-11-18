import * as React from 'react';
import { Spacing, TextKind } from './utils';

declare namespace Text  {
  interface TextProps extends React.HTMLProps<Text> {
    kind?: TextKind,
    children?: React.ReactNode
    spacingTop?: Spacing
    spacingBottom?: Spacing
  }
}

declare class Text extends React.Component<Text.TextProps>{ }
export = Text