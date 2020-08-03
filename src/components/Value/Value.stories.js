import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import Value from '.';
import Unit from '../Unit';

export default {
  title: 'Components/Value',
  component: Value,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Regular = (args) => (
  <Value
    {...args}
    value={
      <Unit type="Usd" input="thousand" output="million" showZero hideEmpty>
        1234567
      </Unit>
    }
    secondaryValue={
      <Unit type="Usd" input="thousand" output="million" showZero hideEmpty>
        1234567
      </Unit>
    }
  />
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
