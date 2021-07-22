function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["backwardText", "className", "forwardText", "id", "itemsPerPageText", "itemsPerPageFollowsText", "itemRangeText", "pageRangeText", "pageSize", "pageSizesDisabled", "pageSizes", "itemText", "pageText", "pageNumberText", "pagesUnknown", "isLastPage", "pageInputDisabled", "totalItems", "onChange", "page"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { iconChevronLeft, iconChevronRight } from '@wfp/icons';
import Icon from '../Icon';
import Select from '../Select';
import SelectItem from '../SelectItem';
import { equals } from '../../tools/array';
var instanceId = 0;
/** Pagination is used for splitting up content or data into several pages, with a control for navigating to the next or previous page. */

var Pagination = /*#__PURE__*/function (_Component) {
  _inherits(Pagination, _Component);

  var _super = _createSuper(Pagination);

  function Pagination(props) {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSizeChange", function (evt) {
      var pageSize = Number(evt.target.value);

      _this.setState({
        pageSize: pageSize,
        page: 1
      }, function () {});

      _this.props.onChange({
        page: 1,
        pageSize: pageSize
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePageChange", function (evt) {
      _this.setState({
        page: evt.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePageInputChange", function (evt) {
      var page = Number(evt.target.value);

      if (page > 0 && page <= Math.max(Math.ceil(_this.props.totalItems / _this.state.pageSize), 1)) {
        _this.setState({
          page: page
        });

        _this.props.onChange({
          page: page,
          pageSize: _this.state.pageSize
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "incrementPage", function () {
      var page = _this.state.page + 1;

      _this.setState({
        page: page
      });

      _this.props.onChange({
        page: page,
        pageSize: _this.state.pageSize
      });
    });

    _defineProperty(_assertThisInitialized(_this), "decrementPage", function () {
      var page = _this.state.page - 1;

      _this.setState({
        page: page
      });

      _this.props.onChange({
        page: page,
        pageSize: _this.state.pageSize
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderSelectItems", function (total) {
      var counter = 1;
      var itemArr = [];

      while (counter <= total) {
        itemArr.push( /*#__PURE__*/React.createElement(SelectItem, {
          key: counter,
          value: counter,
          text: String(counter)
        }));
        counter++;
      }

      return itemArr;
    });

    var _this$props = _this.props,
        pageSizes = _this$props.pageSizes,
        _page = _this$props.page,
        _pageSize = _this$props.pageSize;
    _this.state = {
      page: _page,
      pageSize: pageSizes.includes(_pageSize) ? _pageSize : pageSizes[0],
      prevPageSizes: pageSizes,
      prevPage: _page,
      prevPageSize: _pageSize
    };
    _this.uniqueId = ++instanceId;
    return _this;
  }

  _createClass(Pagination, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          backwardText = _this$props2.backwardText,
          className = _this$props2.className,
          forwardText = _this$props2.forwardText,
          id = _this$props2.id,
          itemsPerPageText = _this$props2.itemsPerPageText,
          itemsPerPageFollowsText = _this$props2.itemsPerPageFollowsText,
          itemRangeText = _this$props2.itemRangeText,
          pageRangeText = _this$props2.pageRangeText,
          pageSize = _this$props2.pageSize,
          pageSizesDisabled = _this$props2.pageSizesDisabled,
          pageSizes = _this$props2.pageSizes,
          itemText = _this$props2.itemText,
          pageText = _this$props2.pageText,
          pageNumberText = _this$props2.pageNumberText,
          pagesUnknown = _this$props2.pagesUnknown,
          isLastPage = _this$props2.isLastPage,
          pageInputDisabled = _this$props2.pageInputDisabled,
          totalItems = _this$props2.totalItems,
          onChange = _this$props2.onChange,
          pageNumber = _this$props2.page,
          other = _objectWithoutProperties(_this$props2, _excluded);

      var statePage = this.state.page;
      var statePageSize = this.props.pageSize ? this.props.pageSize : this.state.pageSize;
      var classNames = classnames('wfp--pagination', className);
      var backButtonClasses = classnames('wfp--pagination__button', 'wfp--pagination__button--backward', {
        'wfp--pagination__button--no-index': pageInputDisabled
      });
      var inputId = id || this.uniqueId;
      var totalPages = Math.max(Math.ceil(totalItems / statePageSize), 1);
      var selectItems = this.renderSelectItems(totalPages);
      return /*#__PURE__*/React.createElement("div", _extends({
        className: classNames
      }, other), /*#__PURE__*/React.createElement("div", {
        className: "wfp--pagination__left"
      }, !pageSizesDisabled && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        className: "wfp--pagination__text"
      }, itemsPerPageFollowsText || itemsPerPageText), /*#__PURE__*/React.createElement(Select, {
        id: "wfp-pagination-select-".concat(inputId),
        labelText: itemsPerPageText,
        hideLabel: true,
        inline: true,
        onChange: this.handleSizeChange // value={statePageSize}
        ,
        value: this.state.pageSize
      }, pageSizes.map(function (size) {
        return /*#__PURE__*/React.createElement(SelectItem, {
          key: size,
          value: size,
          text: String(size)
        });
      })), /*#__PURE__*/React.createElement("span", {
        className: "wfp--pagination__text"
      }, "\xA0|\xA0\xA0")), /*#__PURE__*/React.createElement("span", {
        className: "wfp--pagination__text"
      }, pagesUnknown ? itemText(statePageSize * (statePage - 1) + 1, statePage * statePageSize) : itemRangeText(Math.min(this.state.pageSize * (statePage - 1) + 1, totalItems), Math.min(statePage * this.state.pageSize, totalItems), totalItems))), /*#__PURE__*/React.createElement("div", {
        className: "wfp--pagination__right wfp--pagination--inline"
      }, /*#__PURE__*/React.createElement("span", {
        className: "wfp--pagination__text"
      }, pagesUnknown ? pageText(statePage) : pageRangeText(statePage, totalPages)), /*#__PURE__*/React.createElement("button", {
        className: backButtonClasses,
        onClick: this.decrementPage,
        disabled: this.props.disabled || statePage === 1
      }, /*#__PURE__*/React.createElement(Icon, {
        className: "wfp--pagination__button-icon",
        icon: iconChevronLeft,
        description: backwardText
      })), pageInputDisabled ? null : /*#__PURE__*/React.createElement(Select, {
        id: "wfp-pagination-select-".concat(inputId + 2),
        labelText: itemsPerPageText,
        hideLabel: true,
        inline: true,
        onChange: this.handlePageInputChange,
        value: statePage
      }, selectItems), /*#__PURE__*/React.createElement("button", {
        className: "wfp--pagination__button wfp--pagination__button--forward",
        onClick: this.incrementPage,
        disabled: this.props.disabled || statePage === totalPages || isLastPage
      }, /*#__PURE__*/React.createElement(Icon, {
        className: "wfp--pagination__button-icon",
        icon: iconChevronRight,
        description: forwardText
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var pageSizes = _ref.pageSizes,
          page = _ref.page,
          pageSize = _ref.pageSize;
      var prevPageSizes = state.prevPageSizes,
          prevPage = state.prevPage,
          prevPageSize = state.prevPageSize,
          currentPage = state.page,
          currentPageSize = state.pageSize;
      var pageSizesChanged = !equals(pageSizes, prevPageSizes);
      var pageChanged = page !== prevPage;
      var pageSizeChanged = pageSize !== prevPageSize;
      return !pageSizesChanged && !pageChanged && !pageSizeChanged ? null : {
        page: pageSizesChanged ? 1 : pageChanged ? page : currentPage,
        pageSize: pageSizesChanged ? pageSizes[0] : pageSizeChanged ? pageSize : currentPageSize,
        prevPageSizes: pageSizes,
        prevPage: page,
        prevPageSize: pageSize
      };
    }
  }]);

  return Pagination;
}(Component);

_defineProperty(Pagination, "propTypes", {
  /**
   * The description for the backward icon.
   */
  backwardText: PropTypes.string,

  /**
   * The CSS class names.
   */
  className: PropTypes.string,

  /**
   * The function returning a translatable text showing where the current page is,
   * in a manner of the range of items.
   */
  itemRangeText: PropTypes.func,

  /**
   * The description for the forward icon.
   */
  forwardText: PropTypes.string,

  /**
   * The unique ID of this component instance.
   */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The translatable text indicating the number of items per page.
   */
  itemsPerPageText: PropTypes.string,

  /**
   * A variant of `itemsPerPageText`, with a sign indicating that the number follows, e.g. ':'.
   */
  itemsPerPageFollowsText: PropTypes.string,

  /**
   * A variant of `itemRangeText`, used if the total number of items is unknown.
   */
  itemText: PropTypes.func,

  /**
   * The callback function called when the current page changes.
   */
  onChange: PropTypes.func,
  pageNumberText: PropTypes.string,

  /**
   * A function returning PII showing where the current page is.
   */
  pageRangeText: PropTypes.func,

  /**
   * The translatable text showing the current page.
   */
  pageText: PropTypes.func,

  /**
   * The choices for `pageSize`.
   */
  pageSizes: PropTypes.arrayOf(PropTypes.number).isRequired,

  /**
   * `true` if ture the pageSizes should be not visible.
   */
  pageSizesDisabled: PropTypes.bool,

  /**
   * The total number of items.
   */
  totalItems: PropTypes.number,

  /**
   * `true` if the backward/forward buttons should be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The current page.
   */
  page: PropTypes.number,

  /**
   * The number dictating how many items a page contains.
   */
  pageSize: PropTypes.number,

  /**
   * `true` if the total number of items is unknown.
   */
  pagesUnknown: PropTypes.bool,

  /**
   * `true` if the current page should be the last page.
   */
  isLastPage: PropTypes.bool,

  /**
   * `true` if the select box to change the page should be disabled.
   */
  pageInputDisabled: PropTypes.bool
});

_defineProperty(Pagination, "defaultProps", {
  backwardText: 'Backward',
  itemRangeText: function itemRangeText(min, max, total) {
    return "".concat(min, "-").concat(max, " of ").concat(total, " items");
  },
  forwardText: 'Forward',
  itemsPerPageText: 'Items per page:',
  pageNumberText: 'Page Number',
  pageRangeText: function pageRangeText(current, total) {
    return "".concat(current, " of ").concat(total, " pages");
  },
  disabled: false,
  page: 1,
  pagesUnknown: false,
  pageSizes: [10, 20, 50],
  isLastPage: false,
  pageInputDisabled: false,
  itemText: function itemText(min, max) {
    return "".concat(min, "-").concat(max, " items");
  },
  pageText: function pageText(page) {
    return "page ".concat(page);
  }
});

export { Pagination as default };