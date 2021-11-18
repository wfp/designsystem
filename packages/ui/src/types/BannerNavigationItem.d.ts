import * as React from 'react'

declare namespace BannerNavigationItem {
  interface BannerNavigationItemProps extends React.HTMLProps<BannerNavigationItem> {
    children: React.ReactNode
  }
}

declare class BannerNavigationItem extends React.Component<BannerNavigationItem.BannerNavigationItemProps> { }
export = BannerNavigationItem