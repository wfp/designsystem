"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableSorting;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _icons = require("@wfp/icons");

var _excluded = ["className", "isSorted", "isSortedDesc", "sortType"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TableSorting(_ref) {
  var className = _ref.className,
      isSorted = _ref.isSorted,
      isSortedDesc = _ref.isSortedDesc,
      sortType = _ref.sortType,
      other = _objectWithoutProperties(_ref, _excluded);

  var classes = (0, _classnames.default)(className, 'wfp--table--sorting', {
    'wfp--table--is-sorted': isSorted,
    'wfp--table--is-sortable': sortType
  });
  return /*#__PURE__*/_react.default.createElement("span", {
    className: classes
  }, isSorted ? isSortedDesc ? /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon: _icons.iconCaretDown
  }) : /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon: _icons.iconCaretUp
  }) : '');
}

TableSorting.propTypes = {
  /**
   * Provide the content for the Table, usually `<thead />` or `<tbody/>`
   */
  children: _propTypes.default.node,

  /**
   * Provide a custom className to be applied to the containing <table /> node
   */
  className: _propTypes.default.string,

  /**
   * Displays a border around the  <table /> node
   */
  withBorder: _propTypes.default.bool
};