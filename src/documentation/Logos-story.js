/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../components/Link';
import Blockquote from '../components/Blockquote';
import Page from './Page';

const LogoElement = ({ color, logoKind, src }) => {
  const fileTypes = ['.svg', /*'.png', '@4x.png',*/ '@8x.png'];
  const backgroundColor = color === 'white' ? '#454646' : '#FFFFFF';
  const width =
    logoKind === 'standard' || logoKind === 'extended' ? 'auto' : 'auto';
  const height =
    logoKind === 'standard' || logoKind === 'extended' ? '50px' : '90px';
  return (
    <div style={{ display: 'inline-block', marginRight: '10px' }}>
      <img
        alt="WFP Logo"
        style={{
          border: '1px solid #E5E5E5',
          backgroundColor: backgroundColor,
          width: width,
          height: height,
        }}
        src={`${src}.svg`}
      />
      <br />
      {fileTypes.map(fileType => (
        <span>
          <Link
            small
            style={{ marginRight: '0.5em', fontSize: '0.7em' }}
            target="_blank"
            href={`${src}${fileType}`}>
            {fileType}
          </Link>
        </span>
      ))}
    </div>
  );
};

storiesOf(' Documentation', module).addWithInfo('Logos', ``, () => {
  const logoKinds = ['standard', 'extended', 'vertical', 'emblem'];
  const colors = ['blue', 'black', 'white'];
  const languages = ['en', 'es', 'fr', 'ar'];

  const colorList = logoKinds.map(logoKind => (
    <div style={{ marginBottom: '1em' }}>
      <div style={{ marginBottom: '1em', backgroundColor: logoKind.hex }} />
      <h2 className="before--img">{logoKind}</h2>
      {colors.map(color => {
        return (
          <div>
            <h4>{color}</h4>
            <div>
              {logoKind === 'emblem' ? (
                <LogoElement
                  color={color}
                  logoKind={logoKind}
                  src={`logos/${logoKind}/wfp-logo-${logoKind}-${color}`}
                />
              ) : (
                <div>
                  {languages.map(language => (
                    <LogoElement
                      color={color}
                      logoKind={logoKind}
                      src={`logos/${logoKind}/${language}/wfp-logo-${logoKind}-${color}-${language}`}
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
        </Link>.
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
