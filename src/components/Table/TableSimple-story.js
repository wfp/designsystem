import React from 'react';
import { storiesOf } from '@storybook/react';
import ReactTable from 'react-table';
import { withKnobs } from '@storybook/addon-knobs';

import TablePagination from '../TablePagination';

const data = [
  {
    name: 'Emyr Monaghan',
    age: 26,
    city: 'Berlin',
  },
  {
    name: 'Madihah Watson',
    age: 28,
    city: 'Rome',
  },
  {
    name: 'Rahim Valdez',
    age: 61,
    city: 'Nairobi',
  },
  {
    name: 'Max Mustermann',
    age: 73,
    city: 'Panama Citry',
  },
  {
    name: 'Maggie Alexander',
    age: 52,
    city: 'Bangok',
  },
  {
    name: 'Kirsten Martinez',
    age: 19,
    city: 'New York',
  },
  {
    name: 'Garfield Dejesus',
    age: 78,
    city: 'Paris',
  },
];

const columns = [
  {
    Header: 'Name',
    accessor: 'name', // String-based value accessors!
  },
  {
    Header: 'Age',
    accessor: 'age',
    Cell: props => <span className="number">{props.value}</span>, // Custom cell components!
  },
  {
    Header: 'City',
    accessor: 'city', // String-based value accessors!
  },
];

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
          <td>playground</td>
          <td>apple</td>
          <td>29</td>
          <td>apple malone binam</td>
          <td>apple</td>
        </tr>
        <tr>
          <td>lorem</td>
          <td>ipsum</td>
          <td>32</td>
          <td>apple lorem dolor</td>
          <td>apple</td>
        </tr>
      </tbody>
    </table>
  ));
