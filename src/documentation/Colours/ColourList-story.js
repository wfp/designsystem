/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import PrismCode from 'react-prism';
import Link from '../../components/Link';
import { List, ListItem } from '../../components/List';
import Page from '../Page';
import Blockquote from '../../components/Blockquote';
import { Module, ModuleBody } from '../../components/Module';
import colors from '../../globals/data/colors';
import { hex, score } from 'wcag-contrast';

import './_colours.scss';

const Color = ({ color }) => (
  <h3>
    <div
      style={{
        display: 'inline-block',
        marginRight: '0.5em',
        borderRadius: '3px',
        width: '0.9em',
        height: '0.9em',
      }}
      className={`color__${color}`}
    />
    {color}
  </h3>
);

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

    color += val; // concatenate val to our new colour string
  }

  return color; // PROFIT!
};

storiesOf('Design|Core', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Colours', () => {
    const regularColors = Object.values(colors).filter(
      ui_colors =>
        ui_colors.type !== 'symbolic' &&
        ui_colors.type !== 'support' &&
        ui_colors.type !== 'ui' &&
        ui_colors.type !== 'sdg'
    );

    const brandColors = Object.values(colors).filter(
      ui_colors => ui_colors.type === 'brand'
    );

    const uiColors = Object.values(colors).filter(
      ui_colors => ui_colors.type === 'ui'
    );
    const symbolicColors = Object.values(colors).filter(
      ui_colors => ui_colors.type === 'symbolic'
    );

    const supportColors = Object.values(colors).filter(
      ui_colors => ui_colors.type === 'support'
    );

    const sdgColors = Object.values(colors).filter(
      ui_colors => ui_colors.type === 'sdg'
    );

    const colorList = filterList => {
      return filterList.map(color => (
        <li>
          <Module fullHeight noMargin light className="colour__item">
            <div
              className="colour__field"
              style={{ backgroundColor: color.hex }}>
              <div className="colour__contrast">
                <span>A</span>
                <div>>{score(hex(color.hex, '#000000'))}</div>
              </div>
              <div className="colour__contrast colour__contrast--light">
                <span>A</span>
                <div>{score(hex(color.hex, '#FFFFFF'))}</div>
              </div>
            </div>
            <div
              style={{
                flexGrow: '1',
                fontSize: '0.7em',
                lineHeight: '2em',
              }}>
              <ModuleBody>
                <h4>{color.name}</h4>
                <List colon kind="simple">
                  {/*<ListItem>{color.name}</ListItem>
                  <ListItem>{color.scss}</ListItem>*/}
                  <ListItem>{color.hex}</ListItem>

                  {color.css && (
                    <ListItem>
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
                {color.shortDescription && (
                  <h4 className="wfp--story__sub-heading">
                    {color.shortDescription}
                  </h4>
                )}
                {color.description && <p>{color.description}</p>}
              </ModuleBody>
            </div>
            {/*
            {color.type !== 'symbolic' &&
              color.type !== 'ui' &&
              color.type !== 'sdg' &&
              color.type !== 'support' && (
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
              )}*/}
          </Module>
        </li>
      ));
    };

    return (
      <Page title="Brand & UX colours" subTitle="Colour palette">
        <p>
          The visual identity includes a palette of ten complementary colours
          that can be used with the logo in communications products. Please do
          not use any other colours. The palette can, however, be extended by
          using different hues of these colours. The colour reference codes are
          shown below.
        </p>
        <p>
          The extended colour palette can be found{' '}
          <Link href="http://brand.manuals.wfp.org/en/core-elements/colours/colour-palette/">
            here
          </Link>
          .
        </p>
        <p>A colour scheme usually consists of these colour categories:</p>
        <List kind="bullet">
          <ListItem>Interactive, primary and secondary colours</ListItem>
          <ListItem>Accent colours</ListItem> <ListItem>Neutrals</ListItem>
          <ListItem>Semantic colours</ListItem>
        </List>
        <p>
          Use the <i>70–25–5 (60–30–10)</i> rule to create sense of balance and
          allow the eye to move comfortably from one focal point to the next.
        </p>
        <img
          alt="Brand colour"
          style={{
            width: '100%',
            height: 'auto',
            marginTop: '1em',
            marginLeft: '0em',
          }}
          src={`${process.env.STORYBOOK_INTERNAL_ASSETS}internal/colors.png`}
        />

        <h3>Primary Colours</h3>
        <ul className="color--list">{colorList(brandColors)}</ul>
        <Color color="interactive-01" />
        <h4 className="wfp--story__sub-heading">
          Primary interactive colour, Primary buttons
        </h4>
        <p>
          Used for primary links and action elements that can be clicked or
          touched. It is slightly lighter then the main WFP blue to communicate
          that an element is interactive and to be distinguishable from black.
        </p>
        <h4>Use interactive - 01 for:</h4>
        <List kind="bullet">
          <ListItem kind="checkmark">links</ListItem>
          <ListItem kind="checkmark">buttons</ListItem>
          <ListItem kind="checkmark">other interactive elements</ListItem>
        </List>
        <img
          alt="Brand colour"
          style={{
            width: '100%',
            height: 'auto',
            marginTop: '1em',
            marginLeft: '0em',
          }}
          src={`${process.env.STORYBOOK_INTERNAL_ASSETS}internal/brand-color.png`}
        />
        <h5>Do not use for:</h5>
        <List kind="bullet">
          <ListItem kind="cross">
            {' '}
            MainNavigation, since it is a branding element and not interactive
            as a whole
          </ListItem>
          <ListItem kind="cross">other branding elements</ListItem>
          <ListItem kind="cross">non - interactive elements</ListItem>
        </List>
        <h2>Brand colour</h2>
        <p>
          These are the base colours of the UI. Primary colours are the ones
          that are used most frequently in the interface.The WFP brand colour is
          selected as the primary colour.
        </p>
        <Color color="brand-01" />
        <h4 className="wfp--story__sub-heading">WFP's corporate colour</h4>
        <p>
          The brand-01 colour is WFP’s corporate blue which is used in all
          (non-interactive) branding elements.
        </p>
        <p>
          It is the colour displayed most frequently across your App’s screens
          and components. The primary colour can also be used to accent
          elements.
        </p>
        <h4>Use brand-01 for:</h4>
        <List kind="bullet">
          <ListItem kind="checkmark">MainNavigation</ListItem>
          <ListItem kind="checkmark">brand elements</ListItem>
          <ListItem kind="checkmark">dark background</ListItem>
        </List>
        <h4>Do not use for:</h4>
        <List kind="bullet">
          <ListItem kind="cross">
            interactive elements like buttons or links
          </ListItem>
          <ListItem kind="cross">Primary and secondary colours</ListItem>
        </List>
        <Color color="brand-02" />
        <h4 className="wfp--story__sub-heading">
          Interactive emphasis colour (e.g. hovers)
        </h4>
        <p>
          This colour is used for hover, actived states and to create contrast
          between UI elements such as distinguishing the BannerNavigation bar
          from the MainNavigation. You can use this dark variant of our primary
          colour on elements.
        </p>
        <p>
          To be discussed for mobile: You can also use variants to distinguish
          elements within a component, such different variants used on a
          floating action button container as well as the icon within it.
        </p>
        <Color color="brand-03" />
        <h4 className="wfp--story__sub-heading">Accent secondary colour</h4>
        <img
          alt="Brand colour"
          style={{
            width: '100%',
            height: 'auto',
            marginTop: '1em',
            marginLeft: '0em',
          }}
          src={`${process.env.STORYBOOK_INTERNAL_ASSETS}internal/secondary-color.png`}
        />
        <p>
          Use to emphasize important actions and highlighted information in your
          application.It can help encourage visitors to make more interactions
          with the elements of your design.
        </p>
        <p>
          Be playful and crazy here but don't forget that the accent colour
          should be maximum 10 % of colour of the whole product. Yellow is the
          recommended accent colour. To use a different accent colour then
          yellow please contact{' '}
          <Link href="mailto:wfp.publications@wfp.org">
            wfp.publications@wfp.org
          </Link>
          .
        </p>
        <p>
          Yellow is the recommmended accent colour. To use a different accent
          colour then yellow please contact{' '}
          <Link href="mailto:wfp.publications@wfp.org">
            wfp.publications@wfp.org
          </Link>
        </p>
        <h4>Secondary colours are best for:</h4>
        <List kind="bullet">
          <ListItem kind="checkmark">
            floating action buttons (mobile devices)
          </ListItem>
          <ListItem kind="checkmark">progress bars</ListItem>
          <ListItem kind="checkmark">important highlights</ListItem>
          <ListItem kind="checkmark">
            Call - to - action buttons and links
          </ListItem>
          <ListItem kind="checkmark">
            yellow makes a good button colour in placed in isolation
          </ListItem>
          <ListItem kind="checkmark">
            external websites where colour creates interest and meaning and
            improves the conversation rate
          </ListItem>
        </List>
        <h4>Do not use it:</h4>
        <List kind="bullet">
          <ListItem kind="cross">for regular actions</ListItem>
          <ListItem kind="cross">
            multiple actions / times on the same webpage
          </ListItem>
          <ListItem kind="cross">
            limit the use of yellow to the elements you want to emphasize
            related to the audience priority
          </ListItem>
          <ListItem kind="cross">
            limit usage for texts and navigation elements
          </ListItem>
        </List>
        <h3>User Interface Colours</h3>
        <p>
          Neutral colours are used in the interface for non-interactive
          elements, backgrounds and borders.
        </p>
        <ul className="color--list">{colorList(uiColors)}</ul>
        <img
          alt="Brand colour"
          style={{
            width: '100%',
            height: 'auto',
            marginTop: '3em',
            marginLeft: '0em',
          }}
          src={`${process.env.STORYBOOK_INTERNAL_ASSETS}internal/background-contrast.png`}
        />
        <h3>Brand Colours – Tints for use in graphs and charts</h3>
        <ul className="color--list">{colorList(regularColors)}</ul>
        <h3>Success, error, warning and information</h3>
        <ul className="color--list">{colorList(supportColors)}</ul>
        {/*
        <h3>Sustainable development goals colours</h3>
        <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
          {colorList(sdgColors)}
        </ul>
        */}
        <h3>Symbolic colours</h3>
        <ul className="color--list">{colorList(symbolicColors)}</ul>
        <p />
        <h3>Usage</h3>
        <p>The colours can be used via JavaScript or different frameworks.</p>
        <Blockquote title="Usage in JavaScript" code>
          <PrismCode component="pre" className="language-js">
            {`// Import colours as json (needs a json loader)
import colors from '@wfp/ui/source/globals/data/colors.json'

// Import colours as js
import colors from '@wfp/ui/source/globals/data/colors.js'

const barChartColor = colors.navy;
`}
          </PrismCode>
        </Blockquote>
        <p>
          Setting colour variables makes it easy to reuse colours, without the
          hassle of updating every single Hex colour code once they change.
        </p>
        <Blockquote title="Usage in scss" code>
          <PrismCode component="pre" className="language-css">
            {`// Only use variables
@import "~@wfp/ui/source/globals/scss/vars";

body {
  background: $ui-02;
}
`}
          </PrismCode>
        </Blockquote>
      </Page>
    );
  });
