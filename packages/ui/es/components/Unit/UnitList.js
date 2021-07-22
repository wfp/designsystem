import currencyCalc from './currencyCalc';
import percentageCalc from './percentageCalc';
import SimpleCalc from './SimpleCalc';
import YearMonthCalc from './YearMonthCalc'; // Generate USD

export var Usd = function Usd(props) {
  return currencyCalc(props, '', 'US$');
}; // Generate People

export var People = function People(props) {
  return currencyCalc(props, 'People', undefined, true, true);
}; // Generate Partners

export var Partners = function Partners(props) {
  return currencyCalc(props, 'Partners', undefined, true, true);
}; // Generate MT

export var Mt = function Mt(props) {
  return currencyCalc(props, 'MT', undefined, true);
}; // Generate MetricTons

export var MetricTons = function MetricTons(props) {
  return currencyCalc(props, 'MetricTons', undefined, true);
}; // Generate Months

export var Months = function Months(props) {
  return currencyCalc(props, 'Months', undefined, true, 'Month');
}; // Generate Num

export var Num = function Num(props) {
  return currencyCalc(props, '');
}; // Generate Beneficiaries

export var Beneficiaries = function Beneficiaries(props) {
  return currencyCalc(props, 'Beneficaries', undefined, true, true);
}; // Generate Households

export var Households = function Households(props) {
  return currencyCalc(props, 'Households', undefined, true, true);
}; // Generate Trips

export var Trips = function Trips(props) {
  return currencyCalc(props, 'Trips', undefined, true, true);
}; // Generate kg

export var Kg = function Kg(props) {
  return SimpleCalc(props, 'kg');
}; // Generate Households

export var Level = function Level(props) {
  return SimpleCalc(props, '');
}; // Generate Countries

export var Countries = function Countries(props) {
  return SimpleCalc(props, 'Countries');
}; // Generate None

export var None = function None(props) {
  return SimpleCalc(props, '');
}; // Generate Percentage

export var Percentage = function Percentage(props) {
  return percentageCalc(props, '%');
}; // Generate YearMonth

export var YearMonth = function YearMonth(props) {
  return YearMonthCalc(props);
};