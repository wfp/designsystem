import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Link from '../Link';
import Wrapper from '../Wrapper';
import Icon from '../Icon';
import sdgIconStandard from './SdgLogo';
import { iconWfpLogoStandardBlackEn, iconWfpLogoVerticalEn } from '@wfp/icons';
import settings from '../../globals/js/settings';

const { prefix } = settings;

/** A Footer is a section at the bottom of each page. It typically contains basic site information, copyright data or links to related pages. */

const Footer = ({
  buttonText,
  className,
  children,
  external,
  labelOne,
  linkTextOne,
  linkHrefOne,
  labelTwo,
  linkTextTwo,
  linkHrefTwo,
  logo,
  logoExtended,
  metaContent,
  metaLinks,
  secondary,
  sdgLogo,
  pageWidth,
  ...other
}) => {
  const classNames = classnames(
    'wfp--footer',
    { 'wfp--footer--external': external },
    className
  );
  const standardLogo = `${process.env.STORYBOOK_ASSETS}logos/standard/en/wfp-logo-standard-black-en.svg`

  const footer = (
    <footer className={classNames}>
      <Wrapper pageWidth={pageWidth}>
        <div className="wfp--footer__content">
          {/* <div className="wfp--footer__info-content"> */}
          {children ? (
            <div className="wfp--footer__info">{children}</div>
          ) : (
            <div className="wfp--footer__info">
              <div className="wfp--footer__info__item">
                <p className="wfp--footer__label">{labelOne}</p>
                <ul className="wfp--footer__list">
                  <li>
                    <Link href={linkHrefOne}>{linkTextOne}</Link>
                  </li>
                </ul>
              </div>
              <div className="wfp--footer__info__item">
                <p className="wfp--footer__label">{labelTwo}</p>
                <ul className="wfp--footer__list">
                  <li>
                    <Link href={linkHrefTwo}>{linkTextTwo}</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {/* {!external && (
              <div style={{ marginTop: '1rem' }}>
                <label htmlFor="abc" className="wfp--label">
                  Edition
                </label>
                <ReactSelect
                  className="wfp--react-select-container"
                  classNamePrefix="wfp--react-select"
                  id="edition"
                  options={options}
                />
              </div>
            )} */}
          {/* </div> */}
          <div className="wfp--footer__cta">
            {logoExtended && typeof logoExtended === 'string' ? (
              <img
                className="wfp--footer__cta-logo"
                src={logoExtended}
                alt="World Food Programme Logo"
              />
            ) : logoExtended ? (
              logoExtended
            ) : (
              <Icon
              className="wfp--footer__cta-logo"	
              icon={iconWfpLogoStandardBlackEn}
              alt="WFP"
            />
            )}

            {logo && typeof logo === 'string' ? (
              <img
                className="wfp--footer__cta-logo-small"
                src={logo}
                alt="World Food Programme Logo"
              />
            ) : logo ? (
              logo
            ) : (
              <Icon
                icon={iconWfpLogoVerticalEn}
                description="WFP"
                className="wfp--footer__cta-logo-small"
              />
            )}
            {secondary && (
              <div className="wfp--footer__secondary">{secondary}</div>
            )}
          </div>
        </div>
      </Wrapper>

      <Wrapper className="wfp--footer__meta" pageWidth={pageWidth}>
        
        {metaLinks && (
          <div className="wfp--footer__meta__links">{metaLinks}</div>
        )}
        {metaContent && (
          <div className="wfp--footer__meta__content">{metaContent}</div>
        )}
      </Wrapper>
    </footer>
  );

  return footer;
};

Footer.propTypes = {
  /**
   The content of the footer containing relevant links
 */
  children: PropTypes.node,
  /**
   Additional className which will be added
 */
  className: PropTypes.string,
  /** 
   When external is set to true, the logo will be left and description will right on the footer. It is false by default.
 */
  external: PropTypes.bool,
  /** 
   Meta content, usually the copyright notice
 */
  metaContent: PropTypes.node,
  /**
   Optional WFP logo for mobile devices, can be used if the Logo should be provided by the CDN
 */
  logo: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  /**
   Optional WFP logo for desktop devices, can be used if the Logo should be provided by the CDN
 */
  logoExtended: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  /**
   * Specify the max-width on desktop devices (same as \`Wrapper\` component)
   */
  pageWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'full']),
  /**
   Override the SDG icon
 */
  sdgLogo: PropTypes.node,
  /**
   The WFP logo, can be used if the SDG logo should be provided in a different way
 */
  subTitle: PropTypes.node,
};

Footer.defaultProps = {
  pageWidth: 'lg',
};

export default Footer;
