"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _configureStore = _interopRequireDefault(require("../../internal/configureStore"));

var _reactRedux = require("react-redux");

var _reduxForm = require("redux-form");

var _RfFormWrapper = _interopRequireDefault(require("../../internal/RfFormWrapper"));

var _ReduxFormWrapper = _interopRequireDefault(require("../ReduxFormWrapper"));

var _reactSelect = _interopRequireDefault(require("react-select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var options = [{
  value: 'chocolate',
  label: 'Chocolate'
}, {
  value: 'strawberry',
  label: 'Strawberry'
}, {
  value: 'vanilla',
  label: 'Vanilla'
}];
(0, _react2.storiesOf)('Components|ReduxFormWrapper', module).addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: _configureStore.default
  }, /*#__PURE__*/_react.default.createElement(_RfFormWrapper.default, null, story()));
}).add('react-select', function () {
  var ReactSelectHelper = function ReactSelectHelper(props) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "wfp--form-item"
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: props.id,
      className: "wfp--label"
    }, props.labelText), props.helperText && /*#__PURE__*/_react.default.createElement("div", {
      className: "wfp--form__helper-text"
    }, props.helperText), /*#__PURE__*/_react.default.createElement(_reactSelect.default, _extends({}, props, {
      className: "wfp--react-select-container",
      classNamePrefix: "wfp--react-select"
    })));
  };

  return /*#__PURE__*/_react.default.createElement(_reduxForm.Field, {
    component: _ReduxFormWrapper.default,
    InputComponent: ReactSelectHelper,
    helperText: "This is a helper text",
    labelText: "The label",
    options: options
  });
});