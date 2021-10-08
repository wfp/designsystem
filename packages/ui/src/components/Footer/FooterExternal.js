import React from 'react';

import Icon from '../Icon';
import Link from '../Link';
import Wrapper from '../Wrapper';

import { Home16 } from '@wfp/icons-react';
import { iconHome } from '@wfp/icons';
import { WfpLogoVerticalEn } from '@wfp/pictograms-react';

import { settings } from '../../globals/js';

const { prefix } = settings;

const ExternalFooter = () => (
  <footer className={`${prefix}--footer-ext`}>
    <Wrapper pageWidth="lg">
      <div className={`${prefix}--footer-ext__content`}>
        <div className={`${prefix}--footer-ext__content__corporate`}>
          <div className={`${prefix}--footer-ext__content__corporate__logo`}>
            <WfpLogoVerticalEn alt="WFP" />
            <div
              className={`${prefix}--footer-ext__content__corporate__logo__service`}>
              <span>
                Product <br />
                Name
              </span>
            </div>
          </div>
          <div className={`${prefix}--footer-ext__content__corporate__address`}>
            Via C. G. Viola 68 Parco dei Medici, 00148 Rome, Italy
          </div>
          <div className={`${prefix}--footer-ext__content__corporate__social`}>
            <p>Follow WFP on:</p>
            <ul
              className={`${prefix}--footer-ext__content__corporate__social__list`}>
              <li
                className={`${prefix}--footer-ext__content__corporate__social__list__icon`}>
                <a>
                  <Home16 icon={Home16} height={24} width={24} />
                </a>
              </li>
              <li
                className={`${prefix}--footer-ext__content__corporate__social__list__icon`}>
                <a>
                  <Home16 icon={Home16} height={24} width={24} />
                </a>
              </li>
              <li
                className={`${prefix}--footer-ext__content__corporate__social__list__icon`}>
                <a>
                  <Home16 icon={Home16} height={24} width={24} />
                </a>
              </li>
              <li
                className={`${prefix}--footer-ext__content__corporate__social__list__icon`}>
                <a>
                  <Home16 icon={Home16} height={24} width={24} />
                </a>
              </li>
              <li
                className={`${prefix}--footer-ext__content__corporate__social__list__icon`}>
                <a>
                  <Home16 icon={Home16} height={24} width={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${prefix}--footer-ext__content__links`}>
          <div className={`${prefix}--footer-ext__content__links__column`}>
            <p
              className={`${prefix}--footer-ext__content__links__column__title`}>
              First title
            </p>
            <nav>
              <ul
                className={`${prefix}--footer-ext__content__links__column__nav-list`}>
                <li>
                  <Link>First link</Link>
                </li>
                <li>
                  <Link>Second link</Link>
                </li>
                <li>
                  <Link>Third link</Link>
                </li>
                <li>
                  <Link>Fourth link</Link>
                </li>
                <li>
                  <Link>Fifth link</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={`${prefix}--footer-ext__content__links__column`}>
            <p
              className={`${prefix}--footer-ext__content__links__column__title`}>
              Second title
            </p>
            <nav>
              <ul
                className={`${prefix}--footer-ext__content__links__column__nav-list`}>
                <li>
                  <Link>First link</Link>
                </li>
                <li>
                  <Link>Second link</Link>
                </li>
                <li>
                  <Link>Third link</Link>
                </li>
                <li>
                  <Link>Fourth link</Link>
                </li>
                <li>
                  <Link>Fifth link</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={`${prefix}--footer-ext__legal`}>
        <span>{new Date().getFullYear()} © World Food Programme</span>
        <nav className={`${prefix}--footer-ext__legal__nav`}>
          <ul className={`${prefix}--footer-ext__legal__nav__links`}>
            <li className={`${prefix}--footer-ext__legal__nav__links__link`}>
              <Link>First legal link</Link>
            </li>
            <li className={`${prefix}--footer-ext__legal__nav__links__link`}>
              <Link>Second legal link</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Wrapper>
  </footer>
);

export default ExternalFooter;
