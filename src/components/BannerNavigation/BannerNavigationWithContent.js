import PropTypes from 'prop-types';
import React from 'react';
import { BannerNavigation, BannerNavigationItem } from './BannerNavigation';
import Search from '../Search';
import Link from '../Link';

const linkList = [
  { name: 'WFPgo', link: 'https://go.wfp.org/' },
  { name: 'Communities', link: 'https://communities.wfp.org/' },
  { name: 'Manuals', link: 'https://manuals.wfp.org/' },
  { name: 'GoDocs', link: 'https://godocs.wfp.org/' },
  { name: 'WeLearn', link: 'https://welearn.wfp.org/' },
  { name: 'Dashboard', link: 'https://dashboard.wfp.org/' },
  { name: 'OPweb', link: 'https://opweb.wfp.org/' },
  { name: 'Self-Service', link: 'https://selfservice.go.wfp.org/' },
  { name: 'UN Booking Hub', link: 'https://humanitarianbooking.wfp.org/' },
  { name: 'WFP.org', link: 'https://wfp.org/' },
];

const BannerNavigationWithContent = ({ searchOnChange, search, ...other }) => (
  <BannerNavigation {...other}>
    {linkList.map((e) => (
      <BannerNavigationItem>
        <Link href={e.link} target="_blank">
          {e.name}
        </Link>
      </BannerNavigationItem>
    ))}
  </BannerNavigation>
);

BannerNavigationWithContent.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  /**
   * Specify the max-width on desktop devices (same as \`Wrapper\` component)
   */
  pageWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'full']),
  /**
   * Allows to disable the search input
   */
  search: PropTypes.bool,
  /**
   * A onChange Function for the search
   */
  searchOnChange: PropTypes.func,
};

BannerNavigationWithContent.defaultProps = {
  search: false,
  searchOnChange: () => {},
};

export { BannerNavigationWithContent };
