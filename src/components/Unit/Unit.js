import React from 'react';
import {
  Countries,
  Usd,
  Partners,
  Beneficiaries,
  Households,
  People,
  Months,
  Level,
  Mt,
  Trips,
  None,
  Num,
  Percentage,
  YearMonth,
} from './UnitList';
import PropTypes from 'prop-types';

import SimpleCalc from './SimpleCalc';
import SvgUnit from './SvgUnit';
import StringUnit from './StringUnit';
// All Unit Components together in <Unit type="Unitname" />

export const scaleLookup = {
  thousand: {
    pow: 1000,
    defaultmaximumFractionDigits: 2,
    default: { after: 'T' },
  },
  million: {
    pow: 1000000,
    defaultmaximumFractionDigits: 1,
    default: { after: 'M' },
  },
  billion: {
    pow: 1000000000,
    defaultmaximumFractionDigits: 2,
    default: { after: 'B' },
  },
};

export const currencyCalc = (
  props,
  after,
  before,
  afterSingular,
  isAbsolute
) => {
  const {
    children,
    input,
    output,
    maximumSignificantDigits,
    minimumFractionDigits,
    maximumFractionDigits,
    calcOnly,
    string,
    svg,
    hideZero,
  } = props;

  // Remove commas
  var value =
    typeof children === 'string' ? children.replace(/,/g, '') : children;

  // Parse as float
  value = parseFloat(value);

  // Input
  value =
    value !== 0 && input && scaleLookup[input]
      ? scaleLookup[input].pow * value
      : value;

  // output
  const outputCalc =
    output && scaleLookup[output] ? scaleLookup[output] : undefined;

  value = value !== 0 && output ? value / outputCalc.pow : value;

  const toLocalStringConfig = {
    //maximumSignificantDigits: maximumSignificantDigits,
    minimumFractionDigits:
      isAbsolute === true
        ? minimumFractionDigits === 0
        : maximumFractionDigits === 0
          ? 0
          : minimumFractionDigits
            ? minimumFractionDigits
            : outputCalc && outputCalc.defaultmaximumFractionDigits
              ? outputCalc.defaultmaximumFractionDigits
              : 2,
    maximumFractionDigits:
      isAbsolute === true
        ? maximumFractionDigits === 0
        : value <= 0.005
          ? 4
          : value <= 0.05
            ? 3
            : value <= 0.5
              ? 2
              : maximumFractionDigits === 0
                ? 0
                : maximumFractionDigits
                  ? maximumFractionDigits
                  : outputCalc && outputCalc.defaultmaximumFractionDigits
                    ? outputCalc.defaultmaximumFractionDigits
                    : 2,
  };

  // Convert to Locale String
  value = value.toLocaleString('en-EN', toLocalStringConfig);

  const calcObject = {
    value: value,
    before: before,
    after: after,
    output: outputCalc,
  };

  let className = props.className;
  if (value === '1' && afterSingular) {
    className = className + ' wfp--unit--singular';
  }

  if ((!value || value === 'NaN' || parseFloat(value) === 0) && hideZero)
    return false;
  else if (calcOnly) return calcObject;
  else if (svg) return SvgUnit(calcObject, props);
  else if (string) return StringUnit(calcObject, props);
  else if (value !== false) return <span className={className}>{value}</span>;
  else return <Invalid className={props.className} />;
};

export const percentageCalc = (props, after, before) => {
  const {
    calcOnly,
    children,
    from,
    string,
    svg,
    hideZero,
    maximumSignificantDigits,
    maximumFractionDigits,
  } = props;

  // Remove commas
  var value =
    typeof children === 'string' ? children.replace(/,/g, '') : children;

  // Parse as float
  value = parseFloat(value);

  if (parseFloat(from) === 0) {
    value = false;
  } else if (from) {
    value = value / parseFloat(from) * 100;
  }

  // Convert to Locale String
  value = value.toLocaleString('en-EN', {
    minimumFractionDigits: maximumSignificantDigits
      ? maximumSignificantDigits
      : 0,
    maximumSignificantDigits: maximumSignificantDigits,
    maximumFractionDigits:
      value <= 0.5 ? 5 : maximumFractionDigits ? maximumFractionDigits : 1,
  });

  const calcObject = {
    value: value,
    before: before,
    after: after,
    output: undefined,
  };
  if ((!value || value === 'NaN' || parseFloat(value) === 0) && hideZero)
    return false;
  else if (calcOnly) return calcObject;
  else if (svg) return SvgUnit(calcObject, props);
  else if (string) return StringUnit(calcObject, props);
  else if (value !== false)
    return <span className={props.className}>{value}</span>;
  else return <Invalid className={props.className} />;
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
  Trips,
  Countries,
  People,
  Percentage,
  YearMonth,
};

const Unit = props => {
  const { className, output, string, textAnchor, hideZero, setup } = props;
  const type = props.type ? props.type : 'None';
  const Unit = components[type];
  //const unitHideClass = setup && setup.hideUnit ? 'wfp--unit--hide' : '';
  const textAnchorCalc = textAnchor ? textAnchor : 'start';
  const unitClassName = props.type
    ? 'wfp--unit--' + props.type.toLowerCase()
    : '';

  const outputClassName =
    output && scaleLookup[output] ? 'wfp--unit--' + output : '';
  const setupClassName = setup ? 'wfp--unit--' + setup : '';
  const classNameCalc =
    'wfp--unit ' +
    className +
    ' ' +
    unitClassName +
    ' ' +
    /*   unitHideClass +
    ' ' +*/
    outputClassName +
    ' ' +
    setupClassName;

  if (string) {
    return Unit(props);
  }

  if (Unit === undefined) {
    console.warn(`The unit "${type}" is undefined`);
    return null;
  }

  return (
    <Unit {...props} className={classNameCalc} textAnchor={textAnchorCalc} />
  );
};

Unit.propTypes = {
  /**
    Width of Wrapper, use 'narrow' or leave empty `undefined`
  */

  from: PropTypes.string,
  minimumFractionDigits: PropTypes.number,
  maximumSignificantDigits: PropTypes.number,
  maximumFractionDigits: PropTypes.number,
  type: PropTypes.text,
};

Unit.defaultProps = {
  type: 'None',
};

export default Unit;
