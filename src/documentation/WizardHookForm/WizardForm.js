import React from 'react';
import WizardHook from './WizardHook';
import StepOne from './FormOne';
import StepTwo from './FormTwo';
import StepThree from './FormThree';

export default function WizardForm() {
  return (
    <WizardHook
      content={[
        {
          label: 'Name and last name',
          content: <StepOne />,
        },
        {
          label: 'Contact data',
          content: <StepTwo />,
        },
        {
          label: 'Additional notes',
          content: <StepThree />,
        },
      ]}
    />
  );
}
