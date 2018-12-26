/*
Direct import via webpack-loader
import '@wfp/ui/source/globals/scss/styles.scss';
*/

import React, { Component } from 'react';
import {
  Button,
  Footer,
  Link,
  MainNavigation,
  MainNavigationItem,
  Search,
  SubNavigation,
  User,
} from '@wfp/ui';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React!</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <article className="App__demo">
          <MainNavigation logo={<a href="http://www.wfp.org">WFP UI</a>}>
            <MainNavigationItem>
              <Link href="http://communities.wfp.org" target="_blank">
                Communities
              </Link>
            </MainNavigationItem>
            <MainNavigationItem subNavigation={<SubNavigation />}>
              <Link href="http://manuals.wfp.org" target="_blank">
                Manuals
              </Link>
            </MainNavigationItem>
            <MainNavigationItem>
              <Link href="https://go.docs.wfp.org" target="_blank">
                GoDocs
              </Link>
            </MainNavigationItem>
            <MainNavigationItem>
              <Link href="http://opweb.wfp.org" target="_blank">
                OPweb
              </Link>
            </MainNavigationItem>
            <MainNavigationItem>
              <Search
                main
                id="search-2"
                labelText="Search"
                placeHolderText="Search"
              />
            </MainNavigationItem>
            <MainNavigationItem
              className="wfp--main-navigation__user"
              subNavigation={
                <div>
                  <h3>Hello World</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquya.
                  </p>
                </div>
              }>
              <User ellipsis title="Max Mustermann long name" />
            </MainNavigationItem>
          </MainNavigation>
          <h3 className="App__demo-title">A sample Button</h3>
          <Button className="some-class" href="#">
            Primary button as link
          </Button>
        </article>
        <Footer
          className="some-class"
          metaContent="WFP UI Kit version 1.0 – powered by RMT with full …"
          mobilePageWidth=""
          pageWidth="">
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
      </div>
    );
  }
}

export default App;
