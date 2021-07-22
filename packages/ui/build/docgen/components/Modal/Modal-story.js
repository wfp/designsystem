"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Modal = _interopRequireDefault(require("../Modal"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  default: function _default() {
    return {
      className: 'some-class',
      open: (0, _addonKnobs.boolean)('Open (open)', true),
      passiveModal: (0, _addonKnobs.boolean)('Without footer (passiveModal)', false),
      danger: (0, _addonKnobs.boolean)('Danger mode (danger)', false),
      shouldSubmitOnEnter: (0, _addonKnobs.boolean)('Enter key to submit (shouldSubmitOnEnter)', false),
      primaryButtonDisabled: (0, _addonKnobs.boolean)('Disable primary button (primaryButtonDisabled)', false),
      secondaryButtonDisabled: (0, _addonKnobs.boolean)('Disable secondary button (secondaryButtonDisabled)', false),
      modalHeading: (0, _addonKnobs.text)('Modal heading (modalHeading)', 'Modal heading'),
      modalLabel: (0, _addonKnobs.text)('Optional label (modalLabel)', 'Label'),
      modalAriaLabel: (0, _addonKnobs.text)('ARIA label (modalAriaLabel)', ''),
      primaryButtonText: (0, _addonKnobs.text)('Primary button text (primaryButtonText)', 'Primary Button'),
      secondaryButtonText: (0, _addonKnobs.text)('Secondary button text (secondaryButtonText)', 'Secondary Button'),
      selectorPrimaryFocus: (0, _addonKnobs.text)('Selector Primary Focus on Open (selectorPrimaryFocus) default: [data-modal-primary-focus]', false),
      iconDescription: (0, _addonKnobs.text)('Close icon description (iconDescription)', 'Close the modal'),
      inPortal: (0, _addonKnobs.boolean)('Render in portal (inPortal', false),
      onBlur: (0, _addonActions.action)('onBlur'),
      onClick: (0, _addonActions.action)('onClick'),
      onFocus: (0, _addonActions.action)('onFocus'),
      onRequestClose: (0, _addonActions.action)('onRequestClose'),
      onRequestSubmit: (0, _addonActions.action)('onRequestSubmit'),
      onSecondarySubmit: (0, _addonActions.action)('onSecondarySubmit'),
      wide: (0, _addonKnobs.boolean)('Wider Modal (wide)', false)
    };
  },
  dialog: function dialog() {
    return {
      className: 'some-class',
      open: (0, _addonKnobs.boolean)('Open (open)', true),
      passiveModal: (0, _addonKnobs.boolean)('Without footer (passiveModal)', false),
      primaryButtonDisabled: (0, _addonKnobs.boolean)('Disable primary button (primaryButtonDisabled)', false),
      secondaryButtonDisabled: (0, _addonKnobs.boolean)('Disable secondary button (secondaryButtonDisabled)', false),
      backgroundImage: (0, _addonKnobs.text)('Background Image (backgroundImage)', 'https://password.go.wfp.org/images/MAU_20150202_WFP-Agron_Dragaj_0018.jpg'),
      danger: (0, _addonKnobs.boolean)('Danger mode (danger)', false),
      hideClose: (0, _addonKnobs.boolean)('Hide the close button (hideClose)', true),
      shouldSubmitOnEnter: (0, _addonKnobs.boolean)('Enter key to submit (shouldSubmitOnEnter)', false),
      modalHeading: (0, _addonKnobs.text)('Modal heading (modalHeading)', 'Modal heading'),
      modalLabel: (0, _addonKnobs.text)('Optional label (modalLabel)', 'Label'),
      modalAriaLabel: (0, _addonKnobs.text)('ARIA label (modalAriaLabel)', ''),
      primaryButtonText: (0, _addonKnobs.text)('Primary button text (primaryButtonText)', 'Primary Button'),
      secondaryButtonText: (0, _addonKnobs.text)('Secondary button text (secondaryButtonText)', 'Secondary Button'),
      iconDescription: (0, _addonKnobs.text)('Close icon description (iconDescription)', 'Close the modal'),
      inPortal: (0, _addonKnobs.boolean)('Render in portal (inPortal', false),
      onBlur: (0, _addonActions.action)('onBlur'),
      onClick: (0, _addonActions.action)('onClick'),
      onFocus: (0, _addonActions.action)('onFocus'),
      onRequestClose: (0, _addonActions.action)('onRequestClose'),
      onRequestSubmit: (0, _addonActions.action)('onRequestSubmit'),
      onSecondarySubmit: (0, _addonActions.action)('onSecondarySubmit'),
      wide: (0, _addonKnobs.boolean)('Wider Modal (wide)', false)
    };
  }
};
(0, _react2.storiesOf)('Components|Modal', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_Modal.default, props.default(), /*#__PURE__*/_react.default.createElement("p", {
    className: "wfp--modal-content__text"
  }, "Please see ModalWrapper for more examples and demo of the functionality."));
}).add('Long Content (experimental)', function () {
  return /*#__PURE__*/_react.default.createElement(_Modal.default, props.default(), /*#__PURE__*/_react.default.createElement("p", {
    className: "wfp--modal-content__text"
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."));
}).add('Dialog Page (experimental)', function () {
  return /*#__PURE__*/_react.default.createElement(_Modal.default, props.dialog(), /*#__PURE__*/_react.default.createElement("p", {
    className: "wfp--modal-content__text"
  }, /*#__PURE__*/_react.default.createElement(_TextInput.default, {
    id: "custominput",
    labelText: "Your email adress",
    placeholder: "yourname@wfp.org",
    helperText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
  })));
});