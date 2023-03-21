import { faArrowUpRight } from '@fortawesome/pro-regular-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@un/react';
import React from 'react';
import styles from './flex.module.scss';

export default function LinkEl({ children, href, ...props }) {
  const isExternalURL = href.startsWith('https');

  return (
    <Link inline target={isExternalURL ? '_blank' : ''} href={href} {...props}>
      {children}
      {isExternalURL && (
        <FontAwesomeIcon
          className={styles.external}
          icon={faArrowUpRightFromSquare}
        />
      )}
    </Link>
  );
}
