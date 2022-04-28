import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import Wrapper from '../Wrapper';
import classnames from 'classnames';
import { WfpLogoVerticalEn } from '@un/pictograms-react';
import {
  LinkedIn,
  Facebook,
  YouTube,
  TikTok,
  Twitter,
  Instagram,
} from '@un/icons-react';

import useSettings from '../../hooks/useSettings';

const FooterExternal = ({
  className,
  productName,
  children,
  metaContent,
  metaLinks,
}) => {
  const { prefix } = useSettings();

  const externalClasses = classnames(`${prefix}--footer-ext`, className);
  return (
    <footer className={externalClasses}>
      <Wrapper pageWidth="lg">
        <div className={`${prefix}--footer-ext__content`}>
          <div className={`${prefix}--footer-ext__info`}>
            <div className={`${prefix}--footer-ext__branding`}>
              <WfpLogoVerticalEn
                alt="WFP"
                className={`${prefix}--footer-ext__logo`}
              />
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
                  <a
                    href="https://twitter.com/WFP"
                    target="_blank"
                    rel="noopener">
                    <Twitter />
                  </a>
                </li>
                <li className={`${prefix}--footer-ext__social-icon`}>
                  <a
                    href="https://www.facebook.com/WorldFoodProgramme"
                    target="_blank"
                    rel="noopener">
                    <Facebook />
                  </a>
                </li>
                <li className={`${prefix}--footer-ext__social-icon`}>
                  <a
                    href="https://www.instagram.com/Worldfoodprogramme/"
                    target="_blank"
                    rel="noopener">
                    <Instagram />
                  </a>
                </li>
                <li className={`${prefix}--footer-ext__social-icon`}>
                  <a
                    href="https://www.linkedin.com/company/world-food-programme"
                    target="_blank"
                    rel="noopener">
                    <LinkedIn />
                  </a>
                </li>
                <li className={`${prefix}--footer-ext__social-icon`}>
                  <a
                    href="https://www.youtube.com/user/WORLDFOODPROGRAM"
                    target="_blank"
                    rel="noopener">
                    <YouTube />
                  </a>
                </li>
                <li className={`${prefix}--footer-ext__social-icon`}>
                  <a
                    href="https://www.tiktok.com/@worldfoodprogramme"
                    target="_blank"
                    rel="noopener">
                    <TikTok />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${prefix}--footer-ext__nav-wrapper`}>{children}</div>
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

const LinksColumn = ({ title, children }) => {
  const { prefix } = useSettings();

  return (
    <div className={`${prefix}--links-column`}>
      {title && <p className={`${prefix}--links-column__title`}> {title} </p>}

      <nav>
        <ul className={`${prefix}--links-column__nav-list`}>{children}</ul>
      </nav>
    </div>
  );
};

LinksColumn.propTypes = {
  /**
   * The heading or title of the list of links.
   */
  title: PropTypes.string,
  children: PropTypes.node,
};

const FooterMetaLink = ({ className, href, children }) => {
  const { prefix } = useSettings();

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
