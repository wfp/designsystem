import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs, text } from '@storybook/addon-knobs/react';
import { Provider } from 'react-redux';
import store from '../../internal/configureStore';
import { Field } from 'redux-form';
import FormWrapper from '../../internal/RfFormWrapper';

import RfCheckbox from './RfCheckbox';

const introText = `
  Text fields enable the user to interact with and input data. A single line
  field is used when the input anticipated by the user is a single line of
  text as opposed to a paragraph.
`;

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <Provider store={store}>
      <FormWrapper>{story()}</FormWrapper>
    </Provider>
  ))
  .addWithInfo(
    'Redux Form Checkbox',
    `
      ${introText}
      The example below shows an Checkbox Input component inside Redux-Form. The type is 'checkbox' and its
      value can be a 'bool'.
    `,
    () => {
      const label = text('label', 'Arunoda Susiripala');
      const name = text('name', 'checkboxinput');
      return (
        <Field
          component={RfCheckbox}
          id="Inputelement"
          labelText={label}
          name={name}
        />
      );
    }
  );
