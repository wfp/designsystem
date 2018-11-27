/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';
import Blockquote from '../components/Blockquote';

import { withReadme } from 'storybook-readme';
import readme from './HTML-README.md';

storiesOf(' Documentation.Getting Started', module)
  .addDecorator(withReadme([readme]))
  .add('HTML Usage', () => (
    <Page title="HTML Usage" subTitle="Use the UI Kit without react.js">
      <p>
        Most parts of the UI Kit can be used with html / css only. See the
        readme below for more information. You can use the css from the CDN or
        the scss from npm.
      </p>

      <Blockquote title="CDN" type="code">
        {`<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.wfp.org/guides/ui/v1.1.16/assets/css/styles.min.css"
/>`}
      </Blockquote>
      <h3>SCSS</h3>
      <p>
        When using scss you can also import the SCSS sources from the
        node_module. This allows you to use only parts of the SCSS, reuse common
        variables and functions from WFP UI or to override settings.
      </p>
      <Blockquote title="Use Source scss" type="code">
        {`// Override settings
$input-border-radius: 5px;
$button-border-radius: 60px;
$button-font-size: 25px;
$button-padding: 10px 25px;
$color__main: #0076FF;

// Import all stylesheets
@import "../../node_modules/@wfp/ui/source/globals/scss/styles";

// Only import the Button stylesheet
@import "../../node_modules/@wfp/ui/source/components/Button/button";

// Only use variables
@import "../../node_modules/@wfp/ui/source/globals/scss/vars";`}
      </Blockquote>
    </Page>
  ));
