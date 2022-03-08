import React from 'react';
import SvgUnit from './SvgUnit';
import StringUnit from './StringUnit';

const YearMonthGen = (props) => {
  const { children } = props;

  let value = children;

  var newDate;
  /* Generate Date from Date */
  if (typeof value === 'number' && value.length >= 7) {
    newDate = new Date(value, props);
  } else if (value.getMonth) {
    /* Use Date Object */
    newDate = value;
  } else {
    /* Generate Date from String YYYYMM */
    const year = value.toString().substring(0, 4);
    const month = parseInt(value.toString().substring(4, 7), 10) - 1;
    newDate = new Date(year, month, 1);
  }
  const monthName = newDate.toLocaleString('en-us', { month: 'short' });
  const monthNameFull = newDate.toLocaleString('en-us', { month: 'long' });
  return {
    monthName: monthName,
    monthNameFull: monthNameFull,
    year: newDate.getFullYear(),
    date: newDate,
  };
};

/*const MonthYearCalcDate = ( value, showZero, showUnit ) => {
  const year = value.toString().substring(0, 4);
  const month = parseInt(value.toString().substring(4, 7), 10) - 1;
  const newDate = new Date(year, month, 1);
  return newDate
}*/

// Format YYYYMM / from 201709  => Sep 2017
export const YearMonthCalc = (props) => {
  const { className, string, svg, calcOnly } = props;
  const YearMonthgenerated = YearMonthGen(props);

  const calcObject = {
    value: YearMonthgenerated.monthName + ' ' + YearMonthgenerated.year,
    before: '',
    after: '',
    output: undefined,
  };

  if (calcOnly) return calcObject;
  else if (svg) return SvgUnit(calcObject, props);
  else if (string) return StringUnit(calcObject, props);
  else if (calcObject !== false)
    return <span className={className}>{calcObject.value}</span>;
};

export default YearMonthCalc;
