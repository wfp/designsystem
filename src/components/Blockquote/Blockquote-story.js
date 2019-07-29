import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';

import Blockquote from '../Blockquote';

const props = () => ({
  title: text('title', 'Blockquote title'),
  children: text(
    'content (children)',
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stetclita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
  ),
  toggleable: boolean('toggleable', false),
  error: boolean('error', false),
  light: boolean('light', false),
  code: boolean('code', false),
  warning: boolean('warning', false),
  info: boolean('info', false),
  withIcon: boolean('withIcon', false),
});

storiesOf('Components|Blockquote', module)
  .addParameters({ jest: ['Blockquote-test'] })
  .addDecorator(withKnobs)
  .add('Default', () => {
    return <Blockquote {...props()} />;
  })
  .add('custom icon', () => {
    return (
      <Blockquote
        {...props()}
        icon={
          <img
            alt="Usability"
            style={{
              width: '80px',
              height: 'auto',
            }}
            src={`${process.env.STORYBOOK_INTERNAL_ASSETS}internal/branding.svg`}
          />
        }>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </Blockquote>
    );
  });
