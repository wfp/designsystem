import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import FormWizard from '../FormWizard';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

const props = {
  tabs: () => ({}),
};

storiesOf('FormWizard', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme([readme]))
  .add(
    'Default',
    withInfo({
      text: `
        Tabs are used to quickly navigate between views within the same context. Create individual
        Tab components for each item in the Tabs list.
      `,
    })(() => (
      <FormWizard {...props.tabs()} sidebar={<div>The Sidebar content</div>}>
        The Main content
      </FormWizard>
    ))
  );
