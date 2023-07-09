import * as React from 'react';
import { ComponentType } from 'react';
import type { PropsWithChildren } from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';
import FormItem from '../FormItem/FormItem';
import { WarningSolid } from '@un/icons-react';
import * as HookForm from 'react-hook-form';

/**
   * Optionally provide the default value of the input @design
 
  defaultValue?: string | number;  */

export interface InputProps {
  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText?: React.ReactNode;
  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control @design
   */
  labelText?: React.ReactNode;

  /**
   * Provide a custom className that is applied directly to the underlying
   * &lt;textarea&gt; node
   */
  formItemClassName?: string;
  /**
   * Provide a custom className that is applied directly to the underlying
   * &lt;textarea&gt; node
   */
  inputWrapperClassName?: string;
  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel?: boolean;
  /**
   * Specify whether the control is currently invalid.
   * Either a boolean in combination with `invalidText` or an `object`( eg. { message: "Message", …otherErrorProperties }) can be passed.
   */
  invalid?: boolean | HookForm.FieldError | any;
  /**
   * Provide the text that is displayed when the control is in an invalid state @design
   */
  invalidText?: string | React.ReactNode | any;
  /**
   * Provide the content that will be shown in addition to the label
   * (e.g. units, currency, etc.)
   * This content will be placed after the label @design
   */
  additional?: React.ReactNode;

  light?: boolean;
  /**
   * Specify the placeholder attribute for the input @design
   */
  placeholder?: string;
  /**
   * Provide a unique identifier for the control
   */
  id?: string;
  /**
   * Provide a name for the control
   */
  name?: string;
  /**
   * Specify if the control is required @design
   * (sets aria-invalid as well)
   */
  required?: boolean;
  /**
   * Specify if the control is disabled @design
   * (sets aria-disabled as well)
   */
  disabled?: boolean;
  /**
   * If the input is read-only, the user cannot change its value but focus
   * and tabIndex are still applied @design
   * (sets aria-readonly as well)
   */
  readOnly?: boolean;
  /**
   * Renders the input as inline element for horizontal forms
   */
  inline?: boolean;
  /**
   * Additional helper in front of the input, e.g. a currency symbol @design
   * (sets aria-describedby as well)
   */
  addonBefore?: string | React.ReactNode;
  /**
   * Additional helper behind the input, e.g. a currency symbol @design
   * (sets aria-describedby as well)
   */
  addonAfter?: string | React.ReactNode;
  /**
   * Replacement component: supports AddonBefore and AddonAfter as replacement components
   * @example
   * ```jsx
   * <Input
   *  components={{
   *   AddonBefore: <div>€</div>,
   *  AddonAfter: <div>EUR</div>,
   * }}
   * />
   * ```
   */
  components?: {
    AddonBefore?: ComponentType<InputPropsForReplacementComponents>;
    AddonAfter?: ComponentType<InputPropsForReplacementComponents>;
    Label?: ComponentType<InputPropsForReplacementComponents>;
    HelperText?: ComponentType<InputPropsForReplacementComponents>;
    Error?: ComponentType<InputPropsForReplacementComponents>;
  };
}

export interface InputPropsForReplacementComponents
  extends InputProps,
    React.ComponentPropsWithRef<'div'> {
  /**
   * The classes for the label
   */
  labelClasses?: string;
  /**
   * The the ID of the element, uses the `name` prop if no `id` is provided. Make sure it is unique on the page.
   */
  calculatedId?: string;
  /**
   * The classes for the helper element
   */
  helperTextClasses?: string;
  /**
   * The classes for the error element
   */
  errorClasses?: string;
  /**
   * The id of the error. calculatedId + '-error-msg'
   */
  errorId?: string;
  /**
   * An icon for the error element
   */
  errorIcon?: React.ReactNode;
}

export interface AddonBeforeProps {
  addonBefore?: React.ReactNode;
  prefix?: string;
}

function AddonBefore({
  addonBefore,
  prefix,
}: InputPropsForReplacementComponents) {
  if (addonBefore) {
    return <div className={`${prefix}--input-addon-before`}>{addonBefore}</div>;
  }
  return null;
}

function AddonAfter({
  addonAfter,
  prefix,
}: InputPropsForReplacementComponents) {
  if (addonAfter) {
    return <div className={`${prefix}--input-addon-after`}>{addonAfter}</div>;
  }
  return null;
}

/**
 * Shows the error message underneath the element */
