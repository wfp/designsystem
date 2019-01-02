We recommend [React-Table](https://react-table.js.org/) for Tables.

### Pagination

To use the custom Pagination you can use the TablePagination component.

```js
import { TablePagination } from '@wfp/ui';

// Replacing the Pagination Component of React-Table

<ReactTable PaginationComponent={TablePagination} />;
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

