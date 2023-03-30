import * as React from 'react';
import Toggle from '.';

export default {
  title: 'Components/UI Elements/Toggle',
  component: Toggle,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
  },
};

export const Regular = (args) => <Toggle {...args} />;

Regular.args = {
  defaultToggled: false,
  labelA: 'Off',
  labelB: 'On',
  name: 'toggle',
  onToggle: () => {},
};
