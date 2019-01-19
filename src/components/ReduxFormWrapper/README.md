ReduxFormWrapper allows you to use Input components as a `component` prop inside a [redux-form](https://redux-form.com) `Field`.

```js
import { ReduxFormWrapper } from '@wfp/ui';
```

```js
<Field
  component={ReduxFormWrapper} 
  {...otherProps}
>
  <TextInput />
</Field>
```

### Example usage for react-select or other custom Input

```js
import ReactSelect from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];


const ReactSelectHelper = (props) => (
  <div className="wfp--form-item">
    <label htmlFor={props.id} className="wfp--label">{props.labelText}</label>
    <ReactSelect
      {...props}
    />
  </div>
);

<Field
  component={ReduxFormWrapper}
  InputComponent={ReactSelectHelper}
  className="wfp--react-select-container"
  classNamePrefix="wfp--react-select"
  isMulti
  options={options}
>
  <ReactSelectHelper />
</Field>

```