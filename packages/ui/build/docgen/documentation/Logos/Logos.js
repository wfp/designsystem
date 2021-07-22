"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Logos;

var _react = _interopRequireDefault(require("react"));

var _Link = _interopRequireDefault(require("../../components/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LogoElement = function LogoElement(_ref) {
  var color = _ref.color,
      logoKind = _ref.logoKind,
      src = _ref.src;
  var fileTypes = ['.svg',
  /*'.png', '@4x.png',*/
  '.png'];
  var backgroundColor = color === 'white' ? '#454646' : '#FFFFFF';
  var width = logoKind === 'standard' || logoKind === 'extended' ? 'auto' : 'auto';
  var height = logoKind === 'standard' || logoKind === 'extended' ? '40px' : '80px';
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'inline-block',
      marginRight: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      border: '1px solid #E5E5E5',
      backgroundColor: backgroundColor,
      padding: '0.7em'
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "WFP Logo",
    className: "storybook--logo\\_\\_element",
    style: {
      width: width,
      height: height,
      border: 'none'
    },
    src: "".concat(process.env.STORYBOOK_ASSETS).concat(src, ".svg")
  })), /*#__PURE__*/_react.default.createElement("br", null), fileTypes.map(function (fileType) {
    return /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_Link.default, {
      small: true,
      style: {
        marginRight: '0.5em',
        fontSize: '0.7em'
      },
      target: "\\_blank",
      href: "".concat(process.env.STORYBOOK_ASSETS).concat(src).concat(fileType)
    }, fileType.replace('.', '')));
  }));
}; // extended logo versions are removed from documentation based on recommendations from CAM, but they still exist in assets for developers already using them in their code.


function Logos() {
  var logoKinds = [{
    key: 'standard',
    description: '',
    link: 'http://brand.manuals.wfp.org/en/core-elements/logo/english-versions/'
  }, {
    key: 'vertical',
    description: '',
    link: 'http://brand.manuals.wfp.org/en/core-elements/logo/english-versions/'
  }, {
    key: 'emblem',
    description: 'The WFP emblem has been restyled to improve its legibility when it is reproduced on screen and in video, particularly at small sizes.',
    link: 'http://brand.manuals.wfp.org/en/core-elements/logo/emblem-restyling-2018/'
  }, {
    key: 'acronym',
    description: "The acronym WFP is used globally, and must not be translated. It is usually used as part of WFP's logo. However, where the upmost simplicity and immediate recognition are necessary, the acronym can be used alone if it will aid legibility.",
    link: 'http://brand.manuals.wfp.org/en/core-elements/logo/acronym/'
  }, {
    key: 'sdg',
    title: 'The Sustainable Development Goals (SDGs)',
    description: "The Sustainable Development Goals (SDGs) logo, including the colour wheel can be used in addition to WFP's logo.",
    link: 'https://www.un.org/sustainabledevelopment/news/communications-material/'
  }];
  var colors = ['blue', 'black', 'white'];
  var colorsSdg = ['colour'];
  var languages = ['en', 'es', 'fr', 'ar'];
  var colorList = logoKinds.map(function (logoKind) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        marginBottom: '1em'
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        marginBottom: '1em'
      }
    }), /*#__PURE__*/_react.default.createElement("h2", null, logoKind.title ? logoKind.title : logoKind.key), /*#__PURE__*/_react.default.createElement("p", null, logoKind.description), /*#__PURE__*/_react.default.createElement(_Link.default, {
      href: logoKind.link
    }, "Additional information"), (logoKind.key === 'sdg' ? colorsSdg : colors).map(function (color) {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h4", null, color), /*#__PURE__*/_react.default.createElement("div", null, logoKind.key === 'sdg' ? /*#__PURE__*/_react.default.createElement(LogoElement, {
        color: color,
        logoKind: logoKind.key,
        src: "logos/".concat(logoKind.key, "/sdg-logo-circle")
      }) : logoKind.key === 'emblem' || logoKind.key === 'acronym' ? /*#__PURE__*/_react.default.createElement(LogoElement, {
        color: color,
        logoKind: logoKind.key,
        src: "logos/".concat(logoKind.key, "/wfp-logo-").concat(logoKind.key, "-").concat(color)
      }) : /*#__PURE__*/_react.default.createElement("div", null, languages.map(function (language) {
        return /*#__PURE__*/_react.default.createElement(LogoElement, {
          color: color,
          logoKind: logoKind.key,
          src: "logos/".concat(logoKind.key, "/").concat(language, "/wfp-logo-").concat(logoKind.key, "-").concat(color, "-").concat(language)
        });
      }))));
    }));
  });
  return /*#__PURE__*/_react.default.createElement("div", null, colorList);
}