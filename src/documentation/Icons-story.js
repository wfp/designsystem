/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../components/Link';
import Page from './Page';
import Blockquote from '../components/Blockquote';

storiesOf(' Documentation', module)
.addWithInfo(
  'Icons',
  ``,
  () => (
    <Page title="Icons" subTitle="Introduction to the new WFP UI-Kit">
      <p><Link href="http://brand.manuals.wfp.org/">The World Food Programme’s (WFP) Branding Guidance</Link> was published in 2009 and has now been effectively implemented across the organization, strengthening WFP’s brand image through consistent representation.</p>
      The UI-Kit will be heavily based on:
      <ul>
        <li>
          <Link href="https://github.com/carbon-design-system/carbon-components">Carbon Components</Link>
        </li>
        <li>
          <Link href="https://designsystem.digital.gov/page-templates">U.S. Webdesign System</Link>
        </li>
        <li>
          <Link href="https://github.com/frederik-jacques/sketch-favicon-exporter-template">Sketch Favicon Exporter Template</Link>
        </li>
      </ul>
      <Blockquote title="Notice">
        <p>Your feedback is highly appreciated! You can use the Feedback Button on the right, Create a <Link href="https://github.com/wfp/ui/issues">new Issue</Link> on Github or send an email to <Link href="mailto:robert.guehne@wfp.org">robert.guehne@wfp.org</Link>.</p>
      </Blockquote>
    </Page>
  )
);
