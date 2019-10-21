import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import FormWizard from '../FormWizard';

const props = {
  tabs: () => ({}),
};

storiesOf('Forms|FormWizard', module)
  .addDecorator(withKnobs)

  .add('Default', () => (
    <FormWizard {...props.tabs()} sidebar={<div>The Sidebar content</div>}>
      The Main content
    </FormWizard>
  ));
