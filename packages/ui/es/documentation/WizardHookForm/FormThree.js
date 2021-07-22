import React from 'react';
import TextArea from '../../components/TextArea';

function FormThree(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextArea, {
    labelText: "Notes",
    name: "newnotes2",
    inputRef: props.register
  }), /*#__PURE__*/React.createElement(TextArea, {
    labelText: "Summary",
    name: "summary",
    inputRef: props.register
  }));
}

export default FormThree;