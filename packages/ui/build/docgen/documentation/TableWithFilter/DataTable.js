"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactTable = require("react-table");

var _MockData = _interopRequireDefault(require("./MockData.json"));

var _columns = require("./columns");

var _Table = _interopRequireDefault(require("../../components/Table"));

var _Pagination = _interopRequireDefault(require("../../components/Pagination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function DataTable(_ref) {
  var filterText = _ref.filterText,
      advanceFilter = _ref.advanceFilter;
  var columns = (0, _react.useMemo)(function () {
    return _columns.COLUMNS;
  }, []);
  var data = (0, _react.useMemo)(function () {
    return _MockData.default;
  }, []);

  var _useTable = (0, _reactTable.useTable)({
    columns: columns,
    data: data
  }, _reactTable.useGlobalFilter, _reactTable.useFilters, _reactTable.usePagination),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      canPreviousPage = _useTable.canPreviousPage,
      canNextPage = _useTable.canNextPage,
      page = _useTable.page,
      gotoPage = _useTable.gotoPage,
      nextPage = _useTable.nextPage,
      previousPage = _useTable.previousPage,
      prepareRow = _useTable.prepareRow,
      setPageSize = _useTable.setPageSize,
      _useTable$state = _useTable.state,
      pageIndex = _useTable$state.pageIndex,
      pageSize = _useTable$state.pageSize,
      setGlobalFilter = _useTable.setGlobalFilter,
      setAllFilters = _useTable.setAllFilters;

  (0, _react.useEffect)(function () {
    if (filterText) {
      setGlobalFilter(filterText);
    } else {
      setGlobalFilter(undefined);
    }

    if (advanceFilter.gender || advanceFilter.country || advanceFilter.firstname || advanceFilter.lastname || advanceFilter.age) {
      console.log("advance", advanceFilter);
      setAllFilters([{
        id: 'gender',
        value: advanceFilter.gender
      }, {
        id: 'country',
        value: advanceFilter.country
      }, {
        id: 'first_name',
        value: advanceFilter.firstname
      }, {
        id: 'last_name',
        value: advanceFilter.lastname
      }, {
        id: 'age',
        value: advanceFilter.age
      }]);
    } else {
      setAllFilters([]);
    }
  }, [filterText, advanceFilter]);

  var changePage = function changePage(page) {
    gotoPage(page.page - 1); // Update PageSize

    if (pageSize !== page.pageSize) {
      setPageSize(page.pageSize);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Table.default, getTableProps(), /*#__PURE__*/_react.default.createElement("thead", null, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/_react.default.createElement("tr", headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column) {
      return /*#__PURE__*/_react.default.createElement("th", column.getHeaderProps(), column.render('Header'));
    }));
  })), /*#__PURE__*/_react.default.createElement("tbody", getTableBodyProps(), page.map(function (row, i) {
    prepareRow(row);
    return /*#__PURE__*/_react.default.createElement("tr", row.getRowProps(), row.cells.map(function (cell) {
      return /*#__PURE__*/_react.default.createElement("td", cell.getCellProps(), cell.render('Cell'));
    }));
  }))), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    pageSize: pageSize,
    pageSizes: [10, 20, 30],
    page: pageIndex + 1,
    totalItems: data.length,
    onChange: changePage
  }));
}

var _default = DataTable;
exports.default = _default;