import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Link from '../Link';
import Wrapper from '../Wrapper';
// import Icon from '../Icon';
import {FooterExternal} from './FooterExternal';
import {
  WfpLogoStandardBlackEn,
  WfpLogoVerticalEn,
} from '@un/pictograms-react';
import useSettings from '../../hooks/useSettings';

/** A Footer is a section at the bottom of each page. It typically contains basic site information, copyright data or links to related pages. */

const Footer = ({
  // buttonText,
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
  // sdgLogo,
  pageWidth,
  productName,
  //...other
}) => {
  const { prefix } = useSettings();

  const classNames = classnames(
    `${prefix}--footer`,
    // { [`${prefix}--footer--external`]: external },
    className
  );
  // const standardLogo = `${process.env.STORYBOOK_ASSETS}logos/standard/en/wfp-logo-standard-black-en.svg`;

  if(external){
    return(
      <FooterExternal
      productName={productName}
      metaContent={metaContent}
      metaLinks={metaLinks}>
      {children}
    </FooterExternal>
    )
  }else {
 return(
    <footer className={classNames}>
      <Wrapper pageWidth={pageWidth}>
        <div className={`${prefix}--footer__content`}>
          {/* <div className="wfp--footer__info-content"> */}
          {children ? (
            <div className={`${prefix}--footer__info`}>{children}</div>
          ) : (
            <div className={`${prefix}--footer__info`}>
              <div className={`${prefix}--footer__info__item`}>
                <p className={`${prefix}--footer__label`}>{labelOne}</p>
                <ul className={`${prefix}--footer__list`}>
                  <li>
                    <Link href={linkHrefOne}>{linkTextOne}</Link>
                  </li>
                </ul>
              </div>
              <div className={`${prefix}--footer__info__item`}>
                <p className={`${prefix}--footer__label`}>{labelTwo}</p>
                <ul className={`${prefix}--footer__list`}>
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
          <div className={`${prefix}--footer__cta`}>
            {logoExtended && typeof logoExtended === 'string' ? (
              <img
                className={`${prefix}--footer__cta-logo`}
                src={logoExtended}
                alt="World Food Programme Logo"
              />
            ) : logoExtended ? (
              logoExtended
            ) : (
              <WfpLogoStandardBlackEn
                className={`${prefix}--footer__cta-logo`}
                alt="WFP"
              />
            )}

            {logo && typeof logo === 'string' ? (
              <img
                className={`${prefix}--footer__cta-logo-small`}
                src={logo}
                alt="World Food Programme Logo"
              />
            ) : logo ? (
              logo
            ) : (
              <WfpLogoVerticalEn
                description="WFP"
                className={`${prefix}--footer__cta-logo-small`}
              />
            )}
            {secondary && (
              <div className={`${prefix}--footer__secondary`}>{secondary}</div>
            )}
          </div>
        </div>
      </Wrapper>

      <Wrapper className={`${prefix}--footer__meta`} pageWidth={pageWidth}>
        {metaLinks && (
          <div className={`${prefix}--footer__meta__links`}>{metaLinks}</div>
        )}
        {metaContent && (
          <div className={`${prefix}--footer__meta__content`}>
            {metaContent}
          </div>
        )}
      </Wrapper>
    </footer>
  
 )
}
};

Footer.propTypes = {
  /**
   The content of the footer containing relevant links
 */
  children: PropTypes.node,
  /**
   `productName` prop is to be used in external footers.
  */
  productName: PropTypes.node,
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
   Meta links, usually are leagal links like privacy, terms of use.
 */
  metaLinks: PropTypes.node,
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
