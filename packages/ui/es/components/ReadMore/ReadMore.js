function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import classnames from 'classnames';
import Link from '../Link';
import { iconCaretUp, iconCaretDown } from '@wfp/icons';
import Icon from '../Icon';
import settings from '../../globals/js/settings';
import { Workspace32 } from '@wfp/icons-react';
var prefix = settings.prefix;

var MoreLink = function MoreLink(_ref) {
  var handleToggleClick = _ref.handleToggleClick,
      link = _ref.link,
      text = _ref.text,
      showMore = _ref.showMore;

  if (link) {
    var clonedLink = /*#__PURE__*/React.cloneElement(link, {
      onClick: handleToggleClick
    });
    return clonedLink;
  } else {
    return /*#__PURE__*/React.createElement(Link, {
      className: "".concat(prefix, "--read-more__trigger"),
      small: true,
      onClick: handleToggleClick
    }, text, /*#__PURE__*/React.createElement(Workspace32, {
      icon: showMore ? iconCaretUp : iconCaretDown,
      width: "10",
      height: "10",
      description: showMore ? 'icon up' : 'icon down'
    }));
  }
};
/** ReadMore component is a simple way to keep longer content from cluttering up your page, giving you more control over how much content is displayed to visitor */


export default function ReadMore(_ref2) {
  var _classnames;

  var collapseLink = _ref2.collapseLink,
      collapseText = _ref2.collapseText,
      children = _ref2.children,
      collapsed = _ref2.collapsed,
      className = _ref2.className,
      disableAutoscroll = _ref2.disableAutoscroll,
      expandLink = _ref2.expandLink,
      expandText = _ref2.expandText,
      fade = _ref2.fade,
      maxHeight = _ref2.maxHeight;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showMore = _useState2[0],
      setShowMore = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      innerHeight = _useState4[0],
      setInnerHeight = _useState4[1];

  var readMoreRef = useRef();
  var readMoreFakeRef = useRef();

  var handleToggleClick = function handleToggleClick(e) {
    e.preventDefault();
    var innerHeight = readMoreRef.current.clientHeight;
    if (!showMore && !disableAutoscroll) setTimeout(function () {
      readMoreFakeRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      });
    }, 50);
    setShowMore(!showMore);
    setInnerHeight(innerHeight);
  };

  var classNames = classnames(className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "--read-more"), true), _defineProperty(_classnames, "".concat(prefix, "--read-more--expanded"), showMore), _defineProperty(_classnames, "".concat(prefix, "--read-more--fade"), fade), _defineProperty(_classnames, "".concat(prefix, "--read-more--max-height"), maxHeight), _classnames));
  var contentStyle = !maxHeight ? {
    undefined: undefined
  } : maxHeight && !showMore ? {
    maxHeight: maxHeight
  } : {
    maxHeight: innerHeight + 20
  };
  var collapseStyle = showMore ? {
    display: 'none'
  } : {
    display: 'block'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classNames
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--read-more__content"),
    style: contentStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--read-more__fake-height"),
    ref: readMoreFakeRef,
    style: {
      height: "".concat(innerHeight + 30, "px")
    }
  }), /*#__PURE__*/React.createElement("div", {
    ref: readMoreRef
  }, (showMore || !collapsed) && children, collapsed && /*#__PURE__*/React.createElement("div", {
    style: collapseStyle
  }, collapsed))), /*#__PURE__*/React.createElement(MoreLink, {
    handleToggleClick: handleToggleClick,
    showMore: showMore,
    link: showMore ? collapseLink : expandLink,
    text: showMore ? collapseText : expandText
  }));
}
ReadMore.propTypes = {
  /**
   * Specify an optional className to be applied to the wrapper node
   */
  className: PropTypes.string,

  /**
   * The content of the expanded element
   */
  children: PropTypes.node.isRequired,

  /**
   * The content of the collapsed content (optional)
   */
  collapsed: PropTypes.node,

  /**
   * A custom link for collapsing
   */
  collapseLink: PropTypes.node,

  /**
   * Custom text for collapsing
   */
  collapseText: PropTypes.node,

  /**
   * Disable the scroll into view on expanding
   */
  disableAutoscroll: PropTypes.bool,

  /**
   * A custom link for expanding
   */
  expandLink: PropTypes.node,

  /**
   * Custom text for expanding
   */
  expandText: PropTypes.node,

  /**
   * Enables the fade effect when the content is collapsed (optional) when enabled collapsed will be ignored
   */
  fade: PropTypes.bool,

  /**
   * The maximum height when the content is collapsed (optional)
   */
  maxHeight: PropTypes.number
};
ReadMore.defaultProps = {
  expandText: 'Read more',
  collapseText: 'Read less'
};