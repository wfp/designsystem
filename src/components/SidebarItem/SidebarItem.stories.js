import React from 'react';

import markdown from './README.mdx';

import SidebarItem from './SidebarItem';

export default {
  title: 'Components/UI Elements/SidebarItem',
  component: SidebarItem,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => (
    <SidebarItem {...args}/>
)

Regular.args = {
    title:"Cassandra",
    content:"cassie@wfp.org",
    subContent:'0987654323456',
    additionalInfo: 'Developer'
}