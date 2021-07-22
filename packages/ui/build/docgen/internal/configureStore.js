"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reduxForm = require("redux-form");

var _loadDefaultData = _interopRequireDefault(require("./loadDefaultData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  account: _loadDefaultData.default,
  form: _reduxForm.reducer // mounted under "form"

});
var store = (window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__()(_redux.createStore) : _redux.createStore)(reducer);
var _default = store;
exports.default = _default;