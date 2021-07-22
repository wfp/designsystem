"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.YearMonthCalc = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgUnit = _interopRequireDefault(require("./SvgUnit"));

var _StringUnit = _interopRequireDefault(require("./StringUnit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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


var YearMonthCalc = function YearMonthCalc(props) {
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
  if (calcOnly) return calcObject;else if (svg) return (0, _SvgUnit.default)(calcObject, props);else if (string) return (0, _StringUnit.default)(calcObject, props);else if (calcObject !== false) return /*#__PURE__*/_react.default.createElement("span", {
    className: className
  }, calcObject.value);
};

exports.YearMonthCalc = YearMonthCalc;
var _default = YearMonthCalc;
exports.default = _default;