"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Search = _interopRequireDefault(require("../../components/Search"));

var _Button = _interopRequireDefault(require("../../components/Button"));

var _icons = require("@wfp/icons");

var _Module = require("../../components/Module");

var _DataTable = _interopRequireDefault(require("./DataTable"));

var _Form = _interopRequireDefault(require("./Form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function TableWithFilter() {
  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      simpleSearch = _useState2[0],
      setSimpleSearch = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      filterActivated = _useState4[0],
      setFilterActivated = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      search = _useState6[0],
      setSearch = _useState6[1];

  var handleOnFormSubmit = function handleOnFormSubmit(formdata) {
    setSearch(formdata);
  };

  var handleClearFilters = function handleClearFilters() {
    setSearch({});
  };

  var handleSearchOnchange = function handleSearchOnchange(value) {
    setSimpleSearch(value);
  };

  var toggleFilter = function toggleFilter() {
    if (filterActivated) {
      setSearch({});
    }

    setFilterActivated(!filterActivated);
  };

  return /*#__PURE__*/_react.default.createElement(_Module.Module, {
    noMargin: true
  }, /*#__PURE__*/_react.default.createElement(_Module.ModuleHeader, {
    filter: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Search.default, {
      id: "tablewithfilter",
      placeHolderText: "Type to filter",
      value: simpleSearch,
      onChange: handleSearchOnchange
    }), /*#__PURE__*/_react.default.createElement(_Button.default, {
      onClick: toggleFilter,
      icon: filterActivated ? _icons.iconSubtractGlyph : _icons.iconFilterAlt,
      kind: "secondary",
      style: {
        marginLeft: '1em'
      }
    }, filterActivated ? 'Hide filters' : 'Advanced filters'))
  }, "Large table with filter"), filterActivated && /*#__PURE__*/_react.default.createElement(_Module.ModuleBody, null, /*#__PURE__*/_react.default.createElement(_Form.default, {
    onFormChange: handleOnFormSubmit,
    clearFilters: handleClearFilters
  })), /*#__PURE__*/_react.default.createElement(_DataTable.default, {
    filterText: simpleSearch,
    advanceFilter: search
  }));
}

var _default = TableWithFilter;
exports.default = _default;