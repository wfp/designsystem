The **FormError** is displayed at the top of the form if a form is not valid when trying to submit it.

### Usage with react

```js
import { FormError } from '@wfp/react';
```

### Props

| Setting      | Default     | Options   | Role                                    |
| ------------ | ----------- | --------- | --------------------------------------- |
| className    | `undefined` | `string`  | custom additional className             |
| message      | `undefined` | `object`  | an object of the error message          |
| submitFailed | `false`     | `boolean` | the Error Message is only shown if true |

### `message` object structure

```js
{
  generic: 'Something went terribly wrong',
  fields: [
    {key: 'fieldkey', message: 'One field which is wrong'},
    {key: 'anotherfieldkey', message: 'Another field which is wrong'}
  ]
}
```
