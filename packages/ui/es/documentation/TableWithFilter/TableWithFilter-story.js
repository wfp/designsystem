function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/* eslint-disable no-console */
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Form, Field } from 'react-final-form'; //import ReactTable from 'react-table';
//import TablePagination from '../../components/TablePagination';

import Fuse from 'fuse.js';
import ReduxFormWrapper from '../../components/ReduxFormWrapper';
import TextInput from '../../components/TextInput';
import RegularPage from '../RegularPage';
import Wrapper from '../../components/Wrapper';
import Search from '../../components/Search';
import Select from '../../components/Select';
import SelectItem from '../../components/SelectItem';
import Button from '../../components/Button';
import { iconFilterAlt, iconSubtractGlyph } from '@wfp/icons';
import { Module, ModuleHeader, ModuleBody } from '../../components/Module';
var data = [{
  name: 'Emyr Monaghan',
  age: 26,
  city: 'Berlin'
}, {
  name: 'Madihah Watson',
  age: 28,
  city: 'Rome'
}, {
  name: 'Rahim Valdez',
  age: 61,
  city: 'Nairobi'
}, {
  name: 'Max Mustermann',
  age: 73,
  city: 'Panama Citry'
}, {
  name: 'Maggie Alexander',
  age: 52,
  city: 'Bangok'
}, {
  name: 'Kirsten Martinez',
  age: 19,
  city: 'New York'
}, {
  name: 'Garfield Dejesus',
  age: 78,
  city: 'Paris'
}]; // const columns = [
//   {
//     Header: 'Name',
//     accessor: 'name', // String-based value accessors!
//   },
//   {
//     Header: 'Age',
//     accessor: 'age',
//     Cell: props => <span className="number">{props.value}</span>, // Custom cell components!
//   },
//   {
//     Header: 'City',
//     accessor: 'city', // String-based value accessors!
//   },
// ];

var Table = function Table(_ref) {
  var simpleSearch = _ref.simpleSearch,
      search = _ref.search;
  var dataFiltered = data;

  if (simpleSearch) {
    /* Simple Search using fuzy.js */
    var options = {
      shouldSort: true,
      distance: 0,
      threshold: 0.0,
      minMatchCharLength: 1,
      keys: ['name', 'age', 'city']
    };
    var fuse = new Fuse(dataFiltered, options);
    dataFiltered = fuse.search(simpleSearch);
  }
  /* Advanced search with custom filtering for each input using fuzy.js */


  if (search.name) {
    var optionsName = {
      threshold: 0.0,
      minMatchCharLength: 1,
      keys: ['name']
    };
    var fuseName = new Fuse(dataFiltered, optionsName);
    dataFiltered = fuseName.search(search.name);
  }

  if (search.age) {
    var optionsAge = {
      threshold: 0.0,
      minMatchCharLength: 1,
      keys: ['age']
    };
    var fuseAge = new Fuse(dataFiltered, optionsAge);
    dataFiltered = fuseAge.search(search.age);
  }

  return /*#__PURE__*/React.createElement("div", null, "Table");
  /*return (
    <ReactTable
      data={dataFiltered}
      defaultPageSize={10}
      columns={columns}
      className="-border -striped -highlight -spacing-xs"
      PaginationComponent={TablePagination}
    />
  );*/
};

