import React, { useState } from 'react';
import StepNavigation from './StepNavigation';
import StepNavigationItem from '../StepNavigationItem';
import markdown from './README.mdx';

export default {
  title: 'Components/Navigations/StepNavigation',
  component: StepNavigation,
  subcomponents: { StepNavigationItem },
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const StepNavigationRegular = (args) => {
  const [step, setStep] = useState(0);
  return (
    <>
      <StepNavigation
        {...args}
        onSelectionChange={(e) => setStep(e)}
        selectedPage={step}>
        <StepNavigationItem
          label="Item without Status"
          helperText="dbsajjh"
          page={0}
        />
        <StepNavigationItem label="Active Item" page={1} />
        <StepNavigationItem
          label="Not started Item"
          page={2}
          status="not-started"
        />
      </StepNavigation>
    </>
  );
};

StepNavigationRegular.args = {
  children: 'StepNavigation',
};

StepNavigationRegular.story = {
  parameters: {
    docs: {
      source: {
        code: `
        import { StepNavigation , StepNavigationItem } from "@un/react";
        
const StepNavigationExample = (args) => {
  const [step, setStep] = useState(0);
  return (
    <StepNavigation onSelectionChange={(e) => setStep(e)} selectedPage={step}>
      <StepNavigationItem label="Item without Status" page={0} />
      <StepNavigationItem label="Active Item" page={1} />
      <StepNavigationItem label="Not started Item" page={2} status="not-started" />
    </StepNavigation> 
  ) 
}
      `,
      },
    },
  },
};

export const DifferentStates = (args) => (
  <StepNavigation {...args}>
    <StepNavigationItem label="Item without Status" page={0} />
    <StepNavigationItem label="Active Item" page={1} />
    <StepNavigationItem
      label="Not started Item"
      page={2}
      status="not-started"
    />
    <StepNavigationItem label="Warning Item" page={3} status="warning" />
    <StepNavigationItem label="Complete Item" page={4} status="complete" />
    <StepNavigationItem label="Skipped Item" page={4} status="skip" />
    <StepNavigationItem label="Disabled Item" page={5} status="disabled" />
    <StepNavigationItem label="Locked Item" page={6} status="locked" />
  </StepNavigation>
);

DifferentStates.args = {};

const description = `

#### Default types of state

| status   |  Description  |
|----------|-------------|
| \`warning\` | warning that there is information missing |
| \`error\` | experimental   |
| \`not-started\` | currently empty, because not yet started |
| \`locked\` | can't be accessed at the moment |
| \`skip\` | skipped step |
| \`disabled\` | disabled step |
| \`complete\` | completed step |
`;

DifferentStates.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};

export const Vertical = (args) => (
  <StepNavigation {...args}>
    <StepNavigationItem label="Item without Status" page={0} />
    <StepNavigationItem label="Active Item" page={1} />
    <StepNavigationItem
      label="Not started Item"
      page={2}
      status="not-started"
    />
    <StepNavigationItem label="Warning Item" page={3} status="warning" />
    <StepNavigationItem label="Complete Item" page={4} status="complete" />
  </StepNavigation>
);

Vertical.args = { vertical: true };

Vertical.story = {
  parameters: {
    docs: {
      storyDescription: ``,
    },
  },
};

export const Small = (args) => (
  <StepNavigation {...args}>
    <StepNavigationItem label="Item without Status" page={0} />
    <StepNavigationItem label="Active Item" page={1} />
    <StepNavigationItem
      label="Not started Item"
      page={2}
      status="not-started"
    />
    <StepNavigationItem label="Warning Item" page={3} status="warning" />
    <StepNavigationItem label="Complete Item" page={4} status="complete" />
    <StepNavigationItem label="Skipped Item" page={4} status="skip" />
    <StepNavigationItem label="Disabled Item" page={5} status="disabled" />
    <StepNavigationItem label="Locked Item" page={6} status="locked" />
  </StepNavigation>
);

Small.args = { vertical: true, small: true };

Small.story = {
  parameters: {
    docs: {
      storyDescription: `The \`small\` StepNavigation can be used in places the space is limited and the component is not used for navigation. Use it to indicate the progress of a flow.`,
    },
  },
};
