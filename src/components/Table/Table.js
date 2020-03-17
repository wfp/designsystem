import React from 'react';

export default function Table(props) {
  const { children, ...other } = props;
  return <table {...other}>{children}</table>;
}
