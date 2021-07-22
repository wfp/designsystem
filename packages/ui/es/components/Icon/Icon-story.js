import React from 'react';
import { iconAdd, iconAddGlyph, iconAddOutline } from '@wfp/icons';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import Icon from '../Icon';
import IconSkeleton from '../Icon/Icon.Skeleton';
var icons = {
  'Add (iconAdd from `@wfp/icons`)': 'iconAdd',
  'Add with filled circle (iconAddGlyph from `@wfp/icons`)': 'iconAddGlyph',
  'Add with circle (iconAddOutline from `@wfp/icons`)': 'iconAddOutline'
};
var iconMap = {
  iconAdd: iconAdd,
  iconAddGlyph: iconAddGlyph,
  iconAddOutline: iconAddOutline
};
var customIcon = /*#__PURE__*/React.createElement("svg", {
  width: "50",
  height: "50",
  viewBox: "0 0 50 50",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("g", {
  fillRule: "evenodd"
}, /*#__PURE__*/React.createElement("path", {
  d: "M47 15.2l-9.4 4.2c.5 1.3.9 2.6 1 3.9L49 22a24 24 0 0 0-1.9-6.8z",
  fill: "#C31F33"
}), /*#__PURE__*/React.createElement("path", {
  d: "M42 8l-7.3 7.3c1 1 1.8 2 2.4 3.2l9.1-5A24 24 0 0 0 42 8z",
  fill: "#279B48"
}), /*#__PURE__*/React.createElement("path", {
  d: "M34.7 3l-4.2 9.5c1.3.5 2.4 1.2 3.4 2l6.7-7.8a24 24 0 0 0-6-3.7z",
  fill: "#D3A029"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26 1l-.4 10.4c1.4 0 2.7.3 4 .7l3.3-9.8A24 24 0 0 0 26 1z",
  fill: "#EB1C2D"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.3 2.3l3.3 9.8c1.3-.5 2.6-.7 4-.8L24.2 1a24 24 0 0 0-7 1.3z",
  fill: "#183668"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.6 6.6l6.6 8c1-1 2.2-1.6 3.4-2.1l-4-9.6a24 24 0 0 0-6 3.7z",
  fill: "#02558B"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 13.5l9 5c.7-1.2 1.5-2.3 2.5-3.2L8.2 7.9A24 24 0 0 0 4 13.5z",
  fill: "#5DBB46"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.2 21.9l10.3 1.3c.2-1.3.5-2.6 1-3.8l-9.4-4.3A24 24 0 0 0 1.2 22z",
  fill: "#007DBC"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.7 30.7l10-2.4c-.3-1.3-.4-2.7-.3-4L1 23.7a24 24 0 0 0 .7 7z",
  fill: "#48773E"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.3 38.8l8.5-6c-.8-1-1.4-2.2-1.8-3.5l-9.8 3.2a24 24 0 0 0 3.1 6.3z",
  fill: "#CF8D2A"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.6 45l5.8-8.6c-1.1-.7-2.1-1.6-3-2.7l-8 6.6a24 24 0 0 0 5.2 4.7z",
  fill: "#F99D26"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.7 48.5l2.3-10c-1.3-.4-2.6-.9-3.7-1.5l-5.1 9c2 1.1 4.2 2 6.5 2.5z",
  fill: "#E11484"
}), /*#__PURE__*/React.createElement("path", {
  d: "M28.5 48.9L27 38.6c-1.3.2-2.6.2-4 0L21.5 49c2.3.3 4.7.3 7 0z",
  fill: "#F36D25"
}), /*#__PURE__*/React.createElement("path", {
  d: "M37 46l-5.2-9c-1.1.7-2.4 1.1-3.7 1.4l2.3 10.1a24 24 0 0 0 6.5-2.5z",
  fill: "#8F1838"
}), /*#__PURE__*/React.createElement("path", {
  d: "M43.7 40.3l-8-6.5c-.9 1-1.9 1.9-3 2.6l5.8 8.6a24 24 0 0 0 5.2-4.7z",
  fill: "#FDB713"
}), /*#__PURE__*/React.createElement("path", {
  d: "M48 32.6L38 29.3c-.4 1.3-1 2.5-1.8 3.6l8.5 6c1.3-2 2.4-4.1 3.1-6.3z",
  fill: "#00AED9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M49.1 23.8l-10.3.5c0 1.4 0 2.7-.4 4l10 2.5c.6-2.3.8-4.7.7-7z",
  fill: "#EF402B"
})));
var props = {
  default: function _default() {
    var selectedIcon = select('The icon (icon (regular))', icons, 'iconAdd');
    return {
      style: {
        margin: '50px'
      },
      icon: iconMap[selectedIcon],
      role: text('ARIA role (role)', ''),
      fill: text('The SVG `fill` attribute (fill)', 'grey'),
      fillRule: text('The SVG `fillRule` attribute (fillRule)', ''),
      width: text('The SVG `width` attribute (width)', ''),
      height: text('The SVG `height` attribute (height)', ''),
      description: text('The a11y text (description)', 'This is a description of the icon and what it does in context'),
      iconTitle: text('The content in <title> in SVG (iconTitle)', ''),
      className: 'extra-class'
    };
  },
  custom: function custom() {
    return {
      icon: customIcon,
      role: text('ARIA role (role)', ''),
      fill: text('The SVG `fill` attribute (fill)', 'grey'),
      fillRule: text('The SVG `fillRule` attribute (fillRule)', ''),
      width: text('The SVG `width` attribute (width)', ''),
      height: text('The SVG `height` attribute (height)', ''),
      description: text('The a11y text (description)', 'This is a description of the icon and what it does in context'),
      iconTitle: text('The content in <title> in SVG (iconTitle)', ''),
      className: 'extra-class'
    };
  }
};
var propsSkeleton = {
  style: {
    margin: '50px'
  }
};
var propsSkeleton2 = {
  style: {
    margin: '50px',
    width: '24px',
    height: '24px'
  }
};
storiesOf('Components|Icon', module).addDecorator(withKnobs).add('Default', function () {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, props.default()));
}).add('Custom Icon (experimental)', function () {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, props.custom()));
}).add('Skeleton', function () {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IconSkeleton, propsSkeleton), /*#__PURE__*/React.createElement(IconSkeleton, propsSkeleton2));
});