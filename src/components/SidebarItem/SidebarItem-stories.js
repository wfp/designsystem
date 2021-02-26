import React from 'react';

import markdown from './README.mdx';

import SidebarItem from './SidebarItem';
import Tag from '../Tag';

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
  <div style={{width: '40%'}}>
    <SidebarItem {...args}/>
  </div>
    
)

Regular.args = {
    title:"Title",
    content:"content",
    subContent:'sub content',
    additionalInfo: 'Additional',
    hintInfo:(<Tag>hint</Tag>),
}

export const NoImage = (args) => (
  <div style={{width: '40%'}}>
    <SidebarItem {...args}/>
  </div>
)



NoImage.args = {
  title:"831 students",
  content:"409 boys, 422 girls",
  subContent:'meal served',
  additionalInfo: 'Friday, 21.02.20',
  noImage: true,
  hintInfo:(<Tag type="warning">not synced</Tag>)

}