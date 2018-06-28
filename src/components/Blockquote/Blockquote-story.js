import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';
import withTests from '../../internal/withTests';

import Blockquote from '../Blockquote';

storiesOf('Blockquote', module)
  .addDecorator(checkA11y)
  .addDecorator(withTests('Link'))
  .addDecorator(withKnobs)
  .addWithInfo(
    'Primary Blockquote',
    `
      Buttons are used to initialize an action, either in the background or
      foreground of an experience.

      Primary buttons should be used for the principle call to action
      on the page. Modify the behavior of the button by changing its event properties.

      Small buttons may be used when there is not enough space for a
      regular sized button. This issue is most found in tables. Small button should have three words
      or less.

      The example below shows Primary Button component .
    `,
    () => {
      const toggleable = boolean('toggleable', false);
      const light = boolean('light', false);
      const code = boolean('code', false);
      const warning = boolean('warning', false);
      const info = boolean('info', false);

      return (
        <Blockquote
          toogleable={toggleable}
          light={light}
          code={code}
          warning={warning}
          info={info}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </Blockquote>
      );
    }
  );
