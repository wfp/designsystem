import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BannerNavigation, BannerNavigationItem } from './BannerNavigation';
import Search from '../Search';
import Link from '../Link';

import HtmlComponent from '../../documentation/HtmlComponent';
import { exampleStory } from '../../../.storybook/lucid-docs-addon';

import Html from '!!raw-loader!./BannerNavigation.html';

storiesOf('BannerNavigation', module).addWithInfo(
  'default',
  `
      The BannerNavigation is used on internal applications above the main navigation to crosslink between the most important internal applications. It is hidden on Mobile devices.

      ~~~js
      import { BannerNavigation, BannerNavigationItem } from '@wfp/ui';
      ~~~
    `,
  () => (
    <BannerNavigation>
      <BannerNavigationItem>
        <Link href="http://communities.wfp.org" target="_blank">
          Communities
        </Link>
      </BannerNavigationItem>
      <BannerNavigationItem>
        <Link href="http://manuals.wfp.org" target="_blank">
          Manuals
        </Link>
      </BannerNavigationItem>
      <BannerNavigationItem>
        <Link href="https://go.docs.wfp.org" target="_blank">
          GoDocs
        </Link>
      </BannerNavigationItem>
      <BannerNavigationItem>
        <Link href="http://opweb.wfp.org" target="_blank">
          OPweb
        </Link>
      </BannerNavigationItem>
      <BannerNavigationItem>
        <Link href="http://info.wfp.org" target="_blank">
          IN/FO
        </Link>
      </BannerNavigationItem>
      <BannerNavigationItem>
        <Link href="https://selfservice.go.wfp.org" target="_blank">
          Self-service
        </Link>
      </BannerNavigationItem>
      <BannerNavigationItem>
        <Link href="https://welearn.wfp.org" target="_blank">
          WeLearn
        </Link>
      </BannerNavigationItem>
      <BannerNavigationItem>
        <Search
          banner
          id="search-2"
          labelText="Search"
          placeHolderText="Search"
          onChange={action('onChange')}
        />
      </BannerNavigationItem>
    </BannerNavigation>
  )
);

storiesOf('BannerNavigation', module)
  .addDecorator(
    exampleStory({
      code: Html,
      options: { showAddonPanel: true },
    })
  )
  .addDecorator(story => <HtmlComponent html={Html}>{story()}</HtmlComponent>)
  .addWithInfo(
    'html',
    `
     html view
    `,
    () => null
  );