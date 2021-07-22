var _excluded = ["buttonText", "className", "children", "external", "labelOne", "linkTextOne", "linkHrefOne", "labelTwo", "linkTextTwo", "linkHrefTwo", "logo", "logoExtended", "metaContent", "metaLinks", "secondary", "sdgLogo", "pageWidth"];

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Link from '../Link';
import Wrapper from '../Wrapper';
import Icon from '../Icon';
import sdgIconStandard from './SdgLogo';
import { iconWfpLogoStandardBlackEn, iconWfpLogoVerticalEn } from '@wfp/icons';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
/** A Footer is a section at the bottom of each page. It typically contains basic site information, copyright data or links to related pages. */

var Footer = function Footer(_ref) {
  var buttonText = _ref.buttonText,
      className = _ref.className,
      children = _ref.children,
      external = _ref.external,
      labelOne = _ref.labelOne,
      linkTextOne = _ref.linkTextOne,
      linkHrefOne = _ref.linkHrefOne,
      labelTwo = _ref.labelTwo,
      linkTextTwo = _ref.linkTextTwo,
      linkHrefTwo = _ref.linkHrefTwo,
      logo = _ref.logo,
      logoExtended = _ref.logoExtended,
      metaContent = _ref.metaContent,
      metaLinks = _ref.metaLinks,
      secondary = _ref.secondary,
      sdgLogo = _ref.sdgLogo,
      pageWidth = _ref.pageWidth,
      other = _objectWithoutProperties(_ref, _excluded);

  var classNames = classnames("".concat(prefix, "--footer"), _defineProperty({}, "".concat(prefix, "--footer--external"), external), className);
  var standardLogo = "".concat(process.env.STORYBOOK_ASSETS, "logos/standard/en/wfp-logo-standard-black-en.svg");
  var footer = /*#__PURE__*/React.createElement("footer", {
    className: classNames
  }, /*#__PURE__*/React.createElement(Wrapper, {
    pageWidth: pageWidth
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--footer__content")
  }, children ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--footer__info")
  }, children) : /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--footer__info")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--footer__info__item")
  }, /*#__PURE__*/React.createElement("p", {
    className: "".concat(prefix, "--footer__label")
  }, labelOne), /*#__PURE__*/React.createElement("ul", {
    className: "".concat(prefix, "--footer__list")
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    href: linkHrefOne
  }, linkTextOne)))), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--footer__info__item")
  }, /*#__PURE__*/React.createElement("p", {
    className: "".concat(prefix, "--footer__label")
  }, labelTwo), /*#__PURE__*/React.createElement("ul", {
    className: "".concat(prefix, "--footer__list")
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    href: linkHrefTwo
  }, linkTextTwo))))), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--footer__cta")
  }, logoExtended && typeof logoExtended === 'string' ? /*#__PURE__*/React.createElement("img", {
    className: "".concat(prefix, "--footer__cta-logo"),
    src: logoExtended,
    alt: "World Food Programme Logo"
  }) : logoExtended ? logoExtended : /*#__PURE__*/React.createElement(Icon, {
    className: "".concat(prefix, "--footer__cta-logo"),
    icon: iconWfpLogoStandardBlackEn,
    alt: "WFP"
  }), logo && typeof logo === 'string' ? /*#__PURE__*/React.createElement("img", {
    className: "".concat(prefix, "--footer__cta-logo-small"),
    src: logo,
    alt: "World Food Programme Logo"
  }) : logo ? logo : /*#__PURE__*/React.createElement(Icon, {
    icon: iconWfpLogoVerticalEn,
    description: "WFP",
    className: "".concat(prefix, "--footer__cta-logo-small")
  }), secondary && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--footer__secondary")
  }, secondary)))), /*#__PURE__*/React.createElement(Wrapper, {
    className: "".concat(prefix, "--footer__meta"),
    pageWidth: pageWidth
  }, metaLinks && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--footer__meta__links")
  }, metaLinks), metaContent && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--footer__meta__content")
  }, metaContent)));
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
  subTitle: PropTypes.node
};
Footer.defaultProps = {
  pageWidth: 'lg'
};
export default Footer;