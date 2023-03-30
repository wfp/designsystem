import React from 'react';
import styles from './styles.module.scss';

export default function Caption({ children }: any) {
  return <caption className={styles.caption}>{children}</caption>;
}
