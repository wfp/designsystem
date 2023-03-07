import React from 'react';
import styles from './figma.module.scss';
import { Button, FormGroup, TextInput, TextArea } from '@un/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/pro-solid-svg-icons';
import Image from 'next/image';

import components from '..';

export default function FigmaImage({
  url,
  img,
  width,
  height,
  background,
  ...props
}) {
  const src = `https://www.figma.com/embed?embed_host=astra&url=${url}`;

  return (
    <div
      className={`wfp--code-block ${styles.figmaImage} ${
        background ? styles.background : styles.transparent
      }`}>
      <Image src={img} width={width} height={height} alt="Figma file" />
    </div>
  );
}
