import React from 'react';
import { Invalid } from './InvalidUnit';
import { currencyCalc, percentageCalc, svgUnit } from './Unit';
import SimpleCalc from './SimpleCalc';
import YearMonthCalc from './YearMonthCalc';
//import {SimpleCalc} from './SimpleCalc';

// Generate USD
export const Usd = props => {
  return currencyCalc(props, '', 'US$');
};

// Generate Partners
export const People = props => {
  return currencyCalc(props, 'Partners', undefined, true);
};

// Generate Partners
export const Partners = props => {
  return currencyCalc(props, 'Partners', undefined, true);
};

// Generate MT
export const Mt = props => {
  return currencyCalc(props, 'MT', undefined, true);
};

// Generate MT
export const Months = props => {
  return currencyCalc(props, 'Months', undefined, true, 'Month');
};

// Generate MT
export const Num = props => {
  return currencyCalc(props, '');
};

// Generate Beneficiaries
export const Beneficiaries = props => {
  return currencyCalc(props, 'Beneficaries', undefined, true);
};

// Generate Households
export const Households = props => {
  return currencyCalc(props, 'Households', undefined, true);
};

// Generate Trips
export const Trips = props => {
  return currencyCalc(props, 'Trips', undefined, true);
};

// Generate Households
export const Level = props => {
  return SimpleCalc(props, '');
};

// Generate Countries
export const Countries = props => {
  return SimpleCalc(props, 'Countries');
};

// Generate None
export const None = props => {
  return SimpleCalc(props, '');
};

// Generate Percentage
export const Percentage = props => {
  return percentageCalc(props, '%');
};

// Generate YearMonth
export const YearMonth = props => {
  return YearMonthCalc(props);
};
