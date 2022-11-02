import React from 'react';
import markdown from './README.mdx';
import InfoBar from '.';
import Link from '../Link';

export default {
  title: 'Components/UI Elements/InfoBar',
  component: InfoBar,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => (
  <InfoBar {...args}>
    InfoBar with content. <Link href="#">Click here</Link> to do Something.
  </InfoBar>
);

const infobarsourcecode = `
  import { InfoBar, Link  } from "@un/react";

  <InfoBar>
    InfoBar with content. 
    <Link href="#">
        Click here
    </Link>
     to do Something.
  </InfoBar>
`;

Regular.story = {
  parameters: {
    docs: {
      source: {
        code: infobarsourcecode,
      },
    },
  },
};
