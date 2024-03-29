/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import Wrapper from '../Wrapper';

storiesOf('Components|Wrapper', module)
  //.addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const options = {
      '': 'undefined',
      xs: 'xs',
      sm: 'sm',
      md: 'md',
      lg: 'lg',
      full: 'full',
    };
    const defaultValue = 'sm';

    const pageWidth = select('pageWidth', options, defaultValue);

    const optionsMobilePageWidth = {
      '': 'undefined',
      full: 'full',
    };

    const mobilePageWidth = select(
      'mobilePageWidth',
      optionsMobilePageWidth,
      defaultValue
    );

    const optionsSpacing = {
      '': 'undefined',
      md: 'md',
      xl: 'xl',
    };

    const spacing = select('spacing', optionsSpacing, defaultValue);

    return (
      <Wrapper
        pageWidth={pageWidth}
        mobilePageWidth={mobilePageWidth}
        spacing={spacing}
      >
        Assisting 91.4 million people in around 83 countries each year, the
        World Food Programme (WFP) is the leading humanitarian organization
        saving lives and changing lives, delivering food assistance in
        emergencies and working with communities to improve nutrition and build
        resilience. As the international community has committed to end hunger,
        achieve food security and improved nutrition by 2030, one in nine people
        worldwide still do not have enough to eat. Food and food-related
        assistance lie at the heart of the struggle to break the cycle of hunger
        and poverty. On any given day, WFP has 5,000 trucks, 20 ships and 92
        planes on the move, delivering food and other assistance to those in
        most need. Every year, we distribute more than 15 billion rations at an
        estimated average cost per ration of US$ 0.31. These numbers lie at the
        roots of WFP’s unparalleled reputation as an emergency responder, one
        that gets the job done quickly at scale in the most difficult
        environments. WFP’s efforts focus on emergency assistance, relief and
        rehabilitation, development aid and special operations. Two-thirds of
        our work is in conflict-affected countries where people are three times
        more likely to be undernourished than those living in countries without
        conflict.
      </Wrapper>
    );
  });
