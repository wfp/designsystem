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

import Tippy from '@tippy.js/react';
import { tooltipStyle } from '../../components/Tooltip';

import ColorList from './ColourList';
import './_colours.scss';
import { color } from '@storybook/theming';

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

storiesOf('Getting started|Core', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Colours', () => {
    const tooltips = {
      'ui-01': (
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
      ),
      'ui-02': (
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
      ),
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
        <p>WFP online visual identity includes the following colours:</p>
        <List kind="bullet">
          <ListItem>
            <a href="#primary">primary</a>
          </ListItem>
          <ListItem>
            <a href="#accent">extended primary</a>
          </ListItem>
          <ListItem>
            <a href="#neutrals">neutrals</a>
          </ListItem>
          <ListItem>
            <a href="#semantic">semantic </a>
          </ListItem>
          <ListItem>
            <a href="#semantic">symbolic </a>
          </ListItem>
        </List>
        <p>
          Use the <i>70–25–5</i> rule to create sense of balance and allow the
          eye to move comfortably from one focal point to the next.
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
        <p>
          Primary colours are the base colours of the UI, the ones that are used
          most frequently in the interface.{' '}
          <b>Brand-01 is the base branding colour</b>, corresponding to WFP’s
          corporate blue: it is used for brand elements and non-interactive
          elements. <b>Interactive colours</b> are used for primary links and
          action items that can be clicked or touched, to emphasize important
          actions and highlight information in your application. Yellow is the
          recommended <b>secondary accent colour</b>: to use a different colour
          please contact{' '}
          <Link href="mailto:wfp.publications@wfp.org">
            wfp.publications@wfp.org
          </Link>
        </p>
        <ul className="color--list">
          <ColorList filter="brand" />
        </ul>
        <Color color="interactive-01" />
        <h4 className="wfp--story__sub-heading">
          Primary interactive colour, Primary buttons
        </h4>
        <p>
          Used for primary links and action elements that can be clicked or
          touched. It is slightly lighter then the main WFP blue to communicate
          that an element is interactive and to be distinguishable from black.
        </p>
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
        <section className="dodonot">
          <div>
            <h4>Use interactive - 01 for:</h4>
            <List kind="bullet">
              <ListItem kind="checkmark">links</ListItem>
              <ListItem kind="checkmark">buttons</ListItem>
              <ListItem kind="checkmark">other interactive elements</ListItem>
            </List>
          </div>
          <div>
            <h4>Do not use for:</h4>
            <List kind="bullet">
              <ListItem kind="cross">
                {' '}
                MainNavigation, since it is a branding element and not
                interactive as a whole
              </ListItem>
              <ListItem kind="cross">other branding elements</ListItem>
              <ListItem kind="cross">non - interactive elements</ListItem>
            </List>
          </div>
        </section>
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
          (non-interactive) branding elements. It is the colour displayed most
          frequently across your App’s screens and components. The primary
          colour can also be used to accent elements.
        </p>
        <section className="dodonot">
          <div>
            <h4>Use brand-01 for:</h4>
            <List kind="bullet">
              <ListItem kind="checkmark">MainNavigation</ListItem>
              <ListItem kind="checkmark">brand elements</ListItem>
              <ListItem kind="checkmark">dark background</ListItem>
            </List>
          </div>
          <div>
            <h4>Do not use for:</h4>
            <List kind="bullet">
              <ListItem kind="cross">
                interactive elements like buttons or links
              </ListItem>
              <ListItem kind="cross">Primary and secondary colours</ListItem>
            </List>
          </div>
        </section>
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
        <section className="dodonot">
          <div>
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
          </div>
          <div>
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
          </div>
        </section>
        <h3>User Interface Colours</h3>
        <p>
          Neutral colours are used for non-interactive elements, backgrounds and
          borders.
        </p>
        <ul className="color--list">
          <ColorList filter="ui" />
        </ul>

        <h3>ui-01 and ui-02</h3>
        <h4 className="wfp--story__sub-heading">
          Container and page background colors
        </h4>
        <p>
          <b>ui-01</b> is used as the page background if there are not Modules
          on top of it, while ui-02 is used as the page background when there
          are Modules on top.
        </p>
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
        <ul className="color--list">
          <ColorList filter="communications" />
        </ul>
        <h3>Success, error, warning and information</h3>
        <ul className="color--list">
          <ColorList filter="support" />
        </ul>

        <Color color="support-01" />
        <p>
          Use the error colour to indicate an error or to focus the attention on
          something which is crucial to see. Paired with a cross icon, red
          delivers the message that something went wrong.{' '}
        </p>
        <Color color="support-02" />
        <p>
          Use green to indicate success state. Paired with a checkmark icon the
          user knows that the operation was successfully completed.
        </p>
        <Color color="support-03" />
        <p>
          Use yellow to indicate a transient warning which is less important
          than an error message. Yellow tipically consists of items which
          require the user’s immediate attention, or indicate a waiting period.
          Although this overlaps with the use of red, yellow is more transient
          in nature.
        </p>

        {/*
        <h3>Sustainable development goals colours</h3>
        <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
          {colorList(sdgColors)}
        </ul>
        */}
        <h3>Symbolic colours</h3>
        <ul className="color--list">
          <ColorList filter="symbolic" />
        </ul>
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
