function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
export var textLookup = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  title: 'h1',
  subtitle: 'h3',
  p: 'p',
  caption: 'div'
};
/**
 *Text is a component for displaying paragraphs. You can use Text to standardize text across your web app. For longer sections or full articles use the <Story /> component instead.
 */

var Text = function Text(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      kind = _ref.kind,
      spacingTop = _ref.spacingTop,
      spacingBottom = _ref.spacingBottom;
  var tagName = {
    name: textLookup[kind] ? textLookup[kind] : 'div'
  };
  var classNames = classnames((_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "--text"), true), _defineProperty(_classnames, "".concat(prefix, "--text__").concat(kind), kind), _defineProperty(_classnames, "".concat(prefix, "--text__spacing-top-").concat(spacingTop), spacingTop), _defineProperty(_classnames, "".concat(prefix, "--text__spacing-bottom-").concat(spacingBottom), spacingBottom), _defineProperty(_classnames, "".concat(className), className), _classnames));
  return /*#__PURE__*/React.createElement(tagName.name, {
    className: classNames
  }, children);
};

Text.propTypes = {
  /**
    The Text content
  */
  children: PropTypes.node,

  /**
    Additional className for Story
  */
  className: PropTypes.string,

  /**
    Additional className for Story
  */
  kind: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'title', 'subtitle', 'p', 'i', 'bold', 'strong', 'sup', 'a', 'code', 'inline-highlight', 'caption']),

  /**
    Override spacing on top
  */
  spacingTop: PropTypes.oneOf(['3xs', '2xs', 'xs', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']),

  /**
  Override spacing on bottom
  */
  spacingBottom: PropTypes.oneOf(['3xs', '2xs', 'xs', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'])
};
export default Text;