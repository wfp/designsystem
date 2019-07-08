Checkboxes are used for a list of options where the user may select multiple options, including all or none.

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