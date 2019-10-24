[tippy.js-react](https://github.com/atomiks/tippy.js-react) is recommended for Tooltips in React.js and [Tippy.js](https://github.com/atomiks/tippyjs) for Vanilla.js.

### Usage

- Further information or a supplemental description can be placed inside a tooltip.
- Place the tooltip above the trigger if possible.
- Indicate the use of a tooltip by using an "?" or "i" icon if possible.
- Use tooltips with white background for larger tooltip triggered by a click and dark tooltips for smaller messages on hover

### Do not use

- Essential information:Do not place important information that is vital for task completion inside a tooltip.
- More than one tooltip: Never show more than one tooltip at a time.
- Interaction: Avoid having much interaction inside the tooltip. Only have interaction inside the tooltip if it is triggered by a click.
- Mobile devices: Avoid using tooltips on mobile devices because they fail to translate well on touch devices.
- No forms: Do not place any forms inside a tooltip. Use other methods like Modals instead.

Additional information: [Tooltip guidelines by Nielsen Norman Group](https://www.nngroup.com/articles/tooltip-guidelines/)

### Usage with react

```js
import { Tooltip } from 'react-tippy';
```

The default styling can be imported from wfp-ui. Use `tooltipStyle` for light styling and `tooltipStyleDark` for dark tooltips.

```js
import Tippy from '@tippy.js/react';
import { tooltipStyle, tooltipStyleDark } from '@wfp/ui';

<Tippy
  // options
  content="Welcome to the tooltip"
  trigger="click"
  {...tooltipStyle}>
  <span>Click here to show tooltip</span>
</Tippy>;
```

<!-- NO PROPS -->
