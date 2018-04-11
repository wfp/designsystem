import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import RfFormItem from '../FormItem/RfFormItem';

import RfFormLabel from '../FormLabel/RfFormLabel';

export const Input = (props) => {
  const { className, input, id, disabled, meta: { touched, error }, type, placeholder} = props;

  const inputClasses = classNames({
    'wfp--text-input': true,
    'wfp--input--invalid' : touched && error
  });

  return (
    <input
      {...input}
      className={inputClasses}
      disabled={disabled}
      id={id ? id : input.name}
      type={type}
      className={inputClasses}
      placeholder={placeholder}/>
  )
}

const RenderInput = (props) => {
  return (
    <RfFormItem {...props}>
      <RfFormLabel {...props} />
      <Input {...props} />
    </RfFormItem>
  )
};


RenderInput.propTypes = {
  /**
    Width of Wrapper, use 'narrow' or leave empty
  */
  pageWidth: PropTypes.string
};

export default RenderInput;