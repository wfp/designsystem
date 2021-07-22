import React from 'react';
import SvgUnit from './SvgUnit';
import StringUnit from './StringUnit';

var SimpleCalc = function SimpleCalc(props, after, before) {
  var calcOnly = props.calcOnly,
      className = props.className,
      children = props.children,
      string = props.string,
      svg = props.svg,
      hideUnit = props.hideUnit; // Remove commas

  var value = children;
  var afterCalc = after ? after : '';
  var unit = hideUnit ? '' : before + children + afterCalc;
  var calcObject = {
    value: value,
    before: before,
    after: after,
    output: value + unit
  };
  if (calcOnly) return calcObject;else if (svg) return SvgUnit({
    value: value + unit,
    before: before,
    after: after
  }, props);else if (string) return StringUnit(calcObject, props);else if (value !== false) return /*#__PURE__*/React.createElement("span", {
    className: className
  }, value);
};

export default SimpleCalc;