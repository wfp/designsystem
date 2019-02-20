/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';

import WizardForm from './WizardForm';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});
const store = (window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()(createStore)
  : createStore)(reducer);

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {
      // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
      resolve();
    }, 500);
  });

storiesOf(' Documentation', module).add('Wizard Form', () => (
  <Provider store={store}>
    <WizardForm onSubmit={showResults} />
  </Provider>
));
