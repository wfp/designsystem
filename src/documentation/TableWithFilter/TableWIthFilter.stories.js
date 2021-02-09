import React from 'react';

import markdown from './README.mdx';
import TableWithFilter from './TableWithFilter';
import RegularPage from '../RegularPage';

export default {
  title: 'Templates/TableWithFilter',
  component: TableWithFilter,
  parameters: {
    componentSubtitle: 'Example',
    mdx: markdown,
    previewWidth: 'full',
  },
};

export const Regular = (args) => <TableWithFilter />;

Regular.decorators = [
    (Story) => (
      <RegularPage title="Table with filter" withoutSecondaryTabs pageWidth="lg">
        <Story />
      </RegularPage>
    ),
];