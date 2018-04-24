import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { Provider } from 'react-redux';
import store from '../../internal/configureStore';
import { Field } from 'redux-form';
import FormWrapper from '../../internal/RfFormWrapper';

import FormGroup from '../FormGroup';
import RadioButtonGroupSimple from './RadioButtonGroupSimple';
import RadioButton from '../RadioButton';

const introText = `
  Text fields enable the user to interact with and input data. A single line
  field is used when the input anticipated by the user is a single line of
  text as opposed to a paragraph.
`;


storiesOf('RadioButtonGroup', module)
  .addDecorator(withKnobs)
	.addDecorator(story => <Provider store={store}><FormWrapper>{story()}</FormWrapper></Provider>)
  .addWithInfo(
    'Redux Form RadioButtonGroup',
    `
      ${introText}
      The example below shows an RadioButton Input component inside Redux-Form. The type is 'radio' and its
      value can be a 'bool'.
    `,
    () => {
      return (
        <FormGroup legendText="Radio Button heading">
          <RadioButtonGroupSimple
            name="radio-button-group"
            defaultSelected="default-selected"
            legend="Group Legend">
            <Field
              component={RadioButton}
              type="radio"
              value="first"
              labelText="Standard Radio Button label"
              name="radioinput"
            />
            <Field
              component={RadioButton}
              type = "radio"
              value="second"
              labelText="Default selected Radio Button"
              name="radioinput"
            />
            <Field
              disabled
              component={RadioButton}
              type="radio"
              value="third"
              labelText="Disabled Radio Button"
              name="radioinput"
            />
          </RadioButtonGroupSimple>
        </FormGroup>
      )
    }
  );
