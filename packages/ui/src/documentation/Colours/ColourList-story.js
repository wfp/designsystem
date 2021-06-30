/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import ColorDocs from './ColourDocs';
import './colours.scss';

storiesOf('Design|Core', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Colours', () => {
    return <ColorDocs />;
  });
