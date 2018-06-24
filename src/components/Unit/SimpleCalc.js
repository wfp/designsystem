import React from 'react';
import SvgUnit from './SvgUnit';

const SimpleCalc = (props, after, before) => {
  const { children, setup } = props;

  // Remove commas
  var value = children;

  const unit = setup.showUnit ? `{$before}{$children}{$after}` : '';

  if (setup.svg)
    return SvgUnit(
      { value: value + unit, before: before, after: after },
      props
    );
  else if (value !== false)
    return <span className={props.className}>{value}</span>;
};

export default SimpleCalc;
