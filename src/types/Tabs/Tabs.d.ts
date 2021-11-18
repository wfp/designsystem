import * as React from 'react';

declare namespace Tabs  {
  interface TabsProps extends Omit<React.HTMLProps<Tabs>, 'selected'> {
    ariaLabel?: string
    customTabContent?: boolean
    disableAnimation?: boolean
    inline?: boolean
    onSelectionChange?: () => void
    children?: React.ReactNode
    triggerHref?: string
    selected?: number
  }
}

declare class Tabs extends React.Component<Tabs.TabsProps>{ }
export = Tabs
