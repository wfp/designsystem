import * as React from 'react';

declare namespace Tab  {
  interface TabProps extends Omit<React.HTMLProps<Tab>, 'label'> {
    handleTabClick?: () => void
    handleTabAnchorFocus?: () => void
    handleTabKeyDown?: () => void
    href: string
    index?: number
    label?: React.ReactNode
    role: string
    selected: boolean
    tabIndex: number
    renderAnchor?: () => React.ReactNode
    renderContent?:  () => React.ReactNode
    renderListElement?: (() => React.ReactNode) | React.ReactNode
  }
}

declare class Tab extends React.Component<Tab.TabProps>{ }
export = Tab