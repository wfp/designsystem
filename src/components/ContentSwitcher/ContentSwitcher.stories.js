import React from 'react';
import ContentSwitcher from './ContentSwitcher';
import markdown from './README.mdx';
import Switch from '../Switch';

export default {
  title: 'Components/ContentSwitcher',
  component: ContentSwitcher,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => {
  const handleChange = () => {
    console.log('handle any onChange here');
  };
  return (
    <ContentSwitcher {...args} onChange={handleChange}>
      <Switch name="one" text="First section" />
      <Switch name="two" text="Second section" />
      <Switch name="three" text="Third section" />
    </ContentSwitcher>
  );
};

Regular.args = {
  children: 'ContentSwitcher',
};
