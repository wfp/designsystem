import React from 'react';
import styles from './figma.module.scss';
import { Button, FormGroup, TextInput, TextArea } from '@un/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/pro-solid-svg-icons';

import components from '..';

export default function Figma({ url, height = 450, width = 800, ...props }) {
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
