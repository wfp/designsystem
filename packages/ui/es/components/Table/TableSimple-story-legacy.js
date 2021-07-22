import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
storiesOf('Components|Table', module).addDecorator(withKnobs).add('Simple table', function () {
  return /*#__PURE__*/React.createElement("table", {
    className: "wfp--table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "wfp--table-thead-row--center"
  }, /*#__PURE__*/React.createElement("th", {
    colspan: "2"
  }, "Name"), /*#__PURE__*/React.createElement("th", {
    colspan: "4"
  }, "Info")), /*#__PURE__*/React.createElement("tr", {
    class: ""
  }, /*#__PURE__*/React.createElement("th", {
    colspan: "1"
  }, "First Name"), /*#__PURE__*/React.createElement("th", {
    colspan: "1"
  }, "Last Name"), /*#__PURE__*/React.createElement("th", {
    colspan: "1"
  }, "Age"), /*#__PURE__*/React.createElement("th", {
    colspan: "1"
  }, "Visits"), /*#__PURE__*/React.createElement("th", {
    colspan: "1"
  }, "Status"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Max"), /*#__PURE__*/React.createElement("td", null, "Mustermann"), /*#__PURE__*/React.createElement("td", null, "29"), /*#__PURE__*/React.createElement("td", null, "32"), /*#__PURE__*/React.createElement("td", null, "confirmed")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "John"), /*#__PURE__*/React.createElement("td", null, "Doe"), /*#__PURE__*/React.createElement("td", null, "32"), /*#__PURE__*/React.createElement("td", null, "21"), /*#__PURE__*/React.createElement("td", null, "pending"))));
});