function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import Tabs from '../Tabs';
import Tab from '../Tab';
import Tag from '../Tag';
import TabsSkeleton from '../Tabs/Tabs.Skeleton';
var props = {
  tabs: function tabs() {
    return {
      className: 'some-class',
      selected: number('The index of the selected tab (selected in <Tabs>)', 1),
      triggerHref: text('The href of trigger button for narrow mode (triggerHref in <Tabs>)', '#'),
      role: text('ARIA role (role in <Tabs>)', 'navigation'),
      onClick: action('onClick'),
      onKeyDown: action('onKeyDown'),
      onSelectionChange: action('onSelectionChange')
    };
  },
  tab: function tab() {
    return {
      className: 'another-class',
      href: text('The href for tab (href in <Tab>)', '#'),
      label: text('The label for tab (label in <Tab>)', 'Tab label'),
      role: text('ARIA role (role in <Tab>)', 'presentation'),
      tabIndex: number('Tab index (tabIndex in <Tab>)', 0),
      onClick: action('onClick'),
      onKeyDown: action('onKeyDown')
    };
  }
};

var el = function el(_ref) {
  var href = _ref.href,
      label = _ref.label;
  return /*#__PURE__*/React.createElement("a", {
    href: href
  }, /*#__PURE__*/React.createElement("span", null, label, " ", /*#__PURE__*/React.createElement(Tag, {
    type: "wfp"
  }, "renderAnchor")));
};

var listEl = function listEl(_ref2) {
  var anchor = _ref2.anchor,
      className = _ref2.className,
      label = _ref2.label,
      href = _ref2.href;
  return /*#__PURE__*/React.createElement("li", {
    className: className
  }, /*#__PURE__*/React.createElement("div", {
    className: "wfp--tabs__nav-link",
    role: "button",
    tabIndex: 0,
    onKeyPress: function onKeyPress() {
      alert('Custom renderListElement keypress');
    },
    onClick: function onClick() {
      alert('Custom renderListElement');
    }
  }, anchor.label, " *"));
};
/*
const TabLink = (props) => (
  <Route
    path={to}
    exact={exact}
    children={({ match }) => (
      <div className={match ? "wfp--tabs__nav-item wfp--tabs__nav-item--selected" : "wfp--tabs__nav-item"}>
        <Link className="wfp--tabs__nav-link" to={to}>{children}</Link>
      </div>
    )}
  />
);
*/


var FakeRoute = function FakeRoute(_ref3) {
  var children = _ref3.children;
  var Children = children;
  return /*#__PURE__*/React.createElement(Children, {
    match: true
  });
};

var FakeLink = function FakeLink(_ref4) {
  var children = _ref4.children,
      className = _ref4.className;
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, children);
};

var listElReactRouter = function listElReactRouter(_ref5) {
  var anchor = _ref5.anchor,
      className = _ref5.className,
      to = _ref5.to,
      exact = _ref5.exact,
      match = _ref5.match;
  return /*#__PURE__*/React.createElement(FakeRoute, {
    to: to,
    exact: exact,
    children: function children(_ref6) {
      var match = _ref6.match;
      return /*#__PURE__*/React.createElement("li", {
        className: match ? className + ' wfp--tabs__nav-item--selected' : className
      }, /*#__PURE__*/React.createElement(FakeLink, {
        className: anchor.className,
        to: to
      }, anchor.label));
    }
  });
};

storiesOf('Components|Tabs', module).addDecorator(withKnobs).add('Default', function () {
  return /*#__PURE__*/React.createElement(Tabs, props.tabs(), /*#__PURE__*/React.createElement(Tab, _extends({}, props.tab(), {
    label: "".concat(props.tab().label, " 1")
  }), /*#__PURE__*/React.createElement("div", {
    className: "some-content"
  }, "Content for first tab goes here.")), /*#__PURE__*/React.createElement(Tab, _extends({}, props.tab(), {
    label: "".concat(props.tab().label, " 2")
  }), /*#__PURE__*/React.createElement("div", {
    className: "some-content"
  }, "Content for second tab goes here.")), /*#__PURE__*/React.createElement(Tab, _extends({}, props.tab(), {
    label: "".concat(props.tab().label, " 3")
  }), /*#__PURE__*/React.createElement("div", {
    className: "some-content"
  }, "Content for third tab goes here.")), /*#__PURE__*/React.createElement(Tab, _extends({}, props.tab(), {
    disabled: true,
    label: "".concat(props.tab().label, " 4 disabled")
  }), /*#__PURE__*/React.createElement("div", {
    className: "some-content"
  }, "Content for fourth tab goes here.")));
}).add('Custom Tab Content', function () {
  return /*#__PURE__*/React.createElement(Tabs, _extends({}, props.tabs(), {
    customTabContent: true
  }), /*#__PURE__*/React.createElement(Tab, _extends({}, props.tab(), {
    label: "Tab label 1",
    href: "http://www.de.wfp.org"
  })), /*#__PURE__*/React.createElement(Tab, _extends({}, props.tab(), {
    label: "Tab label 2",
    href: "http://www.fr.wfp.org"
  })), /*#__PURE__*/React.createElement(Tab, _extends({}, props.tab(), {
    label: "Tab label 3",
    href: "http://www.fr.wfp.org",
    to: "/path"
  })));
}).add('Custom Tab Logic', function () {
  return /*#__PURE__*/React.createElement(Tabs, _extends({}, props.tabs(), {
    customTabContent: true
  }), /*#__PURE__*/React.createElement(Tab, _extends({}, props.tab(), {
    label: "Custom",
    href: "http://www.de.wfp.org",
    renderAnchor: el
  })), /*#__PURE__*/React.createElement(Tab, _extends({}, props.tab(), {
    label: "Custom renderListElement",
    href: "http://www.fr.wfp.org",
    renderListElement: listEl
  })), /*#__PURE__*/React.createElement(Tab, _extends({}, props.tab(), {
    label: "React-Router Example",
    href: "http://www.fr.wfp.org",
    to: "/path",
    renderListElement: listElReactRouter
  })));
}).add('skeleton', function () {
  return /*#__PURE__*/React.createElement(TabsSkeleton, null);
});