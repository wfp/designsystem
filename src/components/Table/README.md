We recommend [React-Table](https://react-table.js.org/) for tables. If you need Excel like features like cell editing row selection and copy/paste we recommend [ag-grid](https://www.ag-grid.com/).

### Pagination

To use the custom Pagination you can use the TablePagination component. Additional props for the TablePagination can be directly added to the `ReactTable` component (see Pagination component).


```js
import { TablePagination } from '@wfp/ui';

// Replacing the Pagination Component of React-Table

<ReactTable
  {...yourTableProps}
  PaginationComponent={TablePagination}
  {...otherPropsForThePaginationToo}
/>
```

### Responsive

By adding `ReactTable--responsive` the table will be displayed as a list on mobile devices.

```js
<ReactTable className="ReactTable--responsive" />
```

### Alternating Row colors

By adding `-striped` the table will get alternating row colors.

```js
<ReactTable className="-striped" />
```

## Highlight on hover

By adding ` -highlight` row will be highlighten on hover

```js
<ReactTable className="-highlight" />
```

## Border

By adding ` -border` a border will be added to the table

```js
<ReactTable className="-border" />
```

<!-- NO PROPS -->