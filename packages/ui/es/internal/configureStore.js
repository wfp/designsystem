import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import account from './loadDefaultData';
var reducer = combineReducers({
  account: account,
  form: reduxFormReducer // mounted under "form"

});
var store = (window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__()(createStore) : createStore)(reducer);
export default store;