import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import SingleComponent from '../../documentation/SingleComponent';
import withTests from '../../internal/withTests';

import HtmlComponent from '../../documentation/HtmlComponent';

import { exampleStory } from '../../../.storybook/lucid-docs-addon';

import Raw from '!!raw-loader!./Blockquote';
import Html from '!!raw-loader!./Blockquote.html';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

import Blockquote from '../Blockquote';

storiesOf('Blockquote', module)
  .addDecorator(checkA11y)
  .addDecorator(
    exampleStory({
      code: Raw,
      options: { showAddonPanel: true },
    })
  )
  .addDecorator(withTests('Link'))
  .addDecorator(withReadme([readme]))
  .addDecorator(story => <SingleComponent>{story()}</SingleComponent>)
  .addDecorator(withKnobs)
  .addWithInfo(
    'Primary Blockquote',
    `
     The <Blockquote> Element (or HTML Block Quotation Element) indicates that the enclosed text is an extended quotation.
    `,
    () => {
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
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </Blockquote>
      );
    }
  );

storiesOf('Blockquote', module)
  .addDecorator(
    exampleStory({
      code: Html,
      options: { showAddonPanel: true },
    })
  )
  .addDecorator(story => <HtmlComponent html={Html}>{story()}</HtmlComponent>)
  .addWithInfo(
    'html',
    `
     html view
    `,
    () => null
  );
