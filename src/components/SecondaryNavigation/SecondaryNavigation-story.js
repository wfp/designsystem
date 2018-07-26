import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  SecondaryNavigation,
  SecondaryNavigationTitle,
} from './SecondaryNavigation';
import Breadcrumb from '../Breadcrumb';
import BreadcrumbItem from '../BreadcrumbItem';
import BreadcrumbHome from '../BreadcrumbHome';



storiesOf('SecondaryNavigation', module).addWithInfo(
  'default',
  `
      Tabs are used to quickly navigate between views within the same context.
    `,
  () => (
    <SecondaryNavigation additional="additional Information">
      <SecondaryNavigationTitle>Title</SecondaryNavigationTitle>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/#">
            <BreadcrumbHome />
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
        <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
      </Breadcrumb>
    </SecondaryNavigation>
  )
);
