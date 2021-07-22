import React from 'react';
import { storiesOf } from '@storybook/react';
import { useTable } from 'react-table';
import { withKnobs } from '@storybook/addon-knobs';
import Table from './Table';
import Pagination from '../Pagination';
var data = [{
  lastName: 'Monaghan',
  firstName: 'Emyr',
  age: 26,
  city: 'Berlin',
  status: 'verified'
}, {
  lastName: 'Watson',
  firstName: 'Madihah',
  age: 28,
  city: 'Rome',
  status: 'verified'
}, {
  lastName: 'Valdez',
  firstName: 'Rahim',
  age: 61,
  city: 'Nairobi',
  status: 'verified'
}, {
  lastName: 'Mustermann',
  firstName: 'Max',
  age: 73,
  city: 'Panama Citry',
  status: 'submitted'
}, {
  lastName: 'Alexander',
  firstName: 'Maggie',
  age: 52,
  city: 'Bangok',
  status: 'verified'
}, {
  lastName: 'Martinez',
  firstName: 'Kirsten',
  age: 19,
  city: 'New York',
  status: 'verified'
}, {
  lastName: 'Dejesus',
  firstName: 'Garfield',
  age: 78,
  city: 'Paris',
  status: 'verified'
}];
var columns = [{
  Header: 'Name',
  accessor: 'name' // String-based value accessors!

}, {
  Header: 'Age',
  accessor: 'age',
  Cell: function Cell(props) {
    return /*#__PURE__*/React.createElement("span", {
      className: "number"
    }, props.value);
  } // Custom cell components!

}, {
  Header: 'City',
  accessor: 'city' // String-based value accessors!

}];

function ContentTable(_ref) {
  var columns = _ref.columns,
      data = _ref.data;

  // Use the state and functions returned from useTable to build your UI
  var _useTable = useTable({
    columns: columns,
    data: data
  }),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      rows = _useTable.rows,
      prepareRow = _useTable.prepareRow; // Render the UI for your table


  return /*#__PURE__*/React.createElement(Table, getTableProps(), /*#__PURE__*/React.createElement("thead", null, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/React.createElement("tr", headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column) {
      return /*#__PURE__*/React.createElement("th", column.getHeaderProps(), column.render('Header'));
    }));
  })), /*#__PURE__*/React.createElement("tbody", getTableBodyProps(), rows.map(function (row, i) {
    prepareRow(row);
    return /*#__PURE__*/React.createElement("tr", row.getRowProps(), row.cells.map(function (cell) {
      return /*#__PURE__*/React.createElement("td", cell.getCellProps(), cell.render('Cell'));
    }));
  })));
}

function ContentPaginationTable(_ref2) {
  var columns = _ref2.columns,
      data = _ref2.data;

  // Use the state and functions returned from useTable to build your UI
  var _useTable2 = useTable({
    columns: columns,
    data: data
  }),
      getTableProps = _useTable2.getTableProps,
      getTableBodyProps = _useTable2.getTableBodyProps,
      headerGroups = _useTable2.headerGroups,
      rows = _useTable2.rows,
      prepareRow = _useTable2.prepareRow; // Render the UI for your table


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Table, getTableProps(), /*#__PURE__*/React.createElement("thead", null, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/React.createElement("tr", headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column) {
      return /*#__PURE__*/React.createElement("th", column.getHeaderProps(), column.render('Header'));
    }));
  })), /*#__PURE__*/React.createElement("tbody", getTableBodyProps(), rows.map(function (row, i) {
    prepareRow(row);
    return /*#__PURE__*/React.createElement("tr", row.getRowProps(), row.cells.map(function (cell) {
      return /*#__PURE__*/React.createElement("td", cell.getCellProps(), cell.render('Cell'));
    }));
  })), /*#__PURE__*/React.createElement(Pagination, null)));
}

function TableStory() {
  var columns = React.useMemo(function () {
    return [{
      Header: 'Name',
      columns: [{
        Header: 'First Name',
        accessor: 'firstName'
      }, {
        Header: 'Last Name',
        accessor: 'lastName'
      }]
    }, {
      Header: 'Info',
      columns: [{
        Header: 'Status',
        accessor: 'status'
      }]
    }];
  }, []);
  return /*#__PURE__*/React.createElement(ContentTable, {
    columns: columns,
    data: data
  });
}

function TablePaginationStory() {
  var columns = React.useMemo(function () {
    return [{
      Header: 'Name',
      columns: [{
        Header: 'First Name',
        accessor: 'firstName'
      }, {
        Header: 'Last Name',
        accessor: 'lastName'
      }]
    }, {
      Header: 'Info',
      columns: [{
        Header: 'Status',
        accessor: 'status'
      }]
    }];
  }, []);
  return /*#__PURE__*/React.createElement(ContentPaginationTable, {
    columns: columns,
    data: data
  });
}

storiesOf('Components|Table (experimental)', module).addDecorator(withKnobs).add('Default', function () {
  return /*#__PURE__*/React.createElement(TableStory, null);
}).add('with Pagination', function () {
  return /*#__PURE__*/React.createElement(TablePaginationStory, null);
});