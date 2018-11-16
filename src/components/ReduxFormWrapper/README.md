ReduxFormWrapper allows you to use Input components as a `component` prop inside a [redux-form](https://redux-form.com) `Field`.

```js
import { ReduxFormWrapper } from '@wfp/ui';
```

```js
<Field component={ReduxFormWrapper(TextInput)} {...otherProps} />
```

### Example usage for react-select

```js
import ReactSelect from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

<Field
  component={ReduxFormWrapper(ReactSelect)}
  className="wfp--react-select-container"
  classNamePrefix="wfp--react-select"
  isMulti
  options={options}
/>
```