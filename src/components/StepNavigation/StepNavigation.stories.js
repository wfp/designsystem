import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import StepNavigation from './StepNavigation';
import StepNavigationItem from '../StepNavigationItem';
import markdown from './README.mdx';

export default {
  title: 'Components/StepNavigation',
  component: StepNavigation,
  subcomponents: { StepNavigationItem },
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const StepNavigationRegular = (args) => (
  <StepNavigation {...args}>
    <StepNavigationItem label="Item without Status" page={0} />
    <StepNavigationItem label="Active Item" page={1} />
    <StepNavigationItem
      label="Not started Item"
      page={2}
      status="not-started"
    />
  </StepNavigation>
);

StepNavigationRegular.args = {
  children: 'StepNavigation',
  href: '#',
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

| kind   |  Description  |
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
    <StepNavigationItem label="Skipped Item" page={4} status="skip" />
    <StepNavigationItem label="Disabled Item" page={5} status="disabled" />
    <StepNavigationItem label="Locked Item" page={6} status="locked" />
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
