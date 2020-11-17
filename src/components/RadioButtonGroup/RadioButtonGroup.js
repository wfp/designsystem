import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import RadioButton from '../RadioButton';
import warning from 'warning';
import settings from '../../globals/js/settings';

const { prefix } = settings;

export default class RadioButtonGroup extends React.Component {
  console.warn("RadioButtonGroup is depreciated and will be removed in the next versions. Use InputGroup instead");
  state = { selected: this.props.valueSelected || this.props.defaultSelected };

  static propTypes = {
    /**
     * Provide a collection of <RadioButton> components to render in the group
     */
    children: PropTypes.node,

    /**
     * Provide an optional className to be applied to the container node
     */
    className: PropTypes.string,
    /**
     * Provide an optional className to be applied to the container node
     */
    controlled: PropTypes.bool,

    /**
     * Specify the <RadioButton> to be selected by default
     */
    defaultSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Specify the name of the underlying `input` nodes
     */
    name: PropTypes.string.isRequired,

    /**
     * Specify whether the group is disabled
     */
    disabled: PropTypes.bool,

    /**
     * Provide an optional `onChange` hook that is called whenever the value of
     * the group changes
     */
    onChange: PropTypes.func,

    /**
     * Specify the value that is currently selected in the group
     */
    valueSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Specify whether the elements should be displayed vertically.
     */

    vertical: PropTypes.bool,

    /**
     * Specify whether you want the underlying label to be visually hidden
     */

    hideLabel: PropTypes.bool,
    /**
     * Provide text that is used alongside the control label for additional help
     */

    helperText: PropTypes.node,

    /**
     * Provide the text that will be read by a screen reader when visiting this
     * control
     */
    labelText: PropTypes.node,
  };

  static defaultProps = {
    onChange: /* istanbul ignore next */ () => {},
    controlled: false,
  };

  static getDerivedStateFromProps({ valueSelected, defaultSelected }, state) {
    const { prevValueSelected } = state;
    return prevValueSelected === valueSelected
      ? null
      : {
          selected: valueSelected || defaultSelected,
          prevValueSelected: valueSelected,
        };
  }

  getRadioButtons = () => {
    const children = React.Children.map(this.props.children, radioButton => {
      const { value, ...other } = radioButton.props;
      /* istanbul ignore if */
      if (radioButton.props.hasOwnProperty('checked')) {
        warning(
          false,
          `Instead of using the checked property on the RadioButton, set
            the defaultSelected property or valueSelected property on the RadioButtonGroup.`
        );
      }

      return (
        <RadioButton
          {...other}
          name={this.props.name}
          key={value}
          value={value}
          onChange={this.handleChange}
          checked={value === this.state.selected}
        />
      );
    });

    return children;
  };

  handleChange = (newSelection, value, evt) => {
    if (newSelection !== this.state.selected) {
      this.setState({ selected: newSelection });
      this.props.onChange(newSelection, this.props.name, evt);
    }
  };

  render() {
    const {
      children,
      disabled,
      labelText,
      helperText,
      controlled,
      vertical,
      hideLabel,
      className = `${prefix}--radio-button-group`,
    } = this.props;

    const labelClasses = classNames('wfp--label', {
      'wfp--visually-hidden': hideLabel,
    });

    const wrapperClasses = classNames(`${prefix}--form-item`, {
      [`${prefix}--radio-button-group__vertical`]: vertical,
    });

    const label = labelText ? (
      <span className={labelClasses}>{labelText}</span>
    ) : null;

    const helper = helperText ? (
      <div className="wfp--form__helper-text">{helperText}</div>
    ) : null;

    return (
      <div className={wrapperClasses}>
        <div className={className} disabled={disabled}>
          {label}
          {helper}
          <div className={`${prefix}--radio-button-group-inside`}>
            {controlled ? this.getRadioButtons() : children}
          </div>
        </div>
      </div>
    );
  }
}
