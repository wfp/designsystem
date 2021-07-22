import React from 'react';
import InputGroup from '../../components/InputGroup';
import TextArea from '../../components/TextArea';
import FormGroup from '../../components/FormGroup';
import RadioButton from '../../components/RadioButton/RadioButton';

function FormTwo(props) {
  return /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(InputGroup, {
    labelText: "Sex",
    name: "input-group",
    vertical: true
  }, /*#__PURE__*/React.createElement(RadioButton, {
    id: "female",
    labelText: "Female",
    name: "sex",
    value: "female",
    inputRef: props.register
  }), /*#__PURE__*/React.createElement(RadioButton, {
    id: "male",
    labelText: "Male",
    name: "sex",
    value: "male",
    inputRef: props.register
  })), /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(TextArea, {
    labelText: "Notes",
    name: "notes2",
    inputRef: props.register
  })));
}

export default FormTwo;