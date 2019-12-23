/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import PrismCode from 'react-prism';
import Link from '../../components/Link';
import { List, ListItem } from '../../components/List';
import Page from '../Page';
import Blockquote from '../../components/Blockquote';

import ColorList from './ColourList';
import ColorDocs from './ColourDocs';
import './_colours.scss';
import { color } from '@storybook/theming';

storiesOf('Getting started|Core', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Colours', () => {
    return <ColorDocs />;
  });
