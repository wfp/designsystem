import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import useSettings from '../../hooks/useSettings';

/** A FormGroup element is used to group several controls as well as labels  within a web form. It uses  `<fieldset>` */
const FormGroup = ({
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

FormGroup.propTypes = {
  /**
   * Specify the contained form elements
   */
  children: PropTypes.node,
  /**
   * Specify a breakpoint to show containing inputs vertically on mobile devices
   */
  breakpoint: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
  /**
   * Specify a title for the `FormGroup`
   */
  legendText: PropTypes.string,
  /**
   * Specify an optional className to be applied to the wrapper node
   */
  className: PropTypes.string,
  /**
   * Specify whether the control is currently invalid.
   * Either a boolean in combination with `invalidText` or an `object`( eg. { message: "Message", …otherErrorProperties }) can be passed.
   */
  invalid: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  /**
   * Specify if a message is shown for the `fieldset`
   */
  message: PropTypes.bool,
  /**
   * Specify a message for the `fieldset`
   */
  messageText: PropTypes.string,
  /**
   * Specify a message for the `fieldset`
   */
  align: PropTypes.oneOf(['vertical', 'horizontal']),
  /**
   * Specify the spacing between horizontaly aligned inputs
   */
  inputSpacing: PropTypes.oneOf(['none', 'md', 'lg']),
};

FormGroup.defaultProps = {
  align: 'vertical',
  invalid: false,
  inputSpacing: 'lg',
  breakpoint: 'md',
  message: false,
  messageText: '',
};

export default FormGroup;
