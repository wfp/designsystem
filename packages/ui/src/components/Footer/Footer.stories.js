import React from 'react';

import markdown from './README.mdx';

import { Footer } from '.';
import { FooterMetaLink } from './FooterExternal';

import Link from '../Link';

export default {
  title: 'Components/UI Elements/Footer',
  component: Footer,

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

export const External = (args) => 
(
<Footer {...args} 
 metaLinks={
  <>
    <FooterMetaLink href="hh.com">First legal link</FooterMetaLink>
    <FooterMetaLink href="hh.com">Second legal link</FooterMetaLink>
  </>
}
>
  <div className={`wfp--footer-ext__nav-column`}>
    <p className={`wfp--footer-ext__nav-title`}>First title</p>
    <nav>
      <ul className={`wfp--footer-ext__nav-list`}>
        <li className={`wfp--footer-ext__nav-link`}>
          <Link>First link</Link>
        </li>
        <li className={`wfp--footer-ext__nav-link`}>
          <Link>Second link</Link>
        </li>
        <li className={`wfp--footer-ext__nav-link`}>
          <Link>Third link</Link>
        </li>
        <li className={`wfp--footer-ext__nav-link`}>
          <Link>Fourth link</Link>
        </li>
        <li className={`wfp--footer-ext__nav-link`}>
          <Link>Fifth link</Link>
        </li>
      </ul>
    </nav>
  </div>
  <div className={`wfp--footer-ext__nav-column`}>
    <p className={`wfp--footer-ext__nav-title`}>Second title</p>
    <nav>
      <ul className={`wfp--footer-ext__nav-list`}>
        <li className={`wfp--footer-ext__nav-link`}>
          <Link>First link</Link>
        </li>
        <li className={`wfp--footer-ext__nav-link`}>
          <Link>Second link</Link>
        </li>
        <li className={`wfp--footer-ext__nav-link`}>
          <Link>Third link</Link>
        </li>
        <li className={`wfp--footer-ext__nav-link`}>
          <Link>Fourth link</Link>
        </li>
        <li className={`wfp--footer-ext__nav-link`}>
          <Link>Fifth link</Link>
        </li>
      </ul>
    </nav>
  </div>
</Footer>
);



External.args = {
  external: true,
  productName: <span>Service <br/> Marketplace</span>,
  metaContent: 'Via C. G. Viola 68 Parco dei Medici, 00148 Rome, Italy'
};

External.story = {
  parameters: {
    docs: {
      storyDescription:
        'External Footer is used for external applications facing the public audience. It should contain WFP logo, HQ address and metadata like copyright.',
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

// Internal.args = {
//   metaContent: '2019 © World Food Programme',
//   external: true,
// };
Internal.story = {
  parameters: {
    docs: {
      storyDescription:
        'Internal Footer is used in applications that are for internal purposes and not available for external users. In the left section you can add links',
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
