// import PropTypes from 'prop-types';
// import React, { Component } from 'react';
// import { iconCaretUp, iconCaretDown } from '@wfp/icons-react';
// import Icon from '../Icon';
// import FormItem from '../FormItem';
// import classNames from 'classnames';
// import useSettings from '../../hooks/useSettings';
// const { prefix } = useSettings();

// function PropTypeEmptyString(props, propName, componentName) {
//   componentName = componentName || 'ANONYMOUS';
//   if (props[propName]) {
//     let value = props[propName];
//     if (typeof value === 'string' && value !== '') {
//       return new Error(
//         propName + ' in ' + componentName + ' is not an empty string'
//       );
//     }
//   }
//   return null;
// }

// const capMin = (min, value) =>
//   isNaN(min) || (!min && min !== 0) || isNaN(value) || (!value && value !== 0)
//     ? value
//     : Math.max(min, value);
// const capMax = (max, value) =>
//   isNaN(max) || (!max && max !== 0) || isNaN(value) || (!value && value !== 0)
//     ? value
//     : Math.min(max, value);

// export default class NumberInput extends Component {
//   constructor(props) {
//     super(props);

//     const value = capMax(props.max, capMin(props.min, props.value));
//     this.state = { value };
//   }

//   static propTypes = {
//     /**
//      * Specify an optional className to be applied to the wrapper node
//      */
//     className: PropTypes.string,

//     /**
//      * Specify an optional className to be applied to the form-item node
//      */
//     formItemClassName: PropTypes.string,

//     /**
//      * Specify if the control should be disabled, or not
//      */
//     disabled: PropTypes.bool,

//     /**
//      * Specify whether you want the underlying label to be visually hidden
//      */
//     hideLabel: PropTypes.bool,

//     /**
//      * Provide a description for up/down icons that can be read by screen readers
//      */
//     iconDescription: PropTypes.string.isRequired,

//     /**
//      * Specify a custom `id` for the input
//      */
//     id: PropTypes.string.isRequired,

//     /**
//      * Generic `label` that will be used as the textual representation of what
//      * this field is for
//      */
//     labelText: PropTypes.node,

//     /**
//      * The maximum value.
//      */
//     max: PropTypes.number,

//     /**
//      * The minimum value.
//      */
//     min: PropTypes.number,

//     /**
//      * The new value is available in 'imaginaryTarget.value'
//      * i.e. to get the value: evt.imaginaryTarget.value
//      */
//     onChange: PropTypes.func,

//     /**
//      * Provide an optional function to be called when the up/down button is clicked
//      */
//     onClick: PropTypes.func,

//     /**
//      * Specify how much the valus should increase/decrease upon clicking on up/down button
//      */
//     step: PropTypes.number,

//     /**
//      * Specify the value of the input, if undefined or null the value is empty
//      */
//     value: PropTypes.oneOfType([PropTypeEmptyString, PropTypes.number]),

//     /**
//      * Specify whether the control is currently invalid.
//      * Either a boolean in combination with `invalidText` or an `object`( eg. { message: "Message", …otherErrorProperties }) can be passed.
//      */
//     invalid: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

//     /**
//      * Message which is displayed if the value is invalid.
//      */
//     invalidText: PropTypes.string,

//     /**
//      * Provide additional component that is used alongside the input for customization
//      */
//     additional: PropTypes.node,

//     /**
//      * Provide text that is used alongside the control label for additional help
//      */
//     helperText: PropTypes.node,

//     /**
//      * `true` to use the light version.
//      */
//     light: PropTypes.bool,

//     /**
//      * `true` to allow empty string.
//      */
//     allowEmpty: PropTypes.bool,
//   };

//   static defaultProps = {
//     disabled: false,
//     hideLabel: false,
//     iconDescription: 'choose a number',
//     labelText: ' ',
//     onChange: () => {},
//     onClick: () => {},
//     step: 1,
//     value: undefined,
//     invalid: false,
//     invalidText: 'Provide invalidText',
//     helperText: '',
//     light: false,
//     allowEmpty: true,
//   };

//   /**
//    * The DOM node refernce to the `<input>`.
//    * @type {HTMLInputElement}
//    */
//   _inputRef = null;

