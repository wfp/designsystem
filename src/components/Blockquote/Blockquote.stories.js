import React from 'react';
import { storiesOf } from '@storybook/react';
//import { withKnobs, boolean, select, text } from '@storybook/addon-knobs/react';

import Blockquote from '.';

const kinds = {
  'Info (info)': 'info',
  'Warning (warning)': 'warning',
  'Error (error)': 'error',
  'Success (success)': 'success',
};

export default {
  title: 'Components/Blockquote',
  component: Blockquote,
  argTypes: {
    loadingState: {
      type: 'inline-radio',
      options: ['loading', 'error', 'ready'],
    },
  },
};

/*
const props = () => ({
  title: text('title', 'Blockquote title'),
  children: text(
    'content (children)',
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stetclita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
  ),
  toggleable: boolean('toggleable', false),
  error: boolean('error (depreciated)', false),
  kind: select('Blockquote kind (kind)', kinds, 'primary'),
  light: boolean('light', false),
  code: boolean('code', false),
  warning: boolean('warning (depreciated)', false),
  info: boolean('info (depreciated)', false),
  withIcon: boolean('withIcon', false),
});*/

/*storiesOf('Components|Blockquote', module)
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
  });*/

export const Default = (args) => <Blockquote {...args} />;
Default.args = {
  children: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
  amet.`,
};

Default.argTypes = {
  kind: {
    control: {
      type: 'select',
      options: ['info', 'warning', 'error', 'success'],
    },
  },
};
