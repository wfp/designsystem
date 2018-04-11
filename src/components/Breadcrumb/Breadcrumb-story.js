/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import withTests from '../../internal/withTests';
import Breadcrumb from '../Breadcrumb';
import BreadcrumbItem from '../BreadcrumbItem';
import BreadcrumbHome from '../BreadcrumbHome';
import SingleComponent from '../../documentation/SingleComponent';

const additionalProps = {
  onClick: () => {
    console.log('Clicked!');
  }, // eslint-disable-line no-console
  className: 'some-class',
};

storiesOf('Breadcrumb', module)
.addDecorator(withTests('Breadcrumb'))
.addDecorator(story => <SingleComponent>{story()}</SingleComponent>)
.addWithInfo(
  'Default',
  `
      Breadcrumb enables users to quickly see their location within a path of navigation and move up to a parent level if desired. It can be used with react-router by placing <NavLink></NavLink> inside <BreadcrumbItem />
    `,
  () => (
    <Breadcrumb {...additionalProps}>
      <BreadcrumbItem>
        <a href="/#">
          <BreadcrumbHome />
        </a>
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
    </Breadcrumb>
  )
);
