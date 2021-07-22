function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import scaleLookup from './scaleLookup';
import { Countries, Usd, Partners, Beneficiaries, Households, People, Months, Level, Mt, Kg, MetricTons, Trips, None, Num, Percentage, YearMonth } from './UnitList';
import PropTypes from 'prop-types';
import settings from '../../globals/js/settings';
var prefix = settings.prefix; // All Unit Components together in <Unit type="Unitname" />

var components = {
  Usd: Usd,
  Partners: Partners,
  Beneficiaries: Beneficiaries,
  Households: Households,
  Months: Months,
  Mt: Mt,
  Kg: Kg,
  MetricTons: MetricTons,
  Num: Num,
  Level: Level,
  None: None,
  Trips: Trips,
  Countries: Countries,
  People: People,
  Percentage: Percentage,
  YearMonth: YearMonth
};
/** The Unit component method returns a component with a language and unit sensitive representation of this number based on [Numbers and Unit from the Editorial Guidelines](https://cdn.wfp.org/guides/editorial/content/numbers-and-units/) the [Numbers and Units Reference on developer.mozilla.org](http://cdn.wfp.org/guides/editorial/content/numbers-and-units). */

var Unit = function Unit(props) {
  var className = props.className,
      output = props.output,
      string = props.string,
      textAnchor = props.textAnchor,
      setup = props.setup;
  var type = props.type ? props.type.charAt(0).toUpperCase() + props.type.slice(1) : 'None';
  var Unit = components[type]; //const unitHideClass = setup && setup.hideUnit ? 'wfp--unit--hide' : '';

  var textAnchorCalc = textAnchor ? textAnchor : 'start';
  var unitClassName = type ? "".concat(prefix, "--unit--").concat(type.toLowerCase()) : '';
  var outputClassName = output && scaleLookup[output] ? "".concat(prefix, "--unit--").concat(output) : '';
  var setupClassName = setup ? "".concat(prefix, "--unit--").concat(setup) : '';
  var classNameCalc = "".concat(prefix, "--unit ").concat(className, " ").concat(unitClassName, " ").concat(outputClassName, " ").concat(setupClassName);

  if (string) {
    return Unit(props);
  }

  if (Unit === undefined) {
    //  console.warn(`The unit "${type}" is undefined`); 
    return null;
  }

  return /*#__PURE__*/React.createElement(Unit, _extends({}, props, {
    className: classNameCalc,
    textAnchor: textAnchorCalc
  }));
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
   * A string with a BCP 47 language code, or an array of language codes. For the general form and interpretation of the locale argument see the [toLocaleString on developer.mozilla.org](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) page.
   */
  locale: PropTypes.string,

  /**
    Render output as svg text 
  */
  svg: PropTypes.bool,

  /**
    The unit type  */
  type: PropTypes.oneOf(['none', 'usd', 'partners', 'beneficiaries', 'households', 'months', 'mt', 'metricTons', 'kg', 'num', 'yearMonth', 'level', 'people', 'countries', 'percentage'])
};
Unit.defaultProps = {
  type: 'none',
  svg: false,
  localeStringLanguage: 'en-EN'
};
export default Unit;