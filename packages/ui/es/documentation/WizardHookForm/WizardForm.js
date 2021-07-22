import React from 'react';
import WizardHook from './WizardHook';
import StepOne from './FormOne';
import StepTwo from './FormTwo';
import StepThree from './FormThree';
export default function WizardForm() {
  return /*#__PURE__*/React.createElement(WizardHook, {
    content: [{
      label: "Name and last name",
      content: /*#__PURE__*/React.createElement(StepOne, null)
    }, {
      label: "Contact data",
      content: /*#__PURE__*/React.createElement(StepTwo, null)
    }, {
      label: "Additional notes",
      content: /*#__PURE__*/React.createElement(StepThree, null)
    }]
  });
}