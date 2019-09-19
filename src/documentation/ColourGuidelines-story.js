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

storiesOf('Documentation|Guidelines', module)
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
        Use the <i>70–25–5(60–30–10)</i> rule to create sense of balance and
        allow the eye to move comfortably from one focal point to the next.
      </p>
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
      {/*<img
        alt="Brand colour"
        style={{
          width: '100%',
          height: 'auto',
          marginTop: '3em',
          marginLeft: '0em',
        }}
        src={`${process.env.STORYBOOK_INTERNAL_ASSETS}internal/brand-color.png`}
      />*/}
      <h5>Do not use for:</h5>
      <List kind="bullet">
        <ListItem>
          {' '}
          MainNavigation, since it is a branding element and not interactive as
          a whole
        </ListItem>
        <ListItem>other branding elements</ListItem>
        <ListItem>non - interactive elements</ListItem>
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
        <ListItem>interactive elements like buttons or links</ListItem>
        <ListItem>Primary and secondary colours</ListItem>
      </List>
      <Color color="brand-02" />
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
      <h3>sdg - 01 - 17</h3>{' '}
      <h4 className="wfp--story__sub-heading">SDG colors add here</h4>
      <h4>brand - 03</h4>
      <h4 className="wfp--story__sub-heading">Accent secondary colour</h4>
      <img
        alt="Brand colour"
        style={{
          width: '100%',
          height: 'auto',
          marginTop: '3em',
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
        Be playful and crazy here but don’t forget that accent colour should be
        maximum 10 % of colour of the whole product.
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
        <ListItem>
          external websites where colour creates interest and meaning and
          improves the conversation rate
        </ListItem>
      </List>
      <h4>Do not use it:</h4>
      <List kind="bullet">
        <ListItem>for regular actions</ListItem>
        <ListItem>multiple actions / times on the same webpage</ListItem>
        <ListItem>
          limit the use of yellow to the elements you want to emphasize related
          to the audience priority
        </ListItem>
        <ListItem>limit usage for texts and navigation elements</ListItem>
      </List>
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
      <p>Primary container background; Secondary page background</p>
      <p>
        This colour is used as the page background if there are no Modules on
        top of it.
      </p>
      <Color color="ui-02" />
      <p>Primary page background; Secondary container background</p>
      <p>
        Use this colour as page background if there are modules on top of it to
        increase the contrast between the modules.
      </p>
      <Color color="ui-03" />
      <p>Subtle border, Tertiary background colour</p>
      <Color color="ui-04" />
      <p>3: 1 AA element contrast; Medium contrast border</p>
      <Color color="ui-05" />
      <p>4.5: 1 AA element contrast; High contrast border; Emphasis elements</p>
      <Color color="text-01" />
      <h4>text - 01</h4>
      <p>Primary text; Body copy; Headers; Hover text colour for text - 02</p>
      <Color color="text-02" />
      <p>Secondary text; Input labels; Help text</p>
      <Color color="text-03" />
      <p>Placeholder text</p> <p>Semantic colours</p>
      <h2>Success, error, warning and information</h2>
      <Color color="support-01" />
      <p>Error</p> <p>Indicates an error</p>
      <Color color="support-02" />
      <p>Success</p> <p>Indicates a success</p>
      <Color color="support-03" />
      <p>Warning</p> <p>Indicates a warning</p>
    </Page>
  ));
