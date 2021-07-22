"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _icons = require("@wfp/icons");

var _Input = _interopRequireDefault(require("../Input/Input"));

var _excluded = ["className", "closeButtonLabelText", "formItemClassName", "type", "id", "placeHolderText", "labelText", "light", "small", "kind", "onSearchIconClick"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

/** Search enables users to specify a word or a phrase to find particular relevant pieces of content without the use of navigation. Search can be used as the primary means of discovering content, or as a filter to aid the user in finding content. */
var Search = /*#__PURE__*/function (_Component) {
  _inherits(Search, _Component);

  var _super = _createSuper(Search);

  function Search() {
    var _this;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hasContent: _this.props.value || _this.props.defaultValue || false
    });

    _defineProperty(_assertThisInitialized(_this), "clearInput", function (evt) {
      if (!_this.props.value) {
        _this.input.value = '';

        _this.props.onChange(evt);
      } else {
        var clearedEvt = Object.assign({}, evt.target, {
          target: {
            value: ''
          }
        });

        _this.props.onChange(clearedEvt);
      }

      _this.setState({
        hasContent: false
      }, function () {
        return _this.input.focus();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (evt) {
      _this.setState({
        hasContent: evt.target.value !== ''
      });

      _this.props.onChange(evt);
    });

    return _this;
  }

  _createClass(Search, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          closeButtonLabelText = _this$props.closeButtonLabelText,
          formItemClassName = _this$props.formItemClassName,
          type = _this$props.type,
          _this$props$id = _this$props.id,
          id = _this$props$id === void 0 ? this._inputId = this._inputId || "search__input__id_".concat(Math.random().toString(36).substr(2)) : _this$props$id,
          placeHolderText = _this$props.placeHolderText,
          labelText = _this$props.labelText,
          light = _this$props.light,
          small = _this$props.small,
          kind = _this$props.kind,
          onSearchIconClick = _this$props.onSearchIconClick,
          other = _objectWithoutProperties(_this$props, _excluded);

      var hasContent = this.state.hasContent;
      var searchClasses = (0, _classnames.default)(formItemClassName, _defineProperty({
        'wfp--search': true,
        'wfp--search--lg': kind === 'large',
        'wfp--search--sm': kind === 'small',
        'wfp--search--main': kind === 'main',
        'wfp--search--banner': kind === 'banner',
        'wfp--search--light': kind === 'light'
      }, className, className));
      var clearClasses = (0, _classnames.default)({
        'wfp--search-close': true,
        'wfp--search-close--hidden': !hasContent
      });
      /*<div className={searchClasses} role="search">*/

      return /*#__PURE__*/_react.default.createElement(_Input.default, _extends({}, this.props, {
        formItemClassName: searchClasses
      }), function (e) {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Icon.default, {
          icon: _icons.iconSearch,
          description: labelText,
          className: "wfp--search-magnifier",
          onClick: onSearchIconClick
        }), /*#__PURE__*/_react.default.createElement("input", _extends({}, other, {
          type: type,
          className: "wfp--search-input",
          id: id,
          placeholder: placeHolderText,
          onChange: _this2.handleChange,
          ref: function ref(input) {
            _this2.input = input;
          }
        })), /*#__PURE__*/_react.default.createElement("button", {
          className: clearClasses,
          onClick: _this2.clearInput,
          type: "button",
          "aria-label": closeButtonLabelText
        }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
          icon: _icons.iconCloseGlyph,
          description: closeButtonLabelText
        })));
      });
    }
  }]);

  return Search;
}(_react.Component);

exports.default = Search;

_defineProperty(Search, "propTypes", {
  className: _propTypes.default.string,
  type: _propTypes.default.string,

  /**
   *  Input type should be `search` or `text`
   */
  small: _propTypes.default.bool,
  placeHolderText: _propTypes.default.string,
  labelText: _propTypes.default.node,
  id: _propTypes.default.string,
  onChange: _propTypes.default.func,
  onSearchIconClick: _propTypes.default.func,
  closeButtonLabelText: _propTypes.default.string,

  /**
   *  Different styling options are available `large`, `small`, `banner`, `main`, `light`
   */
  kind: _propTypes.default.oneOf([undefined, 'large', 'small', 'banner', 'main', 'light'])
});

_defineProperty(Search, "defaultProps", {
  type: 'text',
  small: false,
  kind: 'large',
  placeHolderText: '',
  onChange: function onChange() {},
  onSearchIconClick: function onSearchIconClick() {},
  light: false
});