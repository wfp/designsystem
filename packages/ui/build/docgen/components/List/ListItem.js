"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ListItem = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _excluded = ["children", "className", "title", "kind"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ListItem = function ListItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      title = _ref.title,
      kind = _ref.kind,
      other = _objectWithoutProperties(_ref, _excluded);

  var classNames = (0, _classnames.default)('wfp--list__element', className, {
    'wfp--list-item--checkmark': kind === 'checkmark',
    'wfp--list-item--cross': kind === 'cross'
  });
  return /*#__PURE__*/_react.default.createElement("li", _extends({
    className: classNames
  }, other), kind === 'cross' && /*#__PURE__*/_react.default.createElement(_Icon.default, {
    className: "wfp--list-item__icon",
    icon: {
      styles: '',
      viewBox: '0 0 320 512',
      width: '15',
      height: '15',
      svgData: {
        circles: '',
        ellipses: '',
        paths: [{
          fill: 'currentColor',
          d: 'M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'
        }],
        polygons: '',
        polylines: '',
        rects: ''
      }
    }
  }), kind === 'checkmark' && /*#__PURE__*/_react.default.createElement(_Icon.default, {
    className: "wfp--list-item__icon",
    icon: {
      styles: '',
      viewBox: '0 0 512 512',
      width: '13',
      height: '13',
      svgData: {
        circles: '',
        ellipses: '',
        paths: [{
          fill: 'currentColor',
          d: 'M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
        }],
        polygons: '',
        polylines: '',
        rects: ''
      }
    }
  }), title && /*#__PURE__*/_react.default.createElement("span", {
    className: "wfp--list__element__title"
  }, title), /*#__PURE__*/_react.default.createElement("span", {
    className: "wfp--list__element__content"
  }, children));
};

exports.ListItem = ListItem;
ListItem.propTypes = {
  /**
   * Provide multiple `ListItem` components
   */
  children: _propTypes.default.node,

  /**
   * Specify a custom className
   */
  className: _propTypes.default.string,

  /**
   * Specify a kind.
   */
  kind: _propTypes.default.oneOf(['checkmark', 'cross']),

  /**
   * Specify if the List should be small
   */
  small: _propTypes.default.bool
};
var _default = ListItem;
exports.default = _default;