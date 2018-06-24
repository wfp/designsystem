/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Link from '../components/Link';
import Wrapper from '../components/Wrapper';
import Blockquote from '../components/Blockquote';
import {
  BannerNavigation,
  BannerNavigationItem,
} from '../components/BannerNavigation';
import RegularPage from './RegularPage';
import Footer from '../components/Footer';
import Search from '../components/Search';

storiesOf(' Documentation', module)
  .addDecorator(story => <RegularPage>{story()}</RegularPage>)
  .addWithInfo('Regular Page', ``, () => (
    <div>
      <Wrapper pageWidth="narrow">
        <h1>Regular Page</h1>
        <p>
          The UI Kit uses the BEM naming convention with a 'wfp--' prefix as
          standard naming for all css elements.
        </p>
        <p>
          Please use ES-Lint with the settings [] while building your React
          Application.
        </p>
        <Blockquote title="Notice">
          Notice Resources should not be spent trying to modify legacy systems,
          3rd party applications or other user interfaces which cannot easily be
          customised.
        </Blockquote>
      </Wrapper>
    </div>
  ));
