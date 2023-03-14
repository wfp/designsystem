import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  Button,
  MainNavigation,
  MainNavigationItem,
  BannerNavigation,
  Link,
  SubNavigation,
  SubNavigationItem,
  SubNavigationHeader,
  SubNavigationContent,
  SubNavigationList,
  SubNavigationGroup,
  SubNavigationTitle,
  User,
  MainNavigationExternal,
} from '@un/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/pro-regular-svg-icons';
import { faRocketLaunch } from '@fortawesome/pro-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Search from '../Search';

import logo from './logo.svg';
import Image from 'next/image';
import styles from './styles.module.scss';
import { useTranslation } from 'next-i18next';

export default function Navigation({ children }) {
  const router = useRouter();
  const { t } = useTranslation('website');

  const { locale, locales, asPath } = useRouter();

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
          <Search kind="main" id="search-2" placeholder="Search" />
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