var MyForm = function MyForm(_ref2) {
  var onSubmit = _ref2.onSubmit;
  return /*#__PURE__*/React.createElement(Form, {
    onSubmit: onSubmit,
    initialValues: {
      stooge: 'larry',
      employed: false
    },
    render: function render(_ref3) {
      var handleSubmit = _ref3.handleSubmit,
          form = _ref3.form,
          submitting = _ref3.submitting,
          pristine = _ref3.pristine,
          values = _ref3.values;
      return /*#__PURE__*/React.createElement("form", {
        onSubmit: handleSubmit
      }, /*#__PURE__*/React.createElement("div", {
        className: "wfp--form-long row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-xs-12 col-md-6 col-lg-3"
      }, /*#__PURE__*/React.createElement(Field, {
        id: "select",
        name: "select",
        component: ReduxFormWrapper,
        inputComponent: Select,
        labelText: "This is a select input"
      }, /*#__PURE__*/React.createElement(SelectItem, {
        value: "option-1",
        text: "Option 1"
      }), /*#__PURE__*/React.createElement(SelectItem, {
        value: "option-2",
        text: "Option 2"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "col-xs-12 col-md-6 col-lg-3"
      }, /*#__PURE__*/React.createElement(Field, {
        id: "select",
        name: "select",
        component: ReduxFormWrapper,
        inputComponent: Select,
        labelText: "Another amazing select"
      }, /*#__PURE__*/React.createElement(SelectItem, {
        value: "option-1",
        text: "Option 1"
      }), /*#__PURE__*/React.createElement(SelectItem, {
        value: "option-2",
        text: "Option 2"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "col-xs-12 col-md-6 col-lg-3"
      }, /*#__PURE__*/React.createElement(Field, {
        id: "name",
        name: "name",
        component: ReduxFormWrapper,
        inputComponent: TextInput,
        labelText: "Name"
      })), /*#__PURE__*/React.createElement("div", {
        className: "col-xs-12 col-md-6 col-lg-3"
      }, /*#__PURE__*/React.createElement(Field, {
        id: "age",
        name: "age",
        component: ReduxFormWrapper,
        inputComponent: TextInput,
        labelText: "Age"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "buttons",
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '1em'
        }
      }, /*#__PURE__*/React.createElement(Button, {
        type: "button",
        kind: "ghost",
        onClick: form.reset,
        disabled: submitting || pristine,
        style: {
          marginRight: '0.5em'
        }
      }, "Clear filters"), /*#__PURE__*/React.createElement(Button, {
        type: "submit"
      }, "Apply")));
    }
  });
};

var TableWithFilter = /*#__PURE__*/function (_Component) {
  _inherits(TableWithFilter, _Component);

  var _super = _createSuper(TableWithFilter);

  function TableWithFilter(props) {
    var _this;

    _classCallCheck(this, TableWithFilter);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "toggleFilter", function () {
      if (_this.state.filterActivated) {
        _this.setState({
          search: {}
        });
      }

      _this.setState({
        filterActivated: !_this.state.filterActivated
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setSimpleSearch", function (event) {
      _this.setState({
        simpleSearch: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setSearch", function (event) {
      _this.setState({
        search: event
      });
    });

    _this.state = {
      filterActivated: false,
      simpleSearch: undefined,
      search: {}
    };
    return _this;
  }

  _createClass(TableWithFilter, [{
    key: "render",
    value: function render() {
      var filterActivated = this.state.filterActivated;
      return /*#__PURE__*/React.createElement(Module, {
        noMargin: true
      }, /*#__PURE__*/React.createElement(ModuleHeader, {
        filter: /*#__PURE__*/React.createElement(React.Fragment, null, ' ', /*#__PURE__*/React.createElement(Search, {
          placeHolderText: "Type to filter",
          onChange: this.setSimpleSearch
        }), /*#__PURE__*/React.createElement(Button, {
          onClick: this.toggleFilter,
          icon: filterActivated ? iconSubtractGlyph : iconFilterAlt,
          kind: "secondary",
          style: {
            marginLeft: '1em'
          }
        }, filterActivated ? 'Hide filters' : 'Advanced filters'))
      }, "Large table with filter"), filterActivated && /*#__PURE__*/React.createElement(ModuleBody, null, /*#__PURE__*/React.createElement(MyForm, {
        onSubmit: this.setSearch
      })), /*#__PURE__*/React.createElement(Table, this.state));
    }
  }]);

  return TableWithFilter;
}(Component);

storiesOf('Design|Templates', module).addParameters({
  hideProps: true
}).add('Table with filter', function () {
  return /*#__PURE__*/React.createElement(RegularPage, {
    title: "Table with filter"
  }, /*#__PURE__*/React.createElement(Wrapper, {
    background: "lighter",
    pageWidth: "lg",
    spacing: "md"
  }, /*#__PURE__*/React.createElement(TableWithFilter, null)));
});