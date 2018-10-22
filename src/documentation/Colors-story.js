/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../components/Link';
import Page from './Page';
import Blockquote from '../components/Blockquote';
import colors from '../globals/data/colors';

const colorBlend = ['20', '30', '40', '60', '80'];

storiesOf(' Documentation', module).addWithInfo('Colors', ``, () => {

  
  const regularColors = colors.ui_colors.filter(ui_colors => ui_colors.type !== "symbolic");
  const symbolicColors = colors.ui_colors.filter(ui_colors => ui_colors.type === "symbolic");

  const colorList = (filterList) => {
    return filterList.map(color => (
      <li
        style={{
          width: '100%',
          marginBottom: '1%',
          padding: '1em',
          border: '1px solid #E5E5E5',
          listStyleType: 'none',
        }}>
        <div
          style={{
            display: 'flex',
            webkitColumnBreakInside: 'avoid',
            pageBreakInside: 'avoid',
            breakInside: 'avoid-column',
            flexWrap: 'wrap',
            height: '100%',
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
          <div style={{ width: '30%', flexGrow: '1', fontSize: '0.8em' }}>
            <h4>{color.name}</h4>
            <div>js: {color.name}</div>
            <div>scss: {color.scss}</div>
            <div>hex: {color.hex}</div>
          </div>

          <div
            style={{
              width: '50%',
            }}>
            {colorBlend.map(blend => (
              <div
                style={{
                  display: 'flex',
                  fontSize: '0.7em',
                  width: '100%',
                }}>
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    marginTop: '1px',
                    marginRight: '1em',
                    marginBottom: '1px',
                  }}
                  className={`color__${color.name}-${blend}`}
                />
                <div
                  style={{
                    marginTop: '2px',
                    lineHeight: '20px',
                  }}>
                  <span
                    style={{
                      display: 'inline-block',
                      marginRight: '1em',
                    }}>
                    hex: #0A6EB4
                  </span>
                  scss: {color.scss}-${blend}
                </div>
              </div>
            ))}
          </div>
        </div>
      </li>
    ))
  };

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
        The extended Colour Palette can be found here{' '}
        <Link href="http://brand.manuals.wfp.org/en/core-elements/colours/colour-palette/">
          here
        </Link>.
      </p>

      <ul style={{ display: 'flex', flexWrap: 'wrap', margin: 0 }}>
        {colorList(regularColors)}
      </ul>

      <h3>Symbolic colors</h3>
      <ul style={{ display: 'flex', flexWrap: 'wrap', margin: 0 }}>
        {colorList(symbolicColors)}
      </ul>

      <p>

        
      </p>

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
