import React, { useEffect } from 'react';
import NextLink from 'next/link';
import {
  Button,
  MainNavigationItem,
  BannerNavigation,
  MainNavigationExternal,
  useTheme,
} from '@wfp/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Search from '../Search';

import styles from './styles.module.scss';
import { faMoonStars } from '@fortawesome/pro-solid-svg-icons';
import { faSun } from '@fortawesome/pro-regular-svg-icons';
export default function Navigation() {
  //const { t } = useTranslation('website');
  const theme: any = useTheme();

  useEffect(() => {
    const wrapperElement = document.body;
    const prefixClass = `wfp--theme--`;

    const classes = wrapperElement.className
      .split(' ')
      .filter((c) => !c.startsWith(prefixClass));

    wrapperElement.className = classes.join(' ').trim();
    wrapperElement.classList.add(`wfp--theme--${theme.actualTheme}`);
  });

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
          <NextLink href="/posts/documentation/overview">Resources</NextLink>
        </MainNavigationItem>
        <MainNavigationItem>
          <NextLink href="/posts/components/overview">Components</NextLink>
        </MainNavigationItem>
        <MainNavigationItem>
          <NextLink href="/posts/support/overview">Support</NextLink>
        </MainNavigationItem>

        <MainNavigationItem className={styles.darkModeSwitch}>
          <div className={styles.meta}>
            <Search />
            <Button
              kind="tertiary"
              onClick={(e) => {
                e.currentTarget.blur();
                theme.setTheme(theme.actualTheme === 'dark' ? 'light' : 'dark');
              }}>
              {theme.actualTheme === 'dark' ? (
                <FontAwesomeIcon icon={faSun} />
              ) : (
                <FontAwesomeIcon icon={faMoonStars} />
              )}
            </Button>

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
          </div>
        </MainNavigationItem>
      </MainNavigationExternal>
    </>
  );
}
