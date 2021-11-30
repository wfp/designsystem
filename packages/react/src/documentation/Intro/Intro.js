/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */

import React, { Component } from 'react';
import { linkTo } from '@storybook/addon-links';
import LinkTo from '@storybook/addon-links/react';
import Link from '../../components/Link';
import classnames from 'classnames';
import Page from '../Page';
import Blockquote from '../../components/Blockquote';
import Button from '../../components/Button';
import './_intro.scss';
//import { LightGlyph16 } from '@wfp/icons-react';

function Icon() {
  return (
    <svg
      width="57"
      height="57"
      viewBox="0 0 57 57"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M36 3.7h.5c.5 0 1 0 1.2-.3.2-.2.3-.5.3-.9s0-.7-.3-.8c-.2-.2-.5-.3-1-.3H36v2.3zm3.7-1.2c0 .8-.2 1.5-.8 2-.5.4-1.2.6-2.2.6H36v2.8h-1.7V0h2.5c1 0 1.7.2 2.2.6.5.4.7 1 .7 1.9zm-9.6 5.4h-1.6V0H33v1.4h-2.9v2h2.7v1.4h-2.7v3zm-4.5 0h-2l-1-4.2a19.3 19.3 0 01-.2-.9l-.1-.9a12.3 12.3 0 01-.2 1l-.2.9-1 4h-2L17 0h1.7l1 4.3.4 2a12.9 12.9 0 01.3-1.9L21.5 0H23l1.1 4.4a23.7 23.7 0 01.4 2 18.4 18.4 0 01.4-2L26 0h1.6l-2 7.9zm-4.1 27.5a14.8 14.8 0 00-5.6.9c3.4-3.5 7.3-3.4 8.3-3.4h11.2c.6 0 1 .6 1 1.3 0 .6-.4 1.2-1 1.2H21.5zm2.5 3c-3.3 0-4.2-1.8-9.2-.6 0 0-.1 0 0 0 2.7-2 5.8-1.8 7-1.8h13.6c.6 0 1 .6 1 1.2 0 .7-.4 1.2-1 1.2H24zm.3 3.1c-3.4 0-3.7-2.5-8.7-3v-.1c4.1-1 5.6.7 8 .7h11.8c.6 0 1 .5 1 1.2s-.4 1.2-1 1.2H24.3zm-.8-9.2a12 12 0 00-5.5 1.5c.4-.7 2.8-4 7-4h10.4c.6 0 1 .6 1 1.3 0 .6-.4 1.2-1 1.2H23.5zm15-6.7a.8.8 0 00-.4-.2.7.7 0 00-.4 0 1 1 0 00.1-.3.9.9 0 000-.5c-.4-.7.6-2.2.5-2.3-.1 0-.7 1.6-1.2 2.2a1 1 0 00-.2.5 1 1 0 000 .6l.4.2a.5.5 0 00.2.4l.5.2a.8.8 0 00.4 0c.8-.4 2.3-.8 2.2-1 0-.1-1.5.7-2 .2zm1.2-1a.6.6 0 00-.5-.3.7.7 0 00-.2 0 .7.7 0 000-.5c-.5-.7.5-2 .4-2-.1-.1-.7 1.3-1.2 1.9a.7.7 0 00-.2.4.8.8 0 00.1.5.5.5 0 00.3.2.5.5 0 00.2 0 .5.5 0 00.2.4.6.6 0 00.4.2.6.6 0 00.4 0c.6-.5 2-.8 2-1 0 0-1.4.7-2 .1zm1-1a.6.6 0 00-.5-.2.5.5 0 00-.2 0 .7.7 0 000-.4c-.2-.7.9-1.7.7-1.8 0 0-.7 1.2-1.3 1.6a.6.6 0 00-.2.3.6.6 0 000 .5l.3.2h.3a.4.4 0 000 .2l.1.3a.6.6 0 00.8 0c.5-.6 1.7-1 1.7-1.2-.1 0-1.2.8-1.8.4zm1.8-2.2c0-.2-1 .8-1.6.9a.7.7 0 00-.3.2.7.7 0 00-.3.3.4.4 0 00.1.3l.3.2a.7.7 0 00.4-.2.7.7 0 00.2-.4c.2-.6 1.3-1.2 1.2-1.3zm-17.8 1.3l-.2.8h-.3c-.4 0-.8-.4-.6-.9 0-.3.4-.4.7-.4l.5.1v.4zm-.4 2.2a6.8 6.8 0 000 .2c-.3-.2-.5-.5-.4-.8.1-.3.4-.3.5-.3l-.1.9zm-.4 2.7c0 .2-.3.2-.5.2-.5.2-1 .1-1.1-.5-.2-.6.3-.9.8-1 .3 0 .6 0 .8.2v1.1zm-1.6-3.2c.4 0 .8-.2 1 .2.4.4.3 1-.2 1.2-.3 0-.7.2-1 0-.4-.4-.4-1.2.2-1.4zm-.4-2c.4-.1.9-.3 1.2.1.3.4.2 1.1-.3 1.3-.4.1-.8.2-1.1 0-.4-.5-.4-1.3.2-1.4zm-.4 4.4c0 .4-.4.5-.7.5l-.8-1 .2-.2c.2-.2.6-.3.8-.2.4 0 .7.6.5 1zm-2-1.9c-.3-1 1.5-1.4 1.7-.4.3 1-1.4 1.4-1.7.4zm-.2-2c-.3-1 1.4-1.5 1.7-.5.3 1-1.5 1.5-1.7.5zm-.3-2c-.2-1 1.4-1.4 1.6-.5.3 1-1.3 1.4-1.6.5zm-.1 3.8l-.2.1-.7-.8.3-.3c.6-.3 1.2.7.6 1zm-1.5-1.9c-.4-.8 1-1.7 1.4-.8.4.8-1 1.8-1.4.8zm1.2-2.6c.4.8-1 1.6-1.3.8-.3-.7.8-1.6 1.3-.8zm-1.1-1.9c.2-.1.4-.2.6-.1.4.2.4.7 0 1 0 0-.3.2-.5.1-.4 0-.5-.7-.1-1zm0-1.6l.6-.2c.3.2.3.7 0 .9-.1 0-.3.2-.5.1-.3 0-.4-.6 0-.8zm.9-2.4c.2-.1.5-.2.7 0a.5.5 0 01-.2.8h-.6a.5.5 0 01.1-.8zm-.2 1.8c-.1-.6.9-.9 1-.3.2.6-.8.9-1 .3zm1.7 1c.2.7-.9 1-1.1.4-.2-.6.9-1 1-.4zM20 14c.2-.1.5-.2.7 0 .3.2.2.7 0 .8-.3.1-.6.2-.8 0-.2-.2-.2-.7.1-.8zm-.2 5.4c-.3 0-.6.2-.8 0-.4-.4-.3-1 .2-1.1.2-.1.6-.2.8 0 .3.3.3 1-.2 1.1zm0-3.3c-.2-.6.9-1 1-.4.3.7-.8 1-1 .4zm1.8 1.2c.2.7-1 1-1.3.4-.2-.8 1-1.2 1.3-.4zm0-2c.3 0 .5 0 .6.2.3.2.2.7-.2.8l-.5-.1c-.3-.3-.3-.8.1-.9zm1 1.5c.5 0 .7.6.5 1h-.7c-.4 0-.6-.5-.4-.8.2-.2.5-.2.7-.2zm-1.8 2.5c-.3-.9 1.2-1.3 1.4-.4.2.8-1.2 1.2-1.4.4zm.9 1c.3 0 .7-.1 1 .3.2.4 0 1-.5 1.1-.3.1-.7.1-1-.1-.2-.4-.1-1.2.5-1.3zm2-1.8c.4.2.6.7.2 1-.1.2-.5.2-.7.1-.4 0-.7-.7-.3-1 .2-.2.5-.2.7-.1zm.7 2c.3.4.2 1-.3 1-.3 0-.7 0-.9-.2-.3-.4-.2-1 .4-1 .2 0 .6 0 .8.2zm2-6.7h-.2c1.2 3.3-.3 5-1 7.2-.7-1.8 1.8-3.6.5-7h-.2c0 .3-.2 2.2-1.7 3.3a3 3 0 00-.7-1c-.2-.7-.6-1.5-1.5-1.8a2 2 0 00-.8-1c-.5-.3-1-.3-1.7 0-.7.1-1.2.4-1.5.9-.2.4-.2 1-.1 1.2-.6.7-.6 1.7-.6 2-.4 1-.2 2 0 2.4-.5 1.2 0 2.4 0 2.7l.1.4c-1.4-1.6-4.7-3.6-6-4.3a.1.1 0 00-.1 0 .2.2 0 000 .2c2.7 2.7 5.2 6.1 7.6 13a8.9 8.9 0 016.4-2.8h3.6c-2.3-8.5 1-11.5-2-15.4zm17 4.4c-.7-.2-4.9-1-9.5 7.7.6-3.2 2.7-7.1 3.3-8.2a.2.2 0 000-.2.1.1 0 00-.2 0A31.8 31.8 0 0032 29.2h2c.3-3.4 4.6-11.5 9.2-11h.1zM34 46.6l-1-4.4h-1.9c.3 1 .7 2.2 1.2 3.2 0 0 .1.1.2 0l.1-.1c0-1-.2-1.8-.4-2.7a18.5 18.5 0 001.7 4zm1.8-2l-.6-2.4h-.6a37.8 37.8 0 001 2.6.2.2 0 00.2-.2zM36 47l-.8-1.7a22.9 22.9 0 01-.7-1.8l-.5-1.4h-.6a24.2 24.2 0 002.4 5 .1.1 0 00.1 0zm1-21h-.3a13.4 13.4 0 00-2.1 3h.7c.3-.7 1.1-2.2 1.7-2.7a.2.2 0 000-.3zm-5.4-6c.6-1.1 1.6-2 2.4-3a11.7 11.7 0 01-.7.5s-.3 0-.5.2l-.4.4s-.3.1-.5.4a1 1 0 00-.2.5l-.5.4-.2.5a1.2 1.2 0 00-.3.4c-.1.2-.2.4-.1.5l-.1.2V21c.2-1.6.5-3 .9-4.5s1-3 1.8-4v-.1a.2.2 0 000-.2.1.1 0 00-.2 0 6.7 6.7 0 00-.8 1l-.5.5c-.1.3-.2.5-.1.6l-.5.5v.7c-.1 0-.3.2-.5.6v.7c-.1 0-.3.3-.4.7v.7c-.1 0-.3.3-.4.7v.7l-.3.6v.8s-.2.3-.2.7l.1.7-.2.6v.6l-.1.7v1.9a42.4 42.4 0 00.1 3h2.2l.1-2.4c.2-1.3.4-2.7 1-3.9a.1.1 0 000-.1 8 8 0 00-1.6 3.9 20.6 20.6 0 00-.2.8c.1-1 .2-2.2.5-3.3.3-1.3.8-2.5 2-3.2l-.1-.1H33c-.1 0-.4 0-.6.2l-.5.5c-.1-.1-.4 0-.6.4-.2.3-.3.6-.2.7l-.5.6v.7l-.3 1 .1-1.4a9 9 0 011.3-3.5zm6.7-3.6a.8.8 0 00-.5 0 .8.8 0 00-.3.2 1 1 0 000-.4.8.8 0 00-.3-.4c-.6-.6-.2-2.3-.3-2.4-.1 0-.1 1.7-.4 2.6a1 1 0 000 .5c0 .2.2.3.3.4 0 .1.2.2.3.1a.2.2 0 00.1 0c0 .2.2.3.3.4h.5a.8.8 0 00.4-.2c.6-.7 1.9-1.6 1.8-1.7-.1-.1-1.2 1.2-2 1zm2.4-2.1c0-.2-1 1-1.8.7a.6.6 0 00-.4 0 .7.7 0 00-.2.1v-.1a.7.7 0 00-.3-.4c-.6-.5-.1-2-.3-2-.1-.1-.1 1.4-.4 2.2a.7.7 0 000 .4c0 .2 0 .3.2.4a.5.5 0 00.4.1.5.5 0 00.2 0 .5.5 0 00.2.3.7.7 0 00.9-.2c.4-.7 1.6-1.4 1.5-1.5zm.3-1.5c-.1-.1-.8 1.1-1.5 1a.6.6 0 00-.4 0 .5.5 0 00-.2.1.7.7 0 00-.1-.5c-.5-.5.2-1.8 0-1.9 0 0-.3 1.4-.7 2a.6.6 0 000 .4l.1.4a.4.4 0 00.3.1.4.4 0 00.3-.1.4.4 0 00.3.4h.4a.6.6 0 00.3-.3c.3-.7 1.3-1.5 1.2-1.6zm-.4-1.7c-.2-.1-.7 1-1.2 1.4a.7.7 0 00-.3.3.7.7 0 00-.1.4.4.4 0 00.2.3.3.3 0 00.3 0 .7.7 0 00.3-.8c0-.6.9-1.6.8-1.6zm-10.5 31h-6a6.2 6.2 0 01-1-.1c1 1.4 2.5 2.6 4 3.3L28 48l1.7-.5-.7-2.5c.9-1.3 1.1-2.2 1.3-3zm15 10.2c-1.4.6-3.4.6-5 .2-3.7-1.1-7.8-3.3-11.7-1.5-4-1.8-8 .4-11.7 1.5-1.6.4-3.6.4-5-.2h-.1a8.5 8.5 0 008 1.5c2.6-.8 4.8-3.6 8-2.4-2.6 1-4.9 2.8-6.6 4.4l1.3 1.1c1.6-1.9 3.4-3.8 5.5-5l.6-.2.6.3c2.1 1.1 4 3 5.5 4.9l1.3-1c-1.7-1.7-4-3.5-6.5-4.5 3.1-1.2 5.3 1.6 8 2.4 2.7 1 5.7.2 8-1.4l-.1-.1zM21 49.9c-3.8-1-4.9-4.6-8.1-6.1 1 1.7 1.5 4.2 4.4 5.8-4.2-.8-6 .4-10.3-1.6 0 0-.1 0 0 0 1.4 2.1 4.8 3.6 9.5 3.2 1.7-.2 2.9-.9 4.5-1.3zm-8-2.3c-1.5-1.9-1-6-4.4-9.7.6 2.8.4 6 2.1 8.2-3.4-2.6-7-3.4-8.5-5.6.3 2.8 5.7 7.2 10.7 7.2zm-5.1-5c-1.6-3 .3-7.4-1.5-11.7h-.1c0 2.4-1.5 5.9-.6 8.5-2.3-3.2-4.1-4-5.6-7-.2 2.1.7 3.8 1.7 5.3a17.5 17.5 0 006 5v-.1zM6.8 24.9s0-.1-.1 0c-1.2 2.2-3.3 4-3.4 6.9C2.9 29.5.9 27 .9 23.7H.8C-.8 28 1.5 32 3.9 35.4c0-3.6 3-6.3 2.9-10.5zm1.5-5.6c-1.1 1.6-3.7 2.7-4.6 5 .3-2.6-.7-5.5.3-9h-.1a9.4 9.4 0 00-2 6c0 2.6.9 4.5 1.4 6.3.7-2.4 4-3.8 5-8.3zm3-5.3C9.6 15.5 6.8 17 6.2 18l.6-3.3c.3-1.4.6-2.8 1.4-4 0 0 0-.1 0 0-3.6 2.7-3.1 6.8-3.3 10l.1.1c2-2.2 5.5-3.6 6.5-6.6zM14 9c-3.1 0-5.4 2.7-6.4 6C12 12 11.7 10.7 14 9zm36 39c-4.4 2-6.1.8-10.3 1.6 2.9-1.6 3.4-4.1 4.4-5.8-3.2 1.5-4.3 5.1-8.1 6v.1c1.6.4 2.8 1.1 4.5 1.3 4.7.4 8.1-1 9.6-3.2zm4.8-7.5c-1.6 2.2-5 3-8.5 5.6 1.7-2.3 1.5-5.4 2.2-8.2h-.1c-3.3 3.7-2.9 7.8-4.4 9.7v.1c5 0 10.5-4.4 10.8-7.2zm2.2-8h-.1c-1.5 3-3.3 3.7-5.5 7 .8-2.7-.6-6.2-.7-8.6-1.9 4.3 0 8.8-1.5 11.7a17.5 17.5 0 006-4.9c1-1.5 1.9-3.2 1.8-5.2zm-.8-8.8c-.1 3.3-2 5.8-2.5 8.1 0-3-2.2-4.7-3.4-7-.3 4.3 2.8 7 2.7 10.5 0 0 0 .1.1 0 2.4-3.3 4.7-7.3 3.1-11.6zM55 21.2c0-2.2-.5-4.2-1.9-5.9.9 3.5-.1 6.4.2 9-1-2.3-3.5-3.4-4.6-5 1 4.5 4.3 6 5 8.3.5-1.8 1.4-3.7 1.3-6.4zm-6-10.7c.7 1.3 1 2.7 1.3 4L51 18c-.7-1-3.5-2.4-5.4-3.9 1 3.1 4.4 4.5 6.5 6.7 0-3.3.4-7.4-3.1-10.2zM43 9c2.3 1.6 2 2.9 6.4 6-1-3.3-3.3-6-6.4-6z"
        fill="#007DBC"
        fillRule="evenodd"
      />
    </svg>
  );
}

