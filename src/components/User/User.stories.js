import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import User from '.';

export default {
  title: 'Components/User',
  component: User,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Regular = (args) => <User {...args}>Text</User>;

export const AvatarOnly = (args) => (
  <User name="Max Mustermann" showName={false} />
);

const description = `
You can show the avatar only without showing the username.
`;

AvatarOnly.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};
