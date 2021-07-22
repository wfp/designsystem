"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReadMore;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _Link = _interopRequireDefault(require("../Link"));

var _icons = require("@wfp/icons");

var _Icon = _interopRequireDefault(require("../Icon"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _iconsReact = require("@wfp/icons-react");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var prefix = _settings.default.prefix;

var MoreLink = function MoreLink(_ref) {
  var handleToggleClick = _ref.handleToggleClick,
      link = _ref.link,
      text = _ref.text,
      showMore = _ref.showMore;

  if (link) {
    var clonedLink = /*#__PURE__*/_react.default.cloneElement(link, {
      onClick: handleToggleClick
    });

    return clonedLink;
  } else {
    return /*#__PURE__*/_react.default.createElement(_Link.default, {
      className: "".concat(prefix, "--read-more__trigger"),
      small: true,
      onClick: handleToggleClick
    }, text, /*#__PURE__*/_react.default.createElement(_iconsReact.Workspace32, {
      icon: showMore ? _icons.iconCaretUp : _icons.iconCaretDown,
      width: "10",
      height: "10",
      description: showMore ? 'icon up' : 'icon down'
    }));
  }
};
/** ReadMore component is a simple way to keep longer content from cluttering up your page, giving you more control over how much content is displayed to visitor */


function ReadMore(_ref2) {
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

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showMore = _useState2[0],
      setShowMore = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      innerHeight = _useState4[0],
      setInnerHeight = _useState4[1];

  var readMoreRef = (0, _react.useRef)();
  var readMoreFakeRef = (0, _react.useRef)();

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

  var classNames = (0, _classnames2.default)(className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "--read-more"), true), _defineProperty(_classnames, "".concat(prefix, "--read-more--expanded"), showMore), _defineProperty(_classnames, "".concat(prefix, "--read-more--fade"), fade), _defineProperty(_classnames, "".concat(prefix, "--read-more--max-height"), maxHeight), _classnames));
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
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classNames
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--read-more__content"),
    style: contentStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--read-more__fake-height"),
    ref: readMoreFakeRef,
    style: {
      height: "".concat(innerHeight + 30, "px")
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    ref: readMoreRef
  }, (showMore || !collapsed) && children, collapsed && /*#__PURE__*/_react.default.createElement("div", {
    style: collapseStyle
  }, collapsed))), /*#__PURE__*/_react.default.createElement(MoreLink, {
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
  className: _propTypes.default.string,

  /**
   * The content of the expanded element
   */
  children: _propTypes.default.node.isRequired,

  /**
   * The content of the collapsed content (optional)
   */
  collapsed: _propTypes.default.node,

  /**
   * A custom link for collapsing
   */
  collapseLink: _propTypes.default.node,

  /**
   * Custom text for collapsing
   */
  collapseText: _propTypes.default.node,

  /**
   * Disable the scroll into view on expanding
   */
  disableAutoscroll: _propTypes.default.bool,

  /**
   * A custom link for expanding
   */
  expandLink: _propTypes.default.node,

  /**
   * Custom text for expanding
   */
  expandText: _propTypes.default.node,

  /**
   * Enables the fade effect when the content is collapsed (optional) when enabled collapsed will be ignored
   */
  fade: _propTypes.default.bool,

  /**
   * The maximum height when the content is collapsed (optional)
   */
  maxHeight: _propTypes.default.number
};
ReadMore.defaultProps = {
  expandText: 'Read more',
  collapseText: 'Read less'
};