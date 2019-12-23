import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Components|Table', module)
  .addDecorator(withKnobs)
  .add('Simple table', () => (
    <table className="wfp--table">
      <thead>
        <tr className="wfp--table-thead-row--center">
          <th colspan="2">Name</th>
          <th colspan="4">Info</th>
        </tr>
        <tr class="">
          <th colspan="1">First Name</th>
          <th colspan="1">Last Name</th>
          <th colspan="1">Age</th>
          <th colspan="1">Visits</th>
          <th colspan="1">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Max</td>
          <td>Mustermann</td>
          <td>29</td>
          <td>32</td>
          <td>confirmed</td>
        </tr>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>32</td>
          <td>21</td>
          <td>pending</td>
        </tr>
      </tbody>
    </table>
  ));
