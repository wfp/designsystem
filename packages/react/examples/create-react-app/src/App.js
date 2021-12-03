import '@unitednations/react/src/globals/scss/styles.scss';

import React, { Component } from 'react';
import {
  Link,
  Footer,
  Tooltip,
  BannerNavigation,
  BannerNavigationItem,
  Search,
} from '@unitednations/react';
import Navigation from './components/Navigation';
import SecondaryNavigation from './components/SecondaryNavigation';
import TableTest from './components/ToolTipTest';

import './App.scss';

class App extends Component {
  render() {
    return (
      <>
        <BannerNavigation>
          <BannerNavigationItem>
            <Link href="#" target="_blank">
              Documents
            </Link>
          </BannerNavigationItem>
          <BannerNavigationItem>
            <Link href="#" target="_blank">
              Manuals
            </Link>
          </BannerNavigationItem>
          <BannerNavigationItem>
            <Link href="#" target="_blank">
              Self-Service
            </Link>
          </BannerNavigationItem>
          <BannerNavigationItem>
            <Link href="#" target="_blank">
              OPweb
            </Link>
          </BannerNavigationItem>
          <BannerNavigationItem>
            <Link href="#" target="_blank">
              WeLearn
            </Link>
          </BannerNavigationItem>
          <BannerNavigationItem>
            <Search
              id="search-2"
              kind="banner"
              onChange={() => {}}
              placeHolderText="Search"
            />
          </BannerNavigationItem>
        </BannerNavigation>
        <Navigation />
        <SecondaryNavigation />
        <div className="maincontent">
          <TableTest />
        </div>

        <Footer pageWidth="lg">
          <div className="wfp--footer__info">
            <div className="wfp--footer__info__item">
              <p className="wfp--footer__label">A label</p>
              <ul className="wfp--footer__list">
                <li>
                  <Link href="http://www.wfp.org">First Link</Link>
                </li>
                <li>
                  <Link href="http://www.wfp.org">Second Link</Link>
                </li>
              </ul>
            </div>
            <div className="wfp--footer__info__item">
              <p className="wfp--footer__label">Another label</p>
              <ul className="wfp--footer__list">
                <li>
                  <Link href="http://www.wfp.org">First Link</Link>
                </li>
                <li>
                  <Link href="http://www.wfp.org">Second Link</Link>
                </li>
              </ul>
            </div>
          </div>
        </Footer>
      </>
    );
  }
}

export default App;
