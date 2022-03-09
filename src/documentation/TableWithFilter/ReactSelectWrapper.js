import React from 'react';
import Select, { components } from 'react-select';
import Input from '../../components/Input';
import classnames from 'classnames';
import { useSelector } from 'react-redux';

export default function ReactSelectWrapper(props) {
  const { className, control, onChange, labelText, value } = props;
  return (
    <Input labelText={labelText}>
      {() => (
        <Select
          options={props.options}
          className="wfp--react-select-container"
          classNamePrefix="wfp--react-select"
          onChange={(selected) => {
            onChange(selected.value);
          }}
        />
      )}
    </Input>
  );
}
