import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const Checkbox = props => {
  const {
    className,
    id,
    labelText,
    onChange,
    indeterminate,
    input,
    hideLabel,
    wrapperClassName,
  } = props;

  let inputElement;
  const labelClasses = classNames('wfp--checkbox-label', className);
  const innerLabelClasses = classNames({
    'wfp--visually-hidden': hideLabel,
  });
  const wrapperClasses = classNames(
    'wfp--form-item',
    'wfp--checkbox-wrapper',
    wrapperClassName
  );

  return (
    <div className={wrapperClasses}>
      <input
        {...input}
        type="checkbox"
        onChange={evt => {
          onChange(input.checked, id, evt);
        }}
        className="wfp--checkbox"
        id={id}
        ref={el => {
          inputElement = el;
          if (inputElement) {
            inputElement.indeterminate = indeterminate;
          }
        }}
      />
      <label htmlFor={id} className={labelClasses}>
        <span className={innerLabelClasses}>{labelText}</span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  /**
   * The CSS class name to be placed on inner label element.
   */
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.node.isRequired,
  hideLabel: PropTypes.bool,
  onChange: PropTypes.func,
  /**
   * The CSS class name to be placed on the wrapping element
   */
  wrapperClassName: PropTypes.string,
};

Checkbox.defaultProps = {
  onChange: () => {},
  indeterminate: false,
};

export default Checkbox;
