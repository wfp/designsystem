import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { MainNavigation, MainNavigationItem } from '../MainNavigation';
import Search from '../Search';
import Link from '../Link';
import User from '../User';

storiesOf('MainNavigation', module).add(
  'Right to left',
  /*`
      The MainNavigation is used across all applications, it is the starting point of the application and offers the top level navigation items.
    `,*/
  () => (
    <MainNavigation logo="WFP UI">
      <MainNavigationItem
        subNavigation={
          <div>
            <h3>Hello World</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        }>
        <Link href="http://communities.wfp.org" target="_blank">
          التاريخ
        </Link>
      </MainNavigationItem>
      <MainNavigationItem
        subNavigation={
          <div>
            <h3>أحكم</h3>
          </div>
        }>
        <Link href="http://manuals.wfp.org" target="_blank">
          ذات
        </Link>
      </MainNavigationItem>
      <MainNavigationItem>
        <Link href="https://go.docs.wfp.org" target="_blank">
          وحتى
        </Link>
      </MainNavigationItem>
      <MainNavigationItem>
        <Link href="http://opweb.wfp.org" target="_blank">
          ألمانيا
        </Link>
      </MainNavigationItem>
      <MainNavigationItem>
        <Search
          small
          id="search-2"
          labelText="بحث"
          placeHolderText="بحث"
          onChange={action('onChange')}
        />
      </MainNavigationItem>
      <MainNavigationItem
        className="wfp--main-navigation__user"
        subNavigation={
          <div>
            <h3>Hello World</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        }>
        <User title="والنفيس" />
      </MainNavigationItem>
    </MainNavigation>
  )
);
