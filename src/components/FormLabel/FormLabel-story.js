import React from 'react';
import { storiesOf } from '@storybook/react';
import FormLabel from './FormLabel';

const additionalProps = {
  className: 'some-class',
};

storiesOf('Forms|FormLabel', module).add('Default', () => (
  <FormLabel {...additionalProps}>Label</FormLabel>
));
