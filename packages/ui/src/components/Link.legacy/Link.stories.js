import React from 'react';
import markdown from './README.mdx';
import Link from '.';

export default {
  title: 'Components/UI Elements/Link (legacy)',
  component: Link,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <Link {...args} />;

Regular.args = { children: 'WFP Homepage', href: 'https://www.wfp.org' };

export const States = (args) => (
  <>
    <Link {...args} className="wfp--link--hover">
      :hover
    </Link>
    <Link {...args} className="wfp--link--focus">
      :focus
    </Link>
    <Link {...args} className="wfp--link--active">
      :active
    </Link>
    <Link {...args} className="wfp--link--visted">
      :visited
    </Link>
  </>
);

States.args = { ...Regular.args, style: { marginRight: '1rem' } };

States.story = {
  parameters: {
    docs: {
      storyDescription: `The link component only uses minimalistic styles to indicate different states. By default, the link component does not use a visited style. Visited links indicate that a user has already opened the link so they can be a helpful indicator during task completion. Visited styles should be used sparingly because they often clutter the the page and add further visual noise as users are trying to navigate a product. They can be used if it is important that a user knows they have already clicked on a link.
      `,
    },
  },
};
