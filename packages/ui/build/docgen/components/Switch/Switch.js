"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _excluded = ["className", "index", "kind", "name", "onClick", "onKeyDown", "selected", "text", "icon", "href"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _settings.default.prefix;

var Switch = function Switch(props) {
  var className = props.className,
      index = props.index,
      kind = props.kind,
      name = props.name,
      onClick = props.onClick,
      onKeyDown = props.onKeyDown,
      selected = props.selected,
      text = props.text,
      icon = props.icon,
      href = props.href,
      other = _objectWithoutProperties(props, _excluded);

  var handleClick = function handleClick(e) {
    e.preventDefault();
    onClick({
      index: index,
      name: name,
      text: text
    });
  };

  var handleKeyDown = function handleKeyDown(e) {
    var key = e.key || e.which;

    if (key === 'Enter' || key === 13 || key === ' ' || key === 32) {
      onKeyDown({
        index: index,
        name: name,
        text: text
      });
    }
  };

  var classes = (0, _classnames.default)(className, "".concat(prefix, "--content-switcher-btn"), _defineProperty({}, "".concat(prefix, "--content-switcher--selected"), selected));
  var commonProps = {
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    className: classes
  };
  var btnIcon = icon ? /*#__PURE__*/_react.default.cloneElement(icon, {
    className: (0, _classnames.default)(icon.props.className, "".concat(prefix, "--content-switcher__icon"))
  }) : null;

  if (kind === 'button') {
    return /*#__PURE__*/_react.default.createElement("button", _extends({}, other, commonProps), btnIcon, text);
  }

  return /*#__PURE__*/_react.default.createElement("a", _extends({
    href: href
  }, other, commonProps), btnIcon, text);
};

Switch.propTypes = {
  className: _propTypes.default.string,
  index: _propTypes.default.number,
  kind: _propTypes.default.oneOf(['button', 'anchor']).isRequired,
  name: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  onClick: _propTypes.default.func,
  onKeyDown: _propTypes.default.func,
  selected: _propTypes.default.bool,
  text: _propTypes.default.string.isRequired,
  icon: _propTypes.default.element,
  href: _propTypes.default.string
};
Switch.defaultProps = {
  selected: false,
  kind: 'anchor',
  text: 'Provide text',
  href: '',
  onClick: function onClick() {},
  onKeyDown: function onKeyDown() {}
};
var _default = Switch;
exports.default = _default;