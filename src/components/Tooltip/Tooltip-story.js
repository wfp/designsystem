import React from 'react';
import { storiesOf } from '@storybook/react';

import { Tooltip } from 'react-tippy';
import tooltipStyle from './Tooltip';

storiesOf('Components|Tooltip', module).add('default', () => (
  <Tooltip
    // options
    title="Welcome to the tooltip"
    position="top"
    trigger="click"
    {...tooltipStyle}>
    <span>Click here to show tooltip</span>
  </Tooltip>
));
