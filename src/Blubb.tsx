import React from 'react';
interface ButtonProps {
  /** The main label of the button */
  label?: string;
}
export const Button = ({ label = 'FIXME' }: ButtonProps) => (
  <button>{label}</button>
);
