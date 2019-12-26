/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import Link from '../../components/Link';
import classnames from 'classnames';
import Page from '../Page';
import Blockquote from '../../components/Blockquote';
import Button from '../../components/Button';
import './_intro.scss';
import { iconLightGlyph } from '@wfp/icons';

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="146"
      height="123"
      viewBox="0 0 146 123">
      <path
        fill="#0078AF"
        fillRule="evenodd"
        d="M115.3 111.3a22 22 0 01-13 .5c-9.4-2.9-19.8-8.4-29.7-3.8-10-4.6-20.4 1-29.8 3.8-4.1 1.1-9.1 1-13-.5 0 0-.1 0 0 .2a21.6 21.6 0 0020.2 3.7c6.7-2.1 12.4-9.2 20.3-6.2-6.3 2.5-12.2 7-16.7 11.3L57 123a55 55 0 0114-12.5c.7-.4 1.2-.6 1.7-.6s.9.2 1.6.6c5.3 3 9.9 7.7 14 12.5l3.3-2.7A54.8 54.8 0 0074.8 109c8-3 13.6 4.1 20.3 6.2 7 2.5 14.7.5 20.3-3.7 0-.1 0-.3-.1-.2m-61.8-6.5c-9.8-2.3-12.5-11.5-20.7-15.5 0 0-.1 0 0 .1 2.5 4.3 3.9 10.8 11.3 14.8 0 0 0 .1 0 0-10.7-2-15.2.9-26.3-4.2-.1 0-.2 0-.2.2 3.7 5.3 12.4 9 24.4 8 4.3-.4 7.4-2.2 11.5-3.2.1 0 .1-.2 0-.2M33 99.2c-3.7-4.9-2.7-15.3-11-24.8h-.2c1.6 7 1 15 5.5 20.9 0 0 0 .1-.1 0C18.5 88.7 9.6 86.6 5.7 81c0-.1-.2 0-.2 0 1 7.2 14.7 18.3 27.4 18.3 0 0 .1 0 0-.1m-13-13c-4-7.4.9-18.7-3.7-29.6 0-.1-.2-.1-.2 0-.1 6-3.8 15-1.6 21.7C8.5 70 4 68.3.2 60.6c-.1-.2-.3-.1-.3 0C-.2 65.8 2 70 4.7 74A44.6 44.6 0 0020 86.2m-2.7-45c0-.2-.2-.2-.3 0-3 5.6-8.4 10.1-8.6 17.7-1-5.8-6-12.3-6.2-20.7 0-.2-.2-.2-.2 0C-2.1 49 3.7 59.3 10 68l.1-.1c-.2-9 7.6-15.9 7.2-26.7M21 27c-2.8 4-9.3 6.9-11.7 12.6 0 .1-.1 0 0 0 .9-6.5-1.6-14 .7-22.5 0-.2-.1-.2-.2-.2a24 24 0 00-5 15C4.6 38.6 7 43.6 8.2 48.2h.2c1.7-6 10.2-9.7 12.8-21 0-.2 0-.3-.2-.2m8-13.4c-4.7 3.7-12 7.3-13.5 9.9L17 15c.8-3.6 1.5-7 3.4-10.2.1 0 0-.2-.1-.1-9 7.1-7.7 17.4-8 25.9 0 0 0 .1 0 0 5.4-5.7 14-9 16.7-16.9 0 0 0-.1-.2 0m6.7-13c-8 .2-13.8 7-16.3 15.5h.1c11-8 10.4-11.4 16.3-15.3.1 0 0-.2 0-.2m91.6 99.3c-11.1 5-15.6 2.2-26.3 4.3v-.1c7.4-4 8.8-10.5 11.4-14.8 0 0 0-.2-.1-.1-8.2 4-10.9 13.2-20.7 15.5-.1 0-.1.2 0 .2 4.1 1 7.2 2.8 11.5 3.2 12 1 20.7-2.7 24.4-8 0-.1 0-.2-.2-.2m12.1-19c-4 5.5-12.8 7.6-21.5 14.4 0 0-.1 0 0-.1 4.3-5.8 3.8-13.8 5.4-20.8 0-.1 0-.2-.1-.1-8.4 9.5-7.4 20-11 24.8-.1 0 0 .1 0 .1 12.7 0 26.4-11.1 27.4-18.3 0 0-.1-.1-.2 0m5.7-20.4c0-.1-.2-.2-.2 0-3.8 7.6-8.4 9.4-14.1 17.7h-.1c2.2-6.8-1.5-15.7-1.6-21.7 0-.1-.2-.1-.2 0-4.6 11 .2 22.2-3.8 29.6 0 .1 0 .2.2.2 5.6-2.8 11-7 15.1-12.4 2.6-4 5-8.2 4.7-13.4M143 38c0-.1-.2 0-.2 0-.2 8.5-5.1 15-6.1 20.8h-.1c-.2-7.6-5.6-12-8.6-17.8h-.3c-.4 11 7.4 17.7 7.2 26.8 0 0 .1.1.2 0 6.2-8.5 12-18.9 8-29.8m-3-6.2a24 24 0 00-5-15s-.2 0-.2.2c2.3 8.5-.2 16 .8 22.5 0 0-.1.1-.1 0C133.3 34 126.8 31 124 27c-.1 0-.3 0-.2.1 2.6 11.4 11.1 15 12.8 21 0 .2.2.2.2 0 1.2-4.5 3.6-9.5 3.3-16.2M124.7 4.7s-.2 0-.1.1c2 3.2 2.6 6.6 3.4 10.2l1.8 8.4s-.1.1-.1 0c-1.6-2.5-8.8-6-13.5-9.8l-.2.1c2.7 7.8 11.3 11.2 16.6 17l.2-.1c-.4-8.5 1-18.8-8-26m-15.3-4c-.2 0-.2.3-.1.3 6 3.9 5.3 7.3 16.3 15.3C123.4 7.6 117.5.9 109.6.7m-46.8 36h7.7l-9.1 35h-7.7l-7.2-23.2-7.1 23.2h-7.9l-9-35h7.9l5.5 22.4 7-22.4h7.6l6.9 22.5 5.4-22.5m11 35v-35h21.6v7.4H81.3v7.4h11.3v7.1H81.3v13h-7.5m38-19.2c2.8 0 4.7-1.7 4.7-4.4 0-2.8-1.9-4.5-4.7-4.5h-4.4v9h4.4zm-4.4 6.7v12.6h-7.5v-35h12.6c6.8 0 11.5 4.7 11.5 11.2 0 6.6-4.7 11.2-11.5 11.2h-5.1z"></path>
    </svg>
  );
}

