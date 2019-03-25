/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../components/Link';
import Blockquote from '../components/Blockquote';
import Page from './Page';

const LogoElement = ({ color, logoKind, src }) => {
  const fileTypes = ['.svg', /*'.png', '@4x.png',*/ '.png'];
  const backgroundColor = color === 'white' ? '#454646' : '#FFFFFF';
  const width =
    logoKind === 'standard' || logoKind === 'extended' ? 'auto' : 'auto';
  const height =
    logoKind === 'standard' || logoKind === 'extended' ? '40px' : '80px';
  return (
    <div style={{ display: 'inline-block', marginRight: '10px' }}>
      <div
        style={{
          border: '1px solid #E5E5E5',
          backgroundColor: backgroundColor,
          padding: '0.7em',
        }}>
        <img
          alt="WFP Logo"
          className="storybook--logo__element"
          style={{
            width: width,
            height: height,
          }}
          src={`${process.env.STORYBOOK_ASSETS}${src}.svg`}
        />
      </div>
      <br />
      {fileTypes.map(fileType => (
        <span>
          <Link
            small
            style={{ marginRight: '0.5em', fontSize: '0.7em' }}
            target="_blank"
            href={`${process.env.STORYBOOK_ASSETS}${src}${fileType}`}>
            {fileType}
          </Link>
        </span>
      ))}
    </div>
  );
};

storiesOf('Documentation|General', module).add('Logos', () => {
  const logoKinds = [
    {
      key: 'standard',
      description: '',
      link:
        'http://brand.manuals.wfp.org/en/core-elements/logo/english-versions/',
    },
    {
      key: 'extended',
      description: '',
      link:
        'http://brand.manuals.wfp.org/en/core-elements/logo/english-versions/',
    },
    {
      key: 'vertical',
      description: '',
      link:
        'http://brand.manuals.wfp.org/en/core-elements/logo/english-versions/',
    },
    {
      key: 'emblem',
      description:
        'The WFP emblem has been restyled to improve its legibility when it is reproduced on screen and in video, particularly at small sizes.',
      link:
        'http://brand.manuals.wfp.org/en/core-elements/logo/emblem-restyling-2018/',
    },
    {
      key: 'acronym',
      description:
        "The acronym WFP is used globally, and must not be translated. It is usually used as part of WFP's logo. However, where the upmost simplicity and immediate recognition are necessary, the acronym can be used alone if it will aid legibility.",
      link: 'http://brand.manuals.wfp.org/en/core-elements/logo/acronym/',
    },
  ];
  const colors = ['blue', 'black', 'white'];
  const languages = ['en', 'es', 'fr', 'ar'];

  const colorList = logoKinds.map(logoKind => (
    <div style={{ marginBottom: '1em' }}>
      <div style={{ marginBottom: '1em' }} />
      <h2>{logoKind.key}</h2>
      <p>{logoKind.description}</p>
      <Link href={logoKind.link}>Additional information</Link>
      {colors.map(color => {
        return (
          <div>
            <h4>{color}</h4>

            <div>
              {logoKind.key === 'emblem' || logoKind.key === 'acronym' ? (
                <LogoElement
                  color={color}
                  logoKind={logoKind.key}
                  src={`logos/${logoKind.key}/wfp-logo-${
                    logoKind.key
                  }-${color}`}
                />
              ) : (
                <div>
                  {languages.map(language => (
                    <LogoElement
                      color={color}
                      logoKind={logoKind.key}
                      src={`logos/${logoKind.key}/${language}/wfp-logo-${
                        logoKind.key
                      }-${color}-${language}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  ));
  return (
    <Page
      title="Logos"
      subTitle="The new Logos in various sizes"
      pageWidth="md">
      <p>
        WFP's logo is available in four versions: standard, extended, vertical
        and emblem. Each has its own purpose and should be used appropriately,
        as per official branding guidelines, depending on available screen space
        and target audience.
      </p>
      <p>
        You can find extended information about the Logo in the{' '}
        <Link
          href="http://brand.manuals.wfp.org/en/core-elements/logo/emblem-restyling-2018/"
          target="_blank">
          Branding Guide
        </Link>
        .
      </p>
      <Blockquote title="Which file type shall I use?">
        <p>
          Whenever possible use the svg files, since they are optimized with a
          small file size and will also serve HiDPI devices without problems.
          For print please use{' '}
          <Link href="http://newgo.wfp.org/collection/logos" target="_blank">
            these
          </Link>{' '}
          files.
        </p>
      </Blockquote>
      <div>{colorList}</div>
    </Page>
  );
});
