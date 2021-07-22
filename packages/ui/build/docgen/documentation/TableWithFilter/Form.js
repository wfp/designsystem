"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHookForm = require("react-hook-form");

var _FormGroup = _interopRequireDefault(require("../../components/FormGroup"));

var _TextInput = _interopRequireDefault(require("../../components/TextInput"));

var _NumberInput = _interopRequireDefault(require("../../components/NumberInput"));

var _Button = _interopRequireDefault(require("../../components/Button"));

var _ReactSelectWrapper = _interopRequireDefault(require("./ReactSelectWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = [{
  value: 'male',
  label: 'Male'
}, {
  value: 'female',
  label: 'Female'
}];
var countryOptions = [{
  value: 'armenia',
  label: 'Armenia'
}, {
  value: 'brazil',
  label: 'Brazil'
}, {
  value: 'china',
  label: 'China'
}, {
  value: 'france',
  label: 'France'
}, {
  value: 'honduras',
  label: 'Honduras'
}, {
  value: 'indonesia',
  label: 'Indonesia'
}, {
  value: 'morocco',
  label: 'Morocco'
}, {
  value: 'pakistan',
  label: 'Pakistan'
}, {
  value: 'russia',
  label: 'Russia'
}, {
  value: 'zimbabwe',
  label: 'Zimbabwe'
}];

function Form(_ref) {
  var onFormChange = _ref.onFormChange;

  var _useForm = (0, _reactHookForm.useForm)(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      reset = _useForm.reset,
      control = _useForm.control;

  var handleFilter = function handleFilter(formdata) {
    onFormChange(formdata);
  };

  return /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit(handleFilter)
  }, /*#__PURE__*/_react.default.createElement(_FormGroup.default, {
    className: "wfp--form-long",
    align: "horizontal",
    style: {
      marginTop: '1rem'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    as: /*#__PURE__*/_react.default.createElement(_ReactSelectWrapper.default, {
      control: control,
      options: options
    }),
    name: "gender",
    labelText: "Gender",
    control: control
  }), /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    as: /*#__PURE__*/_react.default.createElement(_ReactSelectWrapper.default, {
      control: control,
      options: countryOptions
    }),
    name: "country",
    labelText: "Country",
    control: control
  })), /*#__PURE__*/_react.default.createElement(_FormGroup.default, {
    className: "wfp--form-long",
    align: "horizontal",
    style: {
      marginTop: '1rem'
    }
  }, /*#__PURE__*/_react.default.createElement(_TextInput.default, {
    id: "firstname",
    name: "firstname",
    labelText: "Firstname",
    placeholder: "eg: Edith",
    inputRef: register
  }), /*#__PURE__*/_react.default.createElement(_TextInput.default, {
    id: "lastname",
    name: "lastname",
    labelText: "lastname",
    placeholder: "eg: Chemin",
    inputRef: register
  }), /*#__PURE__*/_react.default.createElement(_NumberInput.default, {
    id: "age",
    name: "age",
    labelText: "Age",
    placeholder: "",
    inputRef: register
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "buttons",
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '2em'
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "button",
    kind: "ghost",
    style: {
      marginRight: '0.5em'
    },
    onClick: function onClick() {
      return reset();
    }
  }, "Clear filters"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "submit"
  }, "Apply")));
}

var _default = Form;
exports.default = _default;