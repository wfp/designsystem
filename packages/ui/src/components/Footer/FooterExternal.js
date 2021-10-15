import React from 'react';

import Link from '../Link';
import Wrapper from '../Wrapper';

import { Home16 } from '@wfp/icons-react';
import { WfpLogoVerticalEn } from '@wfp/pictograms-react';

import { settings } from '../../globals/js';

const { prefix } = settings;

const ExternalFooter = () => (
  <footer className={`${prefix}--footer-ext`}>
    <Wrapper pageWidth="lg">
      <div className={`${prefix}--footer-ext__content`}>
        <div className={`${prefix}--footer-ext__info`}>
          <div className={`${prefix}--footer-ext__branding`}>
            <WfpLogoVerticalEn alt="WFP" />
            <div className={`${prefix}--footer-ext__product-name`}>
              <span>
                Product <br />
                Name
              </span>
            </div>
          </div>
          <div className={`${prefix}--footer-ext__address`}>
            Via C. G. Viola 68 Parco dei Medici, 00148 Rome, Italy
          </div>
          <div className={`${prefix}--footer-ext__social-wrapper`}>
            <p>Follow WFP on:</p>
            <ul className={`${prefix}--footer-ext__social-icons-list`}>
              <li className={`${prefix}--footer-ext__social-icon`}>
                <a>
                  <Home16 icon={Home16} height={24} width={24} />
                </a>
              </li>
              <li className={`${prefix}--footer-ext__social-icon`}>
                <a>
                  <Home16 icon={Home16} height={24} width={24} />
                </a>
              </li>
              <li className={`${prefix}--footer-ext__social-icon`}>
                <a>
                  <Home16 icon={Home16} height={24} width={24} />
                </a>
              </li>
              <li className={`${prefix}--footer-ext__social-icon`}>
                <a>
                  <Home16 icon={Home16} height={24} width={24} />
                </a>
              </li>
              <li className={`${prefix}--footer-ext__social-icon`}>
                <a>
                  <Home16 icon={Home16} height={24} width={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${prefix}--footer-ext__nav-wrapper`}>
          <div className={`${prefix}--footer-ext__nav-column`}>
            <p className={`${prefix}--footer-ext__nav-title`}>First title</p>
            <nav>
              <ul className={`${prefix}--footer-ext__nav-list`}>
                <li className={`${prefix}--footer-ext__nav-link`}>
                  <Link>First link</Link>
                </li>
                <li className={`${prefix}--footer-ext__nav-link`}>
                  <Link>Second link</Link>
                </li>
                <li className={`${prefix}--footer-ext__nav-link`}>
                  <Link>Third link</Link>
                </li>
                <li className={`${prefix}--footer-ext__nav-link`}>
                  <Link>Fourth link</Link>
                </li>
                <li className={`${prefix}--footer-ext__nav-link`}>
                  <Link>Fifth link</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={`${prefix}--footer-ext__nav-column`}>
            <p className={`${prefix}--footer-ext__nav-title`}>Second title</p>
            <nav>
              <ul className={`${prefix}--footer-ext__nav-list`}>
                <li className={`${prefix}--footer-ext__nav-link`}>
                  <Link>First link</Link>
                </li>
                <li className={`${prefix}--footer-ext__nav-link`}>
                  <Link>Second link</Link>
                </li>
                <li className={`${prefix}--footer-ext__nav-link`}>
                  <Link>Third link</Link>
                </li>
                <li className={`${prefix}--footer-ext__nav-link`}>
                  <Link>Fourth link</Link>
                </li>
                <li className={`${prefix}--footer-ext__nav-link`}>
                  <Link>Fifth link</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={`${prefix}--footer-ext__legal`}>
        <span>{new Date().getFullYear()} © World Food Programme</span>
        <nav className={`${prefix}--footer-ext__nav-legal`}>
          <ul className={`${prefix}--footer-ext__legal-links`}>
            <li className={`${prefix}--footer-ext__legal-link`}>
              <Link>First legal link</Link>
            </li>
            <li className={`${prefix}--footer-ext__legal-link`}>
              <Link>Second legal link</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Wrapper>
  </footer>
);

export default ExternalFooter;
