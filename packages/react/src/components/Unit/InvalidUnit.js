import React from 'react';

// For invalid Values
export const Invalid = props => {
  return <span className={props.className + ' invalid'}>–</span>;
};

// For invalid Values
export const InvalidSvg = props => {
  return <tspan className={props.className + ' invalid'}>–</tspan>;
};
