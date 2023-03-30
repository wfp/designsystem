import React from 'react';
import styles from './styles.module.scss';

export default function Wrapper({ children }: any) {
  return <div className={styles.wrapper}>{children}</div>;
}
