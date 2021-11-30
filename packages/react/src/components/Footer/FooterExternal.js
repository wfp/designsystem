import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import Wrapper from '../Wrapper';
import classnames from 'classnames';
import { WfpLogoVerticalEn } from '@unitednations/pictograms-react';

import { settings } from '../../globals/js';

const { prefix } = settings;

const FooterExternal = ({
  className,
  productName,
  children,
  metaContent,
  metaLinks,
}) => {
  const externalClasses = classnames(`${prefix}--footer-ext`, className);
  return (
    <footer className={externalClasses}>
      <Wrapper pageWidth="lg">
        <div className={`${prefix}--footer-ext__content`}>
          <div className={`${prefix}--footer-ext__info`}>
            <div className={`${prefix}--footer-ext__branding`}>
              <WfpLogoVerticalEn alt="WFP" />
              <div className={`${prefix}--footer-ext__product-name`}>
                {productName}
              </div>
            </div>
            <div className={`${prefix}--footer-ext__address`}>
              {metaContent}
            </div>
            <div className={`${prefix}--footer-ext__social-wrapper`}>
              <p>Follow WFP on:</p>
              <ul className={`${prefix}--footer-ext__social-icons-list`}>
                <li className={`${prefix}--footer-ext__social-icon`}>
                  <a
                    href="https://twitter.com/WFP"
                    target="_blank"
                    rel="noopener">
                    <TwitterIcon />
                  </a>
                </li>
                <li className={`${prefix}--footer-ext__social-icon`}>
                  <a
                    href="https://www.facebook.com/WorldFoodProgramme"
                    target="_blank"
                    rel="noopener">
                    <FacebookIcon />
                  </a>
                </li>
                <li className={`${prefix}--footer-ext__social-icon`}>
                  <a
                    href="https://www.instagram.com/Worldfoodprogramme/"
                    target="_blank"
                    rel="noopener">
                    <InstagramIcon />
                  </a>
                </li>
                <li className={`${prefix}--footer-ext__social-icon`}>
                  <a
                    href="https://www.linkedin.com/company/world-food-programme"
                    target="_blank"
                    rel="noopener">
                    <LinkedinIcon />
                  </a>
                </li>
                <li className={`${prefix}--footer-ext__social-icon`}>
                  <a
                    href="https://www.youtube.com/user/WORLDFOODPROGRAM"
                    target="_blank"
                    rel="noopener">
                    <YoutubeIcon />
                  </a>
                </li>
                <li className={`${prefix}--footer-ext__social-icon`}>
                  <a
                    href="https://www.tiktok.com/@worldfoodprogramme"
                    target="_blank"
                    rel="noopener">
                    <TiktokIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${prefix}--footer-ext__nav-wrapper`}>
            <LinksColumn />
            <LinksColumn />
          </div>
        </div>
        <div className={`${prefix}--footer-ext__legal`}>
          <span>{new Date().getFullYear()} © World Food Programme</span>
          <nav className={`${prefix}--footer-ext__nav-legal`}>
            <ul className={`${prefix}--footer-ext__legal-links`}>
              {metaLinks}
            </ul>
          </nav>
        </div>
      </Wrapper>
    </footer>
  );
};

FooterExternal.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  productName: PropTypes.node,
  children: PropTypes.node,
  metaContent: PropTypes.node,
  metaLinks: PropTypes.node,
};

const LinksColumn = () => {
  return (
    <div className={`${prefix}--links-column`}>
      {/* Title is optional */}
      <p className={`${prefix}--links-column__title`}>Title</p>
      <nav>
        <ul className={`${prefix}--links-column__nav-list`}>
          <li className={`${prefix}--links-column-link`}>
            <Link>First link</Link>
          </li>
          <li className={`${prefix}--links-column-link`}>
            <Link>Second link</Link>
          </li>
          <li className={`${prefix}--links-column-link`}>
            <Link>Third link</Link>
          </li>
          <li className={`${prefix}--links-column-link`}>
            <Link>Fourth link</Link>
          </li>
          <li className={`${prefix}--links-column-link`}>
            <Link>Fifth link</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const FooterMetaLink = ({ className, href, children }) => {
  const wrapperClasses = classnames(
    `${prefix}--footer-ext__legal-link`,
    className
  );
  return (
    <li className={wrapperClasses}>
      <Link href={href}>{children}</Link>
    </li>
  );
};

FooterMetaLink.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Twitter social icon
 */
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
    <title>Twitter icon</title>
    <defs>
      <clipPath id="prefix__a">
        <path d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#prefix__a)">
      <path
        data-name="Social Icons \u2013 24px / Twitter"
        d="M21 24H3a3 3 0 01-3-3V3a3 3 0 013-3h18a3 3 0 013 3v18a3 3 0 01-3 3zM4.507 16.722A8.754 8.754 0 009.216 18.1a8.386 8.386 0 006.5-2.854 9.057 9.057 0 002.255-5.9c0-.13 0-.264-.006-.4A6.222 6.222 0 0019.5 7.35a6.27 6.27 0 01-1.77.486 3.09 3.09 0 001.356-1.7 6.135 6.135 0 01-1.956.744 3.078 3.078 0 00-5.323 2.106 3.408 3.408 0 00.078.7 8.765 8.765 0 01-6.341-3.218 3.089 3.089 0 00.954 4.11 3.131 3.131 0 01-1.392-.384v.042a3.085 3.085 0 002.466 3.018 3.087 3.087 0 01-1.386.054 3.07 3.07 0 002.874 2.136 6.138 6.138 0 01-3.822 1.32 5.9 5.9 0 01-.731-.042z"
        fill="#fff"
      />
    </g>
  </svg>
);

/**
 * Facebook social icon
 */
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
    <title>Facebook icon</title>
    <defs>
      <clipPath id="prefix__a">
        <path d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#prefix__a)">
      <path
        data-name="Social Icons \u2013 24px / Facebook"
        d="M22.676 0H1.324A1.324 1.324 0 000 1.324v21.352A1.324 1.324 0 001.324 24h11.5v-9.281H9.7v-3.633h3.124V8.412c0-3.1 1.9-4.788 4.659-4.788a26.565 26.565 0 012.789.141v3.24h-1.9c-1.506 0-1.8.712-1.8 1.763v2.313h3.6l-.472 3.633h-3.148V24h6.124A1.324 1.324 0 0024 22.676V1.324A1.324 1.324 0 0022.676 0z"
        fill="#fff"
      />
    </g>
  </svg>
);

/**
 * Instagram social icon
 */
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
    <title>Instagram icon</title>
    <defs>
      <clipPath id="prefix__a">
        <path d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#prefix__a)">
      <path
        data-name="Social Icons \u2013 24px / Instagram"
        d="M7.053 23.928a8.866 8.866 0 01-2.913-.558 5.9 5.9 0 01-2.126-1.384A5.88 5.88 0 01.63 19.86a8.853 8.853 0 01-.558-2.912C.014 15.653 0 15.224 0 12s.014-3.653.072-4.947A8.853 8.853 0 01.63 4.14a5.88 5.88 0 011.384-2.126A5.88 5.88 0 014.14.63 8.853 8.853 0 017.053.072C8.347.014 8.775 0 12 0s3.653.014 4.948.072A8.853 8.853 0 0119.86.63a5.88 5.88 0 012.126 1.384A5.9 5.9 0 0123.37 4.14a8.866 8.866 0 01.557 2.913C23.986 8.331 24 8.757 24 12s-.014 3.669-.072 4.948a8.865 8.865 0 01-.557 2.912 6.138 6.138 0 01-3.51 3.51 8.865 8.865 0 01-2.912.557c-1.279.058-1.7.072-4.948.072s-3.67-.013-4.948-.071zm.1-21.7a6.67 6.67 0 00-2.228.413 3.733 3.733 0 00-1.38.9 3.733 3.733 0 00-.9 1.38 6.67 6.67 0 00-.413 2.228C2.174 8.4 2.162 8.78 2.162 12s.012 3.6.07 4.849a6.67 6.67 0 00.413 2.228 3.733 3.733 0 00.9 1.38 3.733 3.733 0 001.38.9 6.64 6.64 0 002.228.413c1.252.058 1.629.07 4.849.07s3.6-.012 4.849-.07a6.64 6.64 0 002.228-.413 3.975 3.975 0 002.278-2.278 6.64 6.64 0 00.413-2.228c.058-1.252.07-1.629.07-4.849s-.012-3.6-.07-4.849a6.64 6.64 0 00-.413-2.228 3.733 3.733 0 00-.9-1.38 3.733 3.733 0 00-1.38-.9 6.67 6.67 0 00-2.228-.413c-1.249-.058-1.629-.07-4.849-.07s-3.6.012-4.849.07zM5.838 12A6.162 6.162 0 1112 18.162 6.169 6.169 0 015.838 12zM8 12a4 4 0 104-4 4.005 4.005 0 00-4 4zm8.966-6.405a1.44 1.44 0 111.439 1.439 1.44 1.44 0 01-1.439-1.439z"
        fill="#fff"
      />
    </g>
  </svg>
);

/**
 * LinkedIn social icon
 */
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
    <title>LinkedIn icon</title>
    <defs>
      <clipPath id="prefix__a">
        <path d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#prefix__a)">
      <path
        data-name="Social Icons \u2013 24px / LinkedIn"
        d="M22.224 24H1.77A1.753 1.753 0 010 22.268V1.731A1.753 1.753 0 011.77 0h20.454A1.756 1.756 0 0124 1.731v20.537A1.756 1.756 0 0122.224 24zM9.353 9v11.451h3.555v-5.665c0-1.454.254-2.941 2.134-2.941 1.85 0 1.85 1.755 1.85 3.036v5.571h3.559V14.17a7.2 7.2 0 00-.784-3.886 3.764 3.764 0 00-3.487-1.571 3.763 3.763 0 00-3.368 1.849h-.049V9zm-5.8 0v11.451h3.565V9zm1.786-5.7A2.065 2.065 0 107.4 5.368 2.068 2.068 0 005.339 3.3z"
        fill="#fff"
      />
    </g>
  </svg>
);

/**
 * YouTube social icon
 */
const YoutubeIcon = () => (
  <svg
    width={24}
    height={17}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <title>YouTube icon</title>
    <defs>
      <path id="prefix__a" d="M0 0h24v24H0z" />
    </defs>
    <g transform="translate(0 -4)" fill="none" fillRule="evenodd">
      <g mask="url(#prefix__b)" fill="#FFF" fillRule="nonzero">
        <path d="M23.5 6.64a3.015 3.015 0 00-2.123-2.14C19.505 4 12 4 12 4s-7.505 0-9.377.5A3.015 3.015 0 00.5 6.64a33.951 33.951 0 000 11.628A3.015 3.015 0 002.623 20.4c1.872.5 9.377.5 9.377.5s7.505 0 9.377-.5a3.015 3.015 0 002.123-2.131c.669-3.847.669-7.78 0-11.628V6.64zM9.545 16.023V8.886l6.273 3.569-6.273 3.568z" />
      </g>
    </g>
  </svg>
);

/**
 * TikTok social icon
 */
const TiktokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
    <title>TikTok icon</title>
    <defs>
      <clipPath id="prefix__a">
        <path d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#prefix__a)">
      <path
        d="M22.225 24H1.769A1.753 1.753 0 010 22.268V1.73A1.752 1.752 0 011.769-.001h20.456a1.756 1.756 0 011.776 1.731v20.538A1.756 1.756 0 0122.225 24zM10.211 9.429a5.454 5.454 0 00-5.449 5.448 5.454 5.454 0 005.449 5.448 5.424 5.424 0 003.708-1.462 5.434 5.434 0 001.722-3.57h.018V8.851a6.919 6.919 0 004.034 1.29h.069V7.183h-.069a4.027 4.027 0 01-4.022-4.023h-3.009v11.9a2.47 2.47 0 01-2.451 2.274 2.463 2.463 0 01-2.459-2.46 2.462 2.462 0 012.459-2.458 2.448 2.448 0 01.758.121V9.481a5.43 5.43 0 00-.759-.052z"
        fill="#fff"
        stroke="rgba(0,0,0,0)"
        strokeMiterlimit={10}
      />
    </g>
  </svg>
);

export { FooterExternal, LinksColumn, FooterMetaLink };
