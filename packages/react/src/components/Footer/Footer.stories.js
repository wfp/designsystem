import React from 'react';

import markdown from './README.mdx';

import { Footer } from '.';

import { FooterExternal, FooterMetaLink, LinksColumn } from './FooterExternal';

import Link from '../Link';

export default {
  title: 'Components/UI Elements/Footer',
  component: Footer,
  subcomponents: { FooterExternal, FooterMetaLink, LinksColumn },
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
    previewWidth: 'full',
  },
};

export const Regular = (args) => {
  return (
    <Footer {...args}>
      <div className="wfp--footer__info">
        <div className="wfp--footer__info__item">
          <p className="wfp--footer__label">A label</p>
          <ul className="wfp--footer__list">
            <li>
              <Link href="http://www.wfp.org">First Link</Link>
            </li>
            <li>
              <Link href="http://www.wfp.org">Second Link</Link>
            </li>
          </ul>
        </div>
        <div className="wfp--footer__info__item">
          <p className="wfp--footer__label">Another label</p>
          <ul className="wfp--footer__list">
            <li>
              <Link href="http://www.wfp.org">First Link</Link>
            </li>
            <li>
              <Link href="http://www.wfp.org">Second Link</Link>
            </li>
          </ul>
        </div>
      </div>
    </Footer>
  );
};

Regular.args = {
  external: false,
};

const regularsourcecode = `
import { Footer, Link  } from "@un/react";
        
<Footer>
  <div className="wfp--footer__info">
    <div className="wfp--footer__info__item">
      <p className="wfp--footer__label">
        A label
      </p>
      <ul className="wfp--footer__list">
        <li>
          <Link href="http://www.wfp.org">
            First Link
          </Link>
        </li>
        <li>
          <Link href="http://www.wfp.org">
            Second Link
          </Link>
        </li>
      </ul>
    </div>
    <div className="wfp--footer__info__item">
      <p className="wfp--footer__label">
        Another label
      </p>
      <ul className="wfp--footer__list">
        <li>
          <Link href="http://www.wfp.org">
            First Link
          </Link>
        </li>
        <li>
          <Link href="http://www.wfp.org">
            Second Link
          </Link>
        </li>
      </ul>
    </div>
  </div>
</Footer>
`;

Regular.story = {
  parameters: {
    docs: {
      source: {
        code: regularsourcecode,
      },
    },
  },
};

export const External = (args) => (
  <FooterExternal
    {...args}
    metaLinks={
      <>
        <FooterMetaLink href="hh.com">First legal link</FooterMetaLink>
        <FooterMetaLink href="hh.com">Second legal link</FooterMetaLink>
      </>
    }>
    <>
      <LinksColumn title="Title">
        <li className={`wfp--links-column-link`}>
          <Link>First link</Link>
        </li>
        <li className={`wfp--links-column-link`}>
          <Link>Second link</Link>
        </li>
        <li className={`wfp--links-column-link`}>
          <Link>Third link</Link>
        </li>
        <li className={`wfp--links-column-link`}>
          <Link>Fourth link</Link>
        </li>
        <li className={`wfp--links-column-link`}>
          <Link>Fifth link</Link>
        </li>
      </LinksColumn>

      <LinksColumn title="Title 2">
        <li className={`wfp--links-column-link`}>
          <Link>First link 2</Link>
        </li>
        <li className={`wfp--links-column-link`}>
          <Link>Second link 2</Link>
        </li>
        <li className={`wfp--links-column-link`}>
          <Link>Third link 2</Link>
        </li>
        <li className={`wfp--links-column-link`}>
          <Link>Fourth link 2</Link>
        </li>
        <li className={`wfp--links-column-link`}>
          <Link>Fifth link 2</Link>
        </li>
      </LinksColumn>
    </>
  </FooterExternal>
);

External.args = {
  productName: (
    <span>
      Service <br /> Marketplace
    </span>
  ),
  metaContent: 'Via C. G. Viola 68 Parco dei Medici, 00148 Rome, Italy',
};

