import React from 'react';
import { storiesOf } from '@storybook/react';
import FormLabel from './FormLabel';

import HtmlComponent from '../../documentation/HtmlComponent';
import Html from '!!raw-loader!./FormLabel.html';
import { exampleStory } from '../../../.storybook/lucid-docs-addon';

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
