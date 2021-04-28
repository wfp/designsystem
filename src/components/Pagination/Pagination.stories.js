import React from 'react';
import markdown from './README.mdx';
import Pagination from '.';
import paginationTwig from './Pagination.twig';

export default {
  title: 'Components/UI Elements/Pagination',
  component: Pagination,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
    twig: paginationTwig
  },
};

export const Regular = (args) => <Pagination {...args} />;

const description = `
You can customize the content by using \`BannerNavigation\`.
`;

Regular.args = {
  pageSizes: [5, 20],
  totalItems: 30,
  onChange: () => {},
};

Regular.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};
