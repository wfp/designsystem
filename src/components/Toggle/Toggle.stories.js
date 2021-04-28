import React from 'react';
import markdown from './README.mdx';
import Toggle from '.';
import toggleTwig from './Toggle.twig';

export default {
  title: 'Components/UI Elements/Toggle',
  component: Toggle,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
    twig: toggleTwig
  },
};

export const Regular = (args) => <Toggle {...args} />;

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
