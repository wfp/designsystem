"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerNavigationWithContent = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _BannerNavigation = require("./BannerNavigation");

var _Search = _interopRequireDefault(require("../Search"));

var _Link = _interopRequireDefault(require("../Link"));

var _excluded = ["searchOnChange", "search"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BannerNavigationWithContent = function BannerNavigationWithContent(_ref) {
  var searchOnChange = _ref.searchOnChange,
      search = _ref.search,
      other = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_BannerNavigation.BannerNavigation, other, /*#__PURE__*/_react.default.createElement(_BannerNavigation.BannerNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://newgo.wfp.org",
    target: "_blank"
  }, "WFPgo")), /*#__PURE__*/_react.default.createElement(_BannerNavigation.BannerNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://selfservice.go.wfp.org",
    target: "_blank"
  }, "Self-Service")), /*#__PURE__*/_react.default.createElement(_BannerNavigation.BannerNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "http://communities.wfp.org",
    target: "_blank"
  }, "Communities")), /*#__PURE__*/_react.default.createElement(_BannerNavigation.BannerNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "http://manuals.wfp.org",
    target: "_blank"
  }, "Manuals")), /*#__PURE__*/_react.default.createElement(_BannerNavigation.BannerNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/_react.default.createElement(_BannerNavigation.BannerNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://newgo.wfp.org/topics/data",
    target: "_blank"
  }, "Data")), /*#__PURE__*/_react.default.createElement(_BannerNavigation.BannerNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "http://opweb.wfp.org",
    target: "_blank"
  }, "OPweb")), /*#__PURE__*/_react.default.createElement(_BannerNavigation.BannerNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://welearn.wfp.org",
    target: "_blank"
  }, "WeLearn")), search && /*#__PURE__*/_react.default.createElement(_BannerNavigation.BannerNavigationItem, null, /*#__PURE__*/_react.default.createElement("form", {
    action: "http://gtd.wfp.org",
    method: "GET",
    acceptCharset: "UTF-8",
    target: "_blank"
  }, /*#__PURE__*/_react.default.createElement(_Search.default, {
    kind: "banner",
    id: "search-2",
    labelText: "Find People",
    name: "q",
    placeHolderText: "Find People",
    onChange: searchOnChange
  }))));
};

exports.BannerNavigationWithContent = BannerNavigationWithContent;
BannerNavigationWithContent.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: _propTypes.default.string,

  /**
   * Specify the max-width on desktop devices (same as \`Wrapper\` component)
   */
  pageWidth: _propTypes.default.oneOf(['sm', 'md', 'lg', 'full']),

  /**
   * Allows to disable the search input
   */
  search: _propTypes.default.bool,

  /**
   * A onChange Function for the search
   */
  searchOnChange: _propTypes.default.func
};
BannerNavigationWithContent.defaultProps = {
  search: false,
  searchOnChange: function searchOnChange() {}
};