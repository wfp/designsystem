"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Colour = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Link = _interopRequireDefault(require("../../components/Link"));

var _List = require("../../components/List");

var _Page = _interopRequireDefault(require("../Page"));

var _addonLinks = require("@storybook/addon-links");

var _ColourList = _interopRequireDefault(require("./ColourList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//import './colours.scss';
// import styles from './colours.module.scss';
var Colour = function Colour(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'inline-block',
      marginRight: '0.5em',
      borderRadius: '3px',
      width: '0.9em',
      height: '0.9em',
      background: "var(--".concat(color, ")")
    }
  }), color);
};

exports.Colour = Colour;

var scrollToRef = function scrollToRef(ref) {
  return window.scrollTo(0, ref.current.offsetTop);
};

var ColourDocs = function ColourDocs() {
  var linkRefs = {
    primary: (0, _react.useRef)(null),
    extendedPrimary: (0, _react.useRef)(null),
    neutrals: (0, _react.useRef)(null),
    dataviz: (0, _react.useRef)(null),
    semantic: (0, _react.useRef)(null),
    symbolic: (0, _react.useRef)(null)
  };

  var executeScroll = function executeScroll(e) {
    e.preventDefault();
    scrollToRef(linkRefs[e.target.getAttribute('href')]);
  };

  return /*#__PURE__*/_react.default.createElement(_Page.default, {
    title: "Colours",
    subTitle: "Core"
  }, /*#__PURE__*/_react.default.createElement("p", null, "WFP online visual identity includes the following colours:"), /*#__PURE__*/_react.default.createElement(_List.List, {
    kind: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_List.ListItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "primary",
    onClick: executeScroll
  }, "primary", ' ')), /*#__PURE__*/_react.default.createElement(_List.ListItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "extendedPrimary",
    onClick: executeScroll
  }, "extended primary", ' ')), /*#__PURE__*/_react.default.createElement(_List.ListItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "neutrals",
    onClick: executeScroll
  }, "neutrals", ' ')), /*#__PURE__*/_react.default.createElement(_List.ListItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "dataviz",
    onClick: executeScroll
  }, "dataviz", ' ')), /*#__PURE__*/_react.default.createElement(_List.ListItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "semantic",
    onClick: executeScroll
  }, "semantic", ' ')), /*#__PURE__*/_react.default.createElement(_List.ListItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "symbolic",
    onClick: executeScroll
  }, "symbolic", ' '))), /*#__PURE__*/_react.default.createElement("p", null, "The WFP official branding palette can be found", ' ', /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "http://brand.manuals.wfp.org/en/core-elements/colours/colour-palette/"
  }, "here"), "."), /*#__PURE__*/_react.default.createElement("p", null, "Use the ", /*#__PURE__*/_react.default.createElement("i", null, "70\u201325\u20135"), " rule to create sense of balance and allow the eye to move comfortably from one focal point to the next."), /*#__PURE__*/_react.default.createElement("img", {
    alt: "Brand colour",
    style: {
      width: '100%',
      height: 'auto',
      marginTop: '1em',
      marginLeft: '0em'
    },
    src: "".concat(process.env.STORYBOOK_INTERNAL_ASSETS, "internal/colors.png")
  }), /*#__PURE__*/_react.default.createElement("h3", {
    ref: linkRefs.primary
  }, "Primary Colours"), /*#__PURE__*/_react.default.createElement("p", null, "Primary colours are the base colours of the UI, the ones that are used most frequently in the interface.", ' ', /*#__PURE__*/_react.default.createElement("b", null, "Brand-01 is the base branding colour"), ", corresponding to WFP\u2019s corporate blue: it is used for brand elements and non-interactive elements. ", /*#__PURE__*/_react.default.createElement("b", null, "Interactive colours"), " are used for primary links and action items that can be clicked or touched, to emphasize important actions and highlight information in your application. Yellow is the recommended ", /*#__PURE__*/_react.default.createElement("b", null, "secondary accent colour"), ": to use a different colour please contact", ' ', /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "mailto:hq.creativestudio@wfp.org"
  }, "hq.creativestudio@wfp.org")), /*#__PURE__*/_react.default.createElement(_ColourList.default, {
    filter: "brand"
  }), /*#__PURE__*/_react.default.createElement(Colour, {
    color: "brand-01"
  }), /*#__PURE__*/_react.default.createElement("h4", {
    className: "wfp--story__sub-heading"
  }, "WFP's corporate colour"), /*#__PURE__*/_react.default.createElement("p", null, "The brand-01 colour is WFP\u2019s corporate blue which is used in all (non-interactive) branding elements. It is the colour displayed most frequently across your App\u2019s screens and components. The primary colour can also be used to accent elements."), /*#__PURE__*/_react.default.createElement("section", {
    className: "dodonot"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h4", null, "Use brand-01 for:"), /*#__PURE__*/_react.default.createElement(_List.List, {
    kind: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, /*#__PURE__*/_react.default.createElement(_Link.default, {
    onClick: (0, _addonLinks.linkTo)('Components|MainNavigation', 'default')
  }, "MainNavigation")), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "brand elements"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "dark background"))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h4", null, "Do not use for:"), /*#__PURE__*/_react.default.createElement(_List.List, {
    kind: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "cross"
  }, "interactive elements like buttons or links"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "cross"
  }, "Primary and secondary colours")))), /*#__PURE__*/_react.default.createElement(Colour, {
    color: "interactive-01"
  }), /*#__PURE__*/_react.default.createElement("h4", {
    className: "wfp--story__sub-heading"
  }, "Primary interactive colour, primary buttons"), /*#__PURE__*/_react.default.createElement("p", null, "Used for primary links and action elements that can be clicked or touched. It is slightly lighter then the main WFP blue to communicate that an element is interactive and to be distinguishable from black."), /*#__PURE__*/_react.default.createElement("img", {
    alt: "Brand colour",
    style: {
      width: '100%',
      height: 'auto',
      marginTop: '1em',
      marginLeft: '0em'
    },
    src: "".concat(process.env.STORYBOOK_INTERNAL_ASSETS, "internal/brand-color.png")
  }), /*#__PURE__*/_react.default.createElement(Colour, {
    color: "interactive-02"
  }), /*#__PURE__*/_react.default.createElement("h4", {
    className: "wfp--story__sub-heading"
  }, "Interactive emphasis colour (e.g. hovers)"), /*#__PURE__*/_react.default.createElement("p", null, "This colour is used for hover and active states.", ' '), /*#__PURE__*/_react.default.createElement("section", {
    className: "dodonot"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h4", null, "Use interactive - 01 for:"), /*#__PURE__*/_react.default.createElement(_List.List, {
    kind: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "links"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "buttons"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "other interactive elements"))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h4", null, "Do not use for:"), /*#__PURE__*/_react.default.createElement(_List.List, {
    kind: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "cross"
  }, ' ', /*#__PURE__*/_react.default.createElement(_Link.default, {
    onClick: (0, _addonLinks.linkTo)('Components|MainNavigation', 'default')
  }, "MainNavigation"), ", since it is a branding element and not interactive as a whole"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "cross"
  }, "other branding elements"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "cross"
  }, "non - interactive elements")))), /*#__PURE__*/_react.default.createElement(Colour, {
    color: "accent-01"
  }), /*#__PURE__*/_react.default.createElement("h4", {
    className: "wfp--story__sub-heading"
  }, "Accent secondary colour"), /*#__PURE__*/_react.default.createElement("img", {
    alt: "Brand colour",
    style: {
      width: '100%',
      height: 'auto',
      marginTop: '1em',
      marginLeft: '0em'
    },
    src: "".concat(process.env.STORYBOOK_INTERNAL_ASSETS, "internal/secondary-color.png")
  }), /*#__PURE__*/_react.default.createElement("p", null, "Use to emphasize important actions and highlighted information in your application.It can help encourage visitors to make more interactions with the elements of your design."), /*#__PURE__*/_react.default.createElement("p", null, "Be playful and crazy here but don't forget that the accent colour should be maximum 10 % of colour of the whole product. Yellow is the recommended accent colour. To use a different accent colour then yellow please contact", ' ', /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "mailto:hq.creativestudio@wfp.org"
  }, "hq.creativestudio@wfp.org"), "."), /*#__PURE__*/_react.default.createElement("section", {
    className: "dodonot"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h4", null, "Secondary colours are best for:"), /*#__PURE__*/_react.default.createElement(_List.List, {
    kind: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "floating action buttons (mobile devices)"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "progress bars"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "important highlights"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "call-to-action buttons and links"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "yellow makes a good button colour in placed in isolation"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "external websites where colour creates interest and meaning and improves the conversion rate"))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h4", null, "Do not use it:"), /*#__PURE__*/_react.default.createElement(_List.List, {
    kind: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "cross"
  }, "for regular actions"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "cross"
  }, "multiple actions / times on the same webpage"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "cross"
  }, "limit the use of yellow to the elements you want to emphasize related to the audience priority"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "cross"
  }, "limit usage for texts and navigation elements")))), /*#__PURE__*/_react.default.createElement("h3", {
    ref: linkRefs.extendedPrimary
  }, "Extended primary palette"), /*#__PURE__*/_react.default.createElement("p", null, "This palette extends the primary palette by providing lighter and darker tints of the WFP brand colour. They can be used to increase the contrast of the UI elements to make them more or less visible compared to the rest of the interface."), /*#__PURE__*/_react.default.createElement(_ColourList.default, {
    filter: "brand-extended"
  }), /*#__PURE__*/_react.default.createElement("h3", {
    ref: linkRefs.neutrals
  }, "Neutrals"), /*#__PURE__*/_react.default.createElement("p", null, "Neutral colours are used for non-interactive elements, backgrounds, borders and texts."), /*#__PURE__*/_react.default.createElement(_ColourList.default, {
    filter: "ui"
  }), /*#__PURE__*/_react.default.createElement("h3", null, "ui-01 and ui-02"), /*#__PURE__*/_react.default.createElement("h4", {
    className: "wfp--story__sub-heading"
  }, "Container and page background colors"), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("b", null, "ui-01"), " is used as the page background if there are not Modules on top of it, while ui-02 is used as the page background when there are Modules on top."), /*#__PURE__*/_react.default.createElement("img", {
    alt: "Brand colour",
    style: {
      width: '100%',
      height: 'auto',
      marginTop: '3em',
      marginLeft: '0em'
    },
    src: "".concat(process.env.STORYBOOK_INTERNAL_ASSETS, "internal/background-contrast.png")
  }), /*#__PURE__*/_react.default.createElement("h3", {
    ref: linkRefs.dataviz
  }, "Data visualisation palettes"), /*#__PURE__*/_react.default.createElement(_ColourList.default, {
    filter: "communications"
  }), /*#__PURE__*/_react.default.createElement("h3", {
    ref: linkRefs.semantic
  }, "Semantic colours"), /*#__PURE__*/_react.default.createElement(_ColourList.default, {
    filter: "support"
  }));
};

var _default = ColourDocs;
exports.default = _default;