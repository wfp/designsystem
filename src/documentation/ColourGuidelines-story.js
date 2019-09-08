/* eslint-disable no-console */

import React from 'react';

import { storiesOf } from '@storybook/react';
import Page from './Page';
import Link from '../components/Link';

import { List, ListItem } from '../components/List';

storiesOf('Documentation|Guidelines', module)
  .addParameters({
    options: {
      showPanel: false,
      isToolshown: false,
    },
  })
  .add('Colour guidelines', () => (
    <Page title="Colour guidelines" subTitle="Naming convention & linting">
      {' '}
      <p>A colour scheme usually consists of these colour categories:</p>{' '}
      <List kind="bullet">
        {' '}
        <ListItem>Primary and secondary colours</ListItem>{' '}
        <ListItem>Accent colours</ListItem> <ListItem>Neutrals</ListItem>{' '}
        <ListItem>Semantic colours</ListItem>{' '}
      </List>{' '}
      <p>
        {' '}
        Use the <i>70–25–5(60–30–10)</i> rule to create sense of balance and
        allow the eye to move comfortably from one focal point to the next.{' '}
      </p>{' '}
      <h2>Main colour</h2> <h3>Main</h3>{' '}
      <p>
        {' '}
        The main colour is WFP’s corporate blue which is used in all(non -
        interactive) branding elements.{' '}
      </p>{' '}
      <h4>Use main colour for:</h4>{' '}
      <List kind="bullet">
        {' '}
        <ListItem>
          dark background
        </ListItem> <ListItem>MainNavigation</ListItem>{' '}
        <ListItem>brand elements</ListItem>{' '}
      </List>{' '}
      <h4>Do not use for:</h4>{' '}
      <List kind="bullet">
        {' '}
        <ListItem>interactive elements like buttons or links</ListItem>{' '}
        <ListItem>Primary and secondary colours</ListItem>{' '}
      </List>{' '}
      <p>
        {' '}
        These are the base colours of the UI. Primary colours are the ones that
        are used most frequently in the interface.The WFP brand colour is
        selected as the primary colour.{' '}
      </p>{' '}
      <h3>brand - 01</h3> <p>Primary interactive colour, Primary buttons</p>{' '}
      <p>
        {' '}
        The WFP brand colour is selected as the primary colour.It is the colour
        displayed most frequently across your App’s screens and components.It is
        used for primary links and action elements that can be clicked or
        touched.Your primary colour can also be used to accent elements.{' '}
      </p>{' '}
      <p>
        {' '}
        It is slightly lighter then the main WFP blue to communicate that an
        element is interactive and to be distinguishable from black.{' '}
      </p>{' '}
      <h4>Use brand - 01 for:</h4>{' '}
      <List>
        {' '}
        <ListItem>links</ListItem> <ListItem>buttons</ListItem>{' '}
        <ListItem>other interactive elements</ListItem>{' '}
      </List>{' '}
      <img
        alt="Brand colour"
        style={{
          width: '100%',
          height: 'auto',
          marginTop: '3em',
          marginLeft: '0em',
        }}
        src={`$ {
        process.env.STORYBOOK_INTERNAL_ASSETS
      }

      internal/brand-color.png`}
      />{' '}
      ADD INTERACTIVE COLOR <h5>Do not use for:</h5>{' '}
      <List kind="bullet">
        {' '}
        <ListItem>
          {' '}
          MainNavigation, since it is a branding element and not interactive as
          a whole{' '}
        </ListItem>{' '}
        <ListItem>other branding elements</ListItem>{' '}
        <ListItem>non - interactive elements</ListItem>{' '}
      </List>{' '}
      <h4>brand - 02</h4> <p>Interactive emphasis colour(e.g.hovers)</p>{' '}
      <p>
        {' '}
        This colour is used for hover, actived states and to create contrast
        between UI elements such as distinguishing the BannerNavigation bar from
        the MainNavigation. You can use this dark variant of our primary colour
        on elements.{' '}
      </p>{' '}
      <p>
        {' '}
        To be discussed for mobile: You can also use variants to distinguish
        elements within a component, such different variants used on a floating
        action button container as well as the icon within it.{' '}
      </p>{' '}
      <h3>sdg - 01 - 17</h3> <p>SDG colors add here</p> <h4>brand - 03</h4>{' '}
      <img
        alt="Brand colour"
        style={{
          width: '100%',
          height: 'auto',
          marginTop: '3em',
          marginLeft: '0em',
        }}
        src={`$ {
        process.env.STORYBOOK_INTERNAL_ASSETS
      }

      internal/secondary-color.png`}
      />{' '}
      <p>Accent secondary colour</p>{' '}
      <p>
        {' '}
        Use to emphasize important actions and highlighted information in your
        application.It can help encourage visitors to make more interactions
        with the elements of your design.{' '}
      </p>{' '}
      <p>
        {' '}
        Be playful and crazy here but don’t forget that accent colour should be
        maximum 10 % of colour of the whole product.{' '}
      </p>{' '}
      <h4>Secondary colours are best for:</h4>{' '}
      <List kind="bullet">
        {' '}
        <ListItem>floating action buttons(mobile devices)</ListItem>{' '}
        <ListItem>progress bars</ListItem>{' '}
        <ListItem>important highlights</ListItem>{' '}
        <ListItem>Call - to - action buttons and links</ListItem>{' '}
        <ListItem>
          {' '}
          yellow makes a good button colour in placed in isolation{' '}
        </ListItem>{' '}
        <ListItem>
          {' '}
          external websites where colour creates interest and meaning and
          improves the conversation rate{' '}
        </ListItem>{' '}
      </List>{' '}
      <h4>Do not use it:</h4>{' '}
      <List kind="bullet">
        {' '}
        <ListItem>for regular actions</ListItem>{' '}
        <ListItem>multiple actions / times on the same webpage</ListItem>{' '}
        <ListItem>
          {' '}
          limit the use of yellow to the elements you want to emphasize related
          to the audience priority{' '}
        </ListItem>{' '}
        <ListItem>limit usage for texts and navigation elements</ListItem>{' '}
      </List>{' '}
      <h3>Neutral colours</h3>{' '}
      <img
        alt="Brand colour"
        style={{
          width: '100%',
          height: 'auto',
          marginTop: '3em',
          marginLeft: '0em',
        }}
        src={`$ {
        process.env.STORYBOOK_INTERNAL_ASSETS
      }

      internal/background-contrast.png`}
      />{' '}
      <h4>ui - 01</h4>{' '}
      <p>Primary container background; Secondary page background</p>{' '}
      <p>
        {' '}
        This colour is used as the page background if there are no Modules on
        top of it.{' '}
      </p>{' '}
      <h4>ui - 02</h4>{' '}
      <p>Primary page background; Secondary container background</p>{' '}
      <p>
        {' '}
        Use this colour as page background if there are modules on top of it to
        increase the contrast between the modules.{' '}
      </p>{' '}
      <h4>ui - 03</h4> <p>Subtle border, Tertiary background colour</p>{' '}
      <h4>ui - 04</h4> <p>3: 1 AA element contrast; Medium contrast border</p>{' '}
      <h4>ui - 05</h4>{' '}
      <p>4.5: 1 AA element contrast; High contrast border; Emphasis elements</p>{' '}
      <h3>Text colours</h3> <h4>text - 01</h4>{' '}
      <p>Primary text; Body copy; Headers; Hover text colour for text - 02</p>{' '}
      <h4>text - 02</h4> <p>Secondary text; Input labels; Help text</p>{' '}
      <h4>text - 03</h4> <p>Placeholder text</p> <p>Semantic colours</p>{' '}
      <p>Success, error, warning and information</p> <h4>support - 01</h4>{' '}
      <p>Error</p> <p>Indicates an error</p> <h4>support - 02</h4>{' '}
      <p>Success</p> <p>Indicates a success</p> <h4>support - 03</h4>{' '}
      <p>Warning</p> <p>Indicates a warning</p>{' '}
    </Page>
  ));
