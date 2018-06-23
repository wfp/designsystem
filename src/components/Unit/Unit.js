import React from 'react';
import { Countries, Usd, Partners, Beneficiaries, Households, Months, Level, Mt, None, Num, Percentage }  from './UnitList';
import PropTypes from 'prop-types';

// All Unit Components together in <Unit type="Unitname" />


export const scaleLookup = {
  'thousand': {
    pow: 1000, 'after': 'T'
  },
  'million': {
    pow: 1000000, 'after': 'M'
  },
  'billion': {
    pow: 1000000000, 'after': 'B'
  }
};

export const currencyCalc = ( props, after, before, exact ) => {
  const {children, setup} = props;

  // Remove commas
  var value = (typeof children === 'string') ? children.replace(',', '') : children;

  // Parse as float
  value = parseFloat(value);

  // Input
  value = value !== 0 && setup.input && scaleLookup[setup.input] ? scaleLookup[setup.input].pow * value : value;

  // Extension
  const extension = setup.extension && scaleLookup[setup.extension] ? scaleLookup[setup.extension] : undefined;

  value = value !== 0 && extension ? value / extension.pow : value;

  // Convert to Locale String
  value = value.toLocaleString('en-EN', 
  { 
    minimumFractionDigits: exact ? 0 : setup.maximumSignificantDigits ? setup.maximumSignificantDigits : 2,
    maximumSignificantDigits: setup.maximumSignificantDigits,
    maximumFractionDigits: exact ? 0 : value <= 0.5 ? 5 : setup.maximumFractionDigits ? setup.maximumFractionDigits : 2
  })



  const calcObject = {value: value, before: before, after: after, extension: extension}
  if ((!value || value === "NaN" || parseFloat(value) === 0) &&setup.showZero)
    return false
  else if (setup.calcOnly)
    return calcObject
  else if (setup.svg)
    return svgUnit(calcObject, props);
  else if (value !== false)
    return <span className={props.className}>{value}</span>;
  else
    return <Invalid className={props.className}/>;
}



export const percentageCalc = ( props, after, before ) => {
  const {children, setup} = props;

  // Remove commas
  var value = (typeof children === 'string') ? children.replace(',', '') : children;

  // Parse as float
  value = parseFloat(value);

  value = setup.from && setup.from === 0 ? false : setup.from ? value / setup.from : value;

  // Convert to Locale String
  value = value.toLocaleString('en-EN', 
  { 
    minimumFractionDigits: setup.maximumSignificantDigits ? setup.maximumSignificantDigits : 2,
    maximumSignificantDigits: setup.maximumSignificantDigits,
    maximumFractionDigits: value <= 0.5 ? 5 : setup.maximumFractionDigits ? setup.maximumFractionDigits : 2
  })

  const calcObject = {value: value, before: before, after: after, extension: undefined}
  if ((!value || value === "NaN" || parseFloat(value) === 0) &&setup.showZero)
    return false
  else if (setup.calcOnly)
    return calcObject
  else if (setup.svg)
    return svgUnit(calcObject, props);
  else if (value !== false)
    return <span className={props.className}>{value}</span>;
  else
    return <Invalid className={props.className}/>;
}



export const simpleCalc = ( props, after, before ) => {
  const {children, setup} = props;

  // Remove commas
  var value = children;

  const unit = setup.showUnit ? `{$before}{$children}{$after}`: "";

  if (setup.svg)
    return svgUnit({value: value + unit, before: before, after: after}, props);
  else if (value !== false)
    return <span className={props.className}>{value}</span>;
}


export const svgUnit = ( value, props ) => {
  const { className, style, type, ...other } = props;

  if (value)
    return (<text className={props.className} {...other}>
              <tspan style={style}>{ value.value }</tspan>
              <tspan style={style}> {value.unit}</tspan>
            </text>);
  else
    return <InvalidSvg className={props.className}/>;
};


const components = {
  Usd,
  Partners,
  Beneficiaries,
  Households,
  Months,
  Mt,
  Num,
  Level,
  None,
  Countries,
  Percentage

  /*



  MonthYear,
  Year,
*/
};

export const Unit = (props ) => {
  const { setup } = props;
  const type = props.type ? props.type : "None";
  const Unit = components[type];
  const unitHideClass = setup && setup.hideUnit ? "wfp--unit--hide" : "";
  const textAnchor = setup && setup.textAnchor ? props.textAnchor : "start";
  const unitClassName = props.type ? 'wfp--unit--' + props.type.toLowerCase() : "";

  const extensionClassName = setup && setup.extension && scaleLookup[setup.extension] ? 'wfp--unit--' + setup.extension : "";

  const className = "wfp--unit " + props.className + " " + unitClassName + " " + unitHideClass + " " + extensionClassName;

  if (Unit === undefined) {
    console.warn(`The unit "${type}" is undefined`);
    return null;
  }

  return (<Unit {...props} className={className} textAnchor={textAnchor} />);
};


Unit.propTypes = {
  /**
    Width of Wrapper, use 'narrow' or leave empty
  */
  setup: PropTypes.shape
};

Unit.defaultProps = {
  setup : {
  }
};

export default Unit;
