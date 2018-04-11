/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../components/Link';
import Page from './Page';
import Blockquote from '../components/Blockquote';

storiesOf('> Documentation', module)
.addWithInfo(
  'Introduction',
  ``,
  () => (
    <Page title="WFP UI Guidelines" subTitle="Introduction to the new WFP UI-Kit">
      <p><Link href="http://brand.manuals.wfp.org/">The World Food Programme’s (WFP) Branding Guidance</Link> was published in 2009 and has now been effectively implemented across the organization, strengthening WFP’s brand image through consistent representation.</p>
      <p>Building on this initiative, the World Food Programme’s User Interface Style Guide emphasizes WFP’s commitment to establish and build the brand.</p>
      <p>The purpose of this project is to create a unified toolkit that is used by designers and developers alike on their projects to ensure all WFP-branded projects are accessible, beautiful, and have a consistent look and feel across the board by following WFP’s design and implementation guidelines.</p>
      <p>The guidelines contained in this guide are to be applied to all WFP digital products (such as: websites, web applications, internal systems and other).</p>
      <p>The Guide is a living document created to meet the needs of WFP’s front-end developers and designers. If there is a Component or Pattern that you need, or you have any other feedback, question or comment please contact wfp.publications@wfp.org.</p>

      <Blockquote title="Notice">
        <p>Your feedback is highly appreciated! You can use the Feedback Button on the right, Create a <Link href="https://github.com/wfp/ui/issues">new Issue</Link> on Github or send an email to <Link href="mailto:robert.guehne@wfp.org">robert.guehne@wfp.org</Link>.</p>
      </Blockquote>
    </Page>
  )
);
