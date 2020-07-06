import React from 'react';
import { Button } from './Blubb';
export default { title: ' Blubb', component: Button };

export const Basic = () => <Button label="hello" />;

export const BasicB = (args) => {
  console.log({ args });
  return <Button label="hello" />;
};
