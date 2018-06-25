import React from 'react';
import SvgUnit from './SvgUnit';

const SimpleCalc = (props, after, before) => {
  const { className, children, svg, hideUnit } = props;

  // Remove commas
  var value = children;

  const afterCalc = after ? after : '';

  const unit = hideUnit ? '' : before + children + afterCalc;

  if (svg)
    return SvgUnit(
      { value: value + unit, before: before, after: after },
      props
    );
  else if (value !== false) return <span className={className}>{value}</span>;
};

export default SimpleCalc;
