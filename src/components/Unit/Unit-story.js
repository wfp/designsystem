import React from 'react';
import { storiesOf } from '@storybook/react';
import SingleComponent from '../../documentation/SingleComponent';
import { Unit } from '../Unit';

storiesOf('Unit', module)
  .addDecorator(story => <SingleComponent pageWidth="wide">{story()}</SingleComponent>)
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
    () => <div>

          
          <table>
            <thead>
              <tr>
              <td>Preview</td>
              <td>type</td>
              <td>additional</td>
              </tr>
            </thead>
            <tr>
              <td>
                <Unit
                  type="Usd"
                >
                  231321133
                </Unit>
              </td>
              <td>
                Usd
              </td>
              <td>
                –
              </td>
            </tr>
            <tr>
              <td>
                <Unit
                  type="Usd"
                >
                  231321133
                </Unit>
              </td>
              <td>
                Usd
              </td>
              <td>
                –
              </td>
            </tr>
          </table>
         
          </div>
  )
;
