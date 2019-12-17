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
            <span>WFP</span>
            <span className="intro__heading__secondary">UI KIT</span>
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
        <div className="intro__links">
          <Button
            kind="inverse"
            style={{ marginRight: '0.5em' }}
            onClick={linkTo('Design|Getting started', 'Developers')}>
            Getting started
          </Button>

          <Button
            kind="inverse"
            style={{ marginLeft: '0.5em' }}
            href="https://github.com/wfp/ui">
            Follow on GitHub
          </Button>
        </div>
      </div>
    );
  }
}

storiesOf('Design|Getting started', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Introduction', () => (
    <div>
      <IntroAnimation />
      {/*<img
        alt="Hero"
        style={{
          width: '100%',
          height: 'auto',
        }}
        src={`${process.env.STORYBOOK_INTERNAL_ASSETS}internal/hero-image.jpg`}
      />*/}

      {/*<Button
          kind="inverse"
          style={{ marginRight: '0.5em' }}
          onClick={linkTo('Documentation', 'Usage')}>
          Getting started
        </Button>

        <Button
          kind="inverse"
          style={{ marginLeft: '0.5em' }}
          href="https://github.com/wfp/ui">
          Follow on GitHub
        </Button>*/}

      <Page>
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
  ));
