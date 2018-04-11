import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withSmartKnobs } from 'storybook-addon-smart-knobs'

import { Provider } from 'react-redux';
import store from '../../internal/configureStore';
import { Field, reduxForm } from 'redux-form';
import FormWrapper from '../../internal/RfFormWrapper';

import RfTextInput from './RfTextInput';

const TextInputProps = {
  className: 'some-class',
  id: 'test2',
  labelText: 'Text Input label',
  onClick: action('onClick'),
  onChange: action('onChange'),
  placeholder: 'Placeholder text',
};

const introText = `
  Text fields enable the user to interact with and input data. A single line
  field is used when the input anticipated by the user is a single line of
  text as opposed to a paragraph.
`;

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;

const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined

storiesOf('TextInput', module)
	.addDecorator(withSmartKnobs)
	.addDecorator(story => <Provider store={store}><FormWrapper>{story()}</FormWrapper></Provider>)
  .addWithInfo(
    'Redux Form TextInput',
    `
      ${introText}
      The example below shows an enabled Text Input component. The default type is 'text' and its
      value can be either 'string' or 'number'.
    `,
    () => <Field
              component={RfTextInput}
              label="Label"
              name="Input"
              placeholder="Placeholder here"
              validate={email}
              warn={aol}
          />
  );
