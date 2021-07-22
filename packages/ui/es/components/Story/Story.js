function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
/** The Story component adds a default style, formatting and spacing for a longer text with main focus on readability. */

var Story = function Story(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      spacing = _ref.spacing;
  var classNames = classnames((_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "--story"), true), _defineProperty(_classnames, "".concat(className), className), _classnames));
  return /*#__PURE__*/React.createElement("div", {
    className: classNames,
    spacing: spacing
  }, children);
};

Story.propTypes = {
  /**
    The Story content
  */
  children: PropTypes.node,

  /**
    Additional className for Story
  */
  className: PropTypes.string
};
export default Story;