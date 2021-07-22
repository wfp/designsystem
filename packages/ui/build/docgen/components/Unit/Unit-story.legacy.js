"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Unit = _interopRequireDefault(require("./Unit"));

var _react3 = require("@storybook/addon-knobs/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const units = [
//   {
//     description: 'generate USD based on USD',
//     sample: 12345.12345,
//     setup: {
//       type: 'Usd',
//     },
//   },
//   {
//     type: 'Usd',
//     description: 'generate million USD based on USD and round to integer',
//     sample: 12345.12345,
//     setup: {
//       type: 'Usd',
//       input: 'million',
//       output: 'million',
//       maximumFractionDigits: 0,
//       showZero: true,
//     },
//   },
//   {
//     description: 'generate Million USD based on USD, external style',
//     sample: 12345.12345,
//     setup: {
//       type: 'Usd',
//       input: 'external',
//       output: 'million',
//     },
//   },
//   {
//     description: 'generate USD based on million USD',
//     sample: 1,
//     setup: {
//       type: 'Usd',
//       input: 'million',
//       showZero: true,
//     },
//   },
//   {
//     description: 'generate Million USD based on thousands USD',
//     sample: 12345.12345,
//     setup: {
//       type: 'Usd',
//       output: 'million',
//       input: 'thousand',
//       showZero: true,
//     },
//   },
//   {
//     description: 'level',
//     sample: 3,
//     setup: {
//       type: 'Level',
//     },
//   },
//   {
//     description: 'partners',
//     sample: 12345,
//     setup: {
//       type: 'Partners',
//     },
//   },
//   {
//     description: 'beneficaries',
//     sample: 12345,
//     setup: {
//       type: 'Beneficiaries',
//     },
//   },
//   {
//     description: 'generate billion USD based on USD',
//     sample: 12345,
//     setup: {
//       type: 'Households',
//     },
//   },
//   {
//     description: 'display months',
//     sample: 12,
//     setup: {
//       type: 'Months',
//     },
//   },
//   {
//     description: 'months singular',
//     sample: 1,
//     setup: {
//       type: 'Months',
//     },
//   },
//   {
//     description: 'no settings',
//     sample: 'Lorem Ipsum et jomen',
//     setup: {},
//   },
//   {
//     description: 'generate megaton',
//     sample: 12345,
//     setup: {
//       type: 'Mt',
//     },
//   },
//   {
//     description: 'generate billion USD based on USD',
//     sample: 12345,
//     setup: {
//       type: 'People',
//     },
//   },
//   {
//     description: 'million without a Type',
//     sample: 12345,
//     setup: {
//       type: 'Num',
//       output: 'million',
//     },
//   },
//   {
//     description: 'generate billion USD based on USD',
//     sample: 5,
//     setup: {
//       type: 'Percentage',
//       from: 100,
//     },
//   },
//   {
//     description: 'generate billion USD based on USD',
//     sample: 12345,
//     setup: {
//       type: 'Percentage',
//     },
//   },
//   {
//     description: 'generate billion USD based on USD',
//     sample: 201807,
//     setup: {
//       type: 'YearMonth',
//     },
//   },
//   {
//     description: 'returns no Unit',
//     sample: 'Hello World',
//     setup: {
//       type: 'None',
//     },
//   },
//   {
//     description: 'Adds thousands comma and Trips',
//     sample: 12345,
//     setup: {
//       type: 'Trips',
//     },
//   },
//   {
//     description: 'Generate billion USD based on USD',
//     sample: 12345,
//     setup: {
//       type: 'Countries',
//     },
//   },
// ];
(0, _react2.storiesOf)('Components|Unit', module).addDecorator(_react3.withKnobs).addParameters({
  jest: ['Unit-test']
})
/*.add('Samples', () => {
  const columns = [
    {
      Header: 'HTML',
      accessor: 'name',
      width: 150,
      Cell: props => {
        return <Unit {...props.original.setup}>{props.original.sample}</Unit>;
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
            <Blockquote code>
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
})*/
.add('default', function () {
  var typeOptions = {
    None: 'None',
    Narrow: 'Narrow',
    Usd: 'Usd',
    Partners: 'Partners',
    Beneficiaries: 'Beneficiaries',
    Households: 'Households',
    Months: 'Months',
    Mt: 'Mt',
    Num: 'Num',
    MetricTons: 'MetricTons',
    Kg: 'Kg',
    YearMonth: 'YearMonth',
    Level: 'Level',
    People: 'People',
    Countries: 'Countries',
    Percentage: 'Percentage'
  };
  var decimalOptions = {
    undefined: undefined,
    thousand: 'thousand',
    million: 'million',
    billion: 'billion'
  };
  var unitProps = {
    type: (0, _react3.select)('Unit type (type)', typeOptions, 'Usd'),
    output: (0, _react3.select)('Output decimal name (output)', decimalOptions, 'million'),
    from: (0, _react3.select)('Input decimal name (from)', decimalOptions, undefined),
    minimumFractionDigits: (0, _react3.number)('minimum number of fraction digits to use (minimumFractionDigits)', undefined),
    maximumFractionDigits: (0, _react3.number)('minimum number of fraction digits to use (maximumFractionDigits)', undefined),
    maximumSignificantDigits: (0, _react3.number)('maximum number of significant digits to use (maximumSignificantDigits)', undefined),
    hideEmpty: (0, _react3.text)('hide value if empty (hideEmpty)', undefined)
  };
  var value = (0, _react3.text)('value', 1000000);
  return /*#__PURE__*/_react.default.createElement(_Unit.default, unitProps, value);
});