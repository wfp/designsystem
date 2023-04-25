import React, { useRef } from 'react';
import Link from '../../components/Link';
import { List, ListItem } from '../../components/List';
import Page from '../Page';

import { linkTo } from '@storybook/addon-links';
import ColorList, { ColourLists } from './ColourList';
//import './colours.scss';
// import styles from './colours.module.scss';

export const Colour = ({ color }) => (
  <h3>
    <div
      style={{
        display: 'inline-block',
        marginRight: '0.5em',
        borderRadius: '3px',
        width: '0.9em',
        height: '0.9em',
        background: `var(--${color})`,
      }}
    />
    {color}
  </h3>
);
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const ColourDocs = () => {
  const linkRefs = {
    primary: useRef(null),
    extendedPrimary: useRef(null),
    neutrals: useRef(null),
    dataviz: useRef(null),
    semantic: useRef(null),
    symbolic: useRef(null),
  };

  const executeScroll = (e) => {
    e.preventDefault();
    scrollToRef(linkRefs[e.target.getAttribute('href')]);
  };

  return (
    <Page title="Colours" subTitle="Core">
      {/*<p>
        The visual identity includes a palette of ten complementary colours that
        can be used with the logo in communications products. Please do not use
        any other colours. The palette can, however, be extended by using
        different hues of these colours. The colour reference codes are shown
        below.
      </p> */}

      <ColourLists />

      <p>WFP online visual identity includes the following colours:</p>
      <List kind="bullet">
        <ListItem>
          <Link href="primary" onClick={executeScroll}>
            primary{' '}
          </Link>
        </ListItem>
        <ListItem>
          <Link href="extendedPrimary" onClick={executeScroll}>
            extended primary{' '}
          </Link>
        </ListItem>
        <ListItem>
          <Link href="neutrals" onClick={executeScroll}>
            neutrals{' '}
          </Link>
        </ListItem>
        <ListItem>
          <Link href="dataviz" onClick={executeScroll}>
            dataviz{' '}
          </Link>
        </ListItem>
        <ListItem>
          <Link href="semantic" onClick={executeScroll}>
            semantic{' '}
          </Link>
        </ListItem>
        <ListItem>
          <Link href="symbolic" onClick={executeScroll}>
            symbolic{' '}
          </Link>
        </ListItem>
      </List>

      <p>
        The WFP official branding palette can be found{' '}
        <Link href="http://brand.manuals.wfp.org/en/core-elements/colours/colour-palette/">
          here
        </Link>
        .
      </p>
      <p>
        Use the <i>70–25–5</i> rule to create sense of balance and allow the eye
        to move comfortably from one focal point to the next.
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
      <h3 ref={linkRefs.primary}>Primary Colours</h3>
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
        <Link href="mailto:hq.creativestudio@wfp.org">
          hq.creativestudio@wfp.org
        </Link>
      </p>

      <ColorList filter="brand" />

      <Colour color="brand-01" />
      <h4 className="wfp--story__sub-heading">WFP's corporate colour</h4>
      <p>
        The brand-01 colour is WFP’s corporate blue which is used in all
        (non-interactive) branding elements. It is the colour displayed most
        frequently across your App’s screens and components. The primary colour
        can also be used to accent elements.
      </p>
      <section className="dodonot">
        <div>
          <h4>Use brand-01 for:</h4>
          <List kind="bullet">
            <ListItem kind="checkmark">
              <Link onClick={linkTo('Components|MainNavigation', 'default')}>
                MainNavigation
              </Link>
            </ListItem>
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

      <Colour color="interactive-01" />
      <h4 className="wfp--story__sub-heading">
        Primary interactive colour, primary buttons
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

      <Colour color="interactive-02" />
      <h4 className="wfp--story__sub-heading">
        Interactive emphasis colour (e.g. hovers)
      </h4>
      <p>
        This colour is used for hover and active states.{' '}
        {/* and to create contrast
        between UI elements such as distinguishing the BannerNavigation bar from
        the MainNavigation. You can use this dark variant of our primary colour
        on elements.*/}
      </p>
      {/*<p>
        You can also use variants to distinguish elements within a component,
        such different variants used on a floating action button container as
        well as the icon within it.
      </p>*/}
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
              <Link onClick={linkTo('Components|MainNavigation', 'default')}>
                MainNavigation
              </Link>
              , since it is a branding element and not interactive as a whole
            </ListItem>
            <ListItem kind="cross">other branding elements</ListItem>
            <ListItem kind="cross">non - interactive elements</ListItem>
          </List>
        </div>
      </section>

      <Colour color="accent-01" />
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
        Be playful and crazy here but don't forget that the accent colour should
        be maximum 10 % of colour of the whole product. Yellow is the
        recommended accent colour. To use a different accent colour then yellow
        please contact{' '}
        <Link href="mailto:hq.creativestudio@wfp.org">
          hq.creativestudio@wfp.org
        </Link>
        .
      </p>
      {/*<p>
        Yellow is the recommmended accent colour. To use a different accent
        colour then yellow please contact{' '}
        <Link href="mailto:hq.creativestudio@wfp.org">
          hq.creativestudio@wfp.org
        </Link>
      </p>*/}
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
              call-to-action buttons and links
            </ListItem>
            <ListItem kind="checkmark">
              yellow makes a good button colour in placed in isolation
            </ListItem>
            <ListItem kind="checkmark">
              external websites where colour creates interest and meaning and
              improves the conversion rate
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
      <h3 ref={linkRefs.extendedPrimary}>Extended primary palette</h3>
      <p>
        This palette extends the primary palette by providing lighter and darker
        tints of the WFP brand colour. They can be used to increase the contrast
        of the UI elements to make them more or less visible compared to the
        rest of the interface.
      </p>

      <ColorList filter="brand-extended" />

      <h3 ref={linkRefs.neutrals}>Neutrals</h3>

      <p>
        Neutral colours are used for non-interactive elements, backgrounds,
        borders and texts.
      </p>
      <ColorList filter="ui" />

      <h3>ui-01 and ui-02</h3>
      <h4 className="wfp--story__sub-heading">
        Container and page background colors
      </h4>
      <p>
        <b>ui-01</b> is used as the page background if there are not Modules on
        top of it, while ui-02 is used as the page background when there are
        Modules on top.
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
      <h3 ref={linkRefs.dataviz}>Data visualisation palettes</h3>

      <ColorList filter="communications" />

      <h3 ref={linkRefs.semantic}>Semantic colours</h3>

      <ColorList filter="support" />

      {/* <Colour color="support-01" />
      <p>
        Use the error colour to indicate an error or to focus the attention on
        something which is crucial to see. Paired with a cross icon, red
        delivers the message that something went wrong.{' '}
      </p>
      <Color colour="support-02" />
      <p>
        Use green to indicate success state. Paired with a checkmark icon the
        user knows that the operation was successfully completed.
      </p>
      <Colour color="support-03" />
      <p>
        Use yellow to indicate a transient warning which is less important than
        an error message. Yellow typically consists of items which require the
        user’s immediate attention, or indicate a waiting period. Although this
        overlaps with the use of red, yellow is more transient in nature.
      </p> */}

      {/*
          <h3>Sustainable development goals colours</h3>
          <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
            {colorList(sdgColors)}
          </ul>
          */}

      {/* <h3 ref={linkRefs.symbolic}>Symbolic colours</h3>
      <ColorList filter="symbolic" />
      <p /> */}
      {/* <h3>Usage</h3>
      <p>The colours can be used via JavaScript or different frameworks.</p>
      <Blockquote title="Usage in JavaScript" code>
        <PrismCode component="pre" className="language-js">
          {`// Import colours as json (needs a json loader)
import colors from '@wfp/react/src/globals/data/colors.json'

// Import colours as js
import colors from '@wfp/react/src/globals/data/colors.js'

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
@import "~@wfp/react/src/globals/scss/vars";

body {
  background: var(--ui-02);
}
`}
        </PrismCode>
      </Blockquote> */}
    </Page>
  );
};

export default ColourDocs;
