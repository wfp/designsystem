import React from 'react';
import styles from './figma.module.scss';
//import Image from 'next/image';
import Image from '../Image';

export default function FigmaImage({
  // url,
  img,
  width,
  height,
  background,
  ...props
}: any) {
  // const src = `https://www.figma.com/embed?embed_host=astra&url=${url}`;

  return (
    <Image
      src={img}
      width={width}
      height={height}
      alt="Figma file"
      {...props}
    />
  );
  return (
    <div
      className={`wfp--code-block ${styles.figmaImage} ${
        background ? styles.background : styles.transparent
      }`}>
      <Image
        src={img}
        width={width}
        height={height}
        alt="Figma file"
        {...props}
      />
      {/*<Image src={img} width={width} height={height} alt="Figma file" />*/}
    </div>
  );
}
