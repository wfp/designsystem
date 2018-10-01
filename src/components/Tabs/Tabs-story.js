import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import Tabs from '../Tabs';
import Tab from '../Tab';
import TabsSkeleton from '../Tabs/Tabs.Skeleton';

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

const el = (props) => {
  console.log(props);
  return(
    <div>sddds</div>
  )
};

storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    withInfo({
      text: `
        Tabs are used to quickly navigate between views within the same context. Create individual
        Tab components for each item in the Tabs list.
      `,
    })(() => (
      <Tabs {...props.tabs()}>
        <Tab {...props.tab()} label="Tab label 1">
          <div className="some-content">Content for first tab goes here.</div>
        </Tab>
        <Tab {...props.tab()} label="Tab label 2">
          <div className="some-content">Content for second tab goes here.</div>
        </Tab>
        <Tab {...props.tab()} label="Tab label 3">
          <div className="some-content">Content for third tab goes here.</div>
        </Tab>
        <Tab {...props.tab()} label="Tab label 4" renderAnchor={el}>
        </Tab>
      </Tabs>
    ))
  )
  .add(
    'Custom Tab Content',
    withInfo({
      text: `
        Custom Tab Content which is independent from the Tabs
      `,
    })(() => (
      <Tabs {...props.tabs()} customTabContent={true}>
        <Tab {...props.tab()} label="Tab label 1" href="http://www.de.wfp.org" renderAnchor={el} />
        <Tab {...props.tab()} label="Tab label 4" href="http://www.fr.wfp.org" renderAnchor={el} />
      </Tabs>
    ))
  )
  .add(
    'skeleton',
    withInfo({
      text: `
        Placeholder skeleton state to use when content is loading.
      `,
    })(() => <TabsSkeleton />)
  );
