/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';

storiesOf(' Documentation', module).addWithInfo(
  'Naming Convention & Linting',
  ``,
  () => (
    <Page
      title="Naming Convention"
      subTitle="Introduction to the new WFP UI Kit">
      <p>
        The UI Kit uses the{' '}
        <a href="http://getbem.com/naming">BEM naming convention</a> with a{' '}
        <i className="wfp--inline-highlight">wfp--</i> prefix as standard naming
        for all css elements.
      </p>
      <p>
        Please use ES-Lint which is a linting utility for JavaScript and JSX
        while building your React Application to analyze source code to flag
        programming errors, bugs, stylistic errors and suspicious constructs.
      </p>

      <ul>
        <li>ECMAScript 6 features</li>
        <li>no require statements</li>
        <li>spaces (2 space indentation)</li>
        <li>Semicolon is required at the end of a line</li>
      </ul>
    </Page>
  )
);
