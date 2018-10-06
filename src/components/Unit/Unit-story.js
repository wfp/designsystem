import React from 'react';
import { storiesOf } from '@storybook/react';

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
  .addDecorator(story => (
    <SingleComponent pageWidth="wide">{story()}</SingleComponent>
  ))
  .addWithInfo(
    'default',
    `
      Default minimal usage
    `,
    () => <Unit type="Usd">231321133</Unit>
  )
  .addWithInfo(
    'Samples',
    `
      Some usage samples
    `,
    () => {
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
          width: 300,
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
    }
  )
  .addWithInfo(
    'Options',
    `
      Use Knobs to configure the options
    `,
    () => {
      const options = {
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

      const type = select('type', options, 'Usd');
      const output = text('output', 'million');
      const value = text('value', 1000000);
      const from = text('from', undefined);
      const minimumFractionDigits = number('minimumFractionDigits', undefined);
      const maximumFractionDigits = number('maximumFractionDigits', undefined);
      const maximumSignificantDigits = number(
        'maximumSignificantDigits',
        undefined
      );
      const hideEmpty = text('hideEmpty', undefined);

      return (
        <div>
          <h3>Preview</h3>

          <div
            style={{
              display: 'flex',
              border: '1px solid #CCC',
              marginBottom: '1em',
              justifyContent: 'center',
              alignItems: 'center',
              height: '70px',
            }}>
            <Unit
              type={type}
              from={from}
              minimumFractionDigits={minimumFractionDigits}
              maximumFractionDigits={maximumFractionDigits}
              maximumSignificantDigits={maximumSignificantDigits}
              hideEmpty={hideEmpty}
              output={output}>
              {value}
            </Unit>
          </div>
          <p>Use Knobs to customize the Probs of the Unit Component.</p>
          <div>
            <Blockquote title="Generated Code" type="code">
              {`<Unit
  type="${type}"
  from="${from}"
  minimumFractionDigits="${minimumFractionDigits}"
  maximumSignificantDigits="${maximumSignificantDigits}"
  hideEmpty="${hideEmpty}"
>
  ${value}
</Unit>`}
            </Blockquote>
          </div>
        </div>
      );
    }
  );

storiesOf('Unit', module)
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
  );
