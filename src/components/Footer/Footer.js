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
            <div className="wfp--footer-info">{children}</div>
          ) : (
            <div className="wfp--footer-info">
              <div className="wfp--footer-info__item">
                <p className="wfp--footer-label">{labelOne}</p>
                <Link href={linkHrefOne}>{linkTextOne}</Link>
              </div>
              <div className="wfp--footer-info__item">
                <p className="wfp--footer-label">{labelTwo}</p>
                <Link href={linkHrefTwo}>{linkTextTwo}</Link>
              </div>
            </div>
          )}
          <div className="wfp--footer-cta">
            {logoExtended ? (
              <img
                className="wfp--footer-cta-logo"
                src={logoExtended}
                alt="World Food Programme Logo"
              />
            ) : (
              <Icon
                name="wfp-logo--extended--en"
                description="WFP"
                className="wfp--footer-cta-logo"
              />
            )}

            {logo ? (
              <img
                className="wfp--footer-cta-logo-small"
                src={logo}
                alt="World Food Programme Logo"
              />
            ) : (
              <Icon
                name="wfp-logo--vertical--en"
                description="WFP"
                className="wfp--footer-cta-logo"
              />
            )}
            {secondary}
          </div>
        </div>
      </Wrapper>

      <Wrapper className="wfp--footer-meta" pageWidth={pageWidth}>
        {metaContent && (
          <div className="wfp--footer-meta__content">{metaContent}</div>
        )}
        {metaLinks && (
          <div className="wfp--footer-meta__links">{metaLinks}</div>
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
  buttonText: PropTypes.string,
};

Footer.defaultProps = {
  labelOne: 'Need Help?',
  linkTextOne: 'Contact Bluemix Sales',
  linkHrefOne: '#',
  labelTwo: 'Estimate Monthly Cost',
  linkTextTwo: 'Cost Calculator',
  linkHrefTwo: '#',
  buttonText: 'Create',
};

export default Footer;
