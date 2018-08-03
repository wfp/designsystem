/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import withTests from '../../internal/withTests';
import SingleComponent from '../../documentation/SingleComponent';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

import ReadMore from '../ReadMore';


storiesOf('ReadMore', module)
  .addDecorator(withTests('ReadMore'))
  .addDecorator(story => <SingleComponent>{story()}</SingleComponent>)
  .addDecorator(withReadme([readme]))
  .addWithInfo(
    'Default',
    `
      Links are typically used as a means of navigation either within the application, to a place outside, or to a resource.
      For anything else, especially things that change data, you should be using a button.
    `,
    () => (
      <ReadMore href="#" html="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.">
      </ReadMore>
    )
  );
