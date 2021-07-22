"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _reactTable = require("react-table");

var _addonKnobs = require("@storybook/addon-knobs");

var _Table = _interopRequireDefault(require("./Table"));

var _Pagination = _interopRequireDefault(require("../Pagination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    return /*#__PURE__*/_react.default.createElement("span", {
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
  var _useTable = (0, _reactTable.useTable)({
    columns: columns,
    data: data
  }),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      rows = _useTable.rows,
      prepareRow = _useTable.prepareRow; // Render the UI for your table


  return /*#__PURE__*/_react.default.createElement(_Table.default, getTableProps(), /*#__PURE__*/_react.default.createElement("thead", null, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/_react.default.createElement("tr", headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column) {
      return /*#__PURE__*/_react.default.createElement("th", column.getHeaderProps(), column.render('Header'));
    }));
  })), /*#__PURE__*/_react.default.createElement("tbody", getTableBodyProps(), rows.map(function (row, i) {
    prepareRow(row);
    return /*#__PURE__*/_react.default.createElement("tr", row.getRowProps(), row.cells.map(function (cell) {
      return /*#__PURE__*/_react.default.createElement("td", cell.getCellProps(), cell.render('Cell'));
    }));
  })));
}

function ContentPaginationTable(_ref2) {
  var columns = _ref2.columns,
      data = _ref2.data;

  // Use the state and functions returned from useTable to build your UI
  var _useTable2 = (0, _reactTable.useTable)({
    columns: columns,
    data: data
  }),
      getTableProps = _useTable2.getTableProps,
      getTableBodyProps = _useTable2.getTableBodyProps,
      headerGroups = _useTable2.headerGroups,
      rows = _useTable2.rows,
      prepareRow = _useTable2.prepareRow; // Render the UI for your table


  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Table.default, getTableProps(), /*#__PURE__*/_react.default.createElement("thead", null, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/_react.default.createElement("tr", headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column) {
      return /*#__PURE__*/_react.default.createElement("th", column.getHeaderProps(), column.render('Header'));
    }));
  })), /*#__PURE__*/_react.default.createElement("tbody", getTableBodyProps(), rows.map(function (row, i) {
    prepareRow(row);
    return /*#__PURE__*/_react.default.createElement("tr", row.getRowProps(), row.cells.map(function (cell) {
      return /*#__PURE__*/_react.default.createElement("td", cell.getCellProps(), cell.render('Cell'));
    }));
  })), /*#__PURE__*/_react.default.createElement(_Pagination.default, null)));
}

function TableStory() {
  var columns = _react.default.useMemo(function () {
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

  return /*#__PURE__*/_react.default.createElement(ContentTable, {
    columns: columns,
    data: data
  });
}

function TablePaginationStory() {
  var columns = _react.default.useMemo(function () {
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

  return /*#__PURE__*/_react.default.createElement(ContentPaginationTable, {
    columns: columns,
    data: data
  });
}

(0, _react2.storiesOf)('Components|Table (experimental)', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(TableStory, null);
}).add('with Pagination', function () {
  return /*#__PURE__*/_react.default.createElement(TablePaginationStory, null);
});