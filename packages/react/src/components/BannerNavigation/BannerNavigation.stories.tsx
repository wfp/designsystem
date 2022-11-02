import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import { BannerNavigation, BannerNavigationItem } from './BannerNavigation';
import { BannerNavigationWithContent } from './BannerNavigationWithContent';
import Search from '../Search';
import Link from '../Link';

export default {
  title: 'Components/Navigations/BannerNavigation',
  component: BannerNavigation,
  subcomponents: { BannerNavigationItem, Link },
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
    previewWidth: 'full',
  },
};

export const RegularNavigation = (args) => (
  <BannerNavigationWithContent {...args} />
);

const sourcecode = `
  import { BannerNavigationWithContent } from "@un/react";
        
  <BannerNavigationWithContent pageWidth="lg" />
  `;

RegularNavigation.story = {
  parameters: {
    docs: {
      source: {
        code: sourcecode,
      },
    },
  },
};

export const CustomContent = (args) => (
  <BannerNavigation {...args}>
    <BannerNavigationItem>
      <Link href="#" target="_blank">
        Link 1
      </Link>
    </BannerNavigationItem>
    <BannerNavigationItem>
      <Link href="#" target="_blank">
        Link 2
      </Link>
    </BannerNavigationItem>
    <BannerNavigationItem>
      <Link href="#" target="_blank">
        Link 3
      </Link>
    </BannerNavigationItem>
    <BannerNavigationItem>
      <Link href="#" target="_blank">
        Link 4
      </Link>
    </BannerNavigationItem>
    <BannerNavigationItem>
      <Search
        id="search-2"
        kind="banner"
        placeHolderText="Search"
        onChange={action('onChange')}
      />
    </BannerNavigationItem>
  </BannerNavigation>
);

const description = `
You can customize the content by using \`BannerNavigation\`.
`;

CustomContent.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};
