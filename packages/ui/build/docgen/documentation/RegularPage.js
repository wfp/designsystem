"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Link = _interopRequireDefault(require("../components/Link"));

var _Footer = _interopRequireDefault(require("../components/Footer"));

var _Search = _interopRequireDefault(require("../components/Search"));

var _SecondaryNavigation = require("../components/SecondaryNavigation");

var _Breadcrumb = _interopRequireDefault(require("../components/Breadcrumb"));

var _BreadcrumbItem = _interopRequireDefault(require("../components/BreadcrumbItem"));

var _BreadcrumbHome = _interopRequireDefault(require("../components/BreadcrumbHome"));

var _Tabs = _interopRequireDefault(require("../components/Tabs"));

var _Tab = _interopRequireDefault(require("../components/Tab"));

var _Button = _interopRequireDefault(require("../components/Button"));

var _MainNavigation = _interopRequireDefault(require("../components/MainNavigation"));

var _MainNavigationItem = _interopRequireDefault(require("../components/MainNavigationItem"));

var _SubNavigation = require("../components/SubNavigation");

var _User = _interopRequireDefault(require("../components/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  return /*#__PURE__*/_react.default.createElement("a", {
    href: props.href
  }, props.label);
};

var RegularPage = function RegularPage(_ref) {
  var children = _ref.children,
      withoutSecondary = _ref.withoutSecondary,
      withoutSecondaryTabs = _ref.withoutSecondaryTabs,
      pageWidth = _ref.pageWidth,
      title = _ref.title;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_MainNavigation.default, {
    pageWidth: pageWidth,
    logo: /*#__PURE__*/_react.default.createElement("a", {
      href: "#"
    }, "Application name")
  }, /*#__PURE__*/_react.default.createElement(_MainNavigationItem.default, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "http://communities.wfp.org",
    target: "_blank"
  }, "Section 1")), /*#__PURE__*/_react.default.createElement(_MainNavigationItem.default, {
    subNavigation: /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigation, null, /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationHeader, null, /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationTitle, null, "The Title"), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationLink, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
      small: true
    }, "The SubPage Link")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationFilter, null, /*#__PURE__*/_react.default.createElement(_Search.default, {
      className: "some-class",
      small: true,
      label: null,
      id: "search-2",
      placeHolderText: "Filter List"
    }))), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationContent, null, /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationList, null, /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationGroup, {
      title: "First List",
      columns: true
    }, /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Lorem Ipsum et jomen")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "At vero eos")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Sadipscing elitr")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "At vero eos")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Sadipscing elitr")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Dolore magna")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Sadipscing elitr")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Consetetur sadipscing")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Sadipscing elitr"))), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationGroup, {
      title: "Second List of Items",
      columns: true
    }, /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "At vero eos")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Sadipscing elitr")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "At vero eos")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Nonumy eirmod")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Consetetur sadipscing")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Dolore magna")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Nonumy eirmod")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Dolore magna")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
      href: "https://go.docs.wfp.org",
      target: "_blank"
    }, "Sadipscing elitr"))))))
  }, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "http://manuals.wfp.org",
    target: "_blank"
  }, "Section 2")), /*#__PURE__*/_react.default.createElement(_MainNavigationItem.default, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "Section 3")), /*#__PURE__*/_react.default.createElement(_MainNavigationItem.default, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "http://opweb.wfp.org",
    target: "_blank"
  }, "Section 4")), /*#__PURE__*/_react.default.createElement(_MainNavigationItem.default, null, /*#__PURE__*/_react.default.createElement(_Search.default, {
    kind: "main",
    id: "search-2",
    placeHolderText: "Search"
  })), /*#__PURE__*/_react.default.createElement(_MainNavigationItem.default, {
    className: "wfp--main-navigation__user",
    subNavigation: /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "Hello World"), /*#__PURE__*/_react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquya."))
  }, /*#__PURE__*/_react.default.createElement(_User.default, {
    ellipsis: true,
    title: "Max Mustermann long name"
  }))), !withoutSecondary && /*#__PURE__*/_react.default.createElement(_SecondaryNavigation.SecondaryNavigation, {
    additional: "additional Information",
    pageWidth: pageWidth
  }, /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, null, /*#__PURE__*/_react.default.createElement(_BreadcrumbItem.default, null, /*#__PURE__*/_react.default.createElement("a", {
    href: "/#"
  }, /*#__PURE__*/_react.default.createElement(_BreadcrumbHome.default, null))), /*#__PURE__*/_react.default.createElement(_BreadcrumbItem.default, {
    href: "#"
  }, "Breadcrumb 2"), /*#__PURE__*/_react.default.createElement(_BreadcrumbItem.default, {
    disableLink: true
  }, " Breadcrumb 3")), /*#__PURE__*/_react.default.createElement(_SecondaryNavigation.SecondaryNavigationTitle, null, title ? title : 'The page title'), !withoutSecondaryTabs && /*#__PURE__*/_react.default.createElement(_Tabs.default, _extends({}, props.tabs, {
    customTabContent: true
  }), /*#__PURE__*/_react.default.createElement(_Tab.default, _extends({}, props.tab, {
    label: "Tab label 1",
    href: "http://www.de.wfp.org",
    renderAnchor: renderAnchor
  })), /*#__PURE__*/_react.default.createElement(_Tab.default, _extends({}, props.tab, {
    label: "Tab label 2",
    href: "http://www.es.wfp.org",
    renderAnchor: renderAnchor
  })), /*#__PURE__*/_react.default.createElement(_Tab.default, _extends({}, props.tab, {
    label: "Tab label 3",
    href: "http://www.us.wfp.org",
    renderAnchor: renderAnchor
  })), /*#__PURE__*/_react.default.createElement(_Tab.default, _extends({}, props.tab, {
    label: "Tab label 4",
    href: "http://www.fr.wfp.org",
    renderAnchor: renderAnchor
  })))), children, /*#__PURE__*/_react.default.createElement(_Footer.default, {
    pageWidth: pageWidth,
    metaContent: "WFP UI Kit version 1.0 \u2013 powered by RMT with full support of concerned divisions which are responsible for the accuracy of the content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "wfp--footer__info"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "wfp--footer__info__item"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "wfp--footer__label"
  }, "A label"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "wfp--footer__list"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "http://www.wfp.org"
  }, "First Link")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "http://www.wfp.org"
  }, "Second Link")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "wfp--footer__info__item"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "wfp--footer__label"
  }, "Another label"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "wfp--footer__list"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "http://www.wfp.org"
  }, "First Link")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "http://www.wfp.org"
  }, "Second Link")))))));
};

RegularPage.propTypes = {
  /**
    Width of Wrapper, use 'narrow' or leave empty
  */
  children: _propTypes.default.node,
  className: _propTypes.default.string
};
RegularPage.defaultProps = {
  pageWidth: 'lg'
};
var _default = RegularPage;
exports.default = _default;