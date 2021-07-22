import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import FormGroup from '../../components/FormGroup';
import TextInput from '../../components/TextInput';
import NumberInput from '../../components/NumberInput';
import Button from '../../components/Button';
import ReactSelectWrapper from './ReactSelectWrapper';
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

  var _useForm = useForm(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      reset = _useForm.reset,
      control = _useForm.control;

  var handleFilter = function handleFilter(formdata) {
    onFormChange(formdata);
  };

  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit(handleFilter)
  }, /*#__PURE__*/React.createElement(FormGroup, {
    className: "wfp--form-long",
    align: "horizontal",
    style: {
      marginTop: '1rem'
    }
  }, /*#__PURE__*/React.createElement(Controller, {
    as: /*#__PURE__*/React.createElement(ReactSelectWrapper, {
      control: control,
      options: options
    }),
    name: "gender",
    labelText: "Gender",
    control: control
  }), /*#__PURE__*/React.createElement(Controller, {
    as: /*#__PURE__*/React.createElement(ReactSelectWrapper, {
      control: control,
      options: countryOptions
    }),
    name: "country",
    labelText: "Country",
    control: control
  })), /*#__PURE__*/React.createElement(FormGroup, {
    className: "wfp--form-long",
    align: "horizontal",
    style: {
      marginTop: '1rem'
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    id: "firstname",
    name: "firstname",
    labelText: "Firstname",
    placeholder: "eg: Edith",
    inputRef: register
  }), /*#__PURE__*/React.createElement(TextInput, {
    id: "lastname",
    name: "lastname",
    labelText: "lastname",
    placeholder: "eg: Chemin",
    inputRef: register
  }), /*#__PURE__*/React.createElement(NumberInput, {
    id: "age",
    name: "age",
    labelText: "Age",
    placeholder: "",
    inputRef: register
  })), /*#__PURE__*/React.createElement("div", {
    className: "buttons",
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '2em'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "button",
    kind: "ghost",
    style: {
      marginRight: '0.5em'
    },
    onClick: function onClick() {
      return reset();
    }
  }, "Clear filters"), /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, "Apply")));
}

export default Form;