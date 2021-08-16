import React from 'react';
import { usePagination, useSortBy, useTable } from 'react-table';
import makeData, { sampleColumns } from './makeData';
import markdown from './README.mdx';

import Table from './Table';
import TableSorting from './TableSorting';
import Pagination from '../Pagination';

export default {
  title: 'Components/UI Elements/Table',
  component: Table,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

function ReactTable({ columns, data, withBorder }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
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
    pageCount,
    gotoPage,
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
    gotoPage(page.page - 1);

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
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
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

export const Regular = (args) => (
  <Table>
    <thead>
      <tr>
        <th>Header content 1</th>
        <th>Header content 2</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <td>Footer content 1</td>
        <td>Footer content 2</td>
      </tr>
    </tfoot>
    <tbody>
      <tr>
        <td>Body content 1</td>
        <td>Body content 2</td>
      </tr>
    </tbody>
  </Table>
);

export const UsingReactTable = (args) => {
  const columns = React.useMemo(() => sampleColumns, []);

  const data = React.useMemo(() => makeData(3), []);
  return <ReactTable {...args} columns={columns} data={data} />;
};

const text = `
We recommend [React-Table](https://github.com/react-tools/react-table) for tables with additional complexity. If you need Excel like features like cell editing row selection and copy/paste we recommend [ag-grid](https://www.ag-grid.com/).
`;

UsingReactTable.story = {
  parameters: {
    docs: {
      storyDescription: text,
    },
  },
};

export const TableSortingHeader = (args) => {
  const columns = React.useMemo(() => sampleColumns, []);

  const data = React.useMemo(() => makeData(8), []);
  return <ReactTableSorting {...args} columns={columns} data={data} />;
};

TableSortingHeader.story = {
  parameters: {
    docs: {
      storyDescription: `Sorting`,
    },
  },
};

export const TablePagination = (args) => {
  const columns = React.useMemo(() => sampleColumns, []);

  const data = React.useMemo(() => makeData(25), []);

  return <ReactTablePagination {...args} columns={columns} data={data} />;
};

const hello = `
To use the custom Pagination you can use the TablePagination component. Additional props for the TablePagination can be directly added to the \`ReactTable\` component (see Pagination component).


\`\`\`js
import { TablePagination } from '@wfp/ui';

// Replacing the Pagination Component of React-Table

<ReactTable
  {...yourTableProps}
  PaginationComponent={TablePagination}
  {...otherPropsForThePaginationToo}
/>
\`\`\`
`;

TablePagination.story = {
  parameters: {
    docs: {
      storyDescription: hello,
    },
  },
};