export default class IntroAnimation extends Component {
  constructor(props) {
    super(props);
    this.timeout = null;
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.timer();
  }

  timer = () => {
    if (this.timer) {
      clearTimeout(this.timeout);
    }
    const newCount = this.state.count <= 1 ? this.state.count + 1 : 0;
    this.setState({ count: newCount });
    this.timeout = setTimeout(this.timer, 4000);
  };

  render() {
    const classNames = classnames('intro-animation', {
      'intro-animation--mobile': this.state.count === 0,
      'intro-animation--tablet': this.state.count === 1,
      'intro-animation--desktop': this.state.count === 2,
    });

    return (
      <div className="intro-hero" onClick={() => this.timer()}>
        <div className={classNames}>
          <h1 className="intro__heading">
            <Icon />

            {/*<span>WFP</span>
            <span className="intro__heading__secondary">UI KIT</span>*/}
          </h1>
          <div className="intro__monitor">
            <div className="intro__dots">
              <div className="intro__dots__dot intro__dots__first" />
              <div className="intro__dots__dot intro__dots__second" />
              <div className="intro__dots__dot intro__dots__third" />
            </div>
            <div className="intro__line"></div>
          </div>
        </div>
        {/*<div className="intro__links">
          <Button
            kind="inverse"
            style={{ marginRight: '0.5em' }}
            onClick={linkTo('Getting started|Getting started', 'Developers')}>
            Getting started
          </Button>

          <Button
            kind="inverse"
            style={{ marginLeft: '0.5em' }}
            href="https://github.com/wfp/ui">
            Follow on GitHub
          </Button>
    </div>*/}
      </div>
    );
  }
}

