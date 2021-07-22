import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Modal from '../Modal';
import TextInput from '../TextInput';
var props = {
  default: function _default() {
    return {
      className: 'some-class',
      open: boolean('Open (open)', true),
      passiveModal: boolean('Without footer (passiveModal)', false),
      danger: boolean('Danger mode (danger)', false),
      shouldSubmitOnEnter: boolean('Enter key to submit (shouldSubmitOnEnter)', false),
      primaryButtonDisabled: boolean('Disable primary button (primaryButtonDisabled)', false),
      secondaryButtonDisabled: boolean('Disable secondary button (secondaryButtonDisabled)', false),
      modalHeading: text('Modal heading (modalHeading)', 'Modal heading'),
      modalLabel: text('Optional label (modalLabel)', 'Label'),
      modalAriaLabel: text('ARIA label (modalAriaLabel)', ''),
      primaryButtonText: text('Primary button text (primaryButtonText)', 'Primary Button'),
      secondaryButtonText: text('Secondary button text (secondaryButtonText)', 'Secondary Button'),
      selectorPrimaryFocus: text('Selector Primary Focus on Open (selectorPrimaryFocus) default: [data-modal-primary-focus]', false),
      iconDescription: text('Close icon description (iconDescription)', 'Close the modal'),
      inPortal: boolean('Render in portal (inPortal', false),
      onBlur: action('onBlur'),
      onClick: action('onClick'),
      onFocus: action('onFocus'),
      onRequestClose: action('onRequestClose'),
      onRequestSubmit: action('onRequestSubmit'),
      onSecondarySubmit: action('onSecondarySubmit'),
      wide: boolean('Wider Modal (wide)', false)
    };
  },
  dialog: function dialog() {
    return {
      className: 'some-class',
      open: boolean('Open (open)', true),
      passiveModal: boolean('Without footer (passiveModal)', false),
      primaryButtonDisabled: boolean('Disable primary button (primaryButtonDisabled)', false),
      secondaryButtonDisabled: boolean('Disable secondary button (secondaryButtonDisabled)', false),
      backgroundImage: text('Background Image (backgroundImage)', 'https://password.go.wfp.org/images/MAU_20150202_WFP-Agron_Dragaj_0018.jpg'),
      danger: boolean('Danger mode (danger)', false),
      hideClose: boolean('Hide the close button (hideClose)', true),
      shouldSubmitOnEnter: boolean('Enter key to submit (shouldSubmitOnEnter)', false),
      modalHeading: text('Modal heading (modalHeading)', 'Modal heading'),
      modalLabel: text('Optional label (modalLabel)', 'Label'),
      modalAriaLabel: text('ARIA label (modalAriaLabel)', ''),
      primaryButtonText: text('Primary button text (primaryButtonText)', 'Primary Button'),
      secondaryButtonText: text('Secondary button text (secondaryButtonText)', 'Secondary Button'),
      iconDescription: text('Close icon description (iconDescription)', 'Close the modal'),
      inPortal: boolean('Render in portal (inPortal', false),
      onBlur: action('onBlur'),
      onClick: action('onClick'),
      onFocus: action('onFocus'),
      onRequestClose: action('onRequestClose'),
      onRequestSubmit: action('onRequestSubmit'),
      onSecondarySubmit: action('onSecondarySubmit'),
      wide: boolean('Wider Modal (wide)', false)
    };
  }
};
storiesOf('Components|Modal', module).addDecorator(withKnobs).add('Default', function () {
  return /*#__PURE__*/React.createElement(Modal, props.default(), /*#__PURE__*/React.createElement("p", {
    className: "wfp--modal-content__text"
  }, "Please see ModalWrapper for more examples and demo of the functionality."));
}).add('Long Content (experimental)', function () {
  return /*#__PURE__*/React.createElement(Modal, props.default(), /*#__PURE__*/React.createElement("p", {
    className: "wfp--modal-content__text"
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."));
}).add('Dialog Page (experimental)', function () {
  return /*#__PURE__*/React.createElement(Modal, props.dialog(), /*#__PURE__*/React.createElement("p", {
    className: "wfp--modal-content__text"
  }, /*#__PURE__*/React.createElement(TextInput, {
    id: "custominput",
    labelText: "Your email adress",
    placeholder: "yourname@wfp.org",
    helperText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
  })));
});