const externalsourcecode = `
import { FooterExternal, Link  } from "@un/react";

<FooterExternal
    metaContent="Via C. G. Viola 68 Parco dei Medici, 00148 Rome, Italy"
    metaLinks={
      <>
        <FooterMetaLink href="hh.com">First legal link</FooterMetaLink>
        <FooterMetaLink href="hh.com">Second legal link</FooterMetaLink>
      </>
    }
    productName={<span>Service{' '}<br />{' '}Marketplace</span>
    >
    <>
      <LinksColumn title="Title">
        <li className="wfp--links-column-link">
          <Link>First link</Link>
        </li>
        <li className="wfp--links-column-link">
          <Link>Second link</Link>
        </li>
        <li className="wfp--links-column-link">
          <Link>Third link</Link>
        </li>
        <li className="wfp--links-column-link">
          <Link>Fourth link</Link>
        </li>
        <li className="wfp--links-column-link">
          <Link>Fifth link</Link>
        </li>
      </LinksColumn>

      <LinksColumn title="Title 2">
        <li className="wfp--links-column-link">
          <Link>First link 2</Link>
        </li>
        <li className="wfp--links-column-link">
          <Link>Second link 2</Link>
        </li>
        <li className="wfp--links-column-link">
          <Link>Third link 2</Link>
        </li>
        <li className="wfp--links-column-link">
          <Link>Fourth link 2</Link>
        </li>
        <li className="wfp--links-column-link">
          <Link>Fifth link 2</Link>
        </li>
      </LinksColumn>
    </>
  </FooterExternal>
`;

External.story = {
  parameters: {
    docs: {
      storyDescription:
        'External Footer is used for external applications facing the public audience. It should contain WFP logo, HQ address and metadata like copyright.',
      source: {
        code: externalsourcecode,
      },
    },
  },
};

export const Internal = (args) => (
  <Footer {...args}>
    <div className="wfp--footer__info">
      <div className="wfp--footer__info__item">
        <p className="wfp--footer__label">A label</p>
        <ul className="wfp--footer__list">
          <li>
            <Link href="http://www.wfp.org">First Link</Link>
          </li>
          <li>
            <Link href="http://www.wfp.org">Second Link</Link>
          </li>
        </ul>
      </div>
      <div className="wfp--footer__info__item">
        <p className="wfp--footer__label">Another label</p>
        <ul className="wfp--footer__list">
          <li>
            <Link href="http://www.wfp.org">First Link</Link>
          </li>
          <li>
            <Link href="http://www.wfp.org">Second Link</Link>
          </li>
        </ul>
      </div>
    </div>
  </Footer>
);

const intersourcecode = `
import { Footer, Link } from "@un/react";

<Footer>
  <div className="wfp--footer__info">
    <div className="wfp--footer__info__item">
      <p className="wfp--footer__label">A label</p>
      <ul className="wfp--footer__list">
        <li>
          <Link href="http://www.wfp.org">First Link</Link>
        </li>
        <li>
          <Link href="http://www.wfp.org">Second Link</Link>
        </li>
      </ul>
    </div>
    <div className="wfp--footer__info__item">
      <p className="wfp--footer__label">Another label</p>
      <ul className="wfp--footer__list">
        <li>
          <Link href="http://www.wfp.org">First Link</Link>
        </li>
        <li>
          <Link href="http://www.wfp.org">Second Link</Link>
        </li>
      </ul>
    </div>
  </div>
</Footer>
`;

Internal.story = {
  parameters: {
    docs: {
      storyDescription:
        'Internal Footer is used in applications that are for internal purposes and not available for external users. In the left section you can add links',
      source: {
        code: intersourcecode,
      },
    },
  },
};

export const OverrideLogos = (args) => (
  <Footer
    {...args}
    logo={<div>Logo</div>}
    logoExtended={<div>LogoExtended</div>}>
    <div className="wfp--footer__info">
      <div className="wfp--footer__info__item">
        <p className="wfp--footer__label">A label</p>
        <ul className="wfp--footer__list">
          <li>
            <Link href="http://www.wfp.org">First Link</Link>
          </li>
          <li>
            <Link href="http://www.wfp.org">Second Link</Link>
          </li>
        </ul>
      </div>
      <div className="wfp--footer__info__item">
        <p className="wfp--footer__label">Another label</p>
        <ul className="wfp--footer__list">
          <li>
            <Link href="http://www.wfp.org">First Link</Link>
          </li>
          <li>
            <Link href="http://www.wfp.org">Second Link</Link>
          </li>
        </ul>
      </div>
    </div>
  </Footer>
);

OverrideLogos.story = {
  parameters: {
    docs: {
      storyDescription:
        'The logos for `logo`, `logoExtended`  can be replaced by a custom react component.',
    },
  },
};