//   static getDerivedStateFromProps({ min, max, value = 0 }, state) {
//     const { prevValue } = state;
//     return prevValue === value
//       ? null
//       : {
//           value: capMax(max, capMin(min, value)),
//           prevValue: value,
//         };
//   }

//   handleChange = (evt) => {
//     if (!this.props.disabled) {
//       evt.persist();
//       evt.imaginaryTarget = this._inputRef;
//       this.setState(
//         {
//           value: evt.target.value,
//         },
//         () => {
//           this.props.onChange(evt);
//         }
//       );
//     }
//   };

//   handleArrowClick = (evt, direction) => {
//     let value =
//       typeof this.state.value === 'string'
//         ? Number(this.state.value)
//         : this.state.value;
//     const { disabled, min, max, step } = this.props;
//     const conditional =
//       direction === 'down'
//         ? (min !== undefined && value > min) || min === undefined
//         : (max !== undefined && value < max) || max === undefined;

//     if (!disabled && conditional) {
//       value = direction === 'down' ? value - step : value + step;
//       evt.persist();
//       evt.imaginaryTarget = this._inputRef;
//       this.setState(
//         {
//           value,
//         },
//         () => {
//           this.props.onClick(evt, direction);
//           this.props.onChange(value, evt, direction);
//         }
//       );
//     }
//   };

//   /**
//    * Preserves the DOM node ref of `<input>`.
//    * @param {HTMLInputElement} ref The DOM node ref of `<input>`.
//    */
//   _handleInputRef = (ref) => {
//     this._inputRef = ref;
//   };

//   render() {
//     const {
//       additional,
//       className,
//       disabled,
//       formItemClassName,
//       iconDescription, // eslint-disable-line
//       id,
//       hideLabel,
//       labelText,
//       max,
//       min,
//       step,
//       invalid,
//       invalidText,
//       helperText,
//       light,
//       allowEmpty,
//       ...other
//     } = this.props;

//     const numberInputClasses = classNames(`${prefix}--number`, className, {
//       [`${prefix}--number--light`]: light,
//       [`${prefix}--number--helpertext`]: helperText,
//       [`${prefix}--number--nolabel`]: hideLabel,
//     });

//     const props = {
//       disabled,
//       id,
//       max,
//       min,
//       step,
//       onChange: this.handleChange,
//       value: this.state.value,
//     };

//     const buttonProps = {
//       disabled,
//       type: 'button',
//     };

//     const inputWrapperProps = {};
//     let error = null;
//     if (invalid || (!allowEmpty && this.state.value === '')) {
//       inputWrapperProps['data-invalid'] = true;
//       error = (
//         <div className={`${prefix}--form-requirement`}>{invalidText}</div>
//       );
//     }

//     const helper = helperText ? (
//       <div className={`${prefix}--form__helper-text`}>{helperText}</div>
//     ) : null;

//     const labelClasses = classNames(`${prefix}--label`, {
//       [`${prefix}--visually-hidden`]: hideLabel,
//       [`${prefix}--label--disabled`]: other.disabled,
//     });

//     const labelTextComponent = labelText ? (
//       <label htmlFor={id} className={labelClasses}>
//         {labelText}
//       </label>
//     ) : null;

//     return (
//       <FormItem className={formItemClassName}>
//         <div className={numberInputClasses} {...inputWrapperProps}>
//           <div className={`${prefix}--number__controls`}>
//             <button
//               className={`${prefix}--number__control-btn up-icon`}
//               {...buttonProps}
//               onClick={(evt) => this.handleArrowClick(evt, 'up')}>
//               <Icon
//                 className="up-icon"
//                 icon={iconCaretUp}
//                 description={this.props.iconDescription}
//                 viewBox="0 0 10 5"
//               />
//             </button>
//             <button
//               className={`${prefix}--number__control-btn down-icon`}
//               {...buttonProps}
//               onClick={(evt) => this.handleArrowClick(evt, 'down')}>
//               <Icon
//                 className="down-icon"
//                 icon={iconCaretDown}
//                 viewBox="0 0 10 5"
//                 description={this.props.iconDescription}
//               />
//             </button>
//           </div>
//           {labelTextComponent}
//           {additional}
//           <input
//             type="number"
//             pattern="[0-9]*"
//             {...other}
//             {...props}
//             ref={this._handleInputRef}
//           />
//           {error}
//           {helper}
//         </div>
//       </FormItem>
//     );
//   }
// }
