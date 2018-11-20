import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

//import store from '../../internal/configureStore';
import { Provider } from 'react-redux';
import { Field } from 'redux-form';
import FormWrapper from '../../internal/RfFormWrapper';
import ReduxFormWrapper from '../../components/ReduxFormWrapper';
import SimpleForm from './SimpleForm'


import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import account from '../../internal/loadDefaultData';

import TextInput from '../../components/TextInput';
import TextArea from '../../components/TextArea';

const reducer = combineReducers({
  account,
  form: reduxFormReducer, // mounted under "form"
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);


storiesOf(' Documentation', module)
  .addDecorator(story => (
    <Provider store={store}>
      <SimpleForm>{story()}</SimpleForm>
    </Provider>
  ))
  .add(
    'Simple Form',
    withInfo({
      text: `
        A wrapper for inputs so they can be used with ReduxForm.
      `,
    })(() => {
      return <div>

        </div>;
    })
  );
