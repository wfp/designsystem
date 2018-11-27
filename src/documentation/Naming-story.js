/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';
import { withReadme } from 'storybook-readme';
import readme from './NAMING-README.md';

storiesOf(' Documentation', module)
  .addDecorator(withReadme([readme]))
  .add('Naming Convention & Linting', () => (
    <Page
      title="Naming Convention"
      subTitle="Introduction to the new WFP UI Kit">
      <p>
        The UI Kit uses the{' '}
        <a href="http://getbem.com/naming">BEM naming convention</a>.
      </p>

      <h3>Namespacing</h3>
      <p>
        The Components are built to be included individually and not clobber
        global styles - all class attributes are prefixed by the{' '}
        <i className="wfp--inline-highlight">wfp--</i> moniker.
      </p>

      <h3>Linting</h3>
      <p>
        Please use ES-Lint which is a linting utility for JavaScript and JSX
        while building your React Application to analyze source code to flag
        programming errors, bugs, stylistic errors and suspicious constructs.
      </p>

      <ul className="wfp--story--list">
        <li>ECMAScript 6 features</li>
        <li>no require statements</li>
        <li>spaces (2 space indentation)</li>
        <li>Semicolon is required at the end of a line</li>
      </ul>
    </Page>
  ));
