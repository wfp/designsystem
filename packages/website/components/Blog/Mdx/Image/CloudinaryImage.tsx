import React from 'react';
import styles from './image.module.scss';
import Caption from '../Caption';
import Lightbox from './Lightbox';

export default function Image(props: any) {
  return (
    <div className={styles.mediaWrapper}>
      <Lightbox {...props} />
      {props.title && <Caption>{props.title}</Caption>}
    </div>
  );
}
