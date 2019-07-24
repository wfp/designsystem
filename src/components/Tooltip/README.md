[tippy.js-react](https://github.com/atomiks/tippy.js-react) is recommended for Tooltips in React.js and [Tippy.js](https://github.com/atomiks/tippyjs) for Vanilla.js.

```js
import { Tooltip } from 'react-tippy';
```

The default styling can be imported from wfp-ui.

```js
import { tooltipStyle } from '@wfp/ui';

[...]

<Tooltip
  // options
  title="Welcome to the tooltip"
  {...tooltipStyle}>
  <span>Click here to show tooltip</span>
</Tooltip>

[...]
```

<!-- NO PROPS -->