import React from 'react';
import styles from './image.module.scss';
import Caption from '../Caption';
import Lightbox from './Lightbox';

export default function Image(props) {
  if (props.disableLightbox) {
    return <img {...props} />;
  }

  const src = require(`../../../../_posts/${props.src}`);

  return (
    <span className={styles.mediaWrapper}>
      <Lightbox {...props} src={src} />
      {props.title && <Caption>{props.title}</Caption>}
    </span>
  );
}
