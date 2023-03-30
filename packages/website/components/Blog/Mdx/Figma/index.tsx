import React from 'react';
import styles from './figma.module.scss';

export default function Figma({
  url,
  height = 450,
  width = 800,
  ...props
}: any) {
  const src = `https://www.figma.com/embed?embed_host=astra&url=${url}`;

  return (
    <div className={styles.figma}>
      <iframe
        height={height}
        width={width}
        src={src}
        allowFullScreen
        {...props}
      />
    </div>
  );
}