storiesOf('Getting started|Getting started', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Introduction', () => (
    <div>
      <div className="intro">
        <div className="intro__left">
          <h1>
            WFP <span className="intro__name">UI-Kit</span>
            <span className="intro__version">v1.4</span>
          </h1>
          <p>
            The World Food Programme’s User Interface Kit provides you with
            guidelines, components and templates to boost the user experience of
            your products.
          </p>
          <Button
            kind="primary"
            icon={iconLightGlyph}
            style={{ marginRight: '0.5em' }}
            onClick={linkTo('Getting started|Getting started', 'Developers')}>
            Getting started
          </Button>

          <Button
            kind="secondary"
            style={{ marginLeft: '0.5em' }}
            href="https://github.com/wfp/ui">
            Follow on GitHub
          </Button>
        </div>
        <div className="intro__right">
          <IntroAnimation />
        </div>
        {/*<img
        alt="Hero"
        style={{
          width: '100%',
          height: 'auto',
        }}
        src={`${process.env.STORYBOOK_INTERNAL_ASSETS}internal/hero-image.jpg`}
      />*/}
      </div>
      <div className="intro-content">
        <Page>
          {/* <h1>WFP UI Kit</h1> */}

          <div className="row" style={{ margin: '0' }}>
            <div
              className="col-xs-12 col-md-3 col-lg-3"
              style={{ textAlign: 'left' }}>
              <img
                alt="Usability"
                style={{
                  width: '80px',
                  height: 'auto',
                  marginTop: '3em',
                  marginLeft: '0em',
                }}
                src={`${process.env.STORYBOOK_INTERNAL_ASSETS}internal/branding.svg`}
              />
            </div>

            <div className="col-xs">
              <h3 className="wfp--story__content-title">About the UI Kit</h3>
              <p>
                The new WFP UI Kit is based on the{' '}
                <Link href="http://brand.manuals.wfp.org/" target="_blank">
                  World Food Programme’s Branding Guidance
                </Link>{' '}
                WFP's new branding launched in early 2018 and will be
                implemented across the organization, strengthening WFP’s brand
                image through consistent representation.
              </p>
              <p>
                Building on this initiative, the World Food Programme’s user
                interface style guide emphasizes WFP’s commitment to establish
                and build the brand.
              </p>
            </div>
          </div>

          <div className="row" style={{ margin: '2em 0' }}>
            <div
              className="col-xs-12 col-md-3 col-lg-3"
              style={{ textAlign: 'left' }}>
              <img
                alt="Usability"
                style={{
                  width: '80px',
                  height: 'auto',
                  marginTop: '3em',
                  marginLeft: '0.2em',
                }}
                src={`${process.env.STORYBOOK_INTERNAL_ASSETS}internal/usability.svg`}
              />
            </div>

            <div className="col-xs">
              <h3 className="wfp--story__content-title">Purpose</h3>
              <p>
                The purpose of this project is to create a unified toolkit that
                is used by UX-designers and developers on their projects alike
                to ensure all WFP-branded projects are accessible, appealing and
                have a consistent look and feel across the board by following
                WFP’s design and implementation guidelines.
              </p>
              <p>
                The guidelines contained in this guide are to be applied to all
                WFP's digital products such as websites, web applications,
                internal systems and other.
              </p>
            </div>
          </div>

          <div className="row" style={{ margin: '2em 0' }}>
            <div
              className="col-xs-12 col-md-3 col-lg-3"
              style={{ textAlign: 'left' }}>
              <img
                alt="Toolkit"
                style={{
                  width: '100px',
                  height: 'auto',
                  marginTop: '2em',
                  marginLeft: '0em',
                }}
                src={`${process.env.STORYBOOK_INTERNAL_ASSETS}internal/toolkit.svg`}
              />
            </div>

            <div className="col-xs">
              <h3 className="wfp--story__content-title">Toolkit</h3>
              <p>
                By unifiying design elements into reusable components,
                development will simplify and accelerate the development of
                these digital products.
              </p>
              <p>
                The guide is a living document created to meet the needs of
                WFP’s front-end developers and designers. If there is a
                component or pattern you need or you have any other feedback,
                question or comment please contact us.
              </p>

              <Blockquote title="Your Feedback">
                <p>
                  Your feedback is highly appreciated! You can use the{' '}
                  <Link
                    href="https://wfp.slack.com/archives/C53A4FMFG"
                    target="_blank">
                    #ux-ui
                  </Link>{' '}
                  channel on Slack, create a{' '}
                  <Link href="https://github.com/wfp/ui/issues" target="_blank">
                    new Issue
                  </Link>{' '}
                  on GitHub or send an email to{' '}
                  <Link href="mailto:robert.guehne@wfp.org">
                    robert.guehne@wfp.org
                  </Link>
                  .
                </p>
              </Blockquote>
            </div>
          </div>
        </Page>
      </div>
    </div>
  ));
