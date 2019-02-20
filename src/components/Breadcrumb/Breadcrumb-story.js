/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import Breadcrumb from '../Breadcrumb';
import BreadcrumbHome from '../BreadcrumbHome';
import BreadcrumbItem from '../BreadcrumbItem';
import BreadcrumbSkeleton from '../Breadcrumb/Breadcrumb.Skeleton';

const props = () => ({
  className: 'some-class',
  onClick: action('onClick'),
});

storiesOf('Breadcrumb', module)
  .addParameters({ jest: ['Breadcrumb'] })
  .addDecorator(withKnobs)

  .add('Default', () => (
    <Breadcrumb {...props()}>
      <BreadcrumbItem>
        <a href="/#">
          <BreadcrumbHome />
        </a>
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
      <BreadcrumbItem disableLink>Breadcrumb 3</BreadcrumbItem>
    </Breadcrumb>
  ))
  .add('skeleton', () => <BreadcrumbSkeleton />);
