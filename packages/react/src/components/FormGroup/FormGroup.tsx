import React from 'react';
import type { PropsWithChildren } from 'react';
import classnames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';
import * as HookForm from 'react-hook-form';

type FormGroupProps = PropsWithChildren<{
  legendText?: string;
  breakpoint?: 'none' | 'sm' | 'md' | 'lg';
  invalid?: boolean | HookForm.FieldError;
  message?: boolean;
  messageText?: string;
  align?: 'vertical' | 'horizontal';
  inputSpacing?: 'none' | 'md' | 'lg';
  className?: Argument;
  inline?: boolean;
}>;
/** A FormGroup element is used to group several controls as well as labels  within a web form. It uses  `<fieldset>` */
const FormGroup: React.FC<FormGroupProps> = ({
  align,
  breakpoint,
  legendText,
  inline,
  invalid,
  children,
  className,
  inputSpacing,
  message,
  messageText,
  ...other
}) => {
  const { prefix } = useSettings();

  const classNamesLegend = classnames(
    `${prefix}--form-group__title`,
    className
  );
  const classNamesFieldset = classnames(
    `${prefix}--fieldset`,
    {
      [`${prefix}--fieldset__inline`]: inline,
      [`${prefix}--fieldset__align-${align}`]: align,
      [`${prefix}--fieldset__breakpoint-${breakpoint}`]: breakpoint,
      [`${prefix}--fieldset__input-spacing-${inputSpacing}`]: inputSpacing,
    },
    className
  );

  return (
    <div
      {...(invalid && { 'data-invalid': '' })}
      className={classNamesFieldset}
      {...other}>
      <legend className={classNamesLegend}>{legendText}</legend>
      <div className={`${prefix}--fieldset__content`}>{children}</div>
      {message ? (
        <div className={`${prefix}--form__requirements`}>{messageText}</div>
      ) : null}
    </div>
  );
};

export default FormGroup;
