import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import Tabs from '../Tabs';
import Tab from '../Tab';
import Tag from '../Tag';
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
    onClick: action('onClick'),
    onKeyDown: action('onKeyDown'),
    onSelectionChange: action('onSelectionChange'),
  }),
  tab: () => ({
    className: 'another-class',
    href: text('The href for tab (href in <Tab>)', '#'),
    label: text('The label for tab (label in <Tab>)', 'Tab label'),
    role: text('ARIA role (role in <Tab>)', 'presentation'),
    tabIndex: number('Tab index (tabIndex in <Tab>)', 0),
    onClick: action('onClick'),
    onKeyDown: action('onKeyDown'),
  }),
};

const el = ({ href, label }) => {
  return (
    <a href={href}>
      <span>
        {label} <Tag type="wfp">renderAnchor</Tag>
      </span>
    </a>
  );
};

const listEl = ({ anchor, className, label, href }) => {
  return (
    <li className={className}>
      <div
        className="wfp--tabs__nav-link"
        onClick={() => {
          alert('Custom renderListElement');
        }}>
        {anchor.label} *
      </div>
    </li>
  );
};

/*
const TabLink = (props) => (
  <Route
    path={to}
    exact={exact}
    children={({ match }) => (
      <div className={match ? "wfp--tabs__nav-item wfp--tabs__nav-item--selected" : "wfp--tabs__nav-item"}>
        <Link className="wfp--tabs__nav-link" to={to}>{children}</Link>
      </div>
    )}
  />
);
*/

const FakeRoute = ({ children }) => {
  const Children = children;
  return <Children match />;
};

const FakeLink = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const listElReactRouter = ({ anchor, className, to, exact, match }) => (
  <FakeRoute
    to={to}
    exact={exact}
    children={({ match }) => (
      <li
        className={
          match ? className + ' wfp--tabs__nav-item--selected' : className
        }>
        <FakeLink className={anchor.className} to={to}>
          {anchor.label}
        </FakeLink>
      </li>
    )}
  />
);

storiesOf('Navigation|Tabs', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Tabs {...props.tabs()}>
      <Tab {...props.tab()} label={`${props.tab().label} 1`}>
        <div className="some-content">Content for first tab goes here.</div>
      </Tab>
      <Tab {...props.tab()} label={`${props.tab().label} 2`}>
        <div className="some-content">Content for second tab goes here.</div>
      </Tab>
      <Tab {...props.tab()} label={`${props.tab().label} 3`}>
        <div className="some-content">Content for third tab goes here.</div>
      </Tab>
      <Tab {...props.tab()} disabled label={`${props.tab().label} 4 disabled`}>
        <div className="some-content">Content for fourth tab goes here.</div>
      </Tab>
    </Tabs>
  ))
  .add('Custom Tab Content', () => (
    <Tabs {...props.tabs()} customTabContent={true}>
      <Tab {...props.tab()} label="Tab label 1" href="http://www.de.wfp.org" />
      <Tab {...props.tab()} label="Tab label 2" href="http://www.fr.wfp.org" />
      <Tab
        {...props.tab()}
        label="Tab label 3"
        href="http://www.fr.wfp.org"
        to="/path"
      />
    </Tabs>
  ))
  .add('Custom Tab Logic', () => (
    <Tabs {...props.tabs()} customTabContent={true}>
      <Tab
        {...props.tab()}
        label="Custom"
        href="http://www.de.wfp.org"
        renderAnchor={el}
      />
      <Tab
        {...props.tab()}
        label="Custom renderListElement"
        href="http://www.fr.wfp.org"
        renderListElement={listEl}
      />
      <Tab
        {...props.tab()}
        label="React-Router Example"
        href="http://www.fr.wfp.org"
        to="/path"
        renderListElement={listElReactRouter}
      />
    </Tabs>
  ))
  .add('skeleton', () => <TabsSkeleton />);
