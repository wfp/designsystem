import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import uid from '../../tools/uniqueId';
import { withUNCoreSettings } from '../UNCoreSettings';

/** Radio buttons represent a group of mutually exclusive choices */

class RadioButton extends React.Component {
  static propTypes = {
    prefix: PropTypes.string.isRequired,
    /**
     * Specify whether the <RadioButton> is currently checked
     */
    checked: PropTypes.bool,

    /**
     * Provide an optional className to be applied to the containing node
     */
    className: PropTypes.string,

    /**
     * Specify whether the <RadioButton> should be checked by default
     */
    defaultChecked: PropTypes.bool,

    /**
     * Specify whether the control is disabled
     */
    disabled: PropTypes.bool,

    /**
     * Provide a unique id for the underlying `input` node
     */
    id: PropTypes.string,

    /**
     * Provide label text to be read by screen readers when interacting with the
     * control
     */
    labelText: PropTypes.node.isRequired,

    /**
     * Provide a name for the underlying `input` node
     */
    name: PropTypes.string,

    /**
     * Provide an optional `onChange` hook that is called each time the value of
     * the underlying `input` changes
     */
    onChange: PropTypes.func,

    /**
     * Specify the value of the <RadioButton>
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  };

  UNSAFE_componentWillMount() {
    this.uid = this.props.id || uid();
  }

  handleChange = (evt) => {
    this.props.onChange(evt, this.props.value, this.props.name);
  };

  render() {
    const wrapperClasses = classNames(
      'radioButtonWrapper',
      this.props.className
    );

    const { prefix, labelText, inputRef, ...other } = this.props;

    const handleChange = this.props.onChange
      ? {
          onChange: this.handleChange,
        }
      : {};

    return (
      <div className={wrapperClasses}>
        <input
          {...other}
          ref={inputRef}
          type="radio"
          className={`${prefix}--radio-button`}
          {...handleChange}
          id={this.uid}
        />
        <label htmlFor={this.uid} className={`${prefix}--radio-button__label`}>
          <span className={`${prefix}--radio-button__appearance`} />
          {labelText}
        </label>
      </div>
    );
  }
}

const WrappedRadioButton = withUNCoreSettings(RadioButton);

export default (() => {
  const forwardRef = (props, ref) => (
    <WrappedRadioButton {...props} inputRef={ref} />
  );
  forwardRef.displayName = 'RadioButton';
  return React.forwardRef(forwardRef);
})();
