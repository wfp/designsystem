import React from 'react';
import { storiesOf } from '@storybook/react';
import FormLabel from './FormLabel';
import SingleComponent from '../../documentation/SingleComponent';
//import Tooltip from '../Tooltip';

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
