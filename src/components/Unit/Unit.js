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
    default: { after: 'T' },
  },
  million: {
    pow: 1000000,
    default: { after: 'M' },
  },
  billion: {
    pow: 1000000000,
    default: { after: 'B' },
  },
};

export const currencyCalc = (props, after, before, exact, afterSingular) => {
  const { children, setup } = props;

  // Remove commas
  var value =
    typeof children === 'string' ? children.replace(',', '') : children;

  // Parse as float
  value = parseFloat(value);

  // Input
  value =
    value !== 0 && setup.input && scaleLookup[setup.input]
      ? scaleLookup[setup.input].pow * value
      : value;

  // Extension
  const extension =
    setup.extension && scaleLookup[setup.extension]
      ? scaleLookup[setup.extension]
      : undefined;

  value = value !== 0 && extension ? value / extension.pow : value;

  // Convert to Locale String
  value = value.toLocaleString('en-EN', {
    minimumFractionDigits: exact
      ? 0
      : setup.maximumSignificantDigits
        ? setup.maximumSignificantDigits
        : 2,
    maximumSignificantDigits: setup.maximumSignificantDigits,
    maximumFractionDigits: exact
      ? 0
      : value <= 0.5
        ? 5
        : setup.maximumFractionDigits
          ? setup.maximumFractionDigits
          : 2,
  });

  const calcObject = {
    value: value,
    before: before,
    after: after,
    extension: extension,
  };

  let className = props.className;
  if (value === '1' && afterSingular) {
    className = className + ' wfp--unit--singular';
  }

  if ((!value || value === 'NaN' || parseFloat(value) === 0) && setup.showZero)
    return false;
  else if (setup.calcOnly) return calcObject;
  else if (setup.svg) return SvgUnit(calcObject, props);
  else if (value !== false) return <span className={className}>{value}</span>;
  else return <Invalid className={props.className} />;
};


export const percentageCalc = (props, after, before) => {
  const { children, setup } = props;

  // Remove commas
  var value =
    typeof children === 'string' ? children.replace(',', '') : children;

  // Parse as float
  value = parseFloat(value);

  if (parseFloat(setup.from) === 0) {
    value = false;
  } else if (setup.from) {
    value = (value / parseFloat(setup.from)) * 100;
  }

  // Convert to Locale String
  value = value.toLocaleString('en-EN', {
    minimumFractionDigits: setup.maximumSignificantDigits
      ? setup.maximumSignificantDigits
      : 0,
    maximumSignificantDigits: setup.maximumSignificantDigits,
    maximumFractionDigits:
      value <= 0.5
        ? 5
        : setup.maximumFractionDigits
          ? setup.maximumFractionDigits
          : 1,
  });

  const calcObject = {
    value: value,
    before: before,
    after: after,
    extension: undefined,
  };
  if ((!value || value === 'NaN' || parseFloat(value) === 0) && setup.showZero)
    return false;
  else if (setup.calcOnly) return calcObject;
  else if (setup.svg) return SvgUnit(calcObject, props);
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
  const { setup } = props;
  const type = props.type ? props.type : 'None';
  const Unit = components[type];
  const unitHideClass = setup && setup.hideUnit ? 'wfp--unit--hide' : '';
  const textAnchor = setup && setup.textAnchor ? props.textAnchor : 'start';
  const unitClassName = props.type
    ? 'wfp--unit--' + props.type.toLowerCase()
    : '';

  const extensionClassName =
    setup && setup.extension && scaleLookup[setup.extension]
      ? 'wfp--unit--' + setup.extension
      : '';
  const styleClassName =
    setup && setup.style ? 'wfp--unit--' + setup.style : '';
  const className =
    'wfp--unit ' +
    props.className +
    ' ' +
    unitClassName +
    ' ' +
    unitHideClass +
    ' ' +
    extensionClassName +
    ' ' +
    styleClassName;

  if (Unit === undefined) {
    console.warn(`The unit "${type}" is undefined`);
    return null;
  }

  return <Unit {...props} className={className} textAnchor={textAnchor} />;
};

Unit.propTypes = {
  /**
    Width of Wrapper, use 'narrow' or leave empty `undefined`
  */
  setup: PropTypes.shape({
    from: PropTypes.string,
    minimumFractionDigits: PropTypes.number,
    maximumSignificantDigits: PropTypes.number,
    maximumFractionDigits: PropTypes.number,
  }),
  type: PropTypes.text,
};

Unit.defaultProps = {
  setup: {},
};

export default Unit;
