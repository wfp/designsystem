import React from 'react';
import { storiesOf } from '@storybook/react';
import { useTable } from 'react-table';
import { withKnobs } from '@storybook/addon-knobs';
import Table from './Table';
import Pagination from '../Pagination';

const data = [
  {
    lastName: 'Monaghan',
    firstName: 'Emyr',
    age: 26,
    city: 'Berlin',
    status: 'verified',
  },
  {
    lastName: 'Watson',
    firstName: 'Madihah',
    age: 28,
    city: 'Rome',
    status: 'verified',
  },
  {
    lastName: 'Valdez',
    firstName: 'Rahim',
    age: 61,
    city: 'Nairobi',
    status: 'verified',
  },
  {
    lastName: 'Mustermann',
    firstName: 'Max',
    age: 73,
    city: 'Panama Citry',
    status: 'submitted',
  },
  {
    lastName: 'Alexander',
    firstName: 'Maggie',
    age: 52,
    city: 'Bangok',
    status: 'verified',
  },
  {
    lastName: 'Martinez',
    firstName: 'Kirsten',
    age: 19,
    city: 'New York',
    status: 'verified',
  },
  {
    lastName: 'Dejesus',
    firstName: 'Garfield',
    age: 78,
    city: 'Paris',
    status: 'verified',
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
    Cell: (props) => <span className="number">{props.value}</span>, // Custom cell components!
  },
  {
    Header: 'City',
    accessor: 'city', // String-based value accessors!
  },
];

function ContentTable({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <Table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

function ContentPaginationTable({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <>
      <Table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <Pagination />
      </Table>
    </>
  );
}

function TableStory() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Status',
            accessor: 'status',
          },
        ],
      },
    ],
    []
  );

  return <ContentTable columns={columns} data={data} />;
}

function TablePaginationStory() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Status',
            accessor: 'status',
          },
        ],
      },
    ],
    []
  );

  return <ContentPaginationTable columns={columns} data={data} />;
}
storiesOf('Components|Table (experimental)', module)
  .addDecorator(withKnobs)
  .add('Default', () => <TableStory />)
  .add('with Pagination', () => <TablePaginationStory />);
