import React from 'react';
import { storiesOf } from '@storybook/react';
import SingleComponent from '../../documentation/SingleComponent';

import Credits from '../Credits';
import markdown from './README.mdx';

export default {
  title: 'Components/Credits',
  component: Credits,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
  /*argTypes: {
      children: { control: 'text' },
    },*/
};

export const RegularCredits = (args) => (
  <Credits {...args}>
    <img
      alt="Default illustration"
      style={{ width: '700px', height: 'auto' }}
      src="http://www1.wfp.org/sites/default/files/images/hp_yem_20170717_wfp-reem_nada_0109_3.jpg"
    />
  </Credits>
);
RegularCredits.args = {
  children: 'Credits',
  info: 'Photo: WFP/ Rein Skullerud',
};
