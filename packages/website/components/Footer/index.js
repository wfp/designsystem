//import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './styles.module.scss';
import { useTranslation } from 'next-i18next';
import { Link, LinksColumn, FooterExternal, FooterMetaLink } from '@un/react';

export default function FooterWrapper() {
  return (
    <FooterExternal
      className={styles.footer}
      metaLinks={
        <>
          <FooterMetaLink href="hh.com">First legal link</FooterMetaLink>
          <FooterMetaLink href="hh.com">Second legal link</FooterMetaLink>
        </>
      }>
      <>
        <LinksColumn title="Title">
          <li className={`wfp--links-column-link`}>
            <Link>First link</Link>
          </li>
          <li className={`wfp--links-column-link`}>
            <Link>Second link</Link>
          </li>
          <li className={`wfp--links-column-link`}>
            <Link>Third link</Link>
          </li>
          <li className={`wfp--links-column-link`}>
            <Link>Fourth link</Link>
          </li>
          <li className={`wfp--links-column-link`}>
            <Link>Fifth link</Link>
          </li>
        </LinksColumn>

        <LinksColumn title="Title 2">
          <li className={`wfp--links-column-link`}>
            <Link>First link 2</Link>
          </li>
          <li className={`wfp--links-column-link`}>
            <Link>Second link 2</Link>
          </li>
          <li className={`wfp--links-column-link`}>
            <Link>Third link 2</Link>
          </li>
          <li className={`wfp--links-column-link`}>
            <Link>Fourth link 2</Link>
          </li>
          <li className={`wfp--links-column-link`}>
            <Link>Fifth link 2</Link>
          </li>
        </LinksColumn>
      </>
    </FooterExternal>
  );
}
