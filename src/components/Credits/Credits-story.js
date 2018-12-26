/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import SingleComponent from '../../documentation/SingleComponent';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

import Credits from '../Credits';

storiesOf('Credits', module)
  .addDecorator(story => <SingleComponent>{story()}</SingleComponent>)
  .addDecorator(withReadme([readme]))
  .add(
    'Default',
    withInfo({
      text: `
      Links are typically used as a means of navigation either within the application, to a place outside, or to a resource.
      For anything else, especially things that change data, you should be using a button.
    `,
    })(() => (
      <Credits info="Photo: WFP/ Rein Skullerud">
        <img
          alt="Default illustration"
          style={{ width: '700px', height: 'auto' }}
          src="http://www1.wfp.org/sites/default/files/images/hp_yem_20170717_wfp-reem_nada_0109_3.jpg"
        />
      </Credits>
    ))
  );
