import * as React from 'react';
import { Placement } from './utils';

declare namespace Tooltip  {
  interface TooltipProps extends Omit<React.HTMLProps<Tooltip>, 'content'> {
    children?: React.ReactNode
    content?: React.ReactNode
    dark?: boolean
    noPadding?: boolean
    placement?: Placement
    trigger?: 'hover' | 'click'
    modifiers?: []
    usePortal?: boolean
    createRefWrapper?: boolean
  }
}

declare class Tooltip extends React.Component<Tooltip.TooltipProps>{ }
export = Tooltip