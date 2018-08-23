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

By adding `ReactTable--alternate-row` the table will get alternating row colors.

```js
<ReactTable className="ReactTable--alternate-row" />
```
