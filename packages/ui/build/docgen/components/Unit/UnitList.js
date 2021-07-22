"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearMonth = exports.Percentage = exports.None = exports.Countries = exports.Level = exports.Kg = exports.Trips = exports.Households = exports.Beneficiaries = exports.Num = exports.Months = exports.MetricTons = exports.Mt = exports.Partners = exports.People = exports.Usd = void 0;

var _currencyCalc = _interopRequireDefault(require("./currencyCalc"));

var _percentageCalc = _interopRequireDefault(require("./percentageCalc"));

var _SimpleCalc = _interopRequireDefault(require("./SimpleCalc"));

var _YearMonthCalc = _interopRequireDefault(require("./YearMonthCalc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Generate USD
var Usd = function Usd(props) {
  return (0, _currencyCalc.default)(props, '', 'US$');
}; // Generate People


exports.Usd = Usd;

var People = function People(props) {
  return (0, _currencyCalc.default)(props, 'People', undefined, true, true);
}; // Generate Partners


exports.People = People;

var Partners = function Partners(props) {
  return (0, _currencyCalc.default)(props, 'Partners', undefined, true, true);
}; // Generate MT


exports.Partners = Partners;

var Mt = function Mt(props) {
  return (0, _currencyCalc.default)(props, 'MT', undefined, true);
}; // Generate MetricTons


exports.Mt = Mt;

var MetricTons = function MetricTons(props) {
  return (0, _currencyCalc.default)(props, 'MetricTons', undefined, true);
}; // Generate Months


exports.MetricTons = MetricTons;

var Months = function Months(props) {
  return (0, _currencyCalc.default)(props, 'Months', undefined, true, 'Month');
}; // Generate Num


exports.Months = Months;

var Num = function Num(props) {
  return (0, _currencyCalc.default)(props, '');
}; // Generate Beneficiaries


exports.Num = Num;

var Beneficiaries = function Beneficiaries(props) {
  return (0, _currencyCalc.default)(props, 'Beneficaries', undefined, true, true);
}; // Generate Households


exports.Beneficiaries = Beneficiaries;

var Households = function Households(props) {
  return (0, _currencyCalc.default)(props, 'Households', undefined, true, true);
}; // Generate Trips


exports.Households = Households;

var Trips = function Trips(props) {
  return (0, _currencyCalc.default)(props, 'Trips', undefined, true, true);
}; // Generate kg


exports.Trips = Trips;

var Kg = function Kg(props) {
  return (0, _SimpleCalc.default)(props, 'kg');
}; // Generate Households


exports.Kg = Kg;

var Level = function Level(props) {
  return (0, _SimpleCalc.default)(props, '');
}; // Generate Countries


exports.Level = Level;

var Countries = function Countries(props) {
  return (0, _SimpleCalc.default)(props, 'Countries');
}; // Generate None


exports.Countries = Countries;

var None = function None(props) {
  return (0, _SimpleCalc.default)(props, '');
}; // Generate Percentage


exports.None = None;

var Percentage = function Percentage(props) {
  return (0, _percentageCalc.default)(props, '%');
}; // Generate YearMonth


exports.Percentage = Percentage;

var YearMonth = function YearMonth(props) {
  return (0, _YearMonthCalc.default)(props);
};

exports.YearMonth = YearMonth;