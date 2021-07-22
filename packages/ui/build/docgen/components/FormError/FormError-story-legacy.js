"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _FormError = _interopRequireDefault(require("../FormError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  formError: function formError() {
    return {
      className: 'some-class',
      message: (0, _addonKnobs.object)('Error message (message)', {
        generic: 'Something went very terribly wrong.',
        fields: [{
          key: 'fieldkey',
          message: 'Please enter your name.'
        }, {
          key: 'anotherfieldkey',
          message: 'The selected e-mail could not be validated.'
        }, {
          key: 'anotherfieldkey',
          message: 'Something else went terribly wrong.'
        }]
      }),
      submitFailed: (0, _addonKnobs.boolean)('Submit failed (submitFailed)', true)
    };
  }
};
(0, _react2.storiesOf)('Components|FormError', module).addDecorator(_addonKnobs.withKnobs).addParameters({
  jest: ['FormError-test']
}).add('Default (experimental)', function () {
  return /*#__PURE__*/_react.default.createElement(_FormError.default, props.formError());
});