import { faArrowUpRightFromSquare } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@wfp/react';
import React from 'react';
import styles from './flex.module.scss';

export default function LinkEl({ children, href, ...props }: any) {
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
