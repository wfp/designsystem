"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColourList = void 0;

var _react = _interopRequireDefault(require("react"));

var _List = require("../../components/List");

var _Tooltip = _interopRequireDefault(require("../../components/Tooltip"));

var _Module = require("../../components/Module");

var _colors = _interopRequireDefault(require("../../globals/data/colors"));

var _wcagContrast = require("wcag-contrast");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import './colours.scss';
var ColourList = function ColourList(_ref) {
  var filter = _ref.filter;
  var filteredColors = Object.values(_colors.default).filter(function (ui_colors) {
    return ui_colors.type === filter;
  });
  var list = filteredColors.map(function (color) {
    var computedColor = getComputedStyle(document.body).getPropertyValue("--".concat(color.name));
    return /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
      content: /*#__PURE__*/_react.default.createElement("div", null, color.description && /*#__PURE__*/_react.default.createElement("p", null, color.description), color.name)
    }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_Module.Module, {
      fullHeight: true,
      noMargin: true,
      light: true,
      className: "color__item"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "color__field",
      style: {
        backgroundColor: color.hex
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "color__contrast"
    }, /*#__PURE__*/_react.default.createElement("span", null, "A"), /*#__PURE__*/_react.default.createElement("div", null, ">", (0, _wcagContrast.score)((0, _wcagContrast.hex)(color.hex, '#000000')))), /*#__PURE__*/_react.default.createElement("div", {
      className: "color__contrast color__contrast--light"
    }, /*#__PURE__*/_react.default.createElement("span", null, "A"), /*#__PURE__*/_react.default.createElement("div", null, (0, _wcagContrast.score)((0, _wcagContrast.hex)(color.hex, '#FFFFFF'))))), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        flexGrow: '1',
        fontSize: '0.7em',
        lineHeight: '2em'
      }
    }, /*#__PURE__*/_react.default.createElement(_Module.ModuleBody, null, /*#__PURE__*/_react.default.createElement("h4", null, color.name), /*#__PURE__*/_react.default.createElement(_List.List, {
      colon: true,
      kind: "simple"
    }, color.shortDescription && /*#__PURE__*/_react.default.createElement("h4", {
      className: "wfp--story__sub-heading"
    }, color.shortDescription), /*#__PURE__*/_react.default.createElement(_List.ListItem, null, /*#__PURE__*/_react.default.createElement("strong", null, "Hex:"), ' ', computedColor ? computedColor : color.hex), color.css && /*#__PURE__*/_react.default.createElement(_List.ListItem, null, /*#__PURE__*/_react.default.createElement("strong", null, "CSS:"), computedColor ? "--".concat(color.name) : color.css)))))));
  });
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: "color--list"
  }, list);
};

exports.ColourList = ColourList;