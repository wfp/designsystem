/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../Page';
import Button from '../../components/Button';
import Link from '../../components/Link';

import { iconAddGlyph } from '@wfp/icons';

storiesOf(' Documentation|Designers', module).add('Usage for Designers', () => (
  <Page title="Usage for Designers" subTitle="How to use the UI Kit">
    <p>
      Designers can use the{' '}
      <Link href="https://www.sketchapp.com/" target="_blank">
        Sketch
      </Link>{' '}
      and{' '}
      <Link href="https://www.adobe.com/en/products/xd.html" target="_blank">
        Adobe xD
      </Link>{' '}
      library containing the core visual styles, components and patterns. All
      the files can be found on{' '}
      <Link href="https://github.com/wfp/ui-design-kit" target="_blank">
        GitHub
      </Link>
      .
    </p>
    <h3>Template</h3>
    <p>Get guidelines and UI examples</p>
    <h4>Sketch Cloud</h4>
    <p>
      Use the Library on Sketch Cloud to always have access to the latest UI
      Kit.
    </p>
    <p>
      <Button icon={iconAddGlyph} href="sketch://add-library/cloud/b8xxz">
        Add WFP UI Template to Sketch
      </Button>{' '}
      <Button
        kind="secondary"
        href="https://github.com/wfp/ui-design-kit/blob/master/">
        View WFP UI on Sketch Cloud
      </Button>
    </p>
    <h4>Adobe xD</h4>
    <p>
      <Button href="https://github.com/wfp/ui-design-kit/blob/master/WFP%20Template.xd?raw=true">
        WFP UI Template (Adobe xD)
      </Button>{' '}
    </p>
    <h3>Assets</h3>
    <p>All logo variations and Favicons</p>
    <Button href="https://github.com/wfp/ui-design-kit/blob/master/WFP%20Logos.sketch?raw=true">
      Logos (Sketch)
    </Button>{' '}
    <Button href="https://github.com/wfp/ui-design-kit/blob/master/WFP%20Favicons.sketch?raw=true">
      Favicons(Sketch)
    </Button>
  </Page>
));
