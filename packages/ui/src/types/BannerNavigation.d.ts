import * as React from 'react'
import { ScreenSize } from './utils'

declare namespace BannerNavigation {
  interface BannerNavigationProps extends React.HTMLProps<BannerNavigation> {
    children: React.ReactNode
    pageWidth?: ScreenSize
  }
}

declare class BannerNavigation extends React.Component<BannerNavigation.BannerNavigationProps> { }
export = BannerNavigation