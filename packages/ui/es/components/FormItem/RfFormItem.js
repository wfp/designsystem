import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

var RfFormItem = function RfFormItem(props) {
  var showInvalid = props.meta && (props.meta.touched && props.meta.error || props.meta.submitFailed === true && props.meta.error);
  /*const inputClasses = classNames({
  	'required': props.isRequired,
  	'disabled': props.disabled,
  	'field--read-only': props.readOnly,
  	'wfp-form--group' : props.wrapper === true,
      'wfp--form-item--invalid' : showInvalid,
      [`wfp-form--group--${props.labelPosition}`]: props.labelPosition,
  	[`${props.className}`]: props.className,
  }); 
  */

  var inputClasses = classNames({
    'wfp--form-item': true,
    disabled: props.disabled
  });
  if (showInvalid) return /*#__PURE__*/React.createElement("div", {
    className: inputClasses
  }, props.children, /*#__PURE__*/React.createElement("div", {
    className: "wfp--form-requirement"
  }, props.meta.error));else return /*#__PURE__*/React.createElement("div", {
    className: inputClasses
  }, props.children);
};

RfFormItem.propTypes = {
  meta: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  required: PropTypes.bool
};
export default RfFormItem;