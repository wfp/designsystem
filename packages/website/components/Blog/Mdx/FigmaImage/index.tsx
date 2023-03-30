import React from 'react';
import styles from './figma.module.scss';
import Image from 'next/image';

export default function FigmaImage({
  // url,
  img,
  width,
  height,
  background,
}: any) {
  // const src = `https://www.figma.com/embed?embed_host=astra&url=${url}`;

  return (
    <div
      className={`wfp--code-block ${styles.figmaImage} ${
        background ? styles.background : styles.transparent
      }`}>
      <Image src={img} width={width} height={height} alt="Figma file" />
    </div>
  );
}
