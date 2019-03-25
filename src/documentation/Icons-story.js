/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import Page from './Page';
import Blockquote from '../components/Blockquote';
import Link from '../components/Link';
import Icon from '../components/Icon';
import { Module, ModuleFooter } from '../components/Module';
import iconList from '@wfp/icons/dist/carbon-icons.json';
import { iconDownloadGlyph } from '@wfp/icons';

import Button from '../components/Button';

import IconConverter from './IconConverter';

import { Tooltip } from 'react-tippy';
import tooltipStyle from '../components/Tooltip';

function camelCaseFromHyphnated(s) {
  return s.replace(/\-+([A-z])/g, (match, token) => token.toUpperCase());
}

const IconList = ({ icon }) => {
  const iconName = icon.name.replace('icon--', '');
  return (
    <Tooltip
      interactive
      html={
        <div
          style={{
            lineHeight: '1.2em',
            padding: '0.2em 0.5em',
            minHeight: '3rem',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Icon
            icon={icon}
            description="WFP"
            width="150"
            height="150"
            className="wfp--footer-cta-logo"
          />
          <div
            className="wfp--inline-highlight"
            style={{
              fontFamily: 'monospace',
              display: 'block',
              marginTop: '1rem',
              marginBottom: '1rem',
              fontWeight: 'bold',
            }}>
            {iconName}
          </div>

          <div
            className="wfp--inline-highlight"
            style={{
              fontFamily: 'monospace',
              display: 'block',
              whiteSpace: 'pre',
              marginTop: '0.2rem',
              marginBottom: '1rem',
            }}>
            {`import
  {${camelCaseFromHyphnated('icon--' + iconName)}} 
from '@wfp/icons'`}
          </div>
          <Button
            icon={iconDownloadGlyph}
            href={`https://github.com/wfp/carbon-icons/blob/master/src/svg/${iconName}.svg`}
            small>
            View on GitHub
          </Button>
        </div>
      }
      position="top"
      trigger="click"
      {...tooltipStyle}
      style={{
        width: '12.5%',
      }}>
      <Module light withHover>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            height: '55px',
          }}>
          <Icon
            icon={icon}
            description="WFP"
            width="39"
            className="wfp--footer-cta-logo"
          />
        </div>
        <ModuleFooter
          style={{
            padding: '0.2em',
            fontSize: '0.45em',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '2rem',
          }}>
          <span>{iconName}</span>
        </ModuleFooter>
      </Module>
    </Tooltip>
  );
};

const wrapperStyle = { display: 'flex', flexWrap: 'wrap', margin: '0 -0.7em' };

storiesOf('Documentation|General', module).add('Icons', () => (
  <Page title="Icons" subTitle="Icons & Logos for User Interfaces">
    <p>
      For Usage please take a look at the{' '}
      <Link onClick={linkTo('Icon', 'Default')}>Icon-Component</Link> or{' '}
      <Link
        onClick={linkTo(
          ' Documentation.Getting Started',
          'Usage for Developers'
        )}>
        Usage for Developers
      </Link>
      .
    </p>

    <Blockquote title="Notice">
      WFP UI Icons is using a fork of{' '}
      <Link href="https://github.com/IBM/carbon-icons" target="_blank">
        Carbon Icons
      </Link>
      . You can find additional information in the{' '}
      <Link
        href="http://www.carbondesignsystem.com/guidelines/iconography"
        target="_blank">
        Carbon Design System
      </Link>
    </Blockquote>

    <h3>Generate an custom Icon</h3>
    <p>
      Generate a custom icon which can be used inside the{' '}
      <span className="wfp--inline-highlight">icon</span> prop of the{' '}
      <span className="wfp--inline-highlight">{`<Icon/>`}</span> component. SVG
      images which are generated with Sketch App works best. Also consider
      optimizing the svg image before.
    </p>
    <IconConverter />

    <h3>Humanitarian Thematic Icon Set</h3>
    <p>
      The <i>UN Office for the Coordination of Humanitarian Affairs (OCHA)</i>{' '}
      has established icons to represent humanitarian assistance and to ensure
      consistency in use, these have been shared widely with UN agencies and
      NGOs.{' '}
      <Link
        href="https://www.unocha.org/story/iconography-part-un%E2%80%99s-humanitarian-efforts-ocha-releases-new-humanitarian-icons"
        target="_blank">
        Visit OCHA Icon Library
      </Link>
    </p>
    <p>
      WFP has also created some{' '}
      <Link
        href="http://newgo.wfp.org/documents/humanitarian-thematic-icon-set-png"
        target="_blank">
        WFP specific icons
      </Link>{' '}
      to add to this set.
    </p>
    <h3>List of Icons</h3>

    <h4>WFP Logos</h4>
    <div style={wrapperStyle}>
      {iconList
        .filter(function(icon) {
          return icon.name.includes('logo');
        })
        .map(icon => {
          return <IconList icon={icon} />;
        })}
    </div>

    <h4>WFP Humanitatian Icons</h4>
    <div style={wrapperStyle}>
      {iconList
        .filter(function(icon) {
          return icon.name.includes('wfp-hum--');
        })
        .map(icon => {
          return <IconList icon={icon} />;
        })}
    </div>

    <h4>UI Icons</h4>

    <div style={wrapperStyle}>
      {iconList
        .filter(function(icon) {
          return (
            !icon.name.includes('wfp-hum--') && !icon.name.includes('logo')
          );
        })
        .map(icon => {
          return <IconList icon={icon} />;
        })}
    </div>
  </Page>
));
