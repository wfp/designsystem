import React from 'react';
import { List, ListItem } from '../../components/List';
import Tooltip from '../../components/Tooltip';
import { Module, ModuleBody } from '../../components/Module';
import colors from '../../globals/data/colors';
import { hex, score } from 'wcag-contrast'; //import './colours.scss';

export var ColourList = function ColourList(_ref) {
  var filter = _ref.filter;
  var filteredColors = Object.values(colors).filter(function (ui_colors) {
    return ui_colors.type === filter;
  });
  var list = filteredColors.map(function (color) {
    var computedColor = getComputedStyle(document.body).getPropertyValue("--".concat(color.name));
    return /*#__PURE__*/React.createElement(Tooltip, {
      content: /*#__PURE__*/React.createElement("div", null, color.description && /*#__PURE__*/React.createElement("p", null, color.description), color.name)
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Module, {
      fullHeight: true,
      noMargin: true,
      light: true,
      className: "color__item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "color__field",
      style: {
        backgroundColor: color.hex
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "color__contrast"
    }, /*#__PURE__*/React.createElement("span", null, "A"), /*#__PURE__*/React.createElement("div", null, ">", score(hex(color.hex, '#000000')))), /*#__PURE__*/React.createElement("div", {
      className: "color__contrast color__contrast--light"
    }, /*#__PURE__*/React.createElement("span", null, "A"), /*#__PURE__*/React.createElement("div", null, score(hex(color.hex, '#FFFFFF'))))), /*#__PURE__*/React.createElement("div", {
      style: {
        flexGrow: '1',
        fontSize: '0.7em',
        lineHeight: '2em'
      }
    }, /*#__PURE__*/React.createElement(ModuleBody, null, /*#__PURE__*/React.createElement("h4", null, color.name), /*#__PURE__*/React.createElement(List, {
      colon: true,
      kind: "simple"
    }, color.shortDescription && /*#__PURE__*/React.createElement("h4", {
      className: "wfp--story__sub-heading"
    }, color.shortDescription), /*#__PURE__*/React.createElement(ListItem, null, /*#__PURE__*/React.createElement("strong", null, "Hex:"), ' ', computedColor ? computedColor : color.hex), color.css && /*#__PURE__*/React.createElement(ListItem, null, /*#__PURE__*/React.createElement("strong", null, "CSS:"), computedColor ? "--".concat(color.name) : color.css)))))));
  });
  return /*#__PURE__*/React.createElement("ul", {
    className: "color--list"
  }, list);
};