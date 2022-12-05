import React from 'react';
import { ColourLists } from './ColourList';
import styles from './styles.module.scss';

export default function Caption({ children }) {
  return <ColourLists filter="brand" />;
}
