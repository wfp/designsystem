/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Blockquote from '../components/Blockquote';
import RegularPage from './RegularPage';
import Story from '../components/Story';
import Wrapper from '../components/Wrapper';
storiesOf(' Documentation.Sample Pages', module)
  .addDecorator(story => <RegularPage withoutSecondary>{story()}</RegularPage>)
  .add('Regular Page', () => (
    <Wrapper pageWidth="lg" spacing="md">
      <Story>
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
      </Story>
    </Wrapper>
  ));
