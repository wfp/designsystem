import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const RfFormItem = props => {
  const showInvalid =
    props.meta &&
    ((props.meta.touched && props.meta.error) ||
      (props.meta.submitFailed === true && props.meta.error));

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

  const inputClasses = classNames({
    'wfp--form-item': true,
    disabled: props.disabled,
  });

  if (showInvalid)
    return (
      <div className={inputClasses}>
        {props.children}
        <div className="wfp--form-requirement">{props.meta.error}</div>
      </div>
    );
  else return <div className={inputClasses}>{props.children}</div>;
};

RfFormItem.propTypes = {
  meta: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  required: PropTypes.bool,
};

export default RfFormItem;
