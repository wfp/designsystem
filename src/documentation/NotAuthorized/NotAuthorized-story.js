/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../../components/Link';
import Story from '../../components/Story';
import Icon from '../../components/Icon';
import Wrapper from '../../components/Wrapper';
import { iconWarningSolid } from '@wfp/icons';

storiesOf(' Design|Templates', module)
  .addParameters({ hideProps: true })
  .add('Not authorized', () => (
    <Wrapper pageWidth="lg" spacing="md">
      <Story className="wfp--story__center wfp--story__full-height">
        <Icon
          icon={iconWarningSolid}
          fill="#0a6eb4"
          width={100}
          height={100}
          style={{
            marginBottom:
              '3rem' /*,
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
  ));
