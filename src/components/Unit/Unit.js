import React from 'react';
import scaleLookup from './scaleLookup';

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
// All Unit Components together in <Unit type="Unitname" />

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

/** The Unit component method returns a component with a language and unit sensitive representation of this number based on [Numbers and Unit from the Editorial Guidelines](https://cdn.wfp.org/guides/editorial/content/numbers-and-units/) the [Numbers and Units Reference on developer.mozilla.org](http://cdn.wfp.org/guides/editorial/content/numbers-and-units). */

const Unit = (props) => {
  const { className, output, string, textAnchor, setup } = props;
  const type = props.type
    ? props.type.charAt(0).toUpperCase() + props.type.slice(1)
    : 'None';
  const Unit = components[type];
  //const unitHideClass = setup && setup.hideUnit ? 'wfp--unit--hide' : '';
  const textAnchorCalc = textAnchor ? textAnchor : 'start';
  const unitClassName = type ? 'wfp--unit--' + type.toLowerCase() : '';

  const outputClassName =
    output && scaleLookup[output] ? 'wfp--unit--' + output : '';
  const setupClassName = setup ? 'wfp--unit--' + setup : '';
  const classNameCalc =
    'wfp--unit ' +
    className +
    ' ' +
    unitClassName +
    ' ' +
    outputClassName +
    ' ' +
    setupClassName;

  if (string) {
    return Unit(props);
  }

  if (Unit === undefined) {
    /* console.warn(`The unit "${type}" is undefined`); */
    return null;
  }

  return (
    <Unit {...props} className={classNameCalc} textAnchor={textAnchorCalc} />
  );
};

Unit.propTypes = {
  /**
    The value which should be displayed
  */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
    Only used for type Percentage will divide value/from string, float
  */
  from: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
    Hide the Unit if it's value is zero.
  */
  hideEmpty: PropTypes.bool,
  /**
    The minimum number of fraction digits to use. Possible values are from 0 to 20. Only used on numeric types 
  */
  minimumFractionDigits: PropTypes.number,
  /**
    A value between 1-21, The maximum number of significant digits to use. Possible values are from 1 to 21; the default is minimumSignificantDigits.
  */
  maximumSignificantDigits: PropTypes.number,
  /**
    A value between 1-21, The minimum number of fraction digits to use. Possible values are from 0 to 20. Only used on numeric types 
  */
  maximumFractionDigits: PropTypes.number,
  /**
    Render output as svg text 
  */
  svg: PropTypes.bool,
  /**
    The unit type  */
  type: PropTypes.oneOf([
    undefined,
    'none',
    'narrow',
    'usd',
    'partners',
    'beneficiaries',
    'households',
    'months',
    'mt',
    'metricTons',
    'kg',
    'num',
    'yearMonth',
    'level',
    'people',
    'countries',
    'percentage',
  ]),
};

Unit.defaultProps = {
  type: 'none',
  svg: false,
};

export default Unit;
