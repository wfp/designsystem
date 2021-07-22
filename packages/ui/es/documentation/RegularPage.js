function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React from 'react';
import Link from '../components/Link';
import Footer from '../components/Footer';
import Search from '../components/Search';
import { SecondaryNavigation, SecondaryNavigationTitle } from '../components/SecondaryNavigation';
import Breadcrumb from '../components/Breadcrumb';
import BreadcrumbItem from '../components/BreadcrumbItem';
import BreadcrumbHome from '../components/BreadcrumbHome';
import Tabs from '../components/Tabs';
import Tab from '../components/Tab';
import Button from '../components/Button';
import MainNavigation from '../components/MainNavigation';
import MainNavigationItem from '../components/MainNavigationItem';
import { SubNavigationList, SubNavigation, SubNavigationHeader, SubNavigationTitle, SubNavigationContent, SubNavigationGroup, SubNavigationFilter, SubNavigationItem, SubNavigationLink } from '../components/SubNavigation';
import User from '../components/User';
var props = {
  tabs: {
    className: 'some-class',
    triggerHref: '#anotherAnchor',
    inline: true
  },
  tab: {
    className: 'another-class'
  }
};

var renderAnchor = function renderAnchor(props) {
  return /*#__PURE__*/React.createElement("a", {
    href: props.href
  }, props.label);
};

var RegularPage = function RegularPage(_ref) {
  var children = _ref.children,
      withoutSecondary = _ref.withoutSecondary,
      withoutSecondaryTabs = _ref.withoutSecondaryTabs,
      pageWidth = _ref.pageWidth,
      title = _ref.title;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MainNavigation, {
    pageWidth: pageWidth,
    logo: /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "Application name")
  }, /*#__PURE__*/React.createElement(MainNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "http://communities.wfp.org",
    target: "_blank"
  }, "Section 1")), /*#__PURE__*/React.createElement(MainNavigationItem, {
    subNavigation: /*#__PURE__*/React.createElement(SubNavigation, null, /*#__PURE__*/React.createElement(SubNavigationHeader, null, /*#__PURE__*/React.createElement(SubNavigationTitle, null, "The Title"), /*#__PURE__*/React.createElement(SubNavigationLink, null, /*#__PURE__*/React.createElement(Button, {
      small: true
    }, "The SubPage Link")), /*#__PURE__*/React.createElement(SubNavigationFilter, null, /*#__PURE__*/React.createElement(Search, {
      className: "some-class",
      small: true,
      label: null,
      id: "search-2",
      placeHolderText: "Filter List"
    }))), /*#__PURE__*/React.createElement(SubNavigationContent, null, /*#__PURE__*/React.createElement(SubNavigationList, null, /*#__PURE__*/React.createElement(SubNavigationGroup, {
      title: "First List",
      columns: true
    }, /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Lorem Ipsum et jomen")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "At vero eos")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Sadipscing elitr")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "At vero eos")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Sadipscing elitr")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Dolore magna")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Sadipscing elitr")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Consetetur sadipscing")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Sadipscing elitr"))), /*#__PURE__*/React.createElement(SubNavigationGroup, {
      title: "Second List of Items",
      columns: true
    }, /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "At vero eos")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Sadipscing elitr")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "At vero eos")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Nonumy eirmod")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Consetetur sadipscing")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Dolore magna")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Nonumy eirmod")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Dolore magna")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Sadipscing elitr"))))))
  }, /*#__PURE__*/React.createElement(Link, {
    href: "http://manuals.wfp.org",
    target: "_blank"
  }, "Section 2")), /*#__PURE__*/React.createElement(MainNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "Section 3")), /*#__PURE__*/React.createElement(MainNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "http://opweb.wfp.org",
    target: "_blank"
  }, "Section 4")), /*#__PURE__*/React.createElement(MainNavigationItem, null, /*#__PURE__*/React.createElement(Search, {
    kind: "main",
    id: "search-2",
    placeHolderText: "Search"
  })), /*#__PURE__*/React.createElement(MainNavigationItem, {
    className: "wfp--main-navigation__user",
    subNavigation: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Hello World"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquya."))
  }, /*#__PURE__*/React.createElement(User, {
    ellipsis: true,
    title: "Max Mustermann long name"
  }))), !withoutSecondary && /*#__PURE__*/React.createElement(SecondaryNavigation, {
    additional: "additional Information",
    pageWidth: pageWidth
  }, /*#__PURE__*/React.createElement(Breadcrumb, null, /*#__PURE__*/React.createElement(BreadcrumbItem, null, /*#__PURE__*/React.createElement("a", {
    href: "/#"
  }, /*#__PURE__*/React.createElement(BreadcrumbHome, null))), /*#__PURE__*/React.createElement(BreadcrumbItem, {
    href: "#"
  }, "Breadcrumb 2"), /*#__PURE__*/React.createElement(BreadcrumbItem, {
    disableLink: true
  }, " Breadcrumb 3")), /*#__PURE__*/React.createElement(SecondaryNavigationTitle, null, title ? title : 'The page title'), !withoutSecondaryTabs && /*#__PURE__*/React.createElement(Tabs, _extends({}, props.tabs, {
    customTabContent: true
  }), /*#__PURE__*/React.createElement(Tab, _extends({}, props.tab, {
    label: "Tab label 1",
    href: "http://www.de.wfp.org",
    renderAnchor: renderAnchor
  })), /*#__PURE__*/React.createElement(Tab, _extends({}, props.tab, {
    label: "Tab label 2",
    href: "http://www.es.wfp.org",
    renderAnchor: renderAnchor
  })), /*#__PURE__*/React.createElement(Tab, _extends({}, props.tab, {
    label: "Tab label 3",
    href: "http://www.us.wfp.org",
    renderAnchor: renderAnchor
  })), /*#__PURE__*/React.createElement(Tab, _extends({}, props.tab, {
    label: "Tab label 4",
    href: "http://www.fr.wfp.org",
    renderAnchor: renderAnchor
  })))), children, /*#__PURE__*/React.createElement(Footer, {
    pageWidth: pageWidth,
    metaContent: "WFP UI Kit version 1.0 \u2013 powered by RMT with full support of concerned divisions which are responsible for the accuracy of the content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wfp--footer__info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wfp--footer__info__item"
  }, /*#__PURE__*/React.createElement("p", {
    className: "wfp--footer__label"
  }, "A label"), /*#__PURE__*/React.createElement("ul", {
    className: "wfp--footer__list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    href: "http://www.wfp.org"
  }, "First Link")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    href: "http://www.wfp.org"
  }, "Second Link")))), /*#__PURE__*/React.createElement("div", {
    className: "wfp--footer__info__item"
  }, /*#__PURE__*/React.createElement("p", {
    className: "wfp--footer__label"
  }, "Another label"), /*#__PURE__*/React.createElement("ul", {
    className: "wfp--footer__list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    href: "http://www.wfp.org"
  }, "First Link")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    href: "http://www.wfp.org"
  }, "Second Link")))))));
};

RegularPage.propTypes = {
  /**
    Width of Wrapper, use 'narrow' or leave empty
  */
  children: PropTypes.node,
  className: PropTypes.string
};
RegularPage.defaultProps = {
  pageWidth: 'lg'
};
export default RegularPage;