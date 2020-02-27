/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../../components/Link';
import Page from '../Page';

storiesOf('Getting started|Getting started', module)
  .addParameters({
    options: { showPanel: false, isToolshown: false, sort: 'zzzzzz' },
  })
  .add('Credits', () => (
    <Page
      title="Credits & License"
      subTitle="Introduction to the new WFP UI Kit">
      <p>
        <Link href="http://brand.manuals.wfp.org/" target="_blank">
          The World Food Programme’s (WFP) Branding Guidance
        </Link>{' '}
        was published first in 2009 and has now been effectively implemented
        across the organization, strengthening WFP’s brand image through
        consistent representation. This new version shall reflect the changes in
        technology.
      </p>
      <h3>The UI Kit is be heavily based on</h3>

      <ul className="wfp--story__list">
        <li>
          <Link
            href="https://github.com/carbon-design-system/carbon-components"
            target="_blank">
            Carbon Design System by IBM
          </Link>
        </li>
        <li>
          <Link
            href="https://designsystem.digital.gov/page-templates"
            target="_blank">
            U.S. Webdesign System
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/frederik-jacques/sketch-favicon-exporter-template"
            target="_blank">
            Sketch Favicon Exporter Template
          </Link>
        </li>
      </ul>
      <h3>Contributing</h3>
      <p>
        Development is made on a GitHub repository. Feel free create an Issue or
        submit a pull request.{' '}
        <Link href="https://github.com/wfp/ui" target="_blank">
          Project on GitHub
        </Link>
      </p>
      <br />
      <iframe
        title="GitHub Like"
        src="https://ghbtns.com/github-btn.html?user=wfp&repo=ui&type=star&count=true&size=large"
        frameBorder="0"
        scrolling="0"
        width="160px"
        height="30px"
      />
      <h3>NPM</h3>
      <p>
        npm is a package manager for the JavaScript programming language. All
        versions of the UI Kit will be published there.{' '}
        <Link href="https://www.npmjs.com/package/@wfp/ui" target="_blank">
          View package on npm
        </Link>
      </p>
    </Page>
  ));
