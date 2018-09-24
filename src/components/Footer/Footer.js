import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Link from '../Link';
import Wrapper from '../Wrapper';
import Icon from '../Icon';

//import logoExtended from '../../../assets/logos/extended/en/wfp-logo-extended-black-en.svg';
//import logoVertical from '../../../assets/logos/vertical/en/wfp-logo-vertical-black-en.svg';

const Footer = ({
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
  pageWidth,
  ...other
}) => {
  const classNames = classnames(
    'wfp--footer',
    { 'wfp--footer--external': external },
    className
  );

  const footer = (
    <footer {...other} className={classNames}>
      <Wrapper pageWidth={pageWidth}>
        <div className="wfp--footer__content">
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
          <div className="wfp--footer__cta">
            {logoExtended ? (
              <img
                className="wfp--footer__cta-logo"
                src={logoExtended}
                alt="World Food Programme Logo"
              />
            ) : (
              <Icon
                name="wfp-logo--extended--en"
                description="WFP"
                className="wfp--footer__cta-logo"
              />
            )}

            {logo ? (
              <img
                className="wfp--footer__cta-logo-small"
                src={logo}
                alt="World Food Programme Logo"
              />
            ) : (
              <Icon
                name="wfp-logo--vertical--en"
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
        {metaContent && (
          <div className="wfp--footer__meta__content">{metaContent}</div>
        )}
        {metaLinks && (
          <div className="wfp--footer__meta__links">{metaLinks}</div>
        )}
      </Wrapper>
    </footer>
  );

  return footer;
};

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  labelOne: PropTypes.string,
  linkTextOne: PropTypes.string,
  linkHrefOne: PropTypes.string,
  labelTwo: PropTypes.string,
  linkTextTwo: PropTypes.string,
  linkHrefTwo: PropTypes.string,
};

Footer.defaultProps = {
  labelOne: 'Need Help?',
  linkTextOne: 'Contact Bluemix Sales',
  linkHrefOne: '#',
  labelTwo: 'Estimate Monthly Cost',
  linkTextTwo: 'Cost Calculator',
  linkHrefTwo: '#',
};

export default Footer;
