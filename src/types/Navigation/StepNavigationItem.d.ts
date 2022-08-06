import * as React from 'react';

declare namespace StepNavigationItem  {
  interface StepNavigationItemProps extends React.HTMLProps<StepNavigationItem> {
    helperText?: React.ReactNode
    index?: number
    label?: string
    role: string
    selectedPage: number
    page: number
    renderAnchor?: () => {}
  }
}

declare class StepNavigationItem extends React.Component<StepNavigationItem.StepNavigationItemProps>{ }
export = StepNavigationItem
