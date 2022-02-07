import React from 'react';
import markdown from './README.mdx';
import Search from '.';
import Button from '../Button';

export default {
  title: 'Components/UI Elements/Search',
  component: Search,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <Search {...args}/>

Regular.args = {
  name: 'search',
  id:'regular'
};


export const RegularWithButton = (args) => (
<div style={{width:'50%',display:'flex'}} >
  <Search {...args} />
  <Button kind="primary" style={{margin:'0 0.5rem'}}>Apply search</Button>
</div>);

RegularWithButton.args = {
  name: 'search',
  id:"butonsearch"
};


const descriptionsearch = `
You can add a button to initate search action
`;

RegularWithButton.story = {
  parameters: {
    docs: {
      storyDescription: descriptionsearch,
    },
  },
};

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

export const SmallSearch = (args) => <Search {...args} />;

SmallSearch.args = {
  kind: 'small',
  id:'small'
};

SmallSearch.story = {
  parameters: {
    docs: {
      storyDescription: `There are diffent ways to render the \`Search\` input by changing the \`kind\` prop.`,
    },
  },
};
