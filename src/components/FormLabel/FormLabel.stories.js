import React from 'react';
import markdown from './README.mdx';
import FormLabel from '.';
import formLabelTwig from './FormLabel.twig'

export default {
  title: 'Components/Forms/FormLabel',
  component: FormLabel,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
    twig: formLabelTwig
  },
};

export const Regular = (args) => <FormLabel {...args}>Label text</FormLabel>;

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
