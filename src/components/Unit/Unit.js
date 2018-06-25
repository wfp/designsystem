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

export const currencyCalc = (props, after, before, exact, afterSingular) => {
  const {
    children,
    input,
    extension,
    maximumSignificantDigits,
    maximumFractionDigits,
    calcOnly,
    svg,
    hideZero,
  } = props;

  // Remove commas
  var value =
    typeof children === 'string' ? children.replace(',', '') : children;

  // Parse as float
  value = parseFloat(value);

  // Input
  value =
    value !== 0 && input && scaleLookup[input]
      ? scaleLookup[input].pow * value
      : value;

  // Extension
  const extensionCalc =
    extension && scaleLookup[extension] ? scaleLookup[extension] : undefined;

  value = value !== 0 && extension ? value / extensionCalc.pow : value;

  // Convert to Locale String
  value = value.toLocaleString('en-EN', {
    minimumFractionDigits: exact
      ? 0
      : maximumSignificantDigits
        ? maximumSignificantDigits
        : extensionCalc && extensionCalc.defaultmaximumFractionDigits
          ? extensionCalc.defaultmaximumFractionDigits
          : 2,
    maximumSignificantDigits: maximumSignificantDigits,
    maximumFractionDigits: exact
      ? 0
      : value <= 0.5
        ? 5
        : maximumFractionDigits
          ? maximumFractionDigits
          : extensionCalc && extensionCalc.defaultmaximumFractionDigits
            ? extensionCalc.defaultmaximumFractionDigits
            : 2,
  });

  const calcObject = {
    value: value,
    before: before,
    after: after,
    extension: extensionCalc,
  };

  let className = props.className;
  if (value === '1' && afterSingular) {
    className = className + ' wfp--unit--singular';
  }

  if ((!value || value === 'NaN' || parseFloat(value) === 0) && hideZero)
    return false;
  else if (calcOnly) return calcObject;
  else if (svg) return SvgUnit(calcObject, props);
  else if (value !== false) return <span className={className}>{value}</span>;
  else return <Invalid className={props.className} />;
};

export const percentageCalc = (props, after, before) => {
  const {
    calcOnly,
    children,
    from,
    svg,
    hideZero,
    maximumSignificantDigits,
    maximumFractionDigits,
  } = props;

  // Remove commas
  var value =
    typeof children === 'string' ? children.replace(',', '') : children;

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
    extension: undefined,
  };
  if ((!value || value === 'NaN' || parseFloat(value) === 0) && hideZero)
    return false;
  else if (calcOnly) return calcObject;
  else if (svg) return SvgUnit(calcObject, props);
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
  const { className, extension, textAnchor, hideZero, setup } = props;
  const type = props.type ? props.type : 'None';
  const Unit = components[type];
  //const unitHideClass = setup && setup.hideUnit ? 'wfp--unit--hide' : '';
  const textAnchorCalc = textAnchor ? textAnchor : 'start';
  const unitClassName = props.type
    ? 'wfp--unit--' + props.type.toLowerCase()
    : '';

  const extensionClassName =
    extension && scaleLookup[extension] ? 'wfp--unit--' + extension : '';
  const setupClassName = setup ? 'wfp--unit--' + setup : '';
  const classNameCalc =
    'wfp--unit ' +
    className +
    ' ' +
    unitClassName +
    ' ' +
    /*   unitHideClass +
    ' ' +*/
    extensionClassName +
    ' ' +
    setupClassName;

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
