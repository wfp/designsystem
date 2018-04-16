import React from 'react';
import { storiesOf } from '@storybook/react';
import ReactTable from 'react-table';
import Pagination from '../PaginationV2';


const data = [{
    name: 'Tanner Linsley',
    age: 26
  },
  {
    name: 'Max Mustermann',
    age: 23
  },
  {
    name: 'Max Mustermann',
    age: 23
  },
  {
    name: 'Max Mustermann',
    age: 23
  },
  {
    name: 'Max Mustermann',
    age: 23
  },
  {
    name: 'Max Mustermann',
    age: 23
  },
  {
    name: 'Max Mustermann',
    age: 23
  }];

  const columns = [
    {
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },
    {
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    },
    {
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, 
  ]

//PaginationComponent={Pagination}

storiesOf('Table', module)
  .addWithInfo(
    'default',
    `
      We recommend React-Table for Tables.
    `,
    () => <ReactTable
						data={data}
            defaultPageSize={5}
						columns={columns}   
					/>
  )
;
