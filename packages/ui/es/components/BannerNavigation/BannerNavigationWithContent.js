var _excluded = ["searchOnChange", "search"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import { BannerNavigation, BannerNavigationItem } from './BannerNavigation';
import Search from '../Search';
import Link from '../Link';

var BannerNavigationWithContent = function BannerNavigationWithContent(_ref) {
  var searchOnChange = _ref.searchOnChange,
      search = _ref.search,
      other = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(BannerNavigation, other, /*#__PURE__*/React.createElement(BannerNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://newgo.wfp.org",
    target: "_blank"
  }, "WFPgo")), /*#__PURE__*/React.createElement(BannerNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://selfservice.go.wfp.org",
    target: "_blank"
  }, "Self-Service")), /*#__PURE__*/React.createElement(BannerNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "http://communities.wfp.org",
    target: "_blank"
  }, "Communities")), /*#__PURE__*/React.createElement(BannerNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "http://manuals.wfp.org",
    target: "_blank"
  }, "Manuals")), /*#__PURE__*/React.createElement(BannerNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/React.createElement(BannerNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://newgo.wfp.org/topics/data",
    target: "_blank"
  }, "Data")), /*#__PURE__*/React.createElement(BannerNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "http://opweb.wfp.org",
    target: "_blank"
  }, "OPweb")), /*#__PURE__*/React.createElement(BannerNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://welearn.wfp.org",
    target: "_blank"
  }, "WeLearn")), search && /*#__PURE__*/React.createElement(BannerNavigationItem, null, /*#__PURE__*/React.createElement("form", {
    action: "http://gtd.wfp.org",
    method: "GET",
    acceptCharset: "UTF-8",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(Search, {
    kind: "banner",
    id: "search-2",
    labelText: "Find People",
    name: "q",
    placeHolderText: "Find People",
    onChange: searchOnChange
  }))));
};

BannerNavigationWithContent.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,

  /**
   * Specify the max-width on desktop devices (same as \`Wrapper\` component)
   */
  pageWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'full']),

  /**
   * Allows to disable the search input
   */
  search: PropTypes.bool,

  /**
   * A onChange Function for the search
   */
  searchOnChange: PropTypes.func
};
BannerNavigationWithContent.defaultProps = {
  search: false,
  searchOnChange: function searchOnChange() {}
};
export { BannerNavigationWithContent };