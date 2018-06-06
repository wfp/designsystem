import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tooltip } from 'react-tippy';
import SingleComponent from '../../documentation/SingleComponent';
import tooltipStyle from './Tooltip';


storiesOf('Tooltip', module)
  .addDecorator(story => <SingleComponent>{story()}</SingleComponent>)
  .addWithInfo(
    'default',
    `
      We recommend React-Tippy for Tooltips.
    `,
    () => <Tooltip
            // options
            title="Welcome to the tooltip"
            position="top"
            trigger="click"
            {...tooltipStyle}
          >
            <span>
              Click here to show tooltip
            </span>
        </Tooltip>
  )
;
