import React from 'react';
import Value from '.';
import Unit from '../Unit';

export default {
  title: 'Components/UI Elements/Value',
  component: Value,
  parameters: {
    componentSubtitle: 'Component',
    status: 'experimental',
  },
};

export const Regular = (args) => (
  <Value
    {...args}
    value={
      <Unit type="usd" input="thousand" output="million" showZero hideEmpty>
        1234567
      </Unit>
    }
    secondaryValue={
      <Unit type="usd" input="thousand" output="million" showZero hideEmpty>
        1234567
      </Unit>
    }
  />
);