function Error({
  errorId,
  errorClasses,
  invalid,
  invalidText,
}: InputPropsForReplacementComponents) {
  if (invalid) {
    const errorIcon = <WarningSolid fill="#c5192d" />;
    return (
      <div className={errorClasses} id={errorId}>
        {errorIcon}{' '}
        <span>
          {typeof invalid === 'object' && invalid.message
            ? invalid.message
            : typeof invalid === 'string'
            ? invalid
            : invalidText
            ? invalidText
            : 'required'}
        </span>
      </div>
    );
  }
  return null;
}

/**
 * Shows a helper text under the label */
export function Label({
  labelClasses,
  calculatedId,
  labelText,
  required,
  hideLabel,
}: InputPropsForReplacementComponents) {
  if (hideLabel) return null;
  return (
    <label htmlFor={calculatedId} className={labelClasses}>
      {labelText && labelText}
      {required && '*'}
    </label>
  );
}

/**
 * Shows a helper text under the label */
export function Helper({
  helperTextClasses,
  helperText,
}: InputPropsForReplacementComponents) {
  if (helperText) return <div className={helperTextClasses}>{helperText}</div>;
  return null;
}

interface InputPropsI extends InputProps, React.ComponentPropsWithRef<'div'> {
  /**
   * Provide a children to the input
   */
  children?: React.ReactNode;
}

/**
 * Input is a wrapper for custom inputs providing the label, helperText and errors. */
const Input: React.FC<PropsWithChildren<InputPropsI>> = ({
  additional,
  addonBefore,
  addonAfter,
  labelText,
  children,
  components: componentsOverride = {},
  //className,
  // iconDescription,
  id,
  className,
  inputWrapperClassName,
  //placeholder,
  //type,
  //onChange,
  //onClick,
  hideLabel,
  name,
  invalid,
  invalidText,
  helperText,
  required,
  ...other
}) => {
  const { prefix } = useSettings();

  const calculatedId = id ? id : name;
  /* const inputProps = {
    id: calculatedId,
    onChange: (evt) => {
      if (!other.disabled && !other.readOnly) {
        onChange && onChange(evt);
      }
    },
    onClick: (evt) => {
      if (!other.disabled && !other.readOnly) {
        onClick && onClick(evt);
      }
    },
    placeholder,
    type,
  };*/

  const errorId = calculatedId + '-error-msg';

  const labelClasses = classNames(`${prefix}--label`, {
    // [`${prefix}--input--light`]: light,
    [`${prefix}--visually-hidden`]: hideLabel || !labelText,
    [`${prefix}--label--disabled`]: other.disabled,
  });

  const inputWrapperClasses = classNames(
    `${prefix}--input-wrapper`,
    { [`${prefix}--form-item--invalid`]: invalid },
    inputWrapperClassName
  );

  const helperTextClasses = classNames(`${prefix}--form__helper-text`, {
    [`${prefix}--form__helper-text--disabled`]: other.disabled,
  });

  const errorClasses = `${prefix}--form-requirement`;

  const components = {
    AddonAfter,
    AddonBefore,
    Label,
    Helper,
    Error,
    ...componentsOverride,
  };
  const AddOnAfterComponent =
    components.AddonAfter as React.FC<InputPropsForReplacementComponents>;
  const AddOnBeforeComponent =
    components.AddonBefore as React.FC<InputPropsForReplacementComponents>;
  const LabelComponent =
    components.Label as React.FC<InputPropsForReplacementComponents>;
  const HelperComponent =
    components.Helper as React.FC<InputPropsForReplacementComponents>;
  const ErrorComponent =
    components.Error as React.FC<InputPropsForReplacementComponents>;

  const componentProps = {
    labelText,
    labelClasses,
    calculatedId,
    required,
    helperTextClasses,
    helperText,
    errorClasses,
    errorId,
    invalid,
    invalidText,
    addonAfter,
    addonBefore,
    hideLabel,
  };

  return (
    <FormItem className={className} inline={other.inline}>
      <LabelComponent {...componentProps} />
      <HelperComponent {...componentProps} />
      {additional}
      <div className={inputWrapperClasses}>
        <AddOnBeforeComponent {...componentProps} />
        {children}
        <AddOnAfterComponent {...componentProps} />
      </div>
      <ErrorComponent {...componentProps} />
    </FormItem>
  );
};
Input.displayName = 'Input';

export default Input;
