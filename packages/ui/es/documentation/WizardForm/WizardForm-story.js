function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Field } from 'react-final-form';
import Wizard from './Wizard';
import ReduxFormWrapper from '../../components/ReduxFormWrapper';
import TextInput from '../../components/TextInput';
import TextArea from '../../components/TextArea';
import FormGroup from '../../components/FormGroup';
import Blockquote from '../../components/Blockquote';
import Wrapper from '../../components/Wrapper';
import RadioButton from '../../components/RadioButton/RadioButton';
import RegularPage from '../RegularPage';

var sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

var onSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(values) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return sleep(300);

          case 2:
            window.alert(JSON.stringify(values, 0, 2));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function onSubmit(_x) {
    return _ref.apply(this, arguments);
  };
}();

var renderError = function renderError(_ref2) {
  var _ref2$meta = _ref2.meta,
      touched = _ref2$meta.touched,
      error = _ref2$meta.error;
  return touched && error ? /*#__PURE__*/React.createElement("span", {
    className: "wfp--form-requirement"
  }, error) : false;
};

storiesOf('Design|Templates', module).addParameters({
  hideProps: true
}).addDecorator(function (story) {
  return /*#__PURE__*/React.createElement(RegularPage, {
    title: "Wizard form",
    withoutSecondaryTabs: true,
    pageWidth: "lg"
  }, story());
}).add('Wizard Form ', function () {
  return /*#__PURE__*/React.createElement(Wrapper, {
    background: "lighter",
    pageWidth: "lg",
    spacing: "xl"
  }, /*#__PURE__*/React.createElement(Wizard, {
    initialValues: {
      employed: true,
      stooge: 'larry'
    },
    onSubmit: onSubmit
  }, /*#__PURE__*/React.createElement(Wizard.Page, {
    label: "Name and last name"
  }, /*#__PURE__*/React.createElement(Blockquote, {
    style: {
      marginBottom: '2rem'
    },
    title: "Regular Blockquote"
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.", ' '), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement(Field, {
    id: "firstName",
    name: "firstName",
    helperText: "Enter your full first name",
    component: ReduxFormWrapper,
    inputComponent: TextInput,
    labelText: "First Name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement(Field, {
    id: "lastName",
    name: "lastName",
    helperText: "Some more requirements",
    component: ReduxFormWrapper,
    inputComponent: TextInput,
    labelText: "Last Name"
  }))), /*#__PURE__*/React.createElement(Field, {
    component: ReduxFormWrapper,
    inputComponent: TextArea,
    name: "notes",
    labelText: "Notes",
    placeholder: "Notes"
  }), /*#__PURE__*/React.createElement(Field, {
    id: "firstName",
    name: "firstName",
    helperText: "Enter your full first name",
    component: ReduxFormWrapper,
    inputComponent: TextInput,
    labelText: "First Name"
  })), /*#__PURE__*/React.createElement(Wizard.Page, {
    label: "Contact data"
  }, /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "sex"
  }, "Sex"), /*#__PURE__*/React.createElement(FormGroup, {
    className: "wfp--input-group",
    name: "input-group",
    defaultSelected: "default-selected",
    legend: "Group Legend"
  }, /*#__PURE__*/React.createElement(Field, {
    name: "sex",
    component: ReduxFormWrapper,
    inputComponent: RadioButton,
    type: "radio",
    value: "male",
    labelText: "Male"
  }), /*#__PURE__*/React.createElement(Field, {
    name: "sex",
    component: ReduxFormWrapper,
    inputComponent: RadioButton,
    type: "radio",
    value: "female",
    labelText: "Female"
  })), /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(Field, {
    component: ReduxFormWrapper,
    inputComponent: TextArea,
    name: "notes",
    labelText: "Notes",
    placeholder: "Notes"
  })), /*#__PURE__*/React.createElement(Field, {
    name: "sex",
    component: renderError
  }))), /*#__PURE__*/React.createElement(Wizard.Page, {
    label: "Additional notes",
    validate: function validate(values) {
      var errors = {};

      if (!values.newNotes) {
        errors.newNotes = 'Required';
      }

      return errors;
    }
  }, /*#__PURE__*/React.createElement(Field, {
    component: ReduxFormWrapper,
    inputComponent: TextArea,
    name: "newNotes",
    labelText: "Notes",
    placeholder: "Notes"
  })), /*#__PURE__*/React.createElement(Wizard.Page, {
    label: "Sulamen mon anmen"
  }, /*#__PURE__*/React.createElement(Field, {
    component: ReduxFormWrapper,
    inputComponent: TextArea,
    name: "newNotes",
    labelText: "Notes",
    placeholder: "Notes"
  })), /*#__PURE__*/React.createElement(Wizard.Page, {
    label: "Summary",
    helperText: "Check & validate",
    status: 'summary'
  }, /*#__PURE__*/React.createElement(Field, {
    component: ReduxFormWrapper,
    inputComponent: TextArea,
    name: "newNotes",
    labelText: "Summary",
    placeholder: "Summary"
  }))));
});