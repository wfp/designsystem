import React,{ useMemo, useEffect } from 'react'
import { useTable, usePagination, useGlobalFilter } from 'react-table'
import MOCKDATA from './MockData.json'
import { COLUMNS } from './columns';
import Table from '../../components/Table'
import Pagination from '../../components/Pagination';

function DataTable({filterText, advanceFilter}) {
    const columns = useMemo(()=> COLUMNS, [])
    const data = useMemo(()=> MOCKDATA, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        canPreviousPage,
        canNextPage,
        page,
        gotoPage,
        nextPage,
        previousPage,
        prepareRow,
        setPageSize,
        state: { pageIndex, pageSize, globalFilter },
        setGlobalFilter
    }= useTable(
        {
        columns,
        data
        },
        useGlobalFilter,
        usePagination
    )

    useEffect(() => {
    if(filterText){
        setGlobalFilter(filterText)
    }else{
        console.log("advance",advanceFilter)
        setGlobalFilter(undefined)
    }
    },[filterText])

    const changePage = (page) => {
        gotoPage(page.page - 1);
    
        // Update PageSize
        if (pageSize !== page.pageSize) {
          setPageSize(page.pageSize);
        }
      };

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
                {page.map((row, i) => {
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
        <Pagination
        pageSize={pageSize}
        pageSizes={[10, 20, 30]}
        page={pageIndex + 1}
        totalItems={data.length}
        onChange={changePage}
      />
        </>
    )
}

export default DataTable;
