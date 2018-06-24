/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../components/Link';
import Page from './Page';
import Blockquote from '../components/Blockquote';

storiesOf(' Documentation', module).addWithInfo('Introduction', ``, () => (
  <Page title="WFP UI Guidelines" subTitle="Introduction to the new WFP UI-Kit">
    <p>
      The new WFP UI Guide it is based on the{' '}
      <Link href="http://brand.manuals.wfp.org/">
        The World Food Programme’s (WFP) Branding Guidance
      </Link>{' '}
      was published in 2018 and will be implemented across the organization,
      strengthening WFP’s brand image through consistent representation.
    </p>
    <p>
      Building on this initiative, the World Food Programme’s User Interface
      Style Guide emphasizes WFP’s commitment to establish and build the brand.
    </p>
    <p>
      The purpose of this project is to create a unified toolkit that is used by
      UX-designers and developers alike on their projects to ensure all
      WFP-branded projects are accessible, beautiful, and have a consistent look
      and feel across the board by following WFP’s design and implementation
      guidelines.
    </p>
    <p>
      The guidelines contained in this guide are to be applied to all WFP
      digital products (such as: websites, web applications, internal systems
      and other).
    </p>
    <p>
      By unifiying design elements into reusable components development will
      simplify and accelerate the development of these digital products.
    </p>
    <p>
      The Guide is a living document created to meet the needs of WFP’s
      front-end developers and designers. If there is a Component or Pattern
      that you need, or you have any other feedback, question or comment please
      contact us.
    </p>
    <Blockquote title="Your Feedback">
      <p>
        Your feedback is highly appreciated! You can use the Feedback Button on
        the right, create a{' '}
        <Link href="https://github.com/wfp/ui/issues" target="_blank">
          new Issue
        </Link>{' '}
        on GitHub or send an email to{' '}
        <Link href="mailto:robert.guehne@wfp.org">robert.guehne@wfp.org</Link>.
      </p>
    </Blockquote>
    <a href="https://travis-ci.org/wfp/ui" target="_parent">
      <img alt="" src="https://travis-ci.org/wfp/ui.svg?branch=master" />
    </a>&nbsp;
    <a href="https://npmjs.com/package/@wfp/ui" target="_parent">
      <img alt="" src="https://img.shields.io/npm/dm/@wfp/ui.svg" />
    </a>&nbsp;
    <a href="https://github.com/wfp/ui" target="_parent">
      <img
        alt=""
        src="https://img.shields.io/github/stars/wfp/ui.svg?style=social&amp;label=Star"
      />
    </a>&nbsp;
    <a href="https://give.wfp.org" target="_parent">
      <img
        alt=""
        src="https://img.shields.io/badge/%24-Donate-brightgreen.svg"
      />
    </a>
    <h3>GitHub</h3>
    <iframe
      src="https://ghbtns.com/github-btn.html?user=wfp&repo=ui&type=star&count=true&size=large"
      frameborder="0"
      scrolling="0"
      width="160px"
      height="30px"
    />
    <h3>NPM</h3>
    <p>
      <a href="https://www.npmjs.com/package/@wfp/ui">Package on npm</a>
    </p>
  </Page>
));
