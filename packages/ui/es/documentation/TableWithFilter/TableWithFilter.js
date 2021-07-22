function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import Search from '../../components/Search';
import Button from '../../components/Button';
import { iconFilterAlt, iconSubtractGlyph } from '@wfp/icons';
import { Module, ModuleHeader, ModuleBody } from '../../components/Module';
import Table from './DataTable';
import MyForm from './Form';

function TableWithFilter() {
  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      simpleSearch = _useState2[0],
      setSimpleSearch = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      filterActivated = _useState4[0],
      setFilterActivated = _useState4[1];

  var _useState5 = useState({}),
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

  return /*#__PURE__*/React.createElement(Module, {
    noMargin: true
  }, /*#__PURE__*/React.createElement(ModuleHeader, {
    filter: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Search, {
      id: "tablewithfilter",
      placeHolderText: "Type to filter",
      value: simpleSearch,
      onChange: handleSearchOnchange
    }), /*#__PURE__*/React.createElement(Button, {
      onClick: toggleFilter,
      icon: filterActivated ? iconSubtractGlyph : iconFilterAlt,
      kind: "secondary",
      style: {
        marginLeft: '1em'
      }
    }, filterActivated ? 'Hide filters' : 'Advanced filters'))
  }, "Large table with filter"), filterActivated && /*#__PURE__*/React.createElement(ModuleBody, null, /*#__PURE__*/React.createElement(MyForm, {
    onFormChange: handleOnFormSubmit,
    clearFilters: handleClearFilters
  })), /*#__PURE__*/React.createElement(Table, {
    filterText: simpleSearch,
    advanceFilter: search
  }));
}

export default TableWithFilter;