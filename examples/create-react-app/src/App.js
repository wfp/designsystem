/*
Direct import via webpack-loader
import '@wfp/ui/source/globals/scss/styles.scss';
*/

import React, { Component } from 'react';
import { Button, Footer, Link } from '@wfp/ui';
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
