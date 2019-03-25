import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';

import StepNavigation from '../StepNavigation';
import StepNavigationItem from '../StepNavigationItem';

const handleTabClick = index => {
  this.setState({ page: index });
};

const props = () => ({
  vertical: boolean('Display vertical (vertical)', false),
  small: boolean('Small size (small)', false),
  selectedPage: number('Currently selected page (selectedPage)', 1),
  handleTabClick: handleTabClick,
});

storiesOf('Components|StepNavigation', module)
  .addDecorator(withKnobs)

  .add('Default (work in progress)', () => (
    <StepNavigation {...props()}>
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
      <StepNavigationItem label="Locked Item" page={5} status="locked" />
    </StepNavigation>
  ));
