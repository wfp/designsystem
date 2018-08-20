import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import { Provider } from 'react-redux';
import store from '../../internal/configureStore';
import { Field } from 'redux-form';
import FormWrapper from '../../internal/RfFormWrapper';

import Toggle from './Toggle';

const introText = `
  Toggle implementation for Redux Form
`;

const data = {
  Input: true,
};

storiesOf('Toggle', module)
  .addDecorator(withSmartKnobs)
  .addDecorator(story => (
    <Provider store={store} sampleData={data}>
      <FormWrapper sampleData={data}>
        {story()}
      </FormWrapper>
    </Provider>
  ))
  .addWithInfo(
    'Redux Form Toggle',
    `
      ${introText}
    `,
    () => (
      <Field
        id="toggle-1"
        component={Toggle}
        labelA="Off"
        labelB="On"
        name="Input"
      />
    )
  );
