import * as React from 'react';
import classNames from 'classnames';
import Link from '../Link';
import Wrapper from '../Wrapper';
import { ScreenSize } from '../../utils';
import {
  WfpLogoStandardBlackEn,
  WfpLogoVerticalEn,
} from '@wfp/pictograms-react';
import useSettings from '../../hooks/useSettings';

/** A Footer is a section at the bottom of each page. It typically contains basic site information, copyright data or links to related pages. */
interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  external?: boolean;
  children?: React.ReactNode;
  metaContent?: React.ReactNode;
  metaLinks?: React.ReactNode;
  logo?: string | React.ReactNode;
  logoExtended?: string | React.ReactNode;
  pageWidth?: ScreenSize;
  sdgLogo?: React.ReactNode;
  subTitle?: string | React.ReactNode;
  secondary?: React.ReactNode;
  className?: string;
  labelOne?: string;
  labelTwo?: string;
  linkTextOne?: string;
  linkHrefOne?: string;
  linkTextTwo?: string;
  linkHrefTwo?: string;
}

const Footer: React.FC<FooterProps> = ({
  className,
  children,
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
  pageWidth,
}) => {
  const { prefix } = useSettings();

  const classes = classNames(`${prefix}--footer`, className);

  return (
    <footer className={classes}>
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
  );
};

Footer.displayName = 'Footer';

export default Footer;
