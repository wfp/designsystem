import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SecondaryTabs, SecondaryTabsItem } from './SecondaryTabs';
import Link from '../Link';


storiesOf('SecondaryTabs', module)
  .addWithInfo(
    'default',
    `
      The SecondaryTabs is used on internal applications above the main navigation to crosslink between the most important internal applications. It is hidden on Mobile devices.
    `,
    () => (
      <SecondaryTabs className="wfp--fieldset">
        <SecondaryTabsItem>
          <Link className="active" href="http://communities.wfp.org" target="_blank">First Tab</Link>
        </SecondaryTabsItem>
        <SecondaryTabsItem>
          <Link href="http://manuals.wfp.org" target="_blank">Second Tab</Link>
        </SecondaryTabsItem>
        <SecondaryTabsItem>
          <Link href="https://go.docs.wfp.org" target="_blank">Third Tab</Link>
        </SecondaryTabsItem>       
      </SecondaryTabs>
    )
  );
