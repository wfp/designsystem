import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs'

import { Provider } from 'react-redux';
import store from '../../internal/configureStore';
import { Field } from 'redux-form';
import FormWrapper from '../../internal/RfFormWrapper';

import TextArea from './TextArea';

const introText = `
  Text fields enable the user to interact with and input data. A single line
  field is used when the input anticipated by the user is a single line of
  text as opposed to a paragraph.
`;

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;

storiesOf('TextArea', module)
	.addDecorator(withSmartKnobs)
	.addDecorator(story => <Provider store={store}><FormWrapper>{story()}</FormWrapper></Provider>)
  .addWithInfo(
    'Redux Form TextArea',
    `
      ${introText}
      The example below shows an enabled Text Input component. The default type is 'text' and its
      value can be either 'string' or 'number'.
    `,
    () => <Field
              component={TextArea}
              labelText="Label"
              name="Input"
              placeholder="Placeholder here"
              validate={email}
          />
  );
