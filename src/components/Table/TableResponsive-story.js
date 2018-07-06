import React from 'react';
import { storiesOf } from '@storybook/react';
import ReactTable from 'react-table';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

import TablePagination from '../TablePagination';
import { List, ListElement } from '../List';
import Button from '../Button';

const data = [
  {
    outcome_indicator: 'Consumption-based Coping Strategy Index (Average)',
    target_location: 'Chipinge',
    data_source: 'Base Value: 2017.12, Joint survey, Baseline Survey',
    base_value_male: '12.06',
    base_value_female: '21.8',
    base_value_overall: '19.43',
    latest_follow_up_male: '12.06',
    latest_follow_up_female: '23.8',
    latest_follow_up_overall: '13.43',
    year_end_target_male: '18.06',
    year_end_target_female: '21.8',
    year_end_target_overall: '12.43',
    csp_end_target_male: '18.06',
    csp_end_target_female: '20.8',
    csp_end_target_overall: '13.43',
  },
];

const InlineMobile = props => {
  return (
    <div className="ReactTable--responsive__cell">
      <span className="ReactTable--responsive__cell__title">
        {props.column.Header}
      </span>
      <span className="ReactTable--responsive__cell__content">
        {props.value}
      </span>
    </div>
  );
};

const GenderBreakdown = props => {
  return (
    <List kind="simple">
      <ListElement title="Male">
        {props.original.csp_end_target_female}
      </ListElement>
      <ListElement title="Female">
        {props.original.csp_end_target_female}
      </ListElement>
      <ListElement title="Overfall">
        {props.original.csp_end_target_female}
      </ListElement>
    </List>
  );
};

const ResponsiveExpanderComponent = props => (
  <div className={`rt-expander ${props.isExpanded ? '-open' : ''}`}>
    <Button small>{props.isExpanded ? 'Hide Details' : 'Show Details'}</Button>
  </div>
);

const columns = [
  {
    Header: 'Outcome Indicator',
    accessor: 'outcome_indicator',
    Cell: InlineMobile,
  },
  {
    Header: 'Target / Location',
    accessor: 'target_location',
    Cell: InlineMobile,
  },
  {
    Header: 'Base Value',
    accessor: 'base_value_overall',
    Cell: GenderBreakdown,
  },
  {
    Header: 'Latest Follow Up',
    accessor: 'latest_follow_up_overall',
    Cell: GenderBreakdown,
  },
  {
    Header: 'Year End Target',
    accessor: 'year_end_target_overall',
    Cell: GenderBreakdown,
  },
  {
    Header: 'CSP End Target',
    accessor: 'csp_end_target_overall',
    Cell: GenderBreakdown,
  },
];

//PaginationComponent={Pagination}

storiesOf('Table', module)
  .addDecorator(withReadme([readme]))
  .addWithInfo(
    'responsive',
    `
      We recommend [React-Table](https://react-table.js.org/) for Tables. To use the custom Pagination you can use the TablePagination component.
    `,
    () => (
      <ReactTable
        data={data}
        defaultPageSize={5}
        className="ReactTable--responsive"
        columns={columns}
        minRows={1}
        ExpanderComponent={ResponsiveExpanderComponent}
        PaginationComponent={TablePagination}
        SubComponent={row => {
          console.log(row);
          return (
            <div className="ReactTable__subcomponent">
              {row.original.data_source}
            </div>
          );
        }}
      />
    )
  );
