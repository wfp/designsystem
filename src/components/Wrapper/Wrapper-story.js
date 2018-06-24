/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import Wrapper from '../Wrapper';

storiesOf('Wrapper', module)
  //.addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithInfo(
    'Default',
    `
      Wrapper can wrap it's content in a specific width depending on if the application has a full or fixed width.
    `,
    () => {
      const label = 'pageWidth';
      const options = {
        '': 'undefined',
        narrow: 'narrow',
      };
      const defaultValue = '';

      const pageWidth = select(label, options, defaultValue);

      return (
        <Wrapper pageWidth={pageWidth}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Wrapper>
      );
    }
  );
