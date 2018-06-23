/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../components/Link';
import Page from './Page';
import Blockquote from '../components/Blockquote';

storiesOf(' Documentation', module)
.addWithInfo(
  'Naming Convention',
  ``,
  () => (
    <Page title="Naming Convention" subTitle="Introduction to the new WFP UI-Kit">
      <p>The UI Kit uses the BEM naming convention with a 'wfp--' prefix as standard naming for all css elements.</p>
      <p>Please use ES-Lint with the settings [] while building your React Application.</p>
      <Blockquote title="Notice">
        Notice
        Resources should not be spent trying to modify legacy systems, 3rd party applications or other user interfaces which cannot easily be customised.
      </Blockquote>

      Please use ES-Lint to be in line with the coding conventions.

      The configuration for react
      <ul>
        <li>ECMAScript 6 features</li>
        <li>no require statements</li>
        <li>spaces (2 space indentation)</li>
        <li>Semicolon is required at the end of a line</li>
        </ul>
    </Page>
  )
);
