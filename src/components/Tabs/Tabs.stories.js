import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import Tabs from '.';
import Tab from '../Tab';
import Tag from '../Tag';
import TabsSkeleton from '../Tabs/Tabs.Skeleton';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

const tab = {
  label: 'Label',
};

export const Regular = (args) => (
  <Tabs {...args}>
    <Tab label={`${tab.label} 1`}>
      <div className="some-content">Content for first tab goes here.</div>
    </Tab>
    <Tab label={`${tab.label} 2`}>
      <div className="some-content">Content for second tab goes here.</div>
    </Tab>
    <Tab label={`${tab.label} 3`}>
      <div className="some-content">Content for third tab goes here.</div>
    </Tab>
    <Tab disabled label={`${tab.label} 4 disabled`}>
      <div className="some-content">Content for fourth tab goes here.</div>
    </Tab>
  </Tabs>
);

const description = `
You can customize the content by using \`BannerNavigation\`.
`;

Regular.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};
