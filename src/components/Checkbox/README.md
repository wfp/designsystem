Checkboxes are used for a list of options where the user may select multiple options, including all or none.

### Checkbox states
The checkbox control allows for three states: selected, unselected, and indeterminate. The indeterminate state comes into play when the checkbox contains a sublist of selections, some of which are selected, and some unselected.

### Click target
Users should be able to select the checkbox by clicking on the box directly or by clicking on its label.

### Default selection
The default view of a set of checkboxes is having no option selected.

[Carbon Design System Usage for checkboxes](https://next.carbondesignsystem.com/components/checkbox)

### Usage with react
```js
import { Checkbox } from '@wfp/ui';
```

```js
<Checkbox
  className="some-class"
  labelText="Checkbox label"
  indeterminate={false}
  disabled={false}
  hideLabel={false}
  wrapperClassName="additionalWrapperClass"
  onChange={onChange}
/>
```