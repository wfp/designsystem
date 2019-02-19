import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, number, text } from '@storybook/addon-knobs';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

import StepNavigation from '../StepNavigation';
import StepNavigationItem from '../StepNavigationItem';

const props = {
  tabs: () => ({
    className: 'some-class',
    selected: number('The index of the selected tab (selected in <Tabs>)', 1),
    triggerHref: text(
      'The href of trigger button for narrow mode (triggerHref in <Tabs>)',
      '#'
    ),
    role: text('ARIA role (role in <Tabs>)', 'navigation'),
    iconDescription: text(
      'The description of the trigger icon for narrow mode (iconDescription in <Tabs>)',
      'show menu options'
    ),
    onClick: action('onClick'),
    onKeyDown: action('onKeyDown'),
    onSelectionChange: action('onSelectionChange'),
  }),
  tab: () => ({
    className: 'another-class',
    href: text('The href for tab (href in <Tab>)', '#'),
    role: text('ARIA role (role in <Tab>)', 'presentation'),
    tabIndex: number('Tab index (tabIndex in <Tab>)', 0),
    onClick: action('onClick'),
    onKeyDown: action('onKeyDown'),
  }),
};

const handleTabClick = index => {
  this.setState({ page: index });
};

storiesOf('StepNavigation', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme([readme]))
  .add(
    'Default (work in progress)',
    withInfo({
      text: `
        Tabs are used to quickly navigate between views within the same context. Create individual
        Tab components for each item in the Tabs list.
      `,
    })(() => (
      <StepNavigation selectedPage={1} handleTabClick={handleTabClick}>
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
    ))
  );
