import React from 'react';

import { WfpLogoVerticalEn } from '@wfp/pictograms-react';

import Button from '../Button';
import Link from '../Link';
import User from '../User';
import Wrapper from '../Wrapper';

import { useTogglable } from '../../hooks';
import { settings } from '../../globals/js';

const { prefix } = settings;

const LanguageExternal = () => {
  const languageTogglable = useTogglable();

  return (
    <div className={`${prefix}--language-ext`}>
      <div
        className={`${prefix}--language-ext__trigger`}
        onClick={() =>
          languageTogglable.isOpen
            ? languageTogglable.close()
            : languageTogglable.open()
        }>
        <span>English</span>
        {/*
         * TODO: The WFP kit's ChevronDown icon presents an issue where
         * the path is aligned on the top left of the viewbox, and for this
         * reason it cannot be centrally aligned with the label.
         * Replace the following custom icon with the ChevronDown once the
         * issue is solved.
         */}
        <svg
          className={`${prefix}--language-ext-chevron`}
          fill="currentColor"
          width="12"
          height="12"
          viewBox="0 0 32 32">
          <path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path>
        </svg>
      </div>
      <ul
        className={`${prefix}--language-ext__dropdown ${
          languageTogglable.isOpen
            ? 'wfp--language-ext__dropdown--is-shown'
            : ''
        }`}>
        <li className={`${prefix}--language-ext-dropdown-option`}>
          <a>English</a>
        </li>
        <li className={`${prefix}--language-ext-dropdown-option`}>
          <a>French</a>
        </li>
        <li className={`${prefix}--language-ext-dropdown-option`}>
          <a>Spanish</a>
        </li>
      </ul>
    </div>
  );
};

const UserExternal = () => {
  const userTogglable = useTogglable();

  return (
    <div className={`${prefix}--user-ext`}>
      <div
        className={`${prefix}--user-ext__trigger`}
        onClick={() =>
          userTogglable.isOpen ? userTogglable.close() : userTogglable.open()
        }>
        <User showName={false} alt="User avatar" />
        <span>Max Mustermann</span>
        {/*
         * TODO: The WFP kit's ChevronDown icon presents an issue where
         * the path is aligned on the top left of the viewbox, and for this
         * reason it cannot be centrally aligned with the label.
         * Replace the following custom icon with the ChevronDown once the
         * issue is solved.
         */}
        <svg
          className={`${prefix}--user-ext__chevron`}
          fill="currentColor"
          width="12"
          height="12"
          viewBox="0 0 32 32">
          <path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path>
        </svg>
      </div>
      <ul
        className={`${prefix}--user-ext__dropdown ${
          userTogglable.isOpen ? 'wfp--user-ext__dropdown--is-shown' : ''
        }`}>
        <li className={`${prefix}--user-ext__profile-item`}>
          <span className={`${prefix}--user-ext__profile-label`}>Email:</span>
          <span className={`${prefix}--user-ext__profile-value`}>
            <Link inline>user@wfp.com</Link>
          </span>
        </li>
        <li className={`${prefix}--user-ext__profile-item`}>
          <span className={`${prefix}--user-ext__profile-label`}>
            Job title:
          </span>
          <span className={`${prefix}--user-ext__profile-value`}>
            Supply chain
          </span>
        </li>
        <li className={`${prefix}--user-ext__profile-item`}>
          <span className={`${prefix}--user-ext__profile-label`}>Country:</span>
          <span className={`${prefix}--user-ext__profile-value`}>Somalia</span>
        </li>
        <li className={`${prefix}--user-ext__profile-item`}>
          <span className={`${prefix}--user-ext__profile-label`}>
            Organization:
          </span>
          <span className={`${prefix}--user-ext__profile-value`}>
            The United Nations World food Programme (WFP)
          </span>
        </li>
        <div className={`${prefix}--user-ext__profile-actions`}>
          <Link className={`${prefix}--user-ext__profile-edit`} inline>
            Edit profile
          </Link>
          <Button kind="secondary" small>
            Log out
          </Button>
        </div>
      </ul>
    </div>
  );
};

const MainNavigationExternal = () => {
  const navTogglable = useTogglable();

  return (
    <header className={`${prefix}--main-navigation-ext`}>
      <Wrapper
        pageWidth="lg"
        className={`${prefix}--main-navigation-ext__wrapper`}>
        <div className={`${prefix}--main-navigation-ext__branding`}>
          <div className={`${prefix}--main-navigation-ext__wfp-logo`}>
            <WfpLogoVerticalEn
              className={`${prefix}--main-navigation-ext__wfp-logo-svg`}
              alt="WFP"
              width="100%"
            />
          </div>
          <div className={`${prefix}--main-navigation-ext__product-name`}>
            Service
            <br />
            Marketplace
          </div>
        </div>
        <div className={`${prefix}--main-navigation-ext__main`}>
          <div className={`${prefix}--main-navigation-ext__settings`}>
            <LanguageExternal />
            <UserExternal />
          </div>
          <div className={`${prefix}--main-navigation-ext__nav`}>
            <div
              className={`${prefix}--main-navigation-ext__mobile-menu-button`}>
              <Button
                kind="tertiary"
                small
                onClick={() =>
                  navTogglable.isOpen
                    ? navTogglable.close()
                    : navTogglable.open()
                }>
                Menu
              </Button>
            </div>
            <div
              className={`${prefix}--main-navigation-ext__nav-wrapper
            ${
              navTogglable.isOpen ? 'wfp--main-navigation-ext--is-shown' : ''
            }`}>
              {/* This nav can include both links and buttons */}
              <nav
                className={`${prefix}--main-navigation-ext__site-nav ${
                  navTogglable.isOpen
                    ? 'wfp--main-navigation-ext--is-shown'
                    : ''
                }`}>
                <ul className={`${prefix}--main-navigation-ext__site-nav-list`}>
                  <li className={`${prefix}--main-navigation-ext__site-link`}>
                    <a>First link</a>
                  </li>
                  <li className={`${prefix}--main-navigation-ext__site-link`}>
                    <a>Second link</a>
                  </li>
                  {/* <li className={`${prefix}--main-navigation-ext__site-link`}>
                    <Button kind="accent" small>
                      Accent link
                    </Button>
                  </li> */}
                  <div
                    className={`${prefix}--main-navigation-ext__mobile-settings`}>
                    <li className={`${prefix}--main-navigation-ext__site-link`}>
                      <LanguageExternal />
                    </li>
                    <li className={`${prefix}--main-navigation-ext__site-link`}>
                      <UserExternal />
                    </li>
                  </div>
                </ul>
              </nav>
              {/* To show if the user is a guest */}
              {/* <nav className={`${prefix}--main-navigation-ext__auth`}>
                <ul className={`${prefix}--main-navigation-ext__auth-list`}>
                  <li className={`${prefix}--main-navigation-ext__auth-action`}>
                    <Button kind="accent" small>
                      Register
                    </Button>
                  </li>
                  <li className={`${prefix}--main-navigation-ext__auth-action`}>
                    <Button kind="primary" small>
                      Sign in
                    </Button>
                  </li>
                </ul>
              </nav> */}
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default MainNavigationExternal;
