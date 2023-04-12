import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
//import RadioButton from '../RadioButton';
//import warning from 'warning';
import useSettings from '../../hooks/useSettings';
import { InputProps } from '../Input/Input';

/**
 * InputGroup allows you to organize and arange multiple input elements.
 */

interface InputGroupProps
  extends InputProps,
    React.ComponentPropsWithoutRef<'div'> {
  /**
   * Provide a collection of <RadioButton> components to render in the group
   */
  children?: React.ReactNode;
  /**
   * Specify the <RadioButton> to be selected by default
   */
  defaultSelected?: string | number;

  /**
   * Specify the name of the underlying `input` nodes
   */
  name?: string;

  /**
   * Provide an optional `onChange` hook that is called whenever the value of
   * the group changes
   */
  //onChange: (value: string | number) => void;

  /**
   * Specify the value that is currently selected in the group
   */
  valueSelected?: string | number;

  /**
   * Specify whether the elements should be displayed vertically.
   */

  vertical?: boolean;

  /**
   * Specify whether you want the underlying label to be visually hidden
   */

  hideLabel?: boolean;
  /**
   * Provide text that is used alongside the control label for additional help
   */

  helperText?: React.ReactNode;

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText?: React.ReactNode;
  controlled?: boolean;
  wrapperClassName?: string;
}

/*InputGroup.defaultProps = {
    onChange: () => {},
    controlled: false,
  };*/

const InputGroup: React.FC<InputGroupProps> = (props) => {
  const { prefix } = useSettings();

  const {
    children,
    //disabled,
    labelText,
    helperText,
    //controlled,
    vertical,
    hideLabel,
    className = `${prefix}--input-group`,
    wrapperClassName,
    valueSelected,
    defaultSelected,
  } = props;

  const [prevValueSelected, setPrevValueSelected] = useState(
    valueSelected || defaultSelected
  );
  //const [selected, setSelected] = useState();

  useEffect(() => {
    if (valueSelected !== prevValueSelected) {
      setPrevValueSelected(valueSelected);
      //TODO: setSelected(valueSelected || defaultSelected);
    }
  }, [valueSelected, defaultSelected]);

  //   static getDerivedStateFromProps({ valueSelected, defaultSelected }, state) {
  //     const { prevValueSelected } = state;
  //     return prevValueSelected === valueSelected
  //       ? null
  //       : {
  //           selected: valueSelected || defaultSelected,
  //           prevValueSelected: valueSelected,
  //         };
  //   }

  /* const getRadioButtons = () => {
    const children = React.Children.map(props.children, (radioButton) => {
      const { value, ...other } = radioButton.props;

    TODO: if (radioButton.props.hasOwnProperty.call('checked')) {
        warning(
          false,
          `Instead of using the checked property on the RadioButton, set
            the defaultSelected property or valueSelected property on the InputGroup.`
        );
      }

      return (
        <RadioButton
          {...other}
          name={props.name}
          key={value}
          value={value}
          onChange={handleChange}
          checked={value === selected}
        />
      );
    });

    return children;
  };*/

  /* const handleChange = (newSelection, value, evt) => {
    if (newSelection !== selected) {
      setSelected(newSelection);
      //TOOD: props.onChange(newSelection, props.name, evt);
    }
  };*/

  const labelClasses = classNames(`${prefix}--label`, {
    [`${prefix}--visually-hidden`]: hideLabel,
  });

  const wrapperClasses = classNames(`${prefix}--form-item`, {
    [`${prefix}--input-group__vertical`]: vertical,
    wrapperClassName,
  });

  const label = labelText ? (
    <span className={labelClasses}>{labelText}</span>
  ) : null;

  const helper = helperText ? (
    <div className={`${prefix}--form__helper-text`}>{helperText}</div>
  ) : null;

  return (
    <div className={wrapperClasses}>
      <div className={className}>
        {label}
        {helper}
        <div className={`${prefix}--input-group-inside`}>
          {/*controlled ? getRadioButtons() : */ children}
        </div>
      </div>
    </div>
  );
};

InputGroup.displayName = 'InputGroup';

export default InputGroup;
