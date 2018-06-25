import React from 'react';

const SvgUnit = (value, props) => {
  console.log(props);
  const { className, style, type, ...other } = props;

  if (value)
    return (
      <text className={props.className} {...other}>
        <tspan style={style}>{value.before} </tspan>
        <tspan style={style}>{value.value}</tspan>
        <tspan style={style}>
          {' '}
          {value.extension ? value.extension.default.after + '' : ''}
          {value.after}
        </tspan>
      </text>
    );
  else return <InvalidSvg className={props.className} />;
};

export default SvgUnit;
