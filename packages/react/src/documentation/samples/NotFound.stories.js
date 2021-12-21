import React from 'react';
import RegularPage from '../RegularPage';
import Link from '../../components/Link';
import Story from '../../components/Story';
//import Icon from '../../components/Icon';
import Wrapper from '../../components/Wrapper';
import { WfpHumEmergencyResponsePos } from '@un/pictograms-react';
import markdown from './README.mdx';
export default {
  title: 'Templates/Not found (404)',

  parameters: {
    componentSubtitle: 'Example',
    status: 'released',
    mdx: markdown,
    introText:
      'Not Found page is also known as an “error page” or “404” page. This page indicates that the user reached the domain they requested, but the URL path provided no information.',
    previewWidth: 'full',
  },
};

export const Regular = (args) => (
  <Wrapper pageWidth="lg" spacing="md">
    <Story className="wfp--story__center wfp--story__full-height">
      <WfpHumEmergencyResponsePos
        fill="#007DBC"
        width={200}
        height={200}
        style={{ marginBottom: '3rem', transform: 'rotate(10deg)' }}
      />
      <h1 className="wfp--story__title">Under maintenance</h1>
      <p>
        Apologies for the inconvenience; we are performing maintenance at the
        moment.
        <br /> [Name of solution] should be back shortly.
      </p>
      <p>
        Please contact{' '}
        <Link href="mailto:IT.ServiceDesk@wfp.org">
          {' '}
          IT.ServiceDesk@wfp.org{' '}
        </Link>{' '}
        if you have any questions or comments.
      </p>
      <p>[Name] Team</p>
    </Story>
  </Wrapper>
);

Regular.story = {
  parameters: {
    docs: {
      source: {
        code: `

import { Wrapper, Story, Icon} from "@un/react";
import { iconWfpHumEmergencyResponsePos } from '@un/icons-react';

<Wrapper pageWidth="lg" spacing="md">
  <Story className="wfp--story__center wfp--story__full-height">
    <Icon
      icon={iconWfpHumEmergencyResponsePos}
      fill="#007DBC"
      width={200}
      height={200}
      style={{ marginBottom: '3rem', transform: 'rotate(10deg)' }}
    />
    <h1 className="wfp--story__title">Under maintenance</h1>
      <p>
        Apologies for the inconvenience; we are performing maintenance at the moment.
        <br/> [Name of solution] should be back shortly. 
      </p>
      <p>Please contact <Link href="https://IT.ServiceDesk@wfp.org"> IT.ServiceDesk@wfp.org </Link> if you have any questions or comments.</p>
      <p>[Name] Team</p>
  </Story>
</Wrapper>
      `,
      },
    },
  },
};
