import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SecondaryNavigation, SecondaryNavigationItem } from './SecondaryNavigation';
import Search from '../Search';
import Link from '../Link';


storiesOf('SecondaryNavigation', module)
  .addWithInfo(
    'default',
    `
      The SecondaryNavigation is used on internal applications above the main navigation to crosslink between the most important internal applications. It is hidden on Mobile devices.
    `,
    () => (
      <SecondaryNavigation className="wfp--fieldset">
        Title
        Breadcrump

        Right Side Content
      </SecondaryNavigation>
    )
  );
