import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import account from './loadDefaultData';

const reducer = combineReducers({
  account,
  form: reduxFormReducer, // mounted under "form"
});
const store = (window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()(createStore)
  : createStore)(reducer);

export default store;
