import React from 'react';
import { storiesOf } from '@storybook/react';
import ReactTable from 'react-table';
import TablePagination from './TablePagination';


const data = [{
    name: 'Emyr Monaghan',
    age: 26
  },
  {
    name: 'Madihah Watson',
    age: 28
  },
  {
    name: 'Rahim Valdez',
    age: 61
  },
  {
    name: 'Max Mustermann',
    age: 73
  },
  {
    name: 'Maggie Alexander',
    age: 52
  },
  {
    name: 'Kirsten Martinez',
    age: 19
  },
  {
    name: 'Garfield Dejesus',
    age: 78
  }];

  const columns = [
    {
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }
  ]

//PaginationComponent={Pagination}

storiesOf('Table', module)
  .addWithInfo(
    'default',
    `
      We recommend React-Table for Tables. To use the custom Pagination please use 
    `,
    () => <ReactTable
						data={data}
            defaultPageSize={5}
						columns={columns}   
            PaginationComponent={TablePagination}
					/>
  )
;
