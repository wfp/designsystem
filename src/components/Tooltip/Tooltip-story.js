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
    We recommend [React-Tippy](https://github.com/tvkhoa/react-tippy) for Tooltips.
    ~~~js
    import { Tooltip } from 'react-tippy';
    ~~~

    The default white styling can be imported from wfp-ui:

    ~~~js
    import tooltipStyle from '@wfp/ui';
    
    [...]

    <Tooltip
    {...tooltipStyle}
    >

    [...]
     ~~~

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