class IntroAnimation extends Component {
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
      </div>
    );
  }
}

const Intro = () => (
  <div>
    <div className="intro">
      <div className="intro__left">
        <h1>
          WFP <span className="intro__name">Design System</span>
          <span className="intro__version">
            v{process.env.STORYBOOK_NPM_VERSION}
          </span>
        </h1>
        <p>
          The World Food Programme’s Design System <br />
          provides you with guidelines, components and templates
          <br /> to boost the user experience of your products.
        </p>
        <LinkTo kind="getting-started-installing-the-kit--page">
          <Button
            kind="primary"
            //           icon={LightGlyph16}
            style={{ marginRight: '0.5em' }}>
            Getting started
          </Button>
        </LinkTo>

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
              WFP's new branding launched in early 2018 and will be implemented
              across the organization, strengthening WFP’s brand image through
              consistent representation.
            </p>
            <p>
              Building on this initiative, the World Food Programme’s user
              interface style guide emphasizes WFP’s commitment to establish and
              build the brand.
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
              The purpose of this project is to create a unified toolkit that is
              used by UX-designers and developers on their projects alike to
              ensure all WFP-branded projects are accessible, appealing and have
              a consistent look and feel across the board by following WFP’s
              design and implementation guidelines.
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
              By unifiying design elements into reusable components, development
              will simplify and accelerate the development of these digital
              products.
            </p>
            <p>
              The guide is a living document created to meet the needs of WFP’s
              front-end developers and designers. If there is a component or
              pattern you need or you have any other feedback, question or
              comment please contact us.
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
                <Link href="mailto:global.uikit@wfp.org">
                  global.uikit@wfp.org
                </Link>
                .
              </p>
            </Blockquote>
          </div>
        </div>
      </Page>
    </div>
  </div>
);

export default Intro;
