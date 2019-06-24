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
        <Link href="#" target="_blank">
          Link 1
        </Link>
      </BannerNavigationItem>
      <BannerNavigationItem>
        <Link href="#" target="_blank">
          Link 2
        </Link>
      </BannerNavigationItem>
      <BannerNavigationItem>
        <Link href="#" target="_blank">
          Link 3
        </Link>
      </BannerNavigationItem>
      <BannerNavigationItem>
        <Link href="#" target="_blank">
          Link 4
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
