import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  SecondaryNavigation,
  SecondaryNavigationTitle,
} from './SecondaryNavigation';
import Breadcrumb from '../Breadcrumb';
import BreadcrumbItem from '../BreadcrumbItem';
import BreadcrumbHome from '../BreadcrumbHome';

import Tabs from '../Tabs';
import Tab from '../Tab';

const props = {
  tabs: {
    className: 'some-class',
    triggerHref: '#anotherAnchor',
  },
  tab: {
    className: 'another-class',
  },
};

storiesOf('SecondaryNavigation', module).addWithInfo(
  'default',
  `
      Tabs are used to quickly navigate between views within the same context.
    `,
  () => (
    <SecondaryNavigation additional="additional Information">
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/#">
            <BreadcrumbHome />
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
        <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
      </Breadcrumb>

      <SecondaryNavigationTitle>Title</SecondaryNavigationTitle>

      <Tabs {...props.tabs}>
        <Tab {...props.tab} label="Tab label 1">
          <div className="some-content">Content for first tab goes here.</div>
        </Tab>
        <Tab {...props.tab} label="Tab label 2">
          <div className="some-content">Content for second tab goes here.</div>
        </Tab>
        <Tab {...props.tab} label="Tab label 3">
          <div className="some-content">Content for third tab goes here.</div>
        </Tab>
        <Tab {...props.tab} label="Tab label 4">
          <div className="some-content">Content for fourth tab goes here.</div>
        </Tab>
      </Tabs>
    </SecondaryNavigation>
  )
);
