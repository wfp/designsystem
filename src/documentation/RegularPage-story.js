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
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </p>
        <Blockquote title="Notice">
          Notice Resources should not be spent trying to modify legacy systems,
          3rd party applications or other user interfaces which cannot easily be
          customised.
        </Blockquote>
      </Wrapper>
    </div>
  ));
