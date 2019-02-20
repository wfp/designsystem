import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import FormWizard from '../FormWizard';

const props = {
  tabs: () => ({}),
};

storiesOf('FormWizard', module)
  .addDecorator(withKnobs)

  .add('Default', () => (
    <FormWizard {...props.tabs()} sidebar={<div>The Sidebar content</div>}>
      The Main content
    </FormWizard>
  ));
