/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import Link from '../components/Link';
import Page from './Page';
import Blockquote from '../components/Blockquote';
import Wrapper from '../components/Wrapper';
import Button from '../components/Button';

/* const Box = ({ title, content }) => (
  <div>
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
); */

storiesOf(' Documentation', module).add('Introduction', () => (
  <div>
    <Wrapper
      pageWidth="narrow"
      background="dark"
      backgroundStyle={{
        color: '#FFFFFF',
        padding: '8rem 0',
        textAlign: 'center',
      }}>
      <h1
        style={{
          fontSize: '6rem',
          marginBottom: '0.5em',
          fontWeight: '100',
        }}>
        <span
          style={{
            marginBottom: '0em',
            letterSpacing: '0.02em',
            fontWeight: '700',
          }}>
          WFP
        </span>
        <span style={{ marginLeft: '0.3em', letterSpacing: '0.05em' }}>
          UI KIT
        </span>
      </h1>

      <Button
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
      </Button>
    </Wrapper>

    <Page>
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
              marginLeft: '0em',
            }}
            src={`${
              process.env.STORYBOOK_INTERNAL_ASSETS
            }internal/branding.svg`}
          />
        </div>

        <div className="col-xs">
          <h3>About the UI Kit</h3>
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
            src={`${
              process.env.STORYBOOK_INTERNAL_ASSETS
            }internal/usability.svg`}
          />
        </div>

        <div className="col-xs">
          <h3>Purpose</h3>
          <p>
            The purpose of this project is to create a unified toolkit that is
            used by UX-designers and developers on their projects alike to
            ensure all WFP-branded projects are accessible, appealing and have a
            consistent look and feel across the board by following WFP’s design
            and implementation guidelines.
          </p>
          <p>
            The guidelines contained in this guide are to be applied to all
            WFP's digital products such as websites, web applications, internal
            systems and other.
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
          <h3>Toolkit</h3>
          <p>
            By unifiying design elements into reusable components, development
            will simplify and accelerate the development of these digital
            products.
          </p>
          <p>
            The guide is a living document created to meet the needs of WFP’s
            front-end developers and designers. If there is a component or
            pattern you need or you have any other feedback, question or comment
            please contact us.
          </p>
        </div>
      </div>
      <Blockquote title="Your Feedback">
        <p>
          Your feedback is highly appreciated! You can use the Feedback Button
          on the right, create a{' '}
          <Link href="https://github.com/wfp/ui/issues" target="_blank">
            new Issue
          </Link>{' '}
          on GitHub or send an email to{' '}
          <Link href="mailto:robert.guehne@wfp.org">robert.guehne@wfp.org</Link>.
        </p>
      </Blockquote>
    </Page>
  </div>
));
