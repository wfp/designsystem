import React from 'react';

import markdown from './README.mdx';

import Footer from '.';
import Link from '../Link';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Regular = (args) => (
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

Regular.args = {};

export const External = (args) => (
  <Footer
    external
    metaContent="2019 © World Food Programme"
    secondary={
      <div>
        Via C. G. Viola 68 Parco dei Medici
        <br />
        00148 Rome, Italy
      </div>
    }>
    <div>
      The United Nations World Food Programme - saving lives in emergencies and
      changing lives for millions through sustainable development. WFP works in
      more than 80 countries around the world, feeding people caught in conflict
      and disasters, and laying the foundations for a better future.
      <br />
      <Link href="http://www.wfp.org">Custom Links</Link>
    </div>
  </Footer>
);
