The **List** component show a number of connected items written consecutively, typically one below the other.

### Length
Generally, lists should be used to present simple pieces of information. For more complex sets of data, consider using a data table.

### Order
Arrange list items in a logical way. For example, if the list is about resource use, the default order might be highest resource use to lowest. Grouping items in categories into smaller, more specific lists might be more meaningful in some contexts. Alternatively, organize in alphabetical or numeric order.

### Text
Use list items that are grammatically parallel. For example, do not mix passive voice with active voice or declarative sentences (statements) with imperative sentences (direct command).

### Usage

```js
import { List, ListItem } from @wfp/ui;
```

```js
<List>
  <ListItem title="Title of the item">First item</ListItem>
  <ListItem>Second item</ListItem>
  <ListItem>Third item</ListItem>
</List>
```
