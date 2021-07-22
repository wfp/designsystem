import React from 'react';
import scaleLookup from './scaleLookup';
import { Invalid } from './InvalidUnit';
import StringUnit from './StringUnit';
import SvgUnit from './SvgUnit';
export var currencyCalc = function currencyCalc(props, after, before, afterSingular, isAbsolute) {
  var children = props.children,
      input = props.input,
      output = props.output,
      minimumFractionDigits = props.minimumFractionDigits,
      maximumFractionDigits = props.maximumFractionDigits,
      _props$localeStringLa = props.localeStringLanguage,
      localeStringLanguage = _props$localeStringLa === void 0 ? 'en-EN' : _props$localeStringLa,
      calcOnly = props.calcOnly,
      string = props.string,
      svg = props.svg,
      hideZero = props.hideZero; // Remove commas

  var value = typeof children === 'string' ? children.replace(/,/g, '') : children; // Parse as float

  value = parseFloat(value); // Input

  value = value !== 0 && input && scaleLookup[input] ? scaleLookup[input].pow * value : value; // output

  var outputCalc = output && scaleLookup[output] ? scaleLookup[output] : undefined;
  value = value !== 0 && output ? value / outputCalc.pow : value;
  var minimumFractionDigitsCalculated = isAbsolute === true && output === undefined ? minimumFractionDigits === 0 :
  /*: maximumFractionDigits === 0
  ? 0*/
  typeof minimumFractionDigits === 'number' ? minimumFractionDigits : outputCalc && outputCalc.defaultmaximumFractionDigits ? outputCalc.defaultmaximumFractionDigits : 2;
  var maximumFractionDigitsCalculated = isAbsolute === true && output === undefined ? maximumFractionDigits === 0 : value <= 0.005 ? 4 : value <= 0.05 ? 3 : value <= 0.5 ? 2 : maximumFractionDigits === 0 ? 0 : typeof maximumFractionDigits === 'number' ? maximumFractionDigits : outputCalc && outputCalc.defaultmaximumFractionDigits ? outputCalc.defaultmaximumFractionDigits : 2;
  var toLocalStringConfig = {
    //maximumSignificantDigits: maximumSignificantDigits,
    minimumFractionDigits: minimumFractionDigitsCalculated,
    maximumFractionDigits: maximumFractionDigitsCalculated > minimumFractionDigitsCalculated ? maximumFractionDigitsCalculated : minimumFractionDigitsCalculated
  }; // Convert to Locale String

  value = value.toLocaleString(localeStringLanguage, toLocalStringConfig);
  var calcObject = {
    value: value,
    before: before,
    after: after,
    output: outputCalc
  };
  var className = props.className;

  if (value === '1' && afterSingular) {
    className = className + ' wfp--unit--singular';
  }

  if ((!value || value === 'NaN' || parseFloat(value) === 0) && hideZero) return false;else if (calcOnly) return calcObject;else if (svg) return SvgUnit(calcObject, props);else if (string) return StringUnit(calcObject, props);else if (value !== false) return /*#__PURE__*/React.createElement("span", {
    className: className
  }, value);else return /*#__PURE__*/React.createElement(Invalid, {
    className: props.className
  });
};
export default currencyCalc;