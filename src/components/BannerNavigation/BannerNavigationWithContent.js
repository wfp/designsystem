import PropTypes from 'prop-types';
import React from 'react';
import {BannerNavigation, BannerNavigationItem } from './BannerNavigation';
import Search from '../Search';
import Link from '../Link';

const BannerNavigationWithContent = (props) => {
  const { search, ...other} = props;

  const action = (event) => {
    console.log("aaaa", event.target.value);
  }
  return (
    <BannerNavigation {...other}>
      <BannerNavigationItem>
        <Link href="http://communities.wfp.org" target="_blank">
          Communities
        </Link>
      </BannerNavigationItem>
      <BannerNavigationItem>
        <Link href="http://manuals.wfp.org" target="_blank">
          Manuals
        </Link>
      </BannerNavigationItem>
      <BannerNavigationItem>
        <Link href="https://go.docs.wfp.org" target="_blank">
          GoDocs
        </Link>
      </BannerNavigationItem>
      <BannerNavigationItem>
        <Link href="http://opweb.wfp.org" target="_blank">
          OPweb
        </Link>
      </BannerNavigationItem>
      <BannerNavigationItem>
        <Link href="http://info.wfp.org" target="_blank">
          IN/FO
        </Link>
      </BannerNavigationItem>
      <BannerNavigationItem>
        <Link href="https://selfservice.go.wfp.org" target="_blank">
          Self-service
        </Link>
      </BannerNavigationItem>
      <BannerNavigationItem>
        <Link href="https://welearn.wfp.org" target="_blank">
          WeLearn
        </Link>
      </BannerNavigationItem>
      {search &&
      <BannerNavigationItem>
        <form
          action="http://gtd.wfp.org" 
          method="GET" 
          acceptCharset="UTF-8" 
          target="_blank"
        >
          <Search
            banner
            id="search-2"
            labelText="Find People"
            name="q"
            placeHolderText="Find People"
            onChange={action}
          />
        </form>
      </BannerNavigationItem>
      }
    </BannerNavigation>
  );
};

BannerNavigationWithContent.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  id: PropTypes.string,
  pageWidth: PropTypes.string,
};

BannerNavigationWithContent.defaultProps = {
  search: true
};

export { BannerNavigationWithContent };
