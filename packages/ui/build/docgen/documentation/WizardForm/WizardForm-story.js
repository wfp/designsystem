"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _reactFinalForm = require("react-final-form");

var _Wizard = _interopRequireDefault(require("./Wizard"));

var _ReduxFormWrapper = _interopRequireDefault(require("../../components/ReduxFormWrapper"));

var _TextInput = _interopRequireDefault(require("../../components/TextInput"));

var _TextArea = _interopRequireDefault(require("../../components/TextArea"));

var _FormGroup = _interopRequireDefault(require("../../components/FormGroup"));

var _Blockquote = _interopRequireDefault(require("../../components/Blockquote"));

var _Wrapper = _interopRequireDefault(require("../../components/Wrapper"));

var _RadioButton = _interopRequireDefault(require("../../components/RadioButton/RadioButton"));

var _RegularPage = _interopRequireDefault(require("../RegularPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  return touched && error ? /*#__PURE__*/_react.default.createElement("span", {
    className: "wfp--form-requirement"
  }, error) : false;
};

(0, _react2.storiesOf)('Design|Templates', module).addParameters({
  hideProps: true
}).addDecorator(function (story) {
  return /*#__PURE__*/_react.default.createElement(_RegularPage.default, {
    title: "Wizard form",
    withoutSecondaryTabs: true,
    pageWidth: "lg"
  }, story());
}).add('Wizard Form ', function () {
  return /*#__PURE__*/_react.default.createElement(_Wrapper.default, {
    background: "lighter",
    pageWidth: "lg",
    spacing: "xl"
  }, /*#__PURE__*/_react.default.createElement(_Wizard.default, {
    initialValues: {
      employed: true,
      stooge: 'larry'
    },
    onSubmit: onSubmit
  }, /*#__PURE__*/_react.default.createElement(_Wizard.default.Page, {
    label: "Name and last name"
  }, /*#__PURE__*/_react.default.createElement(_Blockquote.default, {
    style: {
      marginBottom: '2rem'
    },
    title: "Regular Blockquote"
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.", ' '), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
    id: "firstName",
    name: "firstName",
    helperText: "Enter your full first name",
    component: _ReduxFormWrapper.default,
    inputComponent: _TextInput.default,
    labelText: "First Name"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
    id: "lastName",
    name: "lastName",
    helperText: "Some more requirements",
    component: _ReduxFormWrapper.default,
    inputComponent: _TextInput.default,
    labelText: "Last Name"
  }))), /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
    component: _ReduxFormWrapper.default,
    inputComponent: _TextArea.default,
    name: "notes",
    labelText: "Notes",
    placeholder: "Notes"
  }), /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
    id: "firstName",
    name: "firstName",
    helperText: "Enter your full first name",
    component: _ReduxFormWrapper.default,
    inputComponent: _TextInput.default,
    labelText: "First Name"
  })), /*#__PURE__*/_react.default.createElement(_Wizard.default.Page, {
    label: "Contact data"
  }, /*#__PURE__*/_react.default.createElement(_FormGroup.default, null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "sex"
  }, "Sex"), /*#__PURE__*/_react.default.createElement(_FormGroup.default, {
    className: "wfp--input-group",
    name: "input-group",
    defaultSelected: "default-selected",
    legend: "Group Legend"
  }, /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
    name: "sex",
    component: _ReduxFormWrapper.default,
    inputComponent: _RadioButton.default,
    type: "radio",
    value: "male",
    labelText: "Male"
  }), /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
    name: "sex",
    component: _ReduxFormWrapper.default,
    inputComponent: _RadioButton.default,
    type: "radio",
    value: "female",
    labelText: "Female"
  })), /*#__PURE__*/_react.default.createElement(_FormGroup.default, null, /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
    component: _ReduxFormWrapper.default,
    inputComponent: _TextArea.default,
    name: "notes",
    labelText: "Notes",
    placeholder: "Notes"
  })), /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
    name: "sex",
    component: renderError
  }))), /*#__PURE__*/_react.default.createElement(_Wizard.default.Page, {
    label: "Additional notes",
    validate: function validate(values) {
      var errors = {};

      if (!values.newNotes) {
        errors.newNotes = 'Required';
      }

      return errors;
    }
  }, /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
    component: _ReduxFormWrapper.default,
    inputComponent: _TextArea.default,
    name: "newNotes",
    labelText: "Notes",
    placeholder: "Notes"
  })), /*#__PURE__*/_react.default.createElement(_Wizard.default.Page, {
    label: "Sulamen mon anmen"
  }, /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
    component: _ReduxFormWrapper.default,
    inputComponent: _TextArea.default,
    name: "newNotes",
    labelText: "Notes",
    placeholder: "Notes"
  })), /*#__PURE__*/_react.default.createElement(_Wizard.default.Page, {
    label: "Summary",
    helperText: "Check & validate",
    status: 'summary'
  }, /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
    component: _ReduxFormWrapper.default,
    inputComponent: _TextArea.default,
    name: "newNotes",
    labelText: "Summary",
    placeholder: "Summary"
  }))));
});