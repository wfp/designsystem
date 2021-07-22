"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _reactTable = _interopRequireDefault(require("react-table"));

var _TablePagination = _interopRequireDefault(require("../TablePagination"));

var _List = require("../List");

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = [{
  outcome_indicator: 'Consumption-based Coping Strategy Index (Average)',
  target_location: 'Chipinge',
  data_source: 'Base Value: 2017.12, Joint survey, Baseline Survey',
  base_value_male: '12.06',
  base_value_female: '21.8',
  base_value_overall: '19.43',
  latest_follow_up_male: '12.06',
  latest_follow_up_female: '23.8',
  latest_follow_up_overall: '13.43',
  year_end_target_male: '18.06',
  year_end_target_female: '21.8',
  year_end_target_overall: '12.43',
  csp_end_target_male: '18.06',
  csp_end_target_female: '20.8',
  csp_end_target_overall: '13.43'
}, {
  outcome_indicator: 'Takimata sanctus est ',
  target_location: 'Chipinge',
  data_source: 'Magna aliquyam',
  base_value_male: '12.06',
  base_value_female: '21.8',
  base_value_overall: '19.43',
  latest_follow_up_male: '12.06',
  latest_follow_up_female: '23.8',
  latest_follow_up_overall: '13.43',
  year_end_target_male: '18.06',
  year_end_target_female: '21.8',
  year_end_target_overall: '12.43',
  csp_end_target_male: '18.06',
  csp_end_target_female: '20.8',
  csp_end_target_overall: '13.43'
}, {
  outcome_indicator: 'Consetetur sadipscing elitr, sed',
  target_location: 'Chipinge',
  data_source: 'Takimata sanctus est',
  base_value_male: '12.06',
  base_value_female: '21.8',
  base_value_overall: '19.43',
  latest_follow_up_male: '12.06',
  latest_follow_up_female: '23.8',
  latest_follow_up_overall: '13.43',
  year_end_target_male: '18.06',
  year_end_target_female: '21.8',
  year_end_target_overall: '12.43',
  csp_end_target_male: '18.06',
  csp_end_target_female: '20.8',
  csp_end_target_overall: '13.43'
}, {
  outcome_indicator: 'Lorem ipsum dolor sit amet,',
  target_location: 'Lorem ipsum dolor sit ',
  data_source: ' est Lorem ipsum dolor sit ',
  base_value_male: '12.06',
  base_value_female: '21.8',
  base_value_overall: '19.43',
  latest_follow_up_male: '12.06',
  latest_follow_up_female: '23.8',
  latest_follow_up_overall: '13.43',
  year_end_target_male: '18.06',
  year_end_target_female: '21.8',
  year_end_target_overall: '12.43',
  csp_end_target_male: '18.06',
  csp_end_target_female: '20.8',
  csp_end_target_overall: '13.43'
}, {
  outcome_indicator: 'Consumption-based Coping Strategy Index (Average)',
  target_location: ' Duo dolores et ea',
  data_source: 'Stet clita kasd gubergren',
  base_value_male: '12.06',
  base_value_female: '22.8',
  base_value_overall: '11.43',
  latest_follow_up_male: '12.06',
  latest_follow_up_female: '33.8',
  latest_follow_up_overall: '73.43',
  year_end_target_male: '18.06',
  year_end_target_female: '21.8',
  year_end_target_overall: '12.43',
  csp_end_target_male: '18.06',
  csp_end_target_female: '20.8',
  csp_end_target_overall: '13.43'
}, {
  outcome_indicator: 'Consumption-based Coping Strategy Index (Average)',
  target_location: ' Duo dolores et ea',
  data_source: 'Stet clita kasd gubergren',
  base_value_male: '12.06',
  base_value_female: '22.8',
  base_value_overall: '11.43',
  latest_follow_up_male: '12.06',
  latest_follow_up_female: '33.8',
  latest_follow_up_overall: '73.43',
  year_end_target_male: '18.06',
  year_end_target_female: '21.8',
  year_end_target_overall: '12.43',
  csp_end_target_male: '18.06',
  csp_end_target_female: '20.8',
  csp_end_target_overall: '13.43'
}, {
  outcome_indicator: 'Consumption-based Coping Strategy Index (Average)',
  target_location: ' Duo dolores et ea',
  data_source: 'Stet clita kasd gubergren',
  base_value_male: '12.06',
  base_value_female: '22.8',
  base_value_overall: '11.43',
  latest_follow_up_male: '12.06',
  latest_follow_up_female: '33.8',
  latest_follow_up_overall: '73.43',
  year_end_target_male: '18.06',
  year_end_target_female: '21.8',
  year_end_target_overall: '12.43',
  csp_end_target_male: '18.06',
  csp_end_target_female: '20.8',
  csp_end_target_overall: '13.43'
}];

var InlineMobile = function InlineMobile(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "ReactTable--responsive__cell"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "ReactTable--responsive__cell__title"
  }, props.column.Header), /*#__PURE__*/_react.default.createElement("span", {
    className: "ReactTable--responsive__cell__content"
  }, props.value));
};

var GenderBreakdown = function GenderBreakdown(props) {
  return /*#__PURE__*/_react.default.createElement(_List.List, {
    kind: "simple",
    small: true
  }, /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    title: "Male"
  }, props.original.csp_end_target_female), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    title: "Female"
  }, props.original.csp_end_target_female), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    title: "Overfall"
  }, props.original.csp_end_target_female));
};

var ResponsiveExpanderComponent = function ResponsiveExpanderComponent(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-expander ".concat(props.isExpanded ? '-open' : '')
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    small: true
  }, props.isExpanded ? 'Hide Details' : 'Show Details'));
};

var columns = [{
  Header: 'Outcome Indicator',
  accessor: 'outcome_indicator',
  Cell: InlineMobile
}, {
  Header: 'Target / Location',
  accessor: 'target_location',
  Cell: InlineMobile
}, {
  Header: 'Base Value',
  accessor: 'base_value_overall',
  Cell: GenderBreakdown
}, {
  Header: 'Latest Follow Up',
  accessor: 'latest_follow_up_overall',
  Cell: GenderBreakdown
}, {
  Header: 'Year End Target',
  accessor: 'year_end_target_overall',
  Cell: GenderBreakdown
}, {
  Header: 'CSP End Target',
  accessor: 'csp_end_target_overall',
  Cell: GenderBreakdown
}]; //PaginationComponent={Pagination}

(0, _react2.storiesOf)('Components|Table', module).add('responsive', function () {
  return /*#__PURE__*/_react.default.createElement(_reactTable.default, {
    data: data,
    defaultPageSize: 5,
    className: "ReactTable--responsive ReactTable--alternate-row",
    columns: columns,
    minRows: 1,
    ExpanderComponent: ResponsiveExpanderComponent,
    PaginationComponent: _TablePagination.default,
    SubComponent: function SubComponent(row) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "ReactTable__subcomponent"
      }, row.original.data_source);
    }
  });
});