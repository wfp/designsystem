import * as React from 'react';

const MyComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props}>
    <path
      style={{
        stroke: 'red',
        fill: '#00f',
      }}
      d="M10 10h100v100H10z"
    />
  </svg>
);

export default MyComponent;
