import * as React from 'react';

declare namespace TabContent  {
  interface TabContentProps extends React.HTMLProps<TabContent> {
    children?: React.ReactNode
    selected?: boolean
  }
}

declare class TabContent extends React.Component<TabContent.TabContentProps>{ }
export = TabContent
