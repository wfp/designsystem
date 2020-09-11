import React from 'react';
import { usePagination, useSortBy, useTable } from 'react-table';
import makeData, { sampleColumns } from './makeData';
import markdown from './README.mdx';

import Table from './Table';
import TableSorting from './TableSorting';
import Pagination from '../Pagination';
import ReactDOMServer from 'react-dom/server';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

function ReactTable({ columns, data, withBorder }) {
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
    <Table {...getTableProps()} withBorder={withBorder}>
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

function ReactTablePagination({ columns, data, withBorder }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 },
    },
    usePagination
  );

  const changePage = (page) => {
    //const nextPage = getSafePage(page.page - 1);

    // Update Page
    //if (page !== nextPage) {
    gotoPage(page.page - 1);
    //}
    console.log('update pageSize', page);

    // Update PageSize
    if (pageSize !== page.pageSize) {
      setPageSize(page.pageSize);
    }
  };

  // Render the UI for your table
  return (
    <>
      <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage,
            },
            null,
            2
          )}
        </code>
      </pre>
      <Table {...getTableProps()} withBorder={withBorder}>
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
          {page.map((row, i) => {
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
      </Table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <Pagination
        pageSize={pageSize}
        pageSizes={[10, 20, 30]}
        page={pageIndex + 1}
        totalItems={data.length}
        onChange={changePage}
      />
    </>
  );
}

function ReactTableSorting({ columns, data, withBorder }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: [
          {
            id: 'age',
            desc: false,
          },
        ],
      },
    },
    useSortBy
  );
  return (
    <Table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              // Add the sorting props to control sorting. For this example
              // we can add them into the header props
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                {/* Add a sort direction indicator */}
                <TableSorting {...column} />
              </th>
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

export const TableRegular = (args) => {
  const columns = React.useMemo(() => sampleColumns, []);

  const data = React.useMemo(() => makeData(3), []);
  return <ReactTable {...args} columns={columns} data={data} />;
};

export const TableSortingHeader = (args) => {
  const columns = React.useMemo(() => sampleColumns, []);

  const data = React.useMemo(() => makeData(8), []);
  return <ReactTableSorting {...args} columns={columns} data={data} />;
};

export const TablePagination = (args) => {
  const columns = React.useMemo(() => sampleColumns, []);

  const data = React.useMemo(() => makeData(25), []);

  return <ReactTablePagination {...args} columns={columns} data={data} />;
};

const hello = `
Imagine this to be a \`much\` longer block of text that spans
several lines.
`;

TablePagination.story = {
  parameters: {
    docs: {
      storyDescription: hello,
    },
  },
};
