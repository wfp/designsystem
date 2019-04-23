/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import PrismCode from 'react-prism';
import Link from '../components/Link';
import { List, ListItem } from '../components/List';
import Page from './Page';
import Blockquote from '../components/Blockquote';
import colors from '../globals/data/colors';

const colorBlend = [
  { name: '20', blend: 'ffffff', percentage: '75' },
  { name: '30', blend: 'ffffff', percentage: '50' },
  { name: '40', blend: 'ffffff', percentage: '25' },
  { name: '60', blend: '000000', percentage: '25' },
  { name: '70', blend: '000000', percentage: '50' },
  { name: '80', blend: '000000', percentage: '75' },
];

var mix = function(color_1, color_2, weight) {
  function d2h(d) {
    return d.toString(16);
  } // convert a decimal value to hex
  function h2d(h) {
    return parseInt(h, 16);
  } // convert a hex value to decimal

  weight = typeof weight !== 'undefined' ? weight : 50; // set the weight to 50%, if that argument is omitted

  var color = '#';

  for (var i = 0; i <= 5; i += 2) {
    // loop through each of the 3 hex pairs—red, green, and blue
    var v1 = h2d(color_1.substr(i, 2)), // extract the current pairs
      v2 = h2d(color_2.substr(i, 2)),
      // combine the current pairs from each source color, according to the specified weight
      val = d2h(Math.floor(v2 + (v1 - v2) * (weight / 100.0)));

    while (val.length < 2) {
      val = '0' + val;
    } // prepend a '0' if val results in a single digit

    color += val; // concatenate val to our new color string
  }

  return color; // PROFIT!
};

storiesOf('Documentation|General', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Colors', () => {
    const regularColors = Object.values(colors).filter(
      ui_colors => ui_colors.type !== 'symbolic' && ui_colors.type !== 'ui'
    );
    const uiColors = Object.values(colors).filter(
      ui_colors => ui_colors.type === 'ui'
    );
    const symbolicColors = Object.values(colors).filter(
      ui_colors => ui_colors.type === 'symbolic'
    );

    const colorList = filterList => {
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
              WebkitColumnBreakInside: 'avoid',
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
                borderRadius: '3px',
                backgroundColor: color.hex,
              }}
            />
            <div
              style={{
                width: '30%',
                flexGrow: '1',
                fontSize: '0.7em',
                lineHeight: '2em',
              }}>
              <h4 style={{ marginBottom: '0.5em' }}>
                {color.name}
                {color.description && (
                  <i
                    style={{
                      fontWeight: 'normal',
                      fontStyle: 'italic',
                      marginLeft: '0.2em',
                    }}>
                    {color.description}
                  </i>
                )}
              </h4>
              <List colon kind="simple">
                <ListItem title="js">{color.name}</ListItem>
                <ListItem title="scss">{color.scss}</ListItem>
                <ListItem title="hex">{color.hex}</ListItem>

                {color.css && (
                  <ListItem title="css">
                    .{color.css}
                    <div
                      className={color.css}
                      style={{
                        display: 'inline-block',
                        marginLeft: '0.5em',
                        borderRadius: '3px',
                        width: '1em',
                        height: '1em',
                      }}
                    />
                  </ListItem>
                )}
              </List>
            </div>

            {color.type !== 'symbolic' && color.type !== 'ui' && (
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
                        borderRadius: '3px',
                        background: mix(
                          blend.blend,
                          color.hex.replace('#', ''),
                          blend.percentage
                        ),
                      }}
                      className={`color__${color.name}-{blend}`}
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
                        <List colon kind="simple-inline" inline>
                          <ListItem title="hex">
                            {mix(
                              blend.blend,
                              color.hex.replace('#', ''),
                              blend.percentage
                            )}
                          </ListItem>
                          <ListItem title="scss">
                            {color.scss}-{blend.name}
                          </ListItem>
                        </List>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </li>
      ));
    };

    return (
      <Page title="Brand & UX colors" subTitle="Color palette">
        <p>
          The visual identity includes a palette of ten complementary colors
          that can be used with the logo in communications products. Please do
          not use any other colors. The palette can, however, be extended by
          using different hues of these colors. The color reference codes are
          shown below.
        </p>

        <p>
          The extended color palette can be found{' '}
          <Link href="http://brand.manuals.wfp.org/en/core-elements/colours/colour-palette/">
            here
          </Link>
          .
        </p>

        <h3>User Interface Colors</h3>
        <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
          {colorList(uiColors)}
        </ul>

        <h3>Brand Colors</h3>
        <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
          {colorList(regularColors)}
        </ul>

        <h3>Symbolic colors</h3>
        <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
          {colorList(symbolicColors)}
        </ul>

        <p />

        <h3>Usage</h3>

        <p>The colors can be used via JavaScript or different frameworks.</p>

        <Blockquote title="Usage in JavaScript" type="code">
          <PrismCode component="pre" className="language-js">
            {`// Import colors as json (needs a json loader)
import colors from '@wfp/ui/source/globals/data/colors.json'

// Import colors as js
import colors from '@wfp/ui/source/globals/data/colors.js'

const barChartColor = colors.navy;
`}
          </PrismCode>
        </Blockquote>
        <p>
          Setting color variables makes it easy to reuse colors, without the
          hassle of updating every single Hex color code once they change.
        </p>

        <Blockquote title="Usage in scss" type="code">
          <PrismCode component="pre" className="language-css">
            {`// Only use variables
@import "../../node_modules/@wfp/ui/source/globals/scss/vars";`}
          </PrismCode>
        </Blockquote>
      </Page>
    );
  });
