import React from 'react';
import { TabbedArgsTable } from './TabbedArgsTable';
import { Normal, Compact, Sections } from './ArgsTable.stories';

export default {
  component: TabbedArgsTable,
  title: 'Docs/TabbedArgsTable',
};

const Template = (args) => <TabbedArgsTable {...args} />;

export const Tabs = Template.bind({});
Tabs.args = {
  tabs: {
    Normal: Normal.args,
    Compact: Compact.args,
    Sections: Sections.args,
  },
};

export const TabsInAddonPanel = Template.bind({});
TabsInAddonPanel.args = {
  tabs: {
    Normal: Normal.args,
    Compact: Compact.args,
    Sections: Sections.args,
  },
  inAddonPanel: true,
};

export const Empty = Template.bind({});
Empty.args = {
  tabs: {},
};
