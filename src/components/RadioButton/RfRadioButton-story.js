import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { Provider } from 'react-redux';
import store from '../../internal/configureStore';
import { Field } from 'redux-form';
import FormWrapper from '../../internal/RfFormWrapper';

import RadioButton from './RadioButton';

const introText = `
  Text fields enable the user to interact with and input data. A single line
  field is used when the input anticipated by the user is a single line of
  text as opposed to a paragraph.
`;


storiesOf('RadioButton', module)
  .addDecorator(withKnobs)
	.addDecorator(story => <Provider store={store}><FormWrapper>{story()}</FormWrapper></Provider>)
  .addWithInfo(
    'Redux Form RadioButton',
    `
      ${introText}
      The example below shows an RadioButton Input component inside Redux-Form. The type is 'radio' and its
      value can be a 'bool'.
    `,
    () => {
      const label = text('label', 'Arunoda Susiripala');
      const name = text('name', 'checkboxinput');
      return (
        <div>
          <Field
            component={RadioButton}
            id="Inputelement"
            type = "radio"
            value="first"
            labelText={label}
            name={name}
          />
        </div>
      )
    }
  );
