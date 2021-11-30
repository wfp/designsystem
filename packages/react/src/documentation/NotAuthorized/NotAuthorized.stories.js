import React from 'react';
import Link from '../../components/Link';
import Story from '../../components/Story';
import Wrapper from '../../components/Wrapper';
import { WarningSolid16 } from '@unitednations/icons-react';
import markdown from './README.mdx';

export default {
  title: 'Templates/Not authorized',

  parameters: {
    componentSubtitle: 'Example',
    status: 'released',
    mdx: markdown,
    introText:
      'The not authorized example page can be used when the user has no access to the whole page.',
  },
};

export const Regular = (args) => (
  <Wrapper pageWidth="lg" spacing="md">
    <Story className="wfp--story__center wfp--story__full-height">
      <WarningSolid16
        fill="#007DBC"
        width={100}
        height={100}
        style={{
          marginBottom: '3rem' /*,
          filter:
            'drop-shadow(10px 6px 0px #f7b825)', transform: 'rotate(10deg)'*/,
        }}
      />
      <h1 className="wfp--story__title">Not authorized</h1>
      <p>
        Sorry, you are not authorized to access this page.
        <br />
        To request access please write to{' '}
        <Link href="mailto:example@wfp.org">example@wfp.org</Link>.<br />
        Go back to <Link href="http://www.wfp.org">Homepage</Link>
      </p>
    </Story>
  </Wrapper>
);

Regular.story = {
  parameters: {
    docs: {
      source: {
        code: `
import { Wrapper, Story, Icon} from "@unitednations/ui";
import { iconWfpHumEmergencyResponsePos } from '@unitednations/icons-react';

<Wrapper pageWidth="lg" spacing="md">
  <Story className="wfp--story__center wfp--story__full-height">
    <WarningSolid16
      fill="#007DBC"
      width={100}
      height={100}
      style={{
        marginBottom: '3rem'
      }}
    />
    <h1 className="wfp--story__title">Not authorized</h1>
    <p>
      Sorry, you are not authorized to access this page.
      <br />
      To request access please write to{' '}
      <Link href="mailto:example@wfp.org">example@wfp.org</Link>.<br />
      Go back to <Link href="http://www.wfp.org">Homepage</Link>
    </p>
  </Story>
</Wrapper>
      `,
      },
    },
  },
};
