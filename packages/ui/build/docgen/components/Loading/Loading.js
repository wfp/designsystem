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

var _FeatureFlags = require("../../internal/FeatureFlags");

var _excluded = ["active", "className", "withOverlay", "small"];

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
/** Loading spinners are used when retrieving data or performing slow computations, and help to notify users that loading is underway. */

var Loading = /*#__PURE__*/function (_React$Component) {
  _inherits(Loading, _React$Component);

  var _super = _createSuper(Loading);

  function Loading() {
    _classCallCheck(this, Loading);

    return _super.apply(this, arguments);
  }

  _createClass(Loading, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          active = _this$props.active,
          className = _this$props.className,
          withOverlay = _this$props.withOverlay,
          small = _this$props.small,
          other = _objectWithoutProperties(_this$props, _excluded);

      var loadingClasses = (0, _classnames.default)("".concat(prefix, "--loading"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--loading--small"), small), _defineProperty(_classNames, "".concat(prefix, "--loading--stop"), !active), _classNames));
      var overlayClasses = (0, _classnames.default)("".concat(prefix, "--loading-overlay"), _defineProperty({}, "".concat(prefix, "--loading-overlay--stop"), !active));

      var loading = /*#__PURE__*/_react.default.createElement("div", _extends({}, other, {
        "aria-live": active ? 'assertive' : 'off',
        className: loadingClasses
      }), /*#__PURE__*/_react.default.createElement("svg", {
        className: "".concat(prefix, "--loading__svg"),
        viewBox: "-75 -75 150 150"
      }, /*#__PURE__*/_react.default.createElement("title", null, "Loading"), _FeatureFlags.componentsX && small ? /*#__PURE__*/_react.default.createElement("circle", {
        className: "".concat(prefix, "--loading__background"),
        cx: "0",
        cy: "0",
        r: "37.5"
      }) : null, /*#__PURE__*/_react.default.createElement("circle", {
        className: _FeatureFlags.componentsX ? "".concat(prefix, "--loading__stroke") : null,
        cx: "0",
        cy: "0",
        r: "37.5"
      })));

      return withOverlay ? /*#__PURE__*/_react.default.createElement("div", {
        className: overlayClasses
      }, loading) : loading;
    }
  }]);

  return Loading;
}(_react.default.Component);

exports.default = Loading;

_defineProperty(Loading, "propTypes", {
  /**
   * Specify whether you want the loading indicator to be spinning or not
   */
  active: _propTypes.default.bool,

  /**
   * Provide an optional className to be applied to the containing node
   */
  className: _propTypes.default.string,

  /**
   * Specify whether you want the loader to be applied with an overlay
   */
  withOverlay: _propTypes.default.bool,

  /**
   * Specify whether you would like the small variant of <Loading>
   */
  small: _propTypes.default.bool
});

_defineProperty(Loading, "defaultProps", {
  active: true,
  withOverlay: true,
  small: false
});