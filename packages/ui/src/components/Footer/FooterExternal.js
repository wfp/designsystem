import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import Wrapper from '../Wrapper';
import classnames from 'classnames';
import { WfpLogoVerticalEn } from '@wfp/pictograms-react';

import { settings } from '../../globals/js';

const { prefix } = settings;

const FooterExternal = ({
  className,
  productName,
  children,
  metaContent,
  metaLinks,
  socialIcons,
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
            {socialIcons && (
            <div className={`${prefix}--footer-ext__social-wrapper`}>
              <p>Follow WFP on:</p>
              <ul className={`${prefix}--footer-ext__social-icons-list`}>
                {socialIcons}
              </ul>
            </div>)
            }
          </div>
            
          <div className={`${prefix}--footer-ext__nav-wrapper`}>
            {children}
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
  /**
   * Use this prop when you want to add any social icons
   */
  socialIcons: PropTypes.node
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



export { FooterExternal, FooterMetaLink };
