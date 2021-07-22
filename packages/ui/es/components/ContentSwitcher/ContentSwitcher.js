var _excluded = ["children", "className", "selectedIndex", "small", "onChange"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import classNames from 'classnames';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
/** ContentSwitcher manipulates the content shown following an exclusive or “either/or” pattern. It is used to toggle between two or more content sections within the same space on screen. Only one section can be shown at a time.
 */

export default function ContentSwitcher(_ref) {
  var children = _ref.children,
      className = _ref.className,
      selectedIndex = _ref.selectedIndex,
      small = _ref.small,
      onChange = _ref.onChange,
      other = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(selectedIndex),
      _useState2 = _slicedToArray(_useState, 2),
      selectedIdx = _useState2[0],
      setSelectedIndex = _useState2[1];

  var getChildren = function getChildren(children) {
    return React.Children.map(children, function (child, index) {
      return /*#__PURE__*/React.cloneElement(child, {
        index: index,
        onClick: handleChildChange,
        onKeyDown: handleChildChange,
        selected: index === selectedIdx
      });
    });
  };

  var handleChildChange = function handleChildChange(data) {
    var index = data.index;

    if (selectedIdx !== index) {
      setSelectedIndex(index);
      onChange(data);
    }
  };

  var classes = classNames("".concat(prefix, "--content-switcher"), className, _defineProperty({}, "".concat(prefix, "--content-switcher--sm"), small));
  return /*#__PURE__*/React.createElement("div", _extends({}, other, {
    className: classes
  }), getChildren(children));
}
ContentSwitcher.propTypes = {
  /** Specify the content of your ContentSwitcher */
  children: PropTypes.node,

  /** Specify an optional className to be added to your ContentSwitcher */
  className: PropTypes.string,

  /** Specify an `onChange` handler that is called whenever the ContentSwitcher changes which item is selected */
  onChange: PropTypes.func.isRequired,

  /** Specify a selected index for the initially selected content */
  selectedIndex: PropTypes.number
};
ContentSwitcher.defaultProps = {
  selectedIndex: 0
};