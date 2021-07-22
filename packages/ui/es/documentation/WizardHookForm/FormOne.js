import React from 'react';
import TextInput from '../../components/TextInput';
import TextArea from '../../components/TextArea';
import Blockquote from '../../components/Blockquote';

function FormOne(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '2rem'
    }
  }, /*#__PURE__*/React.createElement(Blockquote, {
    title: "Regular Blockquote"
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.")), /*#__PURE__*/React.createElement(TextInput, {
    id: "firstName",
    name: "firstName",
    helperText: "Enter your full first name",
    labelText: "First Name",
    inputRef: props.register
  }), /*#__PURE__*/React.createElement(TextInput, {
    id: "lastName",
    name: "lastName",
    labelText: "Last Name",
    helperText: "Enter your last name",
    placeholder: "Placeholder text",
    inputRef: props.register
  }), /*#__PURE__*/React.createElement(TextArea, {
    labelText: "Notes",
    name: "notes",
    inputRef: props.register
  }));
}

export default FormOne;