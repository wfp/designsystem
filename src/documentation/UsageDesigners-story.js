/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';
import Blockquote from '../components/Blockquote';
import Button from '../components/Button';
import Link from '../components/Link';

storiesOf(' Documentation.Getting Started', module).addWithInfo(
  'Usage for Designers',
  ``,
  () => (
    <Page title="Usage for Designers" subTitle="How to use the UI Kit">
      <h2>For Designers</h2>
      <p>
        Designers can use a{' '}
        <Link href="https://www.sketchapp.com/" target="_blank">
          Sketch
        </Link>{' '}
        libary containing the core visual styles, components and patterns.{' '}
        <Link href="https://www.adobe.com/en/products/xd.html" target="_blank">
          Adobe xD
        </Link>{' '}
        users can also use the Sketch file (<Link
          href="https://helpx.adobe.com/xd/kb/open-sketch-files-in-xd.html"
          target="_blank">
          Instruction
        </Link>).
      </p>
      <Button href="https://github.com/wfp/ui/blob/next/sketch/WFP%20Template.sketch?raw=true">
        WFP UI Template
      </Button>{' '}
      <Button href="https://github.com/wfp/ui/blob/next/sketch/WFP%20Logos.sketch?raw=true">
        Logos
      </Button>{' '}
      <Button href="https://github.com/wfp/ui/blob/next/sketch/WFP%20Favicons.sketch?raw=true">
        Favicons
      </Button>
    </Page>
  )
);
