import React from 'react';

import { WfpLogoVerticalEn } from '@wfp/pictograms-react';
import { ChevronDownGlyph  } from '@wfp/icons-react';

import Button from '../Button';
import User from '../User';
import Wrapper from '../Wrapper';
import PropTypes from 'prop-types';

import { useTogglable } from '../../hooks';
import { settings } from '../../globals/js';

const { prefix } = settings;

const LanguageExternal = ({children, primaryLanguage}) => {
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
        <span>{primaryLanguage}</span>
         <ChevronDownGlyph/>
      </div>
      <ul
        className={`${prefix}--language-ext__dropdown ${
          languageTogglable.isOpen
            ? 'wfp--language-ext__dropdown--is-shown'
            : ''
        }`}>
        {children}
      </ul>
    </div>
  );
};

const UserExternal = ({username, children, userImage}) => {
  const userTogglable = useTogglable();

  return (
    <div className={`${prefix}--user-ext`}>
      <div
        className={`${prefix}--user-ext__trigger`}
        onClick={() =>
          userTogglable.isOpen ? userTogglable.close() : userTogglable.open()
        }>
        <User alt="User avatar" name={username} image={userImage}/>
         <ChevronDownGlyph/>
      </div>
      <ul
        className={`${prefix}--user-ext__dropdown ${
          userTogglable.isOpen ? 'wfp--user-ext__dropdown--is-shown' : ''
        }`}>
          {children}
      </ul>
    </div>
  );
};

const MainNavigationExternal = ({productName, primaryLanguage, languageList, username, userImage, userDetails, children}) => {
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
            {productName}
          </div>
        </div>
        <div className={`${prefix}--main-navigation-ext__main`}>
          <div className={`${prefix}--main-navigation-ext__settings`}>
            <LanguageExternal primaryLanguage={primaryLanguage}>{languageList}</LanguageExternal>
            <UserExternal username={username} userImage={userImage}>{userDetails}</UserExternal>
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
                  {children}
                  <div
                    className={`${prefix}--main-navigation-ext__mobile-settings`}>
                    <li className={`${prefix}--main-navigation-ext__site-link`}>
                      <LanguageExternal primaryLanguage={primaryLanguage}>{languageList}</LanguageExternal>
                    </li>
                    <li className={`${prefix}--main-navigation-ext__site-link`}>
                      <UserExternal username={username} userImage={userImage}>{userDetails}</UserExternal>
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

MainNavigationExternal.propTypes = {
  /**
   * The name of your product can be applied to this prop
   */
  productName: PropTypes.node,

  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,

  /**
   * List of laguages your site support
   */
  languageList: PropTypes.node,

  /**
   * The name of signed in user can be applied to this prop
   */
  username: PropTypes.node,

  /**
   * The image of signed in user can be applied to this prop
   */
  userImage: PropTypes.string,

  /**
   * The dropdown details of user can be applied to this prop
   */
  userDetails: PropTypes.node,

  /**
   * This prop accepts the first language your website is in. Default: English
   */
  primaryLanguage: PropTypes.string
  
  
};

MainNavigationExternal.defaultProps = {
  primaryLanguage: 'English',
};

export default MainNavigationExternal;
