import React from "react";
import Select, { components } from "react-select";
import Input from "../../components/Input";
import classnames from "classnames";
import { useSelector } from "react-redux";
export default function ReactSelectWrapper(props) {
  var className = props.className,
      control = props.control,
      _onChange = props.onChange,
      labelText = props.labelText,
      value = props.value;
  return /*#__PURE__*/React.createElement(Input, {
    labelText: labelText
  }, function () {
    return /*#__PURE__*/React.createElement(Select, {
      options: props.options,
      className: "wfp--react-select-container",
      classNamePrefix: "wfp--react-select",
      onChange: function onChange(selected) {
        _onChange(selected.value);
      }
    });
  });
}