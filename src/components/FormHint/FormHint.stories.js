import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import FormHint from '.';

export default {
  title: 'Components/FormHint',
  component: FormHint,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => (
  <label className="wfp--label" htmlFor="input">
    The Label <FormHint {...args} />
  </label>
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
