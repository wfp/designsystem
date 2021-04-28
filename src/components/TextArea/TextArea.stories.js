import React from 'react';
import markdown from './README.mdx';
import TextArea from '.';
import textAreaTwig from './TextArea.twig'

export default {
  title: 'Components/Forms/TextArea',
  component: TextArea,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
    twig: textAreaTwig
  },
};

export const Regular = (args) => <TextArea {...args} />;

const description = `
You can customize the content by using \`BannerNavigation\`.
`;

Regular.args = {
  name: 'inputname',
  helperText: 'Optional helperText',
  labelText: 'The labelText',
  cols:50
};

export const withError = (args) => <TextArea {...args} />;

withError.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};

withError.args = {
  name: 'inputname',
  helperText: 'Optional helperText',
  labelText: 'The labelText',
  invalid: { message: 'Please enter your first name' },
};
