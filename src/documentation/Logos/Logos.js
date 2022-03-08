import React from 'react';
import Link from '../../components/Link';

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
        }}
      >
        <img
          alt="WFP Logo"
          className="storybook--logo\_\_element"
          style={{
            width: width,
            height: height,
            border: 'none',
          }}
          src={`${process.env.STORYBOOK_ASSETS}${src}.svg`}
        />
      </div>
      <br />
      {fileTypes.map((fileType) => (
        <span>
          <Link
            small
            style={{ marginRight: '0.5em', fontSize: '0.7em' }}
            target="\_blank"
            href={`${process.env.STORYBOOK_ASSETS}${src}${fileType}`}
          >
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
      description: '',
      link: 'https://multimedia.wfp.org/asset-management/20SIJQJHTQOC?WS=20SI40ER8SG',
    },
    {
      key: 'vertical',
      description: '',
      link: 'https://multimedia.wfp.org/asset-management/20SIJQJHTQOC?WS=20SI40ER8SG',
    },
    {
      key: 'emblem',
      description:
        'The WFP emblem has been restyled to improve its legibility when it is reproduced on screen and in video, particularly at small sizes.',
      link: 'https://multimedia.wfp.org/asset-management/20SIJQJHTQOC?WS=20SI40ER8SG',
    },
    {
      key: 'acronym',
      description:
        "The acronym WFP is used globally, and must not be translated. It is usually used as part of WFP's logo. However, where the upmost simplicity and immediate recognition are necessary, the acronym can be used alone if it will aid legibility.",
      link: 'https://multimedia.wfp.org/asset-management/20SIJQJHTQOC?WS=20SI40ER8SG',
    },
    // {
    //   key: 'sdg',
    //   title: 'The Sustainable Development Goals (SDGs)',
    //   description:
    //     "The Sustainable Development Goals (SDGs) logo, including the colour wheel can be used in addition to WFP's logo.",
    //   link:
    //     'https://www.un.org/sustainabledevelopment/news/communications-material/',
    // },
  ];
  const colors = ['blue', 'black', 'white'];
  const colorsSdg = ['colour'];
  const languages = ['en', 'es', 'fr', 'ar'];

  const colorList = logoKinds.map((logoKind) => (
    <div style={{ marginBottom: '1em' }}>
      <div style={{ marginBottom: '1em' }} />
      <h2>{logoKind.title ? logoKind.title : logoKind.key}</h2>
      <p>{logoKind.description}</p>
      <Link href={logoKind.link}>Additional information</Link>
      {(logoKind.key === 'sdg' ? colorsSdg : colors).map((color) => {
        return (
          <div>
            <h4>{color}</h4>

            <div>
              {logoKind.key === 'sdg' ? (
                <LogoElement
                  color={color}
                  logoKind={logoKind.key}
                  src={`logos/latest/sdg-logo-circle`}
                />
              ) : logoKind.key === 'emblem' || logoKind.key === 'acronym' ? (
                <LogoElement
                  color={color}
                  logoKind={logoKind.key}
                  src={`logos/latest/wfp-logo-${logoKind.key}-${color}-all`}
                />
              ) : (
                <div>
                  {languages.map((language) => (
                    <LogoElement
                      color={color}
                      logoKind={logoKind.key}
                      src={`logos/latest/wfp-logo-${logoKind.key}-${color}-${language}`}
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
  return <div>{colorList}</div>;
}
