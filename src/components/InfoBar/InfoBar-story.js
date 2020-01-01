import React from 'react';
import { storiesOf } from '@storybook/react';

import InfoBar from './InfoBar';
import Link from '../Link';

storiesOf('Components|InfoBar', module)
  .addDecorator(story => <div style={{ width: '100vw' }}>{story()}</div>)
  .add('Default', () => (
    <InfoBar>
      InfoBar with content. <Link href="#">Click here</Link> to do Something.
    </InfoBar>
  ));
