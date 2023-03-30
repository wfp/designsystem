import React from 'react';
import styles from './image.module.scss';
import Caption from '../Caption';
import Lightbox from './Lightbox';
import { Cloudinary } from 'cloudinary-core';
import { mediaResize } from '../../../../lib/cloudinaryHelper';

export default function Image(props) {
  const { id } = props;

  return (
    <div className={styles.mediaWrapper}>
      <Lightbox {...props} />
      {props.title && <Caption>{props.title}</Caption>}
    </div>
  );
}
