**FormControls** can be used inside a regular form or multistep form as action buttons to save and submit a form.

### Usage with react

```js
import { FormControls } from '@wfp/react';
```

| Setting          | Default        | Options         | Role                               |
| ---------------- | -------------- | --------------- | ---------------------------------- |
| className        | `undefined`    | `string`        | custom additional className        |
| onNextClick      | `undefined`    | `function`      | onClick Action                     |
| nextDisabled     | `false`        | `boolean`       | disable Next Button                |
| nextIcon         | `arrow--right` | `string`        | custom icon for Next button        |
| nextHidden       | `undefined`    | `boolean`       | hide Next button                   |
| nextText         | `Next`         | `string`,`node` | text for Next button               |
| onPreviousClick  | `undefined`    | `function`      | onClick action for Previous button |
| previousDisabled | `false`        | `boolean`       | disable Previous button            |
| previousIcon     | `arrow--left`  | `string`        | custom icon for Previous button    |
| previousHidden   | `undefined`    | `boolean`       | hide Previous button               |
| previousText     | `Previous`     | `string`,`node` | text for Previous button           |
| onSubmitClick    | `undefined`    | `function`      | no content                         |
| submitDisabled   | `undefined`    | `boolean`       | disable Submit button              |
| submitIcon       | `undefined`    | `string`        | icon for Submit button             |
| submitHidden     | `false`        | `boolean`       | hide Submit button                 |
| submitText       | `Submit`       | `string`,`node` | Text for Submit button             |
