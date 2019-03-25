import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { BannerNavigation, BannerNavigationItem } from './BannerNavigation';
import { BannerNavigationWithContent } from './BannerNavigationWithContent';
import Search from '../Search';
import Link from '../Link';

storiesOf('Components|BannerNavigation', module)
  .add('Default', () => (
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
          id="search-2"
          labelText="Search"
          kind="banner"
          placeHolderText="Search"
          onChange={action('onChange')}
        />
      </BannerNavigationItem>
    </BannerNavigation>
  ))
  .add('BannerNavigationWithContent', () => <BannerNavigationWithContent />);
