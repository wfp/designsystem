import * as React from 'react';

declare namespace ReadMore  {
  interface ReadMoreProps extends React.HTMLProps<ReadMore> {
    children: React.ReactNode
    collapsed?: boolean
    collapseLink?: React.ReactNode
    collapseText?: React.ReactNode
    disableAutoscroll?: boolean
    expandLink?: React.ReactNode
    expandText?: React.ReactNode
    fade?: boolean
    maxHeight?: number
  }
}

declare class ReadMore extends React.Component<ReadMore.ReadMoreProps>{ }
export = ReadMore
