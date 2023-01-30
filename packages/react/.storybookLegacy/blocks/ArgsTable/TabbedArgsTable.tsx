import React, { FC } from 'react';
import { ArgsTable, ArgsTableProps } from './ArgsTable';
import { TabsState } from '@storybook/components'; // '../../tabs/tabs';

export interface TabbedArgsTableProps {
  tabs: Record<string, ArgsTableProps>;
}

export const TabbedArgsTable: FC<TabbedArgsTableProps> = ({
  tabs,
  ...props
}) => {
  const entries = Object.entries(tabs);

  if (entries.length === 1) {
    return <ArgsTable {...entries[0][1]} {...props} />;
  }

  return (
    <TabsState>
      {entries.map((entry) => {
        const [label, table] = entry;
        const id = `prop_table_div_${label}`;
        return (
          <div key={id} id={id} title={label}>
            {({ active }: { active: boolean }) =>
              active ? (
                <ArgsTable key={`prop_table_${label}`} {...table} {...props} />
              ) : null
            }
          </div>
        );
      })}
    </TabsState>
  );
};
