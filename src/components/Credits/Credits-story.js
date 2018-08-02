/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import withTests from '../../internal/withTests';
import SingleComponent from '../../documentation/SingleComponent';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

import Credits from '../Credits';

storiesOf('Credits', module)
  .addDecorator(withTests('Credits'))
  .addDecorator(story => <SingleComponent>{story()}</SingleComponent>)
  .addDecorator(withReadme([readme]))
  .addWithInfo(
    'Default',
    `
      Links are typically used as a means of navigation either within the application, to a place outside, or to a resource.
      For anything else, especially things that change data, you should be using a button.
    `,
    () => (
      <Credits info="© Rein Skullerud">
        <img
          alt="Default illustration"
          style={{width: '700px', height: 'auto'}}
          src="http://www1.wfp.org/sites/default/files/images/hp_yem_20170717_wfp-reem_nada_0109_3.jpg"
        />
      </Credits>
    )
  );
