/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../components/Link';
import Page from './Page';
import Blockquote from '../components/Blockquote';
import colors from '../globals/data/colors';

storiesOf(' Documentation', module).addWithInfo('Colors', ``, () => {
  const colorList = colors.ui_colors.map(color => (
    <li
      style={{
        display: 'flex',
        webkitColumnBreakInside: 'avoid',
        pageBreakInside: 'avoid',
        breakInside: 'avoid-column',
        width: '49%',
        marginBottom: '1%',
        marginRight: '1%',
        padding: '1em',
        border: '1px solid #E5E5E5',
      }}>
      <div
        style={{
          width: '3.5em',
          height: '100%',
          marginTop: '0em',
          marginRight: '1em',
          backgroundColor: color.hex,
        }}
      />
      <div style={{ fontSize: '0.8em' }}>
        <h4>{color.name}</h4>
        <div>js: {color.name}</div>
        <div>scss: {color.scss}</div>
        <div>hex: {color.hex}</div>
      </div>
    </li>
  ));
  return (
    <Page title="Colors" subTitle="All colours">
      <p>
        The visual identity includes a palette of ten complementary colours that
        can be used with the logo in communications products. Please do not use
        any other colours. The palette can, however, be extended by using
        different hues of these colours. The color reference codes are shown
        below.
      </p>

      <p>
        You can find the extended Colour Palette{' '}
        <Link href="http://brand.manuals.wfp.org/en/core-elements/colours/colour-palette/">
          here
        </Link>.
      </p>

      <ul style={{ display: 'flex', flexWrap: 'wrap', margin: 0 }}>{colorList}</ul>

      <h3>Usage</h3>

      <Blockquote title="NPM" type="code">
        {`// Import colors as json (needs a json loader)
import colors from '@wfp/ui/source/globals/data/colors.json'

// Import colors as js
import colors from '@wfp/ui/source/globals/data/colors.js'`}
      </Blockquote>

      <Blockquote title="SCSS" type="code">
        {`// Only use variables
@import "../../node_modules/@wfp/ui/source/globals/scss/vars";`}
      </Blockquote>
    </Page>
  );
});
