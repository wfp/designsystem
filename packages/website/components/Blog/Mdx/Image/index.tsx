import React from 'react';
import styles from './image.module.scss';
import Caption from '../Caption';
import Lightbox from './Lightbox';

export default function Image(props: any) {
  if (props.disableLightbox) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  }

  return (
    <div className={styles.mediaWrapper}>
      <Lightbox {...props} /*src={src} */ />
      {props.title && <Caption>{props.title}</Caption>}
    </div>
  );
}
