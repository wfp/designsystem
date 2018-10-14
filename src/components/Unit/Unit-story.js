import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

import SingleComponent from '../../documentation/SingleComponent';
import ReactTable from 'react-table';
import Blockquote from '../Blockquote';
import TablePagination from '../TablePagination';
import Unit from './Unit';
import { withKnobs, select, text, number } from '@storybook/addon-knobs/react';

import HtmlComponent from '../../documentation/HtmlComponent';
import Html from '!!raw-loader!./Unit.html';
import { exampleStory } from '../../../.storybook/lucid-docs-addon';

const units = [
  {
    description: 'generate USD based on USD',
    sample: 12345.12345,
    setup: {
      type: 'Usd',
    },
  },
  {
    type: 'Usd',
    description: 'generate million USD based on USD and round to integer',
    sample: 12345.12345,
    setup: {
      type: 'Usd',
      input: 'million',
      output: 'million',
      maximumFractionDigits: 0,
      showZero: true,
    },
  },
  {
    description: 'generate Million USD based on USD, external style',
    sample: 12345.12345,
    setup: {
      type: 'Usd',
      input: 'external',
      output: 'million',
    },
  },
  {
    description: 'generate USD based on million USD',
    sample: 1,
    setup: {
      type: 'Usd',
      input: 'million',
      showZero: true,
    },
  },
  {
    description: 'generate Million USD based on thousands USD',
    sample: 12345.12345,
    setup: {
      type: 'Usd',
      output: 'million',
      input: 'thousand',
      showZero: true,
    },
  },
  {
    description: 'level',
    sample: 3,
    setup: {
      type: 'Level',
    },
  },
  {
    description: 'partners',
    sample: 12345,
    setup: {
      type: 'Partners',
    },
  },
  {
    description: 'beneficaries',
    sample: 12345,
    setup: {
      type: 'Beneficiaries',
    },
  },
  {
    description: 'generate billion USD based on USD',
    sample: 12345,
    setup: {
      type: 'Households',
    },
  },
  {
    description: 'display months',
    sample: 12,
    setup: {
      type: 'Months',
    },
  },
  {
    description: 'months singular',
    sample: 1,
    setup: {
      type: 'Months',
    },
  },
  {
    description: 'no settings',
    sample: 'Lorem Ipsum et jomen',
    setup: {},
  },
  {
    description: 'generate megaton',
    sample: 12345,
    setup: {
      type: 'Mt',
    },
  },
  {
    description: 'generate billion USD based on USD',
    sample: 12345,
    setup: {
      type: 'People',
    },
  },
  {
    description: 'million without a Type',
    sample: 12345,
    setup: {
      type: 'Num',
      output: 'million',
    },
  },
  {
    description: 'generate billion USD based on USD',
    sample: 5,
    setup: {
      type: 'Percentage',
      from: 100,
    },
  },
  {
    description: 'generate billion USD based on USD',
    sample: 12345,
    setup: {
      type: 'Percentage',
    },
  },
  {
    description: 'generate billion USD based on USD',
    sample: 201807,
    setup: {
      type: 'YearMonth',
    },
  },
  {
    description: 'returns no Unit',
    sample: 'Hello World',
    setup: {
      type: 'None',
    },
  },
  {
    description: 'Adds thousands comma and Trips',
    sample: 12345,
    setup: {
      type: 'Trips',
    },
  },
  {
    description: 'Generate billion USD based on USD',
    sample: 12345,
    setup: {
      type: 'Countries',
    },
  },
];

storiesOf('Unit', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme([readme]))
  .add(
    'Samples',
    withInfo({
      text: `
        Some sample Units
      `,
    })(() => {
      const columns = [
        {
          Header: 'HTML',
          accessor: 'name',
          width: 150,
          Cell: props => {
            return (
              <Unit {...props.original.setup}>{props.original.sample}</Unit>
            );
          },
        },
        {
          Header: 'SVG',
          accessor: 'name',
          width: 150,
          Cell: props => {
            return (
              <svg width="120" height="20">
                <g transform="translate(0 17)">
                  <Unit {...props.original.setup} svg>
                    {props.original.sample}
                  </Unit>
                </g>
              </svg>
            );
          },
        },
        {
          Header: 'Type',
          accessor: 'type',
          width: 150,
        },
        {
          Header: 'Description',
          accessor: 'description',
          width: 500,
        },
      ];

      return (
        <ReactTable
          data={units}
          defaultPageSize={10}
          columns={columns}
          PaginationComponent={TablePagination}
          defaultSorted={[
            {
              id: 'type',
            },
          ]}
          SubComponent={row => {
            return (
              <div style={{ padding: '20px' }}>
                <Blockquote type="code">
                  {`<Unit
  ${JSON.stringify(row.original.setup)}
>
  ${row.original.sample}
</Unit>`}
                </Blockquote>
              </div>
            );
          }}
        />
      );
    })
  )

  .add(
    'default',
    withInfo({
      text: `
        use Knobs to customize Unit component
      `,
    })(() => {
      const typeOptions = {
        None: 'None',
        Narrow: 'Narrow',
        Usd: 'Usd',
        Partners: 'Partners',
        Beneficiaries: 'Beneficiaries',
        Households: 'Households',
        Months: 'Months',
        Mt: 'Mt',
        Num: 'Num',
        YearMonth: 'YearMonth',
        Level: 'Level',
        People: 'People',
        Countries: 'Countries',
        Percentage: 'Percentage',
      };

      const decimalOptions = {
        undefined: undefined,
        thousand: 'thousand',
        million: 'million',
        billion: 'billion',
      };

      const unitProps = {
        type: select('Unit type (type)', typeOptions, 'Usd'),
        output: select(
          'Output decimal name (output)',
          decimalOptions,
          'million'
        ),
        from: select('Input decimal name (from)', decimalOptions, undefined),
        minimumFractionDigits: number(
          'minimum number of fraction digits to use (minimumFractionDigits)',
          undefined
        ),
        maximumFractionDigits: number(
          'minimum number of fraction digits to use (maximumFractionDigits)',
          undefined
        ),
        maximumSignificantDigits: number(
          'maximum number of significant digits to use (maximumSignificantDigits)',
          undefined
        ),
        hideEmpty: text('hide value if empty (hideEmpty)', undefined),
      };
      const value = text('value', 1000000);

      return <Unit {...unitProps}>{value}</Unit>;
    })
  );

/*storiesOf('Unit', module)
  .addDecorator(
    exampleStory({
      code: Html,
      options: { showAddonPanel: true },
    })
  )
  .addDecorator(story => <HtmlComponent html={Html}>{story()}</HtmlComponent>)
  .addWithInfo(
    'html',
    `
     html view
    `,
    () => null
  ); */

storiesOf('Unit', module)
  .addDecorator(
    exampleStory({
      code: Html,
      options: { showAddonPanel: true },
    })
  )
  .addDecorator(story => <HtmlComponent html={Html}>{story()}</HtmlComponent>)
  .add(
    'html',
    withInfo({
      text: `
        html view
      `,
    })(() => null)
  );
