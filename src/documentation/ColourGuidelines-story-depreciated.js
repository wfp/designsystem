/* eslint-disable no-console */

import React from 'react';

import { storiesOf } from '@storybook/react';
import Page from './Page';
import Link from '../components/Link';

import { List, ListItem } from '../components/List';

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

storiesOf('Getting started|Core', module)
  .addParameters({
    options: {
      showPanel: false,
      isToolshown: false,
    },
  })
  .add('Colour guidelines', () => (
    <Page title="Colour guidelines" subTitle="Naming convention & linting">
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
      <h2>Interactive colours</h2>
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
          MainNavigation, since it is a branding element and not interactive as
          a whole
        </ListItem>
        <ListItem kind="cross">other branding elements</ListItem>
        <ListItem kind="cross">non - interactive elements</ListItem>
      </List>
      <h2>Brand colour</h2>
      <p>
        These are the base colours of the UI. Primary colours are the ones that
        are used most frequently in the interface.The WFP brand colour is
        selected as the primary colour.
      </p>
      <Color color="brand-01" />
      <h4 className="wfp--story__sub-heading">WFP's corporate colour</h4>
      <p>
        The brand-01 colour is WFP’s corporate blue which is used in all
        (non-interactive) branding elements.
      </p>
      <p>
        It is the colour displayed most frequently across your App’s screens and
        components. The primary colour can also be used to accent elements.
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
      <Color color="interactive-02" />
      <h4 className="wfp--story__sub-heading">
        Interactive emphasis colour (e.g. hovers)
      </h4>
      <p>
        This colour is used for hover, actived states and to create contrast
        between UI elements such as distinguishing the BannerNavigation bar from
        the MainNavigation. You can use this dark variant of our primary colour
        on elements.
      </p>
      <p>
        To be discussed for mobile: You can also use variants to distinguish
        elements within a component, such different variants used on a floating
        action button container as well as the icon within it.
      </p>
      <Color color="accent-01" />
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
        <Link href="mailto:wfp.publications@wfp.org">
          wfp.publications@wfp.org
        </Link>
        .
      </p>
      <p>
        Yellow is the recommmended accent colour. <br />
        To use a different accent colour then yellow please contact
        wfp.publications@wfp.org
      </p>
      <h4>Secondary colours are best for:</h4>
      <List kind="bullet">
        <ListItem kind="checkmark">
          floating action buttons(mobile devices)
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
          limit the use of yellow to the elements you want to emphasize related
          to the audience priority
        </ListItem>
        <ListItem kind="cross">
          limit usage for texts and navigation elements
        </ListItem>
      </List>
      <h3>sdg - 01 - 17</h3>{' '}
      <h4 className="wfp--story__sub-heading">SDG colors add here</h4>
      <h3>Neutral colours</h3>
      <p>
        Neutral colours are used in the interface for non-interactive elements,
        backgrounds and borders.
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
      <Color color="ui-01" />
      <h4 className="wfp--story__sub-heading">
        Primary container background; Secondary page background
      </h4>
      <p>
        This colour is used as the page background if there are no Modules on
        top of it.
      </p>
      <Color color="ui-02" />
      <h4 className="wfp--story__sub-heading">
        Primary page background; Secondary container background
      </h4>
      <p>
        Use this colour as page background if there are modules on top of it to
        increase the contrast between the modules.
      </p>
      <Color color="ui-03" />
      <h4 className="wfp--story__sub-heading">
        Subtle border, Tertiary background colour
      </h4>
      <Color color="ui-04" />
      <h4 className="wfp--story__sub-heading">
        3: 1 AA element contrast; Medium contrast border
      </h4>
      <Color color="ui-05" />
      <h4 className="wfp--story__sub-heading">
        4.5: 1 AA element contrast; High contrast border; Emphasis elements
      </h4>
      <Color color="text-01" />
      <h4 className="wfp--story__sub-heading">
        Primary text; Body copy; Headers; Hover text colour for text - 02
      </h4>
      <Color color="text-02" />
      <h4 className="wfp--story__sub-heading">
        Secondary text; Input labels; Help text
      </h4>
      <Color color="text-03" />
      <h4 className="wfp--story__sub-heading">
        Placeholder text; Semantic colours
      </h4>
      <h2>Success, error, warning and information</h2>
      <Color color="support-01" />
      <h4 className="wfp--story__sub-heading">Error</h4>
      <p>
        Use the error color to indicate an error or to focus the attention on
        something which is crucial to see. Paired with a cross icon, red
        delivers the message that something went wrong.
      </p>
      <Color color="support-02" />
      <h4 className="wfp--story__sub-heading">Success</h4>
      <p>
        Use green to indicate success state. Paired with a checkmark icon the
        user knows that the operation was successfully completed.
      </p>
      <Color color="support-03" />
      <h4 className="wfp--story__sub-heading">Warning</h4>
      <p>
        Use yellow to indicate a transient warning which is less important than
        an error message. Yellow typically consists of items which require the
        user’s immediate attention, or indicate a waiting period. Although this
        overlaps with the use of red, yellow is more transient in nature.
      </p>
    </Page>
  ));
