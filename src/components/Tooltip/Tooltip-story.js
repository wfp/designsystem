import React from 'react';
import { storiesOf } from '@storybook/react';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

import { Tooltip } from 'react-tippy';
import tooltipStyle from './Tooltip';

storiesOf('Tooltip', module)
  .addDecorator(withReadme([readme]))
  .add(
    'default',
    () => (
      <Tooltip
        // options
        title="Welcome to the tooltip"
        position="top"
        trigger="click"
        {...tooltipStyle}>
        <span>Click here to show tooltip</span>
      </Tooltip>
    ),
    {
      info: {
        text: readme,
      },
    }
  );
