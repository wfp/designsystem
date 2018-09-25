/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import Page from './Page';
import Blockquote from '../components/Blockquote';
import Link from '../components/Link';
import Icon from '../components/Icon';
import iconList from '@wfp/icons/dist/carbon-icons.json';

storiesOf(' Documentation', module).addWithInfo('Icons', ``, () => (
  <Page title="Icons" subTitle="Introduction to the new WFP UI Kit">
    <p>
      For Usage please take a look at the{' '}
      <Link onClick={linkTo('Icon', 'Default')}>Icon-Component</Link> or{' '}
      <Link
        onClick={linkTo(
          ' Documentation.Getting Started',
          'Usage for Developers'
        )}>
        Usage for Developers
      </Link>.
    </p>

    <Blockquote title="Notice">
      WFP UI is using a fork of{' '}
      <Link href="https://github.com/IBM/carbon-icons" target="_blank">
        Carbon Icons
      </Link>. You can find additional information in the{' '}
      <Link
        href="http://www.carbondesignsystem.com/style/iconography/library"
        target="_blank">
        Carbon Design System
      </Link>
    </Blockquote>

    <h3>List of Icons</h3>

    {iconList.map(icon => {
      const iconName = icon.name.replace('icon--', '');
      return (
        <div
          style={{
            display: 'inline-block',
            border: '1px solid #E5E5E5',
            height: '24%',
            width: '24%',
            marginRight: '1%',
            marginBottom: '1%',
            textAlign: 'center',
            fontSize: '0.6em',
          }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '150px',
              height: '100px',
            }}>
            <Icon
              name={iconName}
              description="WFP"
              className="wfp--footer-cta-logo"
            />
          </div>
          <div
            style={{
              background: '#F4F4F4',
              lineHeight: '3em',
            }}>
            {iconName}
          </div>
        </div>
      );
    })}
  </Page>
));
