"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var Tab = /*#__PURE__*/function (_React$Component) {
  _inherits(Tab, _React$Component);

  var _super = _createSuper(Tab);

  function Tab() {
    _classCallCheck(this, Tab);

    return _super.apply(this, arguments);
  }

  _createClass(Tab, [{
    key: "setTabFocus",
    value: function setTabFocus(evt) {
      var leftKey = 37;
      var rightKey = 39;

      if (evt.which === leftKey) {
        this.props.handleTabAnchorFocus(this.props.index - 1);
      } else if (evt.which === rightKey) {
        this.props.handleTabAnchorFocus(this.props.index + 1);
      } else {
        return;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          className = _this$props.className,
          disabled = _this$props.disabled,
          handleTabClick = _this$props.handleTabClick,
          handleTabAnchorFocus = _this$props.handleTabAnchorFocus,
          handleTabKeyDown = _this$props.handleTabKeyDown,
          href = _this$props.href,
          index = _this$props.index,
          label = _this$props.label,
          selected = _this$props.selected,
          tabIndex = _this$props.tabIndex,
          _onClick = _this$props.onClick,
          _onKeyDown = _this$props.onKeyDown,
          renderAnchor = _this$props.renderAnchor,
          renderListElement = _this$props.renderListElement;
      var classes = (0, _classnames.default)("".concat(prefix, "--tabs__nav-item"), _defineProperty({}, "".concat(prefix, "--tabs__nav-item--disabled"), disabled), _defineProperty({}, "".concat(prefix, "--tabs__nav-item--selected"), selected), className);
      var selectedClasses = (0, _classnames.default)("".concat(prefix, "--tabs__nav-item"), "".concat(prefix, "--tabs__nav-item--selected"), className);
      var anchorProps = {
        className: 'wfp--tabs__nav-link',
        href: disabled ? undefined : href,
        label: label,
        role: 'tab',
        tabIndex: tabIndex,
        'aria-selected': selected,
        ref: function ref(e) {
          _this.tabAnchor = e;
        }
      }; //  {...other}

      var liProps = {
        tabIndex: -1,
        className: classes,
        onClick: function onClick(evt) {
          if (!disabled) {
            handleTabClick(index, label, evt);

            _onClick(evt);
          }
        },
        onKeyDown: function onKeyDown(evt) {
          if (!disabled) {
            _this.setTabFocus(evt);

            handleTabKeyDown(index, label, evt);

            _onKeyDown(evt);
          }
        },
        role: 'presentation',
        selected: selected
      };
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, renderListElement ? renderListElement(_objectSpread(_objectSpread(_objectSpread({}, this.props), liProps), {}, {
        anchor: anchorProps,
        selectedClasses: selectedClasses
      })) : /*#__PURE__*/_react.default.createElement("li", liProps, renderAnchor ? renderAnchor(anchorProps) : disabled ? /*#__PURE__*/_react.default.createElement("span", anchorProps, label) : /*#__PURE__*/_react.default.createElement("a", anchorProps, label)));
    }
  }]);

  return Tab;
}(_react.default.Component);

exports.default = Tab;

_defineProperty(Tab, "propTypes", {
  /**
   * Specify an optional className to be added to your Tab
   */
  className: _propTypes.default.string,

  /**
   * A handler that is invoked when a user clicks on the control.
   * Reserved for usage in Tabs
   */
  handleTabClick: _propTypes.default.func,

  /**
   * A handler that is invoked when a user presses left/right key.
   * Reserved for usage in Tabs
   */
  handleTabAnchorFocus: _propTypes.default.func,

  /**
   * A handler that is invoked on the key down event for the control.
   * Reserved for usage in Tabs
   */
  handleTabKeyDown: _propTypes.default.func,

  /**
   * Whether your Tab is disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * Provide a string that represents the `href` of the Tab
   */
  href: _propTypes.default.string.isRequired,

  /**
   * The index of your Tab in your Tabs. Reserved for usage in Tabs
   */
  index: _propTypes.default.number,

  /**
   * Provide the contents of your Tab
   */
  label: _propTypes.default.node,

  /**
   * Provide an accessibility role for your Tab
   */
  role: _propTypes.default.string.isRequired,

  /**
   * Provide a handler that is invoked when a user clicks on the control
   */
  onClick: _propTypes.default.func.isRequired,

  /**
   * Provide a handler that is invoked on the key down event for the control
   */
  onKeyDown: _propTypes.default.func.isRequired,

  /**
   * Whether your Tab is selected.
   * Reserved for usage in Tabs
   */
  selected: _propTypes.default.bool.isRequired,

  /**
   * Specify the tab index of the <a> node
   */
  tabIndex: _propTypes.default.number.isRequired,

  /*
   * An optional parameter to allow overriding the anchor rendering.
   * Useful for using Tab along with react-router or other client
   * side router libraries.
   **/
  renderAnchor: _propTypes.default.func,

  /*
   * An optional parameter to allow overriding the content rendering.
   **/
  renderContent: _propTypes.default.func,

  /*
   * An optional parameter to allow overriding the list element rendering.
   **/
  renderListElement: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func])
});

_defineProperty(Tab, "defaultProps", {
  role: 'presentation',
  label: 'provide a label',
  tabIndex: 0,
  href: '#',
  selected: false,
  onClick: function onClick() {},
  onKeyDown: function onKeyDown() {}
});