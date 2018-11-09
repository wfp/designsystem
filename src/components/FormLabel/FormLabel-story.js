import React from 'react';
import { storiesOf } from '@storybook/react';
import FormLabel from './FormLabel';

const additionalProps = {
  className: 'some-class',
};

storiesOf('FormLabel', module).addWithInfo(
  'Default',
  `
    Form label.

  `,
  () => <FormLabel {...additionalProps}>Label</FormLabel>
);
