import * as React from 'react';
import SvgUnit from './SvgUnit';
import StringUnit from './StringUnit';

const SimpleCalc = (props, after, before) => {
  const { calcOnly, className, children, string, svg, hideUnit } = props;

  // Remove commas
  var value = children;

  const afterCalc = after ? after : '';

  const unit = hideUnit ? '' : before + children + afterCalc;

  const calcObject = {
    value: value,
    before: before,
    after: after,
    output: value + unit,
  };

  if (calcOnly) return calcObject;
  else if (svg)
    return SvgUnit(
      { value: value + unit, before: before, after: after },
      props
    );
  else if (string) return StringUnit(calcObject, props);
  else if (value !== false) return <span className={className}>{value}</span>;
};

export default SimpleCalc;
