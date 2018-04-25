import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SecondaryNavigation, SecondaryNavigationTitle } from './SecondaryNavigation';
import Breadcrumb from '../Breadcrumb';
import BreadcrumbItem from '../BreadcrumbItem';
import BreadcrumbHome from '../BreadcrumbHome';

import Link from '../Link';


storiesOf('SecondaryNavigation', module)
  .addWithInfo(
    'default',
    `
      The SecondaryNavigation is used on internal applications above the main navigation to crosslink between the most important internal applications. It is hidden on Mobile devices.
    `,
    () => (
      <SecondaryNavigation
        additional="additional Information"
        className="wfp--fieldset"
      >
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
