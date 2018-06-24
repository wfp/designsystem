import React from 'react';
import { storiesOf } from '@storybook/react';

import { withReadme } from 'storybook-readme';
import readme from './README.md';


import SingleComponent from '../../documentation/SingleComponent';
import ReactTable from 'react-table';
import Blockquote from '../Blockquote';
import TablePagination from '../TablePagination';
import Unit from './Unit';
import { withKnobs, select, text, object } from '@storybook/addon-knobs/react';

const units = [
  {
    type: 'Usd',
    description: 'Generate USD based on USD',
    sample: 12345.12345,
    setup: {},
  },
  {
    type: 'Usd',
    description: 'Generate Million USD based on USD',
    sample: 12345.12345,
    setup: {
      input: 'million',
      extension: 'million',
      showZero: true,
    },
  },
  {
    type: 'Usd',
    description: 'Generate Million USD based on USD External Style',
    sample: 12345.12345,
    setup: {
      style: 'external',
      extension: 'million',
    },
  },
  {
    type: 'Usd',
    description: 'Generate USD based on Million USD',
    sample: 1,
    setup: {
      input: 'million',
      showZero: true,
    },
  },
  {
    type: 'Usd',
    description: 'Generate Million USD based on Thousands USD',
    sample: 12345.12345,
    setup: {
      extension: 'million',
      input: 'thousand',
      showZero: true,
    },
  },
  {
    type: 'Level',
    description: 'Generate Billion USD based on USD',
    sample: 12345,
  },
  {
    type: 'Partners',
    description: 'Generate Billion USD based on USD',
    sample: 12345,
  },
  {
    type: 'Beneficiaries',
    description: 'Generate Billion USD based on USD',
    sample: 12345,
  },
  {
    type: 'Households',
    description: 'Generate Billion USD based on USD',
    sample: 12345,
  },
  {
    type: 'Months',
    description: 'Display months',
    sample: 12,
  },
  {
    type: 'Months',
    description: 'Months singular',
    sample: 1,
  },
  {
    type: 'Mt',
    description: 'Generate Megaton',
    sample: 12345,
  },
  {
    type: 'People',
    description: 'Generate Billion USD based on USD',
    sample: 12345,
  },
  {
    type: 'Num',
    description: 'Million without a Type',
    sample: 12345,
    setup: {
      extension: 'million',
    },
  },
  {
    type: 'Percentage',
    description: 'Generate Billion USD based on USD',
    sample: 5,
    setup: {
      from: 100,
    },
  },
  {
    type: 'Percentage',
    description: 'Generate Billion USD based on USD',
    sample: 12345,
  },
  {
    type: 'YearMonth',
    description: 'Generate Billion USD based on USD',
    sample: 201807,
  },
  {
    type: 'None',
    description: 'Returns no Unit',
    sample: 'Hello World',
  },
  {
    type: 'Trips',
    description: 'Adds thousands comma and Trips',
    sample: 12345,
  },
  {
    type: 'Countries',
    description: 'Generate Billion USD based on USD',
    sample: 12345,
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
      const label = 'pageWidth';
      const options = {
        '': 'undefined',
        narrow: 'narrow',
      };

      const pageWidth = select(label, options, '');
      const value = text('value', undefined);

      /*

  maximumFractionDigits={2}
  maximumSignificantDigits={undefined}

*/
      const defaultValue = {
        extension: 'million',
        input: 'thousand',
        showZero: true,
      };
      const groupId = 'GROUP-ID1';

      const setup = object('Setup', defaultValue, groupId);

      const columns = [
        {
          Header: 'HTML',
          accessor: 'name',
          width: 150,
          Cell: props => {
            return (
              <Unit type={props.original.type} setup={props.original.setup}>
                {props.original.sample}
              </Unit>
            );
          },
        },
        {
          Header: 'SVG',
          accessor: 'name',
          width: 150,
          Cell: props => {
            console.log(props);

            let svgSetup = Object.assign({}, props.original.setup, {
              svg: true,
            });
            return (
              <svg width="120" height="20">
                <g transform="translate(0 17)">
                  <Unit type={props.original.type} setup={svgSetup}>
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
  type="${row.original.type}"
  setup={${JSON.stringify(row.original.setup)}}
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
        Level: 'Level',
        Countries: 'Countries',
        Percentage: 'Percentage',
      };

      const type = select('type', options, 'Usd');
      const value = text('value', 1000000);

      /*

  maximumFractionDigits={2}
  maximumSignificantDigits={undefined}
*/

      const defaultValue = {
        extension: 'million',
        input: 'thousand',
        showZero: true,
      };
      const groupId = 'Setup';
      const setup = object('Setup', defaultValue, groupId);

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
            <Unit type={type} setup={setup}>
              {value}
            </Unit>
          </div>
          <p>Use Knobs to customize the Probs of the Unit Component.</p>
          <div>
            <Blockquote title="Generated Code" type="code">
              {`<Unit
  type="${type}"
  setup={${JSON.stringify(setup)}}
>
  ${value}
</Unit>`}
            </Blockquote>
          </div>
        </div>
      );
    }
  );
