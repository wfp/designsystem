"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("../Button"));

var _Wrapper = _interopRequireDefault(require("../Wrapper"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
/** The Main Navigation is a Horizontal Menu which consists of multiple clickable items placed at the top of the page. The navigation stays unchanged when browswing through the site and is present on every page. The currently selected item is usually highlighted. */

var MainNavigation = /*#__PURE__*/function (_Component) {
  _inherits(MainNavigation, _Component);

  var _super = _createSuper(MainNavigation);

  function MainNavigation(props) {
    var _this;

    _classCallCheck(this, MainNavigation);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onChangeSub", function (action, i, e) {
      if (e) {
        e.preventDefault();
      }

      if (action === 'close') {
        _this.setState({
          activeMenuItem: undefined
        });
      } else if (action === 'toggle') {
        var newI = _this.state.activeMenuItem === undefined || _this.state.activeMenuItem !== i ? i : undefined;

        _this.setState({
          activeMenuItem: newI
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleMenu", function () {
      _this.setState({
        openMobile: !_this.state.openMobile
      });
    });

    _defineProperty(_assertThisInitialized(_this), "triggerSubNavigation", function () {
      _this.setState({
        activeMenuItem: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function () {
      _this.setState({
        activeMenuItem: undefined
      });
    });

    _this.state = {
      openMobile: false,
      activeMenuItem: undefined
    };
    return _this;
  }

  _createClass(MainNavigation, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          id = _this$props.id,
          logo = _this$props.logo,
          mobilePageWidth = _this$props.mobilePageWidth,
          pageWidth = _this$props.pageWidth;
      var wrapperClasses = (0, _classnames.default)("".concat(prefix, "--main-navigation"), className);
      var listClasses = (0, _classnames.default)("".concat(prefix, "--main-navigation__list"), _defineProperty({}, "".concat(prefix, "--main-navigation__list--open"), this.state.openMobile));
      var parentProps = {
        onChangeSub: this.onChangeSub,
        toggleMenu: this.toggleMenu
      };
      var childrenSelect = typeof children === 'function' ? children(parentProps).props.children : children;
      return /*#__PURE__*/_react.default.createElement("div", {
        id: id,
        className: wrapperClasses
      }, /*#__PURE__*/_react.default.createElement(_Wrapper.default, {
        pageWidth: pageWidth,
        mobilePageWidth: mobilePageWidth,
        className: "".concat(prefix, "--main-navigation__wrapper")
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(prefix, "--main-navigation__logo-wrapper")
      }, /*#__PURE__*/_react.default.createElement(_Button.default, {
        className: "".concat(prefix, "--main-navigation__button"),
        onClick: this.toggleMenu
      }, "Menu"), /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(prefix, "--main-navigation__logo")
      }, logo)), /*#__PURE__*/_react.default.createElement("ul", {
        className: listClasses
      }, _react.default.Children.map(childrenSelect, function (child, i) {
        if (child) {
          return /*#__PURE__*/_react.default.cloneElement(child, {
            activeMenuItem: _this2.state.activeMenuItem,
            menuItem: i,
            onChangeSub: _this2.onChangeSub
          });
        } else return null;
      }))));
    }
  }]);

  return MainNavigation;
}(_react.Component);

MainNavigation.propTypes = {
  /**
   * Usually multiple `MainNavigationItem` elements
   */
  children: _propTypes.default.node.isRequired,

  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: _propTypes.default.string,

  /**
   * Defines an ID for the component.
   */
  id: _propTypes.default.string,

  /**
   * The Logo can be either a string or a component
   */
  logo: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),

  /**
   * Specify the max-width on desktop devices (same as \`Wrapper\` component)
   */
  pageWidth: _propTypes.default.oneOf(['sm', 'md', 'lg', 'full']),

  /**
   * Specify the max-width on mobile devices (same as \`Wrapper\` component)
   */
  mobilePageWidth: _propTypes.default.string,

  /**
   * Additional className for the `Wrapper`
   */
  wrapperClassName: _propTypes.default.string
};
MainNavigation.defaultProps = {
  pageWidth: 'lg',
  mobilePageWidth: 'full',
  logo: 'WFP'
};
var _default = MainNavigation;
exports.default = _default;