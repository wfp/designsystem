//import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';
import { Link, LinksColumn, FooterExternal, FooterMetaLink } from '@wfp/react';
import NextLink from 'next/link';

export default function FooterWrapper() {
  return (
    <FooterExternal
      className={styles.footer}
      metaLinks={
        <>
          <FooterMetaLink href="https://www.wfp.org/contact" target="_blank">
            Contact
          </FooterMetaLink>
        </>
      }>
      <>
        <LinksColumn title="UN Core">
          <li className={`wfp--links-column-link`}>
            <NextLink href="/posts" legacyBehavior>
              <Link>Documentation</Link>
            </NextLink>
          </li>
          <li className={`wfp--links-column-link`}>
            <Link href="#">Storybook</Link>
          </li>
        </LinksColumn>
        <LinksColumn title="UN Core">
          <li className={`wfp--links-column-link`}>
            <Link
              href="https://github.com/un-core/designsystem"
              target="_blank">
              GitHub Repository
            </Link>
          </li>
          <li className={`wfp--links-column-link`}>
            <NextLink href="/posts/core/designers/figma" legacyBehavior>
              <Link>Figma library</Link>
            </NextLink>
          </li>
        </LinksColumn>
      </>
    </FooterExternal>
  );
}
