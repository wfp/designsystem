import React from 'react';
import SvgUnit from './SvgUnit';
import StringUnit from './StringUnit';

var YearMonthGen = function YearMonthGen(props) {
  var children = props.children;
  var value = children;
  var newDate;
  /* Generate Date from Date */

  if (typeof value === 'number' && value.length >= 7) {
    newDate = new Date(value, props);
  } else if (value.getMonth) {
    /* Use Date Object */
    newDate = value;
  } else {
    /* Generate Date from String YYYYMM */
    var year = value.toString().substring(0, 4);
    var month = parseInt(value.toString().substring(4, 7), 10) - 1;
    newDate = new Date(year, month, 1);
  }

  var monthName = newDate.toLocaleString('en-us', {
    month: 'short'
  });
  var monthNameFull = newDate.toLocaleString('en-us', {
    month: 'long'
  });
  return {
    monthName: monthName,
    monthNameFull: monthNameFull,
    year: newDate.getFullYear(),
    date: newDate
  };
};
/*const MonthYearCalcDate = ( value, showZero, showUnit ) => {
  const year = value.toString().substring(0, 4);
  const month = parseInt(value.toString().substring(4, 7), 10) - 1;
  const newDate = new Date(year, month, 1);
  return newDate
}*/
// Format YYYYMM / from 201709  => Sep 2017


export var YearMonthCalc = function YearMonthCalc(props) {
  var className = props.className,
      string = props.string,
      svg = props.svg,
      calcOnly = props.calcOnly;
  var YearMonthgenerated = YearMonthGen(props);
  var calcObject = {
    value: YearMonthgenerated.monthName + ' ' + YearMonthgenerated.year,
    before: '',
    after: '',
    output: undefined
  };
  if (calcOnly) return calcObject;else if (svg) return SvgUnit(calcObject, props);else if (string) return StringUnit(calcObject, props);else if (calcObject !== false) return /*#__PURE__*/React.createElement("span", {
    className: className
  }, calcObject.value);
};
export default YearMonthCalc;