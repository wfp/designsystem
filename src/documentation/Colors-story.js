/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../components/Link';
import Page from './Page';
import colors from '../globals/data/colors'


storiesOf(' Documentation', module)
.addWithInfo(
  'Colors',
  ``,
  () => {
    const colorList = colors.ui_colors.map((color) =>
     <li style={{marginBottom: '1em'}}>
      <div style={{float: 'left', width: '2.5em', height: '2.5em', marginRight: '1em', backgroundColor: color.hex}}></div>
      <h4>{color.name}</h4>
      <p>scss: {color.scss}</p>
    </li>
	);
  return (
    <Page title="Colors" subTitle="All colours">
      <p>The visual identity includes a palette of ten complementary colours that can be used with the logo in communications products. Please do not use any other colours. The palette can, however, be extended by using different hues of these colours. The color reference codes are shown below.</p>
      
      <p>You can find the extended Colour Palette <Link href="http://brand.manuals.wfp.org/en/core-elements/colours/colour-palette/">here</Link>.</p>

      <ul style={{ columnCount: '3'}}>
        {colorList}
      </ul>
    </Page>
  )
}
);
