"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TabContent = _interopRequireDefault(require("../TabContent"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _excluded = ["ariaLabel", "disableAnimation", "inline", "className", "customTabContent", "triggerHref", "role", "onSelectionChange"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = _settings.default.prefix;
/** Tabs allow users to navigate easily between views within the same context */

var Tabs = /*#__PURE__*/function (_React$Component) {
  _inherits(Tabs, _React$Component);

  var _super = _createSuper(Tabs);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getTabAt", function (index) {
      return _this["tab".concat(index)] || _react.default.Children.toArray(_this.props.children)[index];
    });

    _defineProperty(_assertThisInitialized(_this), "getSizes", function () {
      if (_this.rootRef.current === null || _this.rootRef.current.length > 1) {
        return null;
      }

      var rootBounds = _this.rootRef.current.getBoundingClientRect();

      var sizes = {};
      Object.values(_this.rootRef.current.children).forEach(function (el, key) {
        var bounds = el.children[0].getBoundingClientRect();
        var left = bounds.left - rootBounds.left;
        var right = rootBounds.right - bounds.right;
        sizes[key] = {
          left: left,
          right: right
        };
      });

      _this.setState({
        sizes: sizes
      });

      return sizes;
    });

    _defineProperty(_assertThisInitialized(_this), "setTabAt", function (index, tabRef) {
      _this["tab".concat(index)] = tabRef;
    });

    _defineProperty(_assertThisInitialized(_this), "handleTabClick", function (onSelectionChange) {
      return function (index, label, evt) {
        if (evt) {
          evt.preventDefault();
        }

        _this.selectTabAt(index, onSelectionChange);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleTabKeyDown", function (onSelectionChange) {
      return function (index, label, evt) {
        var key = evt.key || evt.which;

        if (key === 'Enter' || key === 13 || key === ' ' || key === 32) {
          _this.selectTabAt(index, onSelectionChange);
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleTabAnchorFocus", function (onSelectionChange) {
      return function (index) {
        var tabCount = _react.default.Children.count(_this.props.children) - 1;
        var tabIndex = index;

        if (index < 0) {
          tabIndex = tabCount;
        } else if (index > tabCount) {
          tabIndex = 0;
        }

        var tab = _this.getTabAt(tabIndex);

        if (tab) {
          _this.selectTabAt(tabIndex, onSelectionChange);

          if (tab.tabAnchor) {
            tab.tabAnchor.focus();
          }
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "selectTabAt", function (index, onSelectionChange) {
      if (_this.state.selected !== index) {
        _this.setState({
          selected: index
        });

        if (typeof onSelectionChange === 'function') {
          onSelectionChange(index);
        }
      }
    });

    _this.state = {}; // Create the ref

    _this.rootRef = /*#__PURE__*/_react.default.createRef();
    return _this;
  }

  _createClass(Tabs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getSizes();
      window.addEventListener('resize', this.getSizes);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.getSizes);
    }
  }, {
    key: "getTabs",
    value: function getTabs() {
      return _react.default.Children.map(this.props.children, function (tab) {
        return tab;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          ariaLabel = _this$props.ariaLabel,
          disableAnimation = _this$props.disableAnimation,
          inline = _this$props.inline,
          className = _this$props.className,
          customTabContent = _this$props.customTabContent,
          triggerHref = _this$props.triggerHref,
          role = _this$props.role,
          onSelectionChange = _this$props.onSelectionChange,
          other = _objectWithoutProperties(_this$props, _excluded);

      var _this$state = this.state,
          selected = _this$state.selected,
          sizes = _this$state.sizes;
      var tabsWithProps = this.getTabs().map(function (tab, index) {
        var newTab = /*#__PURE__*/_react.default.cloneElement(tab, {
          index: index,
          selected: index === selected,
          handleTabClick: _this2.handleTabClick(onSelectionChange),
          handleTabAnchorFocus: _this2.handleTabAnchorFocus(onSelectionChange),
          ref: function ref(e) {
            _this2.setTabAt(index, e);
          },
          handleTabKeyDown: _this2.handleTabKeyDown(onSelectionChange)
        });

        return newTab;
      });
      var tabContentWithProps = !customTabContent ? _react.default.Children.map(tabsWithProps, function (tab) {
        var _tab$props = tab.props,
            children = _tab$props.children,
            selected = _tab$props.selected;

        if (!children) {
          return null;
        }

        return /*#__PURE__*/_react.default.createElement(_TabContent.default, {
          className: "".concat(prefix, "--tab-content"),
          "aria-hidden": !selected,
          hidden: !selected,
          selected: selected
        }, children);
      }) : null;
      var classes = {
        tabs: (0, _classnames.default)("".concat(prefix, "--tabs"), _defineProperty({}, "".concat(prefix, "--tabs--no-animation"), disableAnimation), className),
        tablist: (0, _classnames.default)("".concat(prefix, "--tabs__nav"), _defineProperty({}, "".concat(prefix, "--tabs__nav--inline"), inline))
      };
      var sizeBar = sizes ? sizes[selected] : undefined;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("nav", _extends({}, other, {
        className: classes.tabs,
        role: role
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(prefix, "--tabs__nav__bar"),
        style: sizeBar
      }), /*#__PURE__*/_react.default.createElement("ul", {
        ref: this.rootRef,
        role: "tablist",
        className: classes.tablist
      }, tabsWithProps)), tabContentWithProps);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var selected = _ref.selected;
      var prevSelected = state.prevSelected;
      return prevSelected === selected ? null : {
        selected: selected,
        prevSelected: selected
      };
    }
  }]);

  return Tabs;
}(_react.default.Component);

_defineProperty(Tabs, "propTypes", {
  /**
   * Specify the text to be read by screen-readers when visiting the <Tabs>
   * component
   */
  ariaLabel: _propTypes.default.string,

  /**
   * Pass in a collection of <Tab> children to be rendered depending on the
   * currently selected tab
   */
  children: _propTypes.default.node,

  /**
   * Provide a className that is applied to the root <nav> component for the
   * <Tabs>
   */
  className: _propTypes.default.string,

  /**
   * Provide a customTabContent by using independent action triggers
   * inside the Tabs
   */
  customTabContent: _propTypes.default.bool,

  /**
   * Specify whether the animation should be used
   */
  disableAnimation: _propTypes.default.bool,

  /**
   * Specify whether the Tabs are displayed inline
   */
  inline: _propTypes.default.bool,

  /**
   * Specify whether the Tab content is hidden
   */
  hidden: _propTypes.default.bool,

  /**
   * By default, this value is "navigation". You can also provide an alternate
   * role if it makes sense from the accessibility-side
   */
  role: _propTypes.default.string.isRequired,

  /**
   * Optionally provide an `onClick` handler that is invoked when a <Tab> is
   * clicked
   */
  onClick: _propTypes.default.func,

  /**
   * Optionally provide an `onKeyDown` handler that is invoked when keyed
   * navigation is triggered
   */
  onKeyDown: _propTypes.default.func,

  /**
   * Provide an optional handler that is called whenever the selection
   * changes. This method is called with the index of the tab that was
   * selected
   */
  onSelectionChange: _propTypes.default.func,

  /**
   * Provide a string that represents the `href` for the triggered <Tab>
   */
  triggerHref: _propTypes.default.string.isRequired,

  /**
   * Optionally provide an index for the currently selected <Tab>
   */
  selected: _propTypes.default.number
});

_defineProperty(Tabs, "defaultProps", {
  role: 'navigation',
  triggerHref: '#',
  selected: 0,
  ariaLabel: 'listbox'
});

var _default = Tabs;
exports.default = _default;