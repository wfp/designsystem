import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import Wrapper from '../Wrapper';
import classnames from 'classnames';
import { Home16 } from '@wfp/icons-react';
import { WfpLogoVerticalEn } from '@wfp/pictograms-react';

import { settings } from '../../globals/js';

const { prefix } = settings;

const FooterExternal = ({
  className,
  productName,
  children,
  metaContent,
  metaLinks,
}) => {
  const externalClasses = classnames(`${prefix}--footer-ext`, className);
  return (
    <footer className={externalClasses}>
      <Wrapper pageWidth="lg">
        <div className={`${prefix}--footer-ext__content`}>
          <div className={`${prefix}--footer-ext__info`}>
            <div className={`${prefix}--footer-ext__branding`}>
              <WfpLogoVerticalEn alt="WFP" />
              <div className={`${prefix}--footer-ext__product-name`}>
                {productName}
              </div>
            </div>
            <div className={`${prefix}--footer-ext__address`}>
              {metaContent}
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
            <LinksColumn />
            <LinksColumn />
          </div>
        </div>
        <div className={`${prefix}--footer-ext__legal`}>
          <span>{new Date().getFullYear()} © World Food Programme</span>
          <nav className={`${prefix}--footer-ext__nav-legal`}>
            <ul className={`${prefix}--footer-ext__legal-links`}>
              {metaLinks}
            </ul>
          </nav>
        </div>
      </Wrapper>
    </footer>
  );
};

FooterExternal.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  productName: PropTypes.node,
  children: PropTypes.node,
  metaContent: PropTypes.node,
  metaLinks: PropTypes.node,
};

const LinksColumn = () => {
  return (
    <div className={`${prefix}--links-column`}>
      {/* Title is optional */}
      <p className={`${prefix}--links-column__title`}>Title</p>
      <nav>
        <ul className={`${prefix}--links-column__nav-list`}>
          <li className={`${prefix}--links-column-link`}>
            <Link>First link</Link>
          </li>
          <li className={`${prefix}--links-column-link`}>
            <Link>Second link</Link>
          </li>
          <li className={`${prefix}--links-column-link`}>
            <Link>Third link</Link>
          </li>
          <li className={`${prefix}--links-column-link`}>
            <Link>Fourth link</Link>
          </li>
          <li className={`${prefix}--links-column-link`}>
            <Link>Fifth link</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const FooterMetaLink = ({ className, href, children }) => {
  const wrapperClasses = classnames(
    `${prefix}--footer-ext__legal-link`,
    className
  );
  return (
    <li className={wrapperClasses}>
      <Link href={href}>{children}</Link>
    </li>
  );
};

FooterMetaLink.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
};

export { FooterExternal, LinksColumn, FooterMetaLink };
