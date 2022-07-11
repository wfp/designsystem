import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  Button,
  MainNavigationExternal,
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
} from '@un/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/pro-regular-svg-icons';
import { faRocketLaunch } from '@fortawesome/pro-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import logo from './logo.svg';
import Image from 'next/image';
import styles from './styles.module.scss';

import { UserNameNew } from '../UserName';
import { useTranslation } from 'next-i18next';

export default function Navigation({ children }) {
  const router = useRouter();
  const { t } = useTranslation('website');

  const { locale, locales, asPath } = useRouter();

  //if (router?.query?.app) return null;

  const languageFull = {
    de: 'deutsch',
    en: 'englisch',
    fr: 'französisch',
  };

  return (
    <>
      <BannerNavigation className={styles.bannerNavigation}>
        <span>🚧 This website is work in progress 👷</span>
      </BannerNavigation>
      <MainNavigationExternal
        logo={
          <NextLink href="./">
            <a>UN core</a>
          </NextLink>
        }
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
        <NextLink
          href="https://github.com/un-core/designsystem"
          target="_blank">
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
