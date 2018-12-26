/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';
import Blockquote from '../components/Blockquote';

storiesOf(' Documentation.Getting Started', module).add(
  'Usage for Developers',
  () => (
    <Page title="Usage for Developers" subTitle="How to use the UI Kit">
      <p>
        The UI Kit provides developers with React.js components, scss, css, html
        and assets.
      </p>
      <h2>Usage for Developers</h2>
      <h3>React</h3>
      <p>Installing the UI Kit</p>
      <Blockquote title="Install via npm" type="code">
        {`npm install @wfp/ui --save`}
      </Blockquote>
      <Blockquote title="Install via yarn" type="code">
        {`yarn add @wfp/ui`}
      </Blockquote>

      <p>
        Many components need Icons. Please also install @wfp/icons (peer
        dependency)
      </p>
      <Blockquote title="Install via npm" type="code">
        {`npm install @wfp/icons --save`}
      </Blockquote>
      <Blockquote title="Install via yarn" type="code">
        {`yarn add @wfp/icons`}
      </Blockquote>

      <p>Importing the React components</p>
      <Blockquote title="Importing the MainNavigation" type="code">
        {`import { MainNavigation, MainNavigationItem } from '@wfp/ui';`}
      </Blockquote>
      <h3>CSS</h3>
      <p>You can import the whole css file into your application.</p>
      <Blockquote title="CDN" type="code">
        {`<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.wfp.org/guides/ui/v1.1.16/assets/css/styles.min.css"
/>

/* Uncompressed styles.css */
https://cdn.wfp.org/guides/ui/v1.1.16/assets/css/styles.css
`}
      </Blockquote>
      <h3>SCSS</h3>
      <p>
        When using scss you can also import the SCSS sources from the
        node_module. This allows you to use only parts of the SCSS, reuse common
        variables and functions from WFP-UI or to override settings.
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
  )
);
