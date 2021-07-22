var _excluded = ["children", "inline", "small", "vertical", "className", "role", "selectedPage", "onSelectionChange"];

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
import React, { useState, createRef } from 'react';
import classNames from 'classnames';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
/** Step Navigation provide indications to help users reach their destination from their current position */

export default function StepNavigation(_ref) {
  var _classNames, _classNames2;

  var children = _ref.children,
      inline = _ref.inline,
      small = _ref.small,
      vertical = _ref.vertical,
      className = _ref.className,
      role = _ref.role,
      selectedPage = _ref.selectedPage,
      onSelectionChange = _ref.onSelectionChange,
      other = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      dropdownHidden = _useState2[0],
      setDropdownHidden = _useState2[1];

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      elRefs = _useState4[0],
      setElRefs = _useState4[1];

  var getTabAt = function getTabAt(index) {
    return elRefs["tab".concat(index)] || React.Children.toArray(children)[index];
  };

  React.useEffect(function () {
    // add or remove refs
    setElRefs(function (elRefs) {
      return Array(arrLength).fill().map(function (_, i) {
        return elRefs[i] || /*#__PURE__*/createRef();
      });
    });
  }, [arrLength]);

  var getTabs = function getTabs() {
    return React.Children.map(children, function (tab) {
      return tab;
    });
  };

  var arrLength = getTabs().length; // const setTabAt = (index, tabRef) => {
  //   //setElRefs({ ...elRefs, [`tab${index}`]: tabRef });
  // };

  var handleTabClick = function handleTabClick(onSelectionChange) {
    return function (index, label, evt) {
      evt.preventDefault();
      selectTabAt(index, onSelectionChange);
    };
  };

  var handleTabAnchorFocus = function handleTabAnchorFocus(onSelectionChange) {
    return function (index) {
      var tabCount = React.Children.count(children) - 1;
      var tabIndex = index;

      if (index < 0) {
        tabIndex = tabCount;
      } else if (index > tabCount) {
        tabIndex = 0;
      }

      var tab = getTabAt(tabIndex);

      if (tab) {
        selectTabAt(tabIndex, onSelectionChange);

        if (tab.tabAnchor) {
          tab.tabAnchor.focus();
        }
      }
    };
  }; // const handleDropdownClick = () => {
  //   setDropdownHidden(!dropdownHidden);
  // };


  var selectTabAt = function selectTabAt(index, onSelectionChange) {
    handleTabClick(index);

    if (typeof onSelectionChange === 'function') {
      onSelectionChange(index);
    }
  };

  var tabsWithProps = getTabs().map(function (tab, index) {
    var newTab = /*#__PURE__*/React.cloneElement(tab, {
      index: index,
      selectedPage: selectedPage,
      handleTabClick: handleTabClick(onSelectionChange),
      handleTabAnchorFocus: handleTabAnchorFocus(onSelectionChange),
      ref: elRefs[index]
    });
    return newTab;
  });
  var classes = {
    tabs: classNames(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--step-navigation"), true), _defineProperty(_classNames, "".concat(prefix, "--step-navigation--vertical"), vertical), _defineProperty(_classNames, "".concat(prefix, "--step-navigation--small"), small), _defineProperty(_classNames, "".concat(prefix, "--step-navigation--regular"), !small), _classNames)),
    tablist: classNames("".concat(prefix, "--step-navigation__nav"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--step-navigation__nav--hidden"), dropdownHidden), _defineProperty(_classNames2, "".concat(prefix, "--step-navigation__nav--inline"), inline), _classNames2))
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    className: classes.tabs,
    role: role
  }, /*#__PURE__*/React.createElement("ul", {
    role: "tablist",
    className: classes.tablist
  }, tabsWithProps)));
}
StepNavigation.defaultProps = {
  role: 'navigation',
  selectedPage: 0
};
StepNavigation.propTypes = {
  /**
   * Pass in a collection of <StepNavigationItem> children to be rendered depending on the
   * currently selected tab
   */
  children: PropTypes.node,

  /**
   * Provide a className that is applied to the root <nav> component for the
   * <Tabs>
   */
  className: PropTypes.string,

  /**
   * Specify whether the StepNavigation will be displayed small
   */
  small: PropTypes.bool,

  /**
   * Specify whether the StepNavigation will be displayed vertically
   */
  vertical: PropTypes.bool,

  /**
   * By default, this value is "navigation". You can also provide an alternate
   * role if it makes sense from the accessibility-side
   */
  role: PropTypes.string.isRequired,

  /**
   * Provide an optional handler that is called whenever the selection
   * changes. This method is called with the index of the tab that was
   * selected
   */
  onSelectionChange: PropTypes.func,

  /**
   * Optionally provide an index for the currently selected <Tab>
   */
  selectedPage: PropTypes.number
};