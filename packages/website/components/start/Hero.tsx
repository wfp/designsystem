import React from 'react';
import styles from './hero.module.scss';
import { Button } from '@wfp/react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/pro-solid-svg-icons';

export default function Hero() {
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
        <Link href="./posts/documentation/overview" legacyBehavior>
          <Button href="./posts/documentation/overview">Get started</Button>
        </Link>
        <Link href="./posts/components/overview" legacyBehavior>
          <Button
            href="./posts/components/overview"
            kind="tertiary"
            icon={<FontAwesomeIcon icon={faArrowRight} />}>
            Components
          </Button>
        </Link>
      </div>
    </div>
  );
}
