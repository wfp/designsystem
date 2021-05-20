import React from 'react';
import markdown from './README.mdx';
import AnchorNavigation from '.';
import Link from '../Link';
import anchorNavigationTwig from './AnchorNavigation.twig';

export default {
  title: 'Components/Navigations/AnchorNavigation',
  component: AnchorNavigation,
  parameters: {
    componentSubtitle: 'Component',
    status: 'experimental',
    mdx: markdown,
    twig: anchorNavigationTwig
  },
};


export const RegularAnchorNavigation = (args) => (
    <AnchorNavigation {...args}>
        <Link href="#">
            Item one
        </Link>
        <Link href="#">
            Item two
        </Link>
        <Link href="#">
            Item three
        </Link>
        <Link href="#">
            Item four
        </Link>
    </AnchorNavigation>
  );

RegularAnchorNavigation.args = {
    title:'Title'
}