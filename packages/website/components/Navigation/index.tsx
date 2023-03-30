import React from 'react';
import NextLink from 'next/link';
import {
  Button,
  MainNavigationItem,
  BannerNavigation,
  MainNavigationExternal,
} from '@un/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Search from '../Search';

import styles from './styles.module.scss';
export default function Navigation() {
  //const { t } = useTranslation('website');

  return (
    <>
      <BannerNavigation className={styles.bannerNavigation}>
        <span>🚧 This website is work in progress 👷</span>
      </BannerNavigation>
      <MainNavigationExternal
        logo={<NextLink href="./">UN core</NextLink>}
        components={{
          LanguageExternal: () => null,
          UserExternal: () => null,
        }}
        className={styles.mainNavigation}
        pageWidth="full">
        <MainNavigationItem>
          <NextLink href="/">Homepage</NextLink>
        </MainNavigationItem>
        <MainNavigationItem>
          <NextLink href="/posts">Documentation</NextLink>
        </MainNavigationItem>
        <MainNavigationItem>
          <Search /*kind="main"placeholder="Search"*/ />
        </MainNavigationItem>
        <NextLink
          href="https://github.com/un-core/designsystem"
          target="_blank"
          legacyBehavior>
          <Button
            icon={<FontAwesomeIcon icon={faGithub} />}
            href="https://github.com/un-core/designsystem">
            GitHub
          </Button>
        </NextLink>
      </MainNavigationExternal>
    </>
  );
}
