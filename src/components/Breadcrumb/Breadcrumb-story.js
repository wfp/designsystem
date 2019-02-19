/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

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
  .addDecorator(withReadme([readme]))
  .add(
    'Default',
    () => (
      <Breadcrumb {...props()}>
        <BreadcrumbItem>
          <a href="/#">
            <BreadcrumbHome />
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
        <BreadcrumbItem disableLink>Breadcrumb 3</BreadcrumbItem>
      </Breadcrumb>
    ),
    {
      info: {
        text: readme,
      },
    }
  )
  .add('skeleton', () => <BreadcrumbSkeleton />, {
    info: {
      text: `
          Placeholder skeleton state to use when content is loading.
          `,
    },
  });
