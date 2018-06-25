import React from 'react';
import SvgUnit from './SvgUnit';

const MonthYearCalc = props => {
  const { children, setup } = props;

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
export const YearMonthCalc = props => {
  const { svg } = props;
  const value = MonthYearCalc(props);

  if (svg) {
    return SvgUnit({ value: value.monthName + ' ' + value.year }, props);
  }

  return (
    <span className={props.className}>
      {value.monthName} {value.year}
    </span>
  );
};

export default YearMonthCalc;
