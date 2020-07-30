import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import { BannerNavigation, BannerNavigationItem } from './BannerNavigation';
import { BannerNavigationWithContent } from './BannerNavigationWithContent';
import Search from '../Search';
import Link from '../Link';

export default {
  title: 'Components/BannerNavigation',
  component: BannerNavigation,
  subcomponents: { BannerNavigationItem, Link },
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Regular = (args) => <BannerNavigationWithContent {...args} />;

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
        labelText="Search"
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
