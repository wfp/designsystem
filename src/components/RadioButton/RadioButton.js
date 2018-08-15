import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import uid from '../../tools/uniqueId';

export default class RadioButton extends React.Component {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    labelText: PropTypes.string.isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    onChange: () => {},
  };

  componentWillMount() {
    this.uid = this.props.id || uid();
  }

  handleChange = evt => {
    // Regular Update
    if (this.props.onChange)
      this.props.onChange(this.props.value, this.props.name, evt);
    // Redux Form Change
    if (this.props.input && this.props.input.onChange)
      this.props.input.onChange(evt.target.value);
  };

  render() {
    const wrapperClasses = classNames(
      'radioButtonWrapper',
      this.props.className
    );

    const { labelText, input, value, ...other } = this.props;
    return (
      <div className={wrapperClasses}>
        <input
          {...other}
          {...input}
          type="radio"
          value={input && input.value ? input.value : value}
          className="wfp--radio-button"
          onChange={this.handleChange}
          id={this.uid}
        />
        <label htmlFor={this.uid} className="wfp--radio-button__label">
          <span className="wfp--radio-button__appearance" />
          {labelText}
        </label>
      </div>
    );
  }
}
