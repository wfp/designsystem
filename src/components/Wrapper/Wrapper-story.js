/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import Wrapper from '../Wrapper';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

storiesOf('Wrapper', module)
  //.addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addDecorator(withReadme([readme]))
  .addWithInfo(
    'Default',
    `
      Wrapper can wrap it's content in a specific width depending on if the application has a full or fixed width.
    `,
    () => {
      const options = {
        '': 'undefined',
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
      };
      const defaultValue = 'sm';

      const pageWidth = select('pageWidth', options, defaultValue);

      const optionsMobilePageWidth = {
        '': 'undefined',
        full: 'full',
      };

      const mobilePageWidth = select(
        'mobilePageWidth',
        optionsMobilePageWidth,
        defaultValue
      );

      const optionsSpacing = {
        '': 'undefined',
        full: 'full',
      };

      const spacing = select('spacing', optionsSpacing, defaultValue);

      return (
        <Wrapper
          pageWidth={pageWidth}
          mobilePageWidth={mobilePageWidth}
          spacing={spacing}>
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
