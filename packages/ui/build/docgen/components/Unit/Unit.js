"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _scaleLookup = _interopRequireDefault(require("./scaleLookup"));

var _UnitList = require("./UnitList");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var prefix = _settings.default.prefix; // All Unit Components together in <Unit type="Unitname" />

var components = {
  Usd: _UnitList.Usd,
  Partners: _UnitList.Partners,
  Beneficiaries: _UnitList.Beneficiaries,
  Households: _UnitList.Households,
  Months: _UnitList.Months,
  Mt: _UnitList.Mt,
  Kg: _UnitList.Kg,
  MetricTons: _UnitList.MetricTons,
  Num: _UnitList.Num,
  Level: _UnitList.Level,
  None: _UnitList.None,
  Trips: _UnitList.Trips,
  Countries: _UnitList.Countries,
  People: _UnitList.People,
  Percentage: _UnitList.Percentage,
  YearMonth: _UnitList.YearMonth
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
  var outputClassName = output && _scaleLookup.default[output] ? "".concat(prefix, "--unit--").concat(output) : '';
  var setupClassName = setup ? "".concat(prefix, "--unit--").concat(setup) : '';
  var classNameCalc = "".concat(prefix, "--unit ").concat(className, " ").concat(unitClassName, " ").concat(outputClassName, " ").concat(setupClassName);

  if (string) {
    return Unit(props);
  }

  if (Unit === undefined) {
    //  console.warn(`The unit "${type}" is undefined`); 
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(Unit, _extends({}, props, {
    className: classNameCalc,
    textAnchor: textAnchorCalc
  }));
};

Unit.propTypes = {
  /**
    The value which should be displayed
  */
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
    Only used for type Percentage will divide value/from string, float
  */
  from: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
    Hide the Unit if it's value is zero.
  */
  hideEmpty: _propTypes.default.bool,

  /**
    The minimum number of fraction digits to use. Possible values are from 0 to 20. Only used on numeric types 
  */
  minimumFractionDigits: _propTypes.default.number,

  /**
    A value between 1-21, The maximum number of significant digits to use. Possible values are from 1 to 21; the default is minimumSignificantDigits.
  */
  maximumSignificantDigits: _propTypes.default.number,

  /**
    A value between 1-21, The minimum number of fraction digits to use. Possible values are from 0 to 20. Only used on numeric types 
  */
  maximumFractionDigits: _propTypes.default.number,

  /**
   * A string with a BCP 47 language code, or an array of language codes. For the general form and interpretation of the locale argument see the [toLocaleString on developer.mozilla.org](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) page.
   */
  locale: _propTypes.default.string,

  /**
    Render output as svg text 
  */
  svg: _propTypes.default.bool,

  /**
    The unit type  */
  type: _propTypes.default.oneOf(['none', 'usd', 'partners', 'beneficiaries', 'households', 'months', 'mt', 'metricTons', 'kg', 'num', 'yearMonth', 'level', 'people', 'countries', 'percentage'])
};
Unit.defaultProps = {
  type: 'none',
  svg: false,
  localeStringLanguage: 'en-EN'
};
var _default = Unit;
exports.default = _default;