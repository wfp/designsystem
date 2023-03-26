import React from 'react';
import { Link } from '@un/react';
//import logo from '@un/logos/optimized/wfpLogoAcronymBlackAll.svg';
import Image from 'next/image';
import logos from '@un/logos/index.json';

import dynamic from 'next/dynamic';
import * as wfpLogos from '@un/logos/umd';
import styles from './logos.module.scss';

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const LogoElement = ({ color, logoKind, language, type, fileOptimized }) => {
  const fileTypes = ['.svg', /*'.png', '@4x.png',*/ '.png'];
  const backgroundColor = color === 'white' ? '#454646' : '#FFFFFF';
  const width =
    logoKind === 'standard' || logoKind === 'extended' ? 'auto' : 'auto';
  const height =
    logoKind === 'standard' || logoKind === 'extended' ? '40px' : '80px';

  const LogoElement =
    wfpLogos[
      `Type${capitalize(type)}Color${capitalize(color)}Language${capitalize(
        language
      )}_1x`
    ];
  return (
    <div className={styles.logoWrapper}>
      <div
        className={styles.logo}
        style={{
          backgroundColor: backgroundColor,
        }}>
        <LogoElement
          alt="WFP Logo"
          width="3em"
          height="auto"
          className={styles.logoImage}
        />
      </div>

      {fileTypes.map((fileType, i) => (
        <span key={i}>
          <Link
            small
            style={{ marginRight: '0.5em', fontSize: '0.7em' }}
            target="\_blank"
            href={`${process.env.STORYBOOK_ASSETS}`}>
            {fileType.replace('.', '')}
          </Link>
        </span>
      ))}
    </div>
  );
};

// extended logo versions are removed from documentation based on recommendations from CAM, but they still exist in assets for developers already using them in their code.
export default function Logos() {
  const logoKinds = [
    {
      key: 'standard',
      description: 'The Standard version of the WFP logo',
      link: 'http://brand.manuals.wfp.org/en/core-elements/logo/english-versions/',
    },
    {
      key: 'vertical',
      description: 'Vertical version of the WFP logo',
      link: 'http://brand.manuals.wfp.org/en/core-elements/logo/english-versions/',
    },
    {
      key: 'emblem',
      description:
        'The WFP emblem has been restyled to improve its legibility when it is reproduced on screen and in video, particularly at small sizes.',
      link: 'http://brand.manuals.wfp.org/en/core-elements/logo/emblem-restyling-2018/',
    },
    {
      key: 'acronym',
      description:
        "The acronym WFP is used globally, and must not be translated. It is usually used as part of WFP's logo. However, where the upmost simplicity and immediate recognition are necessary, the acronym can be used alone if it will aid legibility.",
      link: 'http://brand.manuals.wfp.org/en/core-elements/logo/acronym/',
    },
    {
      key: 'sdg',
      title: 'The Sustainable Development Goals (SDGs)',
      description:
        "The Sustainable Development Goals (SDGs) logo, including the colour wheel can be used in addition to WFP's logo.",
      link: 'https://www.un.org/sustainabledevelopment/news/communications-material/',
    },
  ];
  const colors = ['blue', 'black', 'white'];
  const colorsSdg = ['colour'];
  const languages = ['en', 'es', 'fr', 'ar'];

  console.log('logos', logos, Object.values(logos));

  const colorList = logoKinds.map((logoKind, i) => (
    <div key={i} style={{ marginBottom: '1em' }}>
      <div style={{ marginBottom: '1em' }} />
      <h3>{logoKind.title ? logoKind.title : logoKind.key}</h3>
      <p>{logoKind.description}</p>
      <Link href={logoKind.link}>Additional information</Link>
      {(logoKind.key === 'sdg' ? colorsSdg : colors).map((color, i) => {
        const filteredLogos = Object.values(logos).filter(
          (l) => l.type === logoKind.key && l.color === color
        );
        return (
          <React.Fragment key={i}>
            <h4>{color}</h4>

            <div key={i} className={styles.logoKind}>
              {filteredLogos.map((logo, i) => (
                <LogoElement {...logo} key={i} />
              ))}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  ));
  return <>{colorList}</>;
}
