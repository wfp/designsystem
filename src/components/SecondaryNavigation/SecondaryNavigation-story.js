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
    inline: true,
  },
  tab: {
    className: 'another-class',
  },
};

const renderAnchor = props => {
  return <a href={props.href}>{props.label}</a>;
};

storiesOf('Components|SecondaryNavigation', module)
  .add('default', () => (
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
      <SecondaryNavigationTitle>The Page Title</SecondaryNavigationTitle>
      <Tabs {...props.tabs} customTabContent={true}>
        <Tab
          {...props.tab}
          label="Tab label 1"
          href="http://www.de.wfp.org"
          renderAnchor={renderAnchor}
        />
        <Tab
          {...props.tab}
          label="Tab label 2"
          href="http://www.es.wfp.org"
          renderAnchor={renderAnchor}
        />
        <Tab
          {...props.tab}
          label="Tab label 3"
          href="http://www.us.wfp.org"
          renderAnchor={renderAnchor}
        />
        <Tab
          {...props.tab}
          label="Tab label 4"
          href="http://www.fr.wfp.org"
          renderAnchor={renderAnchor}
        />
      </Tabs>
    </SecondaryNavigation>
  ))
  .add('Heading only', () => (
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
      <SecondaryNavigationTitle>The Page Title</SecondaryNavigationTitle>
    </SecondaryNavigation>
  ));
