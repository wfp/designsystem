import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import Blockquote from '../Blockquote';

storiesOf('Blockquote', module)
  //.addDecorator(checkA11y)
  .addParameters({ jest: ['Blockquote-test'] })
  .addDecorator(withKnobs)
  .add('Default', () => {
    const toggleable = boolean('toggleable', false);
    const error = boolean('error', false);
    const light = boolean('light', false);
    const code = boolean('code', false);
    const warning = boolean('warning', false);
    const info = boolean('info', false);
    const withIcon = boolean('withIcon', false);

    return (
      <Blockquote
        error={error}
        toogleable={toggleable}
        light={light}
        code={code}
        warning={warning}
        withIcon={withIcon}
        info={info}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </Blockquote>
    );
  });
