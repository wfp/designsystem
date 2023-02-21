import React from 'react';
import styles from './figma.module.scss';
import { Button, FormGroup, TextInput, TextArea } from '@un/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/pro-solid-svg-icons';
import Image from 'next/image';

import components from '..';

export default function Storybook({ path, img, width, height, ...props }) {
  const src = `http://localhost:9000/${path}`;

  //  http://localhost:9000/?path=/docs/components-ui-elements-button--documentation
  return (
    <div className={styles.storybook}>
      <iframe src={src} width="1200" height="260"></iframe>
    </div>
  );
}
