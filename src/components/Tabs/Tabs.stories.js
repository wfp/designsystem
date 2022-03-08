import React, { useState } from 'react';
import markdown from './README.mdx';
import Tabs from '.';
import Tab from '../Tab';

export default {
  title: 'Components/Content Related/Tabs',
  component: Tabs,
  subcomponents: {
    Tab,
  },
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

const sourcecode = `
import { Tabs, Tab } from "@wfp/ui";

<Tabs>
  <Tab label="Label 1">
    <div className="some-content">
      Content for first tab goes here.
    </div>
  </Tab>
  <Tab label="Label 2">
    <div className="some-content">
      Content for second tab goes here.
    </div>
  </Tab>
  <Tab label="Label 3">
    <div className="some-content">
      Content for third tab goes here.
    </div>
  </Tab>
  <Tab disabled label="Label 4 disabled">
    <div className="some-content">
      Content for fourth tab goes here.
    </div>
  </Tab>
</Tabs>
`;

Regular.story = {
  parameters: {
    docs: {
      source: {
        code: sourcecode,
      },
    },
  },
};

// THis example is the same as the Regular one
// export const WithoutAnimation = (args) => (
//   <Tabs {...args}>
//     <Tab label={`${tab.label} 1`}>
//       <div className="some-content">Content for first tab goes here.</div>
//     </Tab>
//     <Tab label={`${tab.label} 2`}>
//       <div className="some-content">Content for second tab goes here.</div>
//     </Tab>
//     <Tab label={`${tab.label} 3`}>
//       <div className="some-content">Content for third tab goes here.</div>
//     </Tab>
//     <Tab disabled label={`${tab.label} 4 disabled`}>
//       <div className="some-content">Content for fourth tab goes here.</div>
//     </Tab>
//   </Tabs>
// );

// const description = `
// You can create Tabs without animation.
// `;

// WithoutAnimation.story = {
//   parameters: {
//     docs: {
//       storyDescription: description,
//     },
//   },
// };
