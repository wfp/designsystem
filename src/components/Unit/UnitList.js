import React from 'react';
import { Invalid } from './InvalidUnit';
import {currencyCalc, svgUnit, simpleCalc} from './Unit'; 

// Generate USD
export const Usd = ( props ) => {
  return currencyCalc(props, 'USD');
};

// Generate Partners
export const People = ( props ) => {
  return currencyCalc(props, 'Partners', undefined, true);
};

// Generate Partners
export const Partners = ( props ) => {
  return currencyCalc(props, 'Partners', undefined, true);
};

// Generate MT
export const MT = ( props ) => {
  return currencyCalc(props, 'MT');
};

// Generate Beneficaries
export const Beneficaries = ( props ) => {
  return currencyCalc(props, 'MT', undefined, true);
};

// Generate Households
export const Households = ( props ) => {
  return currencyCalc(props, 'MT', undefined, true);
};

// Generate Households
export const Level = ( props ) => {
  return simpleCalc(props, '');
};

// Generate Countries
export const Countries = ( props ) => {
  return simpleCalc(props, '');
};

// Generate None
export const None = ( props ) => {
  return simpleCalc(props, '');
};

// Generate Percentage
export const Percentage = ( props ) => {
  return calcPercentage(props, '%');
};