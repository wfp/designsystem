import React from 'react';
import styles from './hero.module.scss';
import Image from 'next/image';
import { Button } from '@un/react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/pro-solid-svg-icons';
import { useTranslation } from 'next-i18next';

export default function Hero() {
  const { t } = useTranslation('website');

  return (
    <div className={styles.features}>
      <div className={styles.heroWrapper}>
        <div className={styles.hero}>
          Digital Design System
          {/*UN
          <br />
  core*/}
        </div>
      </div>

      <h1>
        Tools for creating
        <br /> a digital design system
      </h1>
      <h2>
        A collection of libraries and tools that help you build adaptive,
        accessible, and robust design systems.
      </h2>
      <div className={styles.buttons}>
        <Link href="./main">
          <Button>Get started</Button>
        </Link>
        <Link href="./posts">
          <Button
            kind="tertiary"
            icon={<FontAwesomeIcon icon={faArrowRight} />}>
            More information
          </Button>
        </Link>
      </div>
    </div>
  );
}
