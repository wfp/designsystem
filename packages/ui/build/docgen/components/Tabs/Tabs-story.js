"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Tabs = _interopRequireDefault(require("../Tabs"));

var _Tab = _interopRequireDefault(require("../Tab"));

var _Tag = _interopRequireDefault(require("../Tag"));

var _Tabs2 = _interopRequireDefault(require("../Tabs/Tabs.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  tabs: function tabs() {
    return {
      className: 'some-class',
      selected: (0, _addonKnobs.number)('The index of the selected tab (selected in <Tabs>)', 1),
      triggerHref: (0, _addonKnobs.text)('The href of trigger button for narrow mode (triggerHref in <Tabs>)', '#'),
      role: (0, _addonKnobs.text)('ARIA role (role in <Tabs>)', 'navigation'),
      onClick: (0, _addonActions.action)('onClick'),
      onKeyDown: (0, _addonActions.action)('onKeyDown'),
      onSelectionChange: (0, _addonActions.action)('onSelectionChange')
    };
  },
  tab: function tab() {
    return {
      className: 'another-class',
      href: (0, _addonKnobs.text)('The href for tab (href in <Tab>)', '#'),
      label: (0, _addonKnobs.text)('The label for tab (label in <Tab>)', 'Tab label'),
      role: (0, _addonKnobs.text)('ARIA role (role in <Tab>)', 'presentation'),
      tabIndex: (0, _addonKnobs.number)('Tab index (tabIndex in <Tab>)', 0),
      onClick: (0, _addonActions.action)('onClick'),
      onKeyDown: (0, _addonActions.action)('onKeyDown')
    };
  }
};

var el = function el(_ref) {
  var href = _ref.href,
      label = _ref.label;
  return /*#__PURE__*/_react.default.createElement("a", {
    href: href
  }, /*#__PURE__*/_react.default.createElement("span", null, label, " ", /*#__PURE__*/_react.default.createElement(_Tag.default, {
    type: "wfp"
  }, "renderAnchor")));
};

var listEl = function listEl(_ref2) {
  var anchor = _ref2.anchor,
      className = _ref2.className,
      label = _ref2.label,
      href = _ref2.href;
  return /*#__PURE__*/_react.default.createElement("li", {
    className: className
  }, /*#__PURE__*/_react.default.createElement("div", {
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
  return /*#__PURE__*/_react.default.createElement(Children, {
    match: true
  });
};

var FakeLink = function FakeLink(_ref4) {
  var children = _ref4.children,
      className = _ref4.className;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children);
};

var listElReactRouter = function listElReactRouter(_ref5) {
  var anchor = _ref5.anchor,
      className = _ref5.className,
      to = _ref5.to,
      exact = _ref5.exact,
      match = _ref5.match;
  return /*#__PURE__*/_react.default.createElement(FakeRoute, {
    to: to,
    exact: exact,
    children: function children(_ref6) {
      var match = _ref6.match;
      return /*#__PURE__*/_react.default.createElement("li", {
        className: match ? className + ' wfp--tabs__nav-item--selected' : className
      }, /*#__PURE__*/_react.default.createElement(FakeLink, {
        className: anchor.className,
        to: to
      }, anchor.label));
    }
  });
};

(0, _react2.storiesOf)('Components|Tabs', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_Tabs.default, props.tabs(), /*#__PURE__*/_react.default.createElement(_Tab.default, _extends({}, props.tab(), {
    label: "".concat(props.tab().label, " 1")
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "some-content"
  }, "Content for first tab goes here.")), /*#__PURE__*/_react.default.createElement(_Tab.default, _extends({}, props.tab(), {
    label: "".concat(props.tab().label, " 2")
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "some-content"
  }, "Content for second tab goes here.")), /*#__PURE__*/_react.default.createElement(_Tab.default, _extends({}, props.tab(), {
    label: "".concat(props.tab().label, " 3")
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "some-content"
  }, "Content for third tab goes here.")), /*#__PURE__*/_react.default.createElement(_Tab.default, _extends({}, props.tab(), {
    disabled: true,
    label: "".concat(props.tab().label, " 4 disabled")
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "some-content"
  }, "Content for fourth tab goes here.")));
}).add('Custom Tab Content', function () {
  return /*#__PURE__*/_react.default.createElement(_Tabs.default, _extends({}, props.tabs(), {
    customTabContent: true
  }), /*#__PURE__*/_react.default.createElement(_Tab.default, _extends({}, props.tab(), {
    label: "Tab label 1",
    href: "http://www.de.wfp.org"
  })), /*#__PURE__*/_react.default.createElement(_Tab.default, _extends({}, props.tab(), {
    label: "Tab label 2",
    href: "http://www.fr.wfp.org"
  })), /*#__PURE__*/_react.default.createElement(_Tab.default, _extends({}, props.tab(), {
    label: "Tab label 3",
    href: "http://www.fr.wfp.org",
    to: "/path"
  })));
}).add('Custom Tab Logic', function () {
  return /*#__PURE__*/_react.default.createElement(_Tabs.default, _extends({}, props.tabs(), {
    customTabContent: true
  }), /*#__PURE__*/_react.default.createElement(_Tab.default, _extends({}, props.tab(), {
    label: "Custom",
    href: "http://www.de.wfp.org",
    renderAnchor: el
  })), /*#__PURE__*/_react.default.createElement(_Tab.default, _extends({}, props.tab(), {
    label: "Custom renderListElement",
    href: "http://www.fr.wfp.org",
    renderListElement: listEl
  })), /*#__PURE__*/_react.default.createElement(_Tab.default, _extends({}, props.tab(), {
    label: "React-Router Example",
    href: "http://www.fr.wfp.org",
    to: "/path",
    renderListElement: listElReactRouter
  })));
}).add('skeleton', function () {
  return /*#__PURE__*/_react.default.createElement(_Tabs2.default, null);
});