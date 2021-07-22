function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../components/Link';
import Page from './Page';
import Blockquote from '../components/Blockquote';
import TextInput from '../components/TextInput';
import { List, ListItem } from '../components/List';
var TextInputProps = {
  className: 'some-class',
  id: 'test2',
  labelText: 'Text Input label',
  helperText: 'Optional helper text.',
  placeholder: 'Placeholder text'
};
var InvalidPasswordProps = {
  className: 'some-class',
  id: 'test4',
  labelText: 'Password',
  invalid: true,
  invalidText: 'Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.'
};
storiesOf('Design|Guidelines', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false
  }
}).add('Form design', function () {
  return /*#__PURE__*/React.createElement(Page, {
    title: "Form UX-Design",
    subTitle: "Recommendations for form design"
  }, /*#__PURE__*/React.createElement("h3", null, "Provide Autosave"), /*#__PURE__*/React.createElement("p", null, "Especially longer forms should provide autosave by default. You should also provide a very clear feedback by displaying a message that shows when the last autosave happened or a Save-Button. The user should be always able to also save forms with an error."), /*#__PURE__*/React.createElement("h3", null, "Top-left aligned labels are best for readability & completion"), /*#__PURE__*/React.createElement("p", null, "Placing labels above input fields is preferable since research show these are better trackable for users than left-aligned labels", ' ', /*#__PURE__*/React.createElement(Link, {
    href: "http://uxmovement.com/forms/why-infield-top-aligned-form-labels-are-quickest-to-scan/"
  }, "read more")), /*#__PURE__*/React.createElement(Blockquote, {
    title: "Example"
  }, /*#__PURE__*/React.createElement(TextInput, TextInputProps)), /*#__PURE__*/React.createElement("h3", null, "Avoid placing inputs side-by-side."), /*#__PURE__*/React.createElement("p", null, "User attention should always be directed on one task at a time, 2 items on the same line will compete for attention as there is no visual priority between them, resulting in a heavier task for the user."), /*#__PURE__*/React.createElement("p", null, "The only exception to this rule is when the input needs multiple field elements like asking for dates (day, month, year) or time (hours and minutes), where multiple fields are expected to be on one line. Read more about", ' ', /*#__PURE__*/React.createElement(Link, {
    href: "https://uxplanet.org/the-18-must-do-principles-in-the-form-design-fe89d0127c92"
  }, "principles in form design"), "."), /*#__PURE__*/React.createElement("h4", null, "2 columns layout exceptions apply to:"), /*#__PURE__*/React.createElement("p", null, "Information that people perceive as one but need more than one input field to complete"), /*#__PURE__*/React.createElement(List, {
    kind: "bullet"
  }, /*#__PURE__*/React.createElement(ListItem, {
    kind: "checkmark"
  }, "dd \u2013 mm \u2013 yyyy (date picker)"), /*#__PURE__*/React.createElement(ListItem, {
    kind: "checkmark"
  }, "amount \u2013 currency"), /*#__PURE__*/React.createElement(ListItem, {
    kind: "checkmark"
  }, "national prefix - phone number"), /*#__PURE__*/React.createElement(ListItem, {
    kind: "checkmark"
  }, "first name - second name - last name")), /*#__PURE__*/React.createElement("p", null, "Information that people will find in the same place"), /*#__PURE__*/React.createElement(List, {
    kind: "bullet"
  }, /*#__PURE__*/React.createElement(ListItem, {
    kind: "checkmark"
  }, "CVV and credit card expiry date")), /*#__PURE__*/React.createElement("p", null, "Information that are complementary and/or more meaningful if read together"), /*#__PURE__*/React.createElement(List, {
    kind: "bullet"
  }, /*#__PURE__*/React.createElement(ListItem, {
    kind: "checkmark"
  }, "currency - currency exchange rate")), /*#__PURE__*/React.createElement("p", null, "When one field is non editable and used for comparison/reference purposes"), /*#__PURE__*/React.createElement(List, {
    kind: "bullet"
  }, /*#__PURE__*/React.createElement(ListItem, {
    kind: "checkmark"
  }, "country data input - RB data read only")), /*#__PURE__*/React.createElement("h3", null, "Group related fields together into sections or steps"), /*#__PURE__*/React.createElement("p", null, "If your form has more than six fields, it\u2019s considered good practice to group questions into logical sections or steps. Use the", ' ', /*#__PURE__*/React.createElement("span", {
    className: "wfp--inline-highlight"
  }, "<FormGroup />"), ' ', "component for this behaviour."), /*#__PURE__*/React.createElement("h3", null, "Validate Fields after Users Submit the Form"), /*#__PURE__*/React.createElement("p", null, "Inline validation post submission minimizes completion times, form errors, and user frustration. Make sure you\u2019re validating your fields when users are in revision mode, not completion mode, otherwise you\u2019ll slow them down.", ' ', /*#__PURE__*/React.createElement(Link, {
    href: "http://uxmovement.com/forms/why-users-make-more-errors-with-instant-inline-validation/"
  }, "read more")), /*#__PURE__*/React.createElement("h3", null, "Avoid Multistep (Wizard) forms if not necessary"), /*#__PURE__*/React.createElement("p", null, "It is okay to place more than 10 inputs on a page."), /*#__PURE__*/React.createElement("h3", null, "Multistep (Wizard) Forms"), /*#__PURE__*/React.createElement("p", null, "Apply to these rules when developing a wizard form:"), /*#__PURE__*/React.createElement("ul", {
    className: "wfp--story__list"
  }, /*#__PURE__*/React.createElement("li", null, "Keep the number of steps at the minimum", ' ', /*#__PURE__*/React.createElement(Link, {
    href: "https://uxplanet.org/wizard-design-pattern-8c86e14f2a38",
    target: "_blank"
  }, "read more")), /*#__PURE__*/React.createElement("li", null, "A review step is mandatory. This step should also do a server-side check of all data entered and show a summary."), /*#__PURE__*/React.createElement("li", null, "Show errors when the user wants to change a page (or do live validation)"), /*#__PURE__*/React.createElement("li", null, "Stop the user from moving to another page when wrong content was entered (make sure it is possible to move to other pages when no content is entered, except when it is needed on the following pages)"), /*#__PURE__*/React.createElement("li", null, "Use checkmark indicator once wizard page is filled completely."), /*#__PURE__*/React.createElement("li", null, "Use warning indicator if some content is filled")), /*#__PURE__*/React.createElement("h3", null, "Be clear with your error messages"), /*#__PURE__*/React.createElement("p", null, "It doesn\u2019t matter what type of validation you use, you should always use inline errors. Use them \u2018just right here\u2019, in context. But not somewhere else on the pages. The natural mapping here is your best friend.", /*#__PURE__*/React.createElement(Blockquote, {
    title: "Example"
  }, /*#__PURE__*/React.createElement(TextInput, _extends({
    type: "password",
    required: true,
    pattern: "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
  }, InvalidPasswordProps))), "And, more importantly, always try to explain the root of the problem. Try to use a human language and explain what exactly the user/the system made wrong, and what exactly should be fixed/filled."), /*#__PURE__*/React.createElement("h3", null, "Before submitting content provide dialog modal"), /*#__PURE__*/React.createElement("p", null, "Always ask the user before submitting input. Do not ask if the user only saves the input."));
});