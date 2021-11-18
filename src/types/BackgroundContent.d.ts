import * as React from 'react'

declare namespace BackgroundContent {
  interface BackgroundContentProps extends React.HTMLProps<BackgroundContent> {
    children: React.ReactNode
  }
}

declare class BackgroundContent extends React.Component<BackgroundContent.BackgroundContentProps> { }
export = BackgroundContent
