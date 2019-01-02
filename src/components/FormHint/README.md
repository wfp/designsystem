**FormHint** allows you to add a longer explanation to an input element.

Use the `helperText` prop instead if the information is very important for filling out the input.


```js
import { Tooltip } from 'react-tippy';
import { FormHint } from '@wfp/ui';
```

```js
<FormHint
  TooltipComponent={Tooltip}
>
  The Tooltip Content
</FormHint>
```