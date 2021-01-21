import React from 'react';

import markdown from './README.mdx';
import Sidebar from './Sidebar';

export default {
    title: 'Templates/SidebarContent',
    parameters: {
      status: 'released',
      mdx: markdown,
    },
  };

export const Regular = (args) => (
  <Sidebar />
)