var _excluded = ["className", "isSorted", "isSortedDesc", "sortType"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { iconCaretDown, iconCaretUp } from '@wfp/icons';
export default function TableSorting(_ref) {
  var className = _ref.className,
      isSorted = _ref.isSorted,
      isSortedDesc = _ref.isSortedDesc,
      sortType = _ref.sortType,
      other = _objectWithoutProperties(_ref, _excluded);

  var classes = classNames(className, 'wfp--table--sorting', {
    'wfp--table--is-sorted': isSorted,
    'wfp--table--is-sortable': sortType
  });
  return /*#__PURE__*/React.createElement("span", {
    className: classes
  }, isSorted ? isSortedDesc ? /*#__PURE__*/React.createElement(Icon, {
    icon: iconCaretDown
  }) : /*#__PURE__*/React.createElement(Icon, {
    icon: iconCaretUp
  }) : '');
}
TableSorting.propTypes = {
  /**
   * Provide the content for the Table, usually `<thead />` or `<tbody/>`
   */
  children: PropTypes.node,

  /**
   * Provide a custom className to be applied to the containing <table /> node
   */
  className: PropTypes.string,

  /**
   * Displays a border around the  <table /> node
   */
  withBorder: PropTypes.bool
};