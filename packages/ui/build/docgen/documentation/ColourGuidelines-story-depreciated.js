"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Page = _interopRequireDefault(require("./Page"));

var _Link = _interopRequireDefault(require("../components/Link"));

var _List = require("../components/List");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
var Color = function Color(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'inline-block',
      marginRight: '0.5em',
      borderRadius: '3px',
      width: '0.9em',
      height: '0.9em'
    },
    className: "color__".concat(color)
  }), color);
};

(0, _react2.storiesOf)('Design|Core', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false
  }
}).add('Colour guidelines', function () {
  return /*#__PURE__*/_react.default.createElement(_Page.default, {
    title: "Colour guidelines",
    subTitle: "Naming convention & linting"
  }, /*#__PURE__*/_react.default.createElement("p", null, "A colour scheme usually consists of these colour categories:"), /*#__PURE__*/_react.default.createElement(_List.List, {
    kind: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_List.ListItem, null, "Interactive, primary and secondary colours"), /*#__PURE__*/_react.default.createElement(_List.ListItem, null, "Accent colours"), " ", /*#__PURE__*/_react.default.createElement(_List.ListItem, null, "Neutrals"), /*#__PURE__*/_react.default.createElement(_List.ListItem, null, "Semantic colours")), /*#__PURE__*/_react.default.createElement("p", null, "Use the ", /*#__PURE__*/_react.default.createElement("i", null, "70\u201325\u20135 (60\u201330\u201310)"), " rule to create sense of balance and allow the eye to move comfortably from one focal point to the next."), /*#__PURE__*/_react.default.createElement("img", {
    alt: "Brand colour",
    style: {
      width: '100%',
      height: 'auto',
      marginTop: '1em',
      marginLeft: '0em'
    },
    src: "".concat(process.env.STORYBOOK_INTERNAL_ASSETS, "internal/colors.png")
  }), /*#__PURE__*/_react.default.createElement("h2", null, "Interactive colours"), /*#__PURE__*/_react.default.createElement(Color, {
    color: "interactive-01"
  }), /*#__PURE__*/_react.default.createElement("h4", {
    className: "wfp--story__sub-heading"
  }, "Primary interactive colour, Primary buttons"), /*#__PURE__*/_react.default.createElement("p", null, "Used for primary links and action elements that can be clicked or touched. It is slightly lighter then the main WFP blue to communicate that an element is interactive and to be distinguishable from black."), /*#__PURE__*/_react.default.createElement("h4", null, "Use interactive - 01 for:"), /*#__PURE__*/_react.default.createElement(_List.List, {
    kind: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "links"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "buttons"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "other interactive elements")), /*#__PURE__*/_react.default.createElement("img", {
    alt: "Brand colour",
    style: {
      width: '100%',
      height: 'auto',
      marginTop: '1em',
      marginLeft: '0em'
    },
    src: "".concat(process.env.STORYBOOK_INTERNAL_ASSETS, "internal/brand-color.png")
  }), /*#__PURE__*/_react.default.createElement("h5", null, "Do not use for:"), /*#__PURE__*/_react.default.createElement(_List.List, {
    kind: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "cross"
  }, ' ', "MainNavigation, since it is a branding element and not interactive as a whole"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "cross"
  }, "other branding elements"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "cross"
  }, "non - interactive elements")), /*#__PURE__*/_react.default.createElement("h2", null, "Brand colour"), /*#__PURE__*/_react.default.createElement("p", null, "These are the base colours of the UI. Primary colours are the ones that are used most frequently in the interface.The WFP brand colour is selected as the primary colour."), /*#__PURE__*/_react.default.createElement(Color, {
    color: "brand-01"
  }), /*#__PURE__*/_react.default.createElement("h4", {
    className: "wfp--story__sub-heading"
  }, "WFP's corporate colour"), /*#__PURE__*/_react.default.createElement("p", null, "The brand-01 colour is WFP\u2019s corporate blue which is used in all (non-interactive) branding elements."), /*#__PURE__*/_react.default.createElement("p", null, "It is the colour displayed most frequently across your App\u2019s screens and components. The primary colour can also be used to accent elements."), /*#__PURE__*/_react.default.createElement("h4", null, "Use brand-01 for:"), /*#__PURE__*/_react.default.createElement(_List.List, {
    kind: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "MainNavigation"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "brand elements"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "dark background")), /*#__PURE__*/_react.default.createElement("h4", null, "Do not use for:"), /*#__PURE__*/_react.default.createElement(_List.List, {
    kind: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "cross"
  }, "interactive elements like buttons or links"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "cross"
  }, "Primary and secondary colours")), /*#__PURE__*/_react.default.createElement(Color, {
    color: "interactive-02"
  }), /*#__PURE__*/_react.default.createElement("h4", {
    className: "wfp--story__sub-heading"
  }, "Interactive emphasis colour (e.g. hovers)"), /*#__PURE__*/_react.default.createElement("p", null, "This colour is used for hover, actived states and to create contrast between UI elements such as distinguishing the BannerNavigation bar from the MainNavigation. You can use this dark variant of our primary colour on elements."), /*#__PURE__*/_react.default.createElement("p", null, "To be discussed for mobile: You can also use variants to distinguish elements within a component, such different variants used on a floating action button container as well as the icon within it."), /*#__PURE__*/_react.default.createElement(Color, {
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
  }, "hq.creativestudio@wfp.org"), "."), /*#__PURE__*/_react.default.createElement("p", null, "Yellow is the recommmended accent colour. ", /*#__PURE__*/_react.default.createElement("br", null), "To use a different accent colour then yellow please contact hq.creativestudio@wfp.org"), /*#__PURE__*/_react.default.createElement("h4", null, "Secondary colours are best for:"), /*#__PURE__*/_react.default.createElement(_List.List, {
    kind: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "floating action buttons(mobile devices)"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "progress bars"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "important highlights"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "Call - to - action buttons and links"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "yellow makes a good button colour in placed in isolation"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "external websites where colour creates interest and meaning and improves the conversation rate")), /*#__PURE__*/_react.default.createElement("h4", null, "Do not use it:"), /*#__PURE__*/_react.default.createElement(_List.List, {
    kind: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "cross"
  }, "for regular actions"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "cross"
  }, "multiple actions / times on the same webpage"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "cross"
  }, "limit the use of yellow to the elements you want to emphasize related to the audience priority"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "cross"
  }, "limit usage for texts and navigation elements")), /*#__PURE__*/_react.default.createElement("h3", null, "sdg - 01 - 17"), ' ', /*#__PURE__*/_react.default.createElement("h4", {
    className: "wfp--story__sub-heading"
  }, "SDG colors add here"), /*#__PURE__*/_react.default.createElement("h3", null, "Neutral colours"), /*#__PURE__*/_react.default.createElement("p", null, "Neutral colours are used in the interface for non-interactive elements, backgrounds and borders."), /*#__PURE__*/_react.default.createElement("img", {
    alt: "Brand colour",
    style: {
      width: '100%',
      height: 'auto',
      marginTop: '3em',
      marginLeft: '0em'
    },
    src: "".concat(process.env.STORYBOOK_INTERNAL_ASSETS, "internal/background-contrast.png")
  }), /*#__PURE__*/_react.default.createElement(Color, {
    color: "ui-01"
  }), /*#__PURE__*/_react.default.createElement("h4", {
    className: "wfp--story__sub-heading"
  }, "Primary container background; Secondary page background"), /*#__PURE__*/_react.default.createElement("p", null, "This colour is used as the page background if there are no Modules on top of it."), /*#__PURE__*/_react.default.createElement(Color, {
    color: "ui-02"
  }), /*#__PURE__*/_react.default.createElement("h4", {
    className: "wfp--story__sub-heading"
  }, "Primary page background; Secondary container background"), /*#__PURE__*/_react.default.createElement("p", null, "Use this colour as page background if there are modules on top of it to increase the contrast between the modules."), /*#__PURE__*/_react.default.createElement(Color, {
    color: "ui-03"
  }), /*#__PURE__*/_react.default.createElement("h4", {
    className: "wfp--story__sub-heading"
  }, "Subtle border, Tertiary background colour"), /*#__PURE__*/_react.default.createElement(Color, {
    color: "ui-04"
  }), /*#__PURE__*/_react.default.createElement("h4", {
    className: "wfp--story__sub-heading"
  }, "3: 1 AA element contrast; Medium contrast border"), /*#__PURE__*/_react.default.createElement(Color, {
    color: "ui-05"
  }), /*#__PURE__*/_react.default.createElement("h4", {
    className: "wfp--story__sub-heading"
  }, "4.5: 1 AA element contrast; High contrast border; Emphasis elements"), /*#__PURE__*/_react.default.createElement(Color, {
    color: "text-01"
  }), /*#__PURE__*/_react.default.createElement("h4", {
    className: "wfp--story__sub-heading"
  }, "Primary text; Body copy; Headers; Hover text colour for text - 02"), /*#__PURE__*/_react.default.createElement(Color, {
    color: "text-02"
  }), /*#__PURE__*/_react.default.createElement("h4", {
    className: "wfp--story__sub-heading"
  }, "Secondary text; Input labels; Help text"), /*#__PURE__*/_react.default.createElement(Color, {
    color: "text-03"
  }), /*#__PURE__*/_react.default.createElement("h4", {
    className: "wfp--story__sub-heading"
  }, "Placeholder text; Semantic colours"), /*#__PURE__*/_react.default.createElement("h2", null, "Success, error, warning and information"), /*#__PURE__*/_react.default.createElement(Color, {
    color: "support-01"
  }), /*#__PURE__*/_react.default.createElement("h4", {
    className: "wfp--story__sub-heading"
  }, "Error"), /*#__PURE__*/_react.default.createElement("p", null, "Use the error color to indicate an error or to focus the attention on something which is crucial to see. Paired with a cross icon, red delivers the message that something went wrong."), /*#__PURE__*/_react.default.createElement(Color, {
    color: "support-02"
  }), /*#__PURE__*/_react.default.createElement("h4", {
    className: "wfp--story__sub-heading"
  }, "Success"), /*#__PURE__*/_react.default.createElement("p", null, "Use green to indicate success state. Paired with a checkmark icon the user knows that the operation was successfully completed."), /*#__PURE__*/_react.default.createElement(Color, {
    color: "support-03"
  }), /*#__PURE__*/_react.default.createElement("h4", {
    className: "wfp--story__sub-heading"
  }, "Warning"), /*#__PURE__*/_react.default.createElement("p", null, "Use yellow to indicate a transient warning which is less important than an error message. Yellow typically consists of items which require the user\u2019s immediate attention, or indicate a waiting period. Although this overlaps with the use of red, yellow is more transient in nature."));
});