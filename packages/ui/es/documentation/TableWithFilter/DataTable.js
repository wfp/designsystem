import React, { useMemo, useEffect } from 'react';
import { useTable, usePagination, useGlobalFilter, useFilters } from 'react-table';
import MOCKDATA from './MockData.json';
import { COLUMNS } from './columns';
import Table from '../../components/Table';
import Pagination from '../../components/Pagination';

function DataTable(_ref) {
  var filterText = _ref.filterText,
      advanceFilter = _ref.advanceFilter;
  var columns = useMemo(function () {
    return COLUMNS;
  }, []);
  var data = useMemo(function () {
    return MOCKDATA;
  }, []);

  var _useTable = useTable({
    columns: columns,
    data: data
  }, useGlobalFilter, useFilters, usePagination),
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

  useEffect(function () {
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

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Table, getTableProps(), /*#__PURE__*/React.createElement("thead", null, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/React.createElement("tr", headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column) {
      return /*#__PURE__*/React.createElement("th", column.getHeaderProps(), column.render('Header'));
    }));
  })), /*#__PURE__*/React.createElement("tbody", getTableBodyProps(), page.map(function (row, i) {
    prepareRow(row);
    return /*#__PURE__*/React.createElement("tr", row.getRowProps(), row.cells.map(function (cell) {
      return /*#__PURE__*/React.createElement("td", cell.getCellProps(), cell.render('Cell'));
    }));
  }))), /*#__PURE__*/React.createElement(Pagination, {
    pageSize: pageSize,
    pageSizes: [10, 20, 30],
    page: pageIndex + 1,
    totalItems: data.length,
    onChange: changePage
  }));
}

export default DataTable;