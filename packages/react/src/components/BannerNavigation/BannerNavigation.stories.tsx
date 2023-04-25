import React from 'react';
import { action } from '@storybook/addon-actions';
import { BannerNavigation, BannerNavigationItem } from './BannerNavigation';
import { BannerNavigationWithContent } from './BannerNavigationWithContent';
import Search from '../Search';
import Link from '../Link';

export default {
  title: 'Components/Navigation/BannerNavigation',
  component: BannerNavigation,
  subcomponents: { BannerNavigationItem, Link },
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    previewWidth: 'full',
  },
};

export const RegularNavigation = (args) => (
  <BannerNavigationWithContent {...args} />
);

const sourcecode = `
  import { BannerNavigationWithContent } from "@wfp/react";
        
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
        placeholder="Search"
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
