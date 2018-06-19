import React from 'react';
import { storiesOf } from '@storybook/react';
import SingleComponent from '../../documentation/SingleComponent';
import ReactTable from 'react-table';
import TablePagination from '../TablePagination';
import { Unit } from '../Unit';


const units = [
  {unit: 'Musd', 'description': 'Generate Million USD based on USD', sample: 12345},
  {unit: 'Usd', 'description': 'Generate Million USD based on USD', sample: 12345},
  {unit: 'Tusd', 'description': 'Generate Million USD based on USD', sample: 12345},
  {unit: 'Usd', 'description': 'Generate USD based on USD', sample: 12345},
  {unit: 'Busd', 'description': 'Generate Billion USD based on USD', sample: 12345},
  {unit: 'Littleusd', 'description': 'Generate Billion USD based on USD', sample: 12345},
  {unit: 'Partners', 'description': 'Generate Billion USD based on USD', sample: 12345},
  {unit: 'Beneficiaries', 'description': 'Generate Billion USD based on USD', sample: 12345},
  {unit: 'Households', 'description': 'Generate Billion USD based on USD', sample: 12345},
  {unit: 'Months', 'description': 'Generate Billion USD based on USD', sample: 12345},
  {unit: 'Mt', 'description': 'Generate Billion USD based on USD', sample: 12345},
  {unit: 'Littlepeople', 'description': 'Generate Billion USD based on USD', sample: 12345},
  {unit: 'People', 'description': 'Generate Billion USD based on USD', sample: 12345},
  {unit: 'Mpeople', 'description': 'Generate Billion USD based on USD', sample: 12345},
  {unit: 'Million', 'description': 'Generate Billion USD based on USD', sample: 12345},
  {unit: 'Percentage', 'description': 'Generate Billion USD based on USD', sample: 12345, from: 123456, 'additional': 'from'},
  {unit: 'SimplePercentage', 'description': 'Generate Billion USD based on USD', sample: 12345},
  {unit: 'MonthYear', 'description': 'Generate Billion USD based on USD', sample: 12345},
  {unit: 'Year', 'description': 'Generate Billion USD based on USD', sample: 12345},
  {unit: 'None', 'description': 'Returns no Unit', sample: 12345},
  {unit: 'Trips', 'description': 'Adds thousands comma and Trips', sample: 12345},
  {unit: 'Level', 'description': 'Generate Billion USD based on USD', sample: 12345},
  {unit: 'Countries', 'description': 'Generate Billion USD based on USD', sample: 12345},
];

storiesOf('Unit', module)
  //.addDecorator(story => <SingleComponent pageWidth="wider">{story()}</SingleComponent>)
  .addWithInfo(
    'default',
    `
      The example below shows an Unit.

      ~~~js
      import { Unit } from '@wfp/ui';
      ~~~


      List of available Units

      Usd: Generate Million USD based on USD 73821341 => 73.82 M USD 
      Tusd,
      Musd,
      Busd: Generate Billion USD based on USD 7331821341 => 73.82 B USD 
      Littleusd,
      Partners,
      Beneficiaries: 133212 => 133.212 Beneficiaries
      Households: 133212 => 133.212 Households
      Months,
      Mt: Format MT 50 => 50 MT
      Littlepeople,
      People,
      Mpeople,
      Million,
      Percentage: Percentage 50 / from={ 100 } => 50%
      SimplePercentage: 32.12 => 32.12 %
      MonthYear: YYYYMM / from 201709  => Sep 2017
      Year,
      None: Don't do anything 32.12 => 32.12
      NoneSvg,
      Trips: 213123 => 213.123 Trips
      Level: Format Level from 3 => Level 3
      LevelSvg,
      Countries,
      UsdSvg,
      TusdSvg,
      MusdSvg,
      PeopleSvg,
      MonthYearSvg,
      PercentageSvg,
      MtSvg,
      MusdCalc,
      UsdCalc,
      PercentageCalc,
      SimplePercentageCalc


    `,
    () => <Unit
            type="Musd"
          >231321133</Unit>
  )
  .addWithInfo(
    'available Units',
    `
      The example below shows an Unit.

      ~~~js
      import { Unit } from '@wfp/ui';
      ~~~


      List of available Units

      Usd: Generate Million USD based on USD 73821341 => 73.82 M USD 
      Tusd,
      Musd,
      Busd: Generate Billion USD based on USD 7331821341 => 73.82 B USD 
      Littleusd,
      Partners,
      Beneficiaries: 133212 => 133.212 Beneficiaries
      Households: 133212 => 133.212 Households
      Months,
      Mt: Format MT 50 => 50 MT
      Littlepeople,
      People,
      Mpeople,
      Million,
      Percentage: Percentage 50 / from={ 100 } => 50%
      SimplePercentage: 32.12 => 32.12 %
      MonthYear: YYYYMM / from 201709  => Sep 2017
      Year,
      None: Don't do anything 32.12 => 32.12
      NoneSvg,
      Trips: 213123 => 213.123 Trips
      Level: Format Level from 3 => Level 3
      LevelSvg,
      Countries,
      UsdSvg,
      TusdSvg,
      MusdSvg,
      PeopleSvg,
      MonthYearSvg,
      PercentageSvg,
      MtSvg,
      MusdCalc,
      UsdCalc,
      PercentageCalc,
      SimplePercentageCalc


    `,
    () => {


     const columns = [
      {
        Header: 'HTML',
        accessor: 'name',
        width: 150,
        Cell: props => {
          console.log(props);
          return (
          <Unit type={props.original.unit} from={props.original.from}>
            { props.original.sample }
          </Unit>
          )
        }
      },
      {
        Header: 'SVG',
        accessor: 'name',
        width: 150,
        Cell: props => {
          console.log(props);
          return (
          <svg width="120" height="20">
            <g transform="translate(0 17)">
              <Unit type={props.original.unit+'Svg'} from={props.original.from}>
                { props.original.sample }
              </Unit>
            </g>
          </svg>
          )
        }
      },
       {
        Header: 'Unit',
        accessor: 'unit',
        width: 150,
      }, {
        Header: 'Description',
        accessor: 'description',
        width: 300,
      }, {
        Header: 'Additional',
        accessor: 'additional',
        width: 100,
      }
      , {
        Header: 'Source',
        accessor: 'additional',
        width: 100,
        className: 'wfp--blockquote--code',
       Cell: props => {
        console.log(props);
        return (
          <span>
            &#60;Unit
              type={props.original.unit+'Svg'}
              from={props.original.from}&#62;
              { props.original.sample }
            &#60;/Unit&#62;
          </span>
        )
      }
      }
    ];


      return (
       <ReactTable
          data={units}
          defaultPageSize={10}
          columns={columns}
          PaginationComponent={TablePagination}
        />
      )
    }
  )
;
