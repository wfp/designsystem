import React from 'react';

import Tag from '.';

export default {
  title: 'Components/UI Elements/Tag',
  component: Tag,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
  },
};

export const Regular = (args) => <Tag {...args}></Tag>;

Regular.args = {
  children: 'Text',
  type: 'info',
  asdsadasd: 'adsasdads',
};
