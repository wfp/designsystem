import React from 'react';
import markdown from './README.mdx';
import Tabs from '.';
import Tab from '../Tab';

export default {
  title: 'Components/Content Related/Tabs',
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

export const WithoutAnimation = (args) => (
  <Tabs {...args} disableAnimation>
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

WithoutAnimation.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};
