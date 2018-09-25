import React from 'react';
import { storiesOf } from '@storybook/react';
import FormLabel from './FormLabel';
import SingleComponent from '../../documentation/SingleComponent';
//import Tooltip from '../Tooltip';

import HtmlComponent from '../../documentation/HtmlComponent';
import Html from '!!raw-loader!./FormLabel.html';
import { exampleStory } from '../../../.storybook/lucid-docs-addon';

const additionalProps = {
  className: 'some-class',
};

storiesOf('FormLabel', module)
  .addDecorator(story => <SingleComponent>{story()}</SingleComponent>)
  .addWithInfo(
    'Default',
    `
    Form label.

  `,
    () => <FormLabel {...additionalProps}>Label</FormLabel>
  )
  .addWithInfo(
    'With tooltip',
    `
    Form label with tooltip.
  `,
    () => (
      <FormLabel {...additionalProps}>
        {/*<Tooltip triggerText="Label">
          This is the content of the tooltip.
        </Tooltip>*/}
      </FormLabel>
    )
  );

storiesOf('FormLabel', module)
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