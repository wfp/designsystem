import * as React from 'react';
import { ScreenSize } from './utils';

declare namespace BannerNavigationWithContent {
  interface BannerNavigationWithContentProps
    extends React.HTMLProps<BannerNavigationWithContent> {
    children: React.ReactNode;
    pageWidth?: ScreenSize;
    search?: boolean;
    searchOnChange?: () => {};
  }
}

declare class BannerNavigationWithContent extends React.Component<BannerNavigationWithContent.BannerNavigationWithContentProps> {}
export = BannerNavigationWithContent;
