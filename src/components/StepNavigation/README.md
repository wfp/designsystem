
Step by step navigation is a way of presenting end-to-end journeys and wizard forms. It groups existing guidance and transactions into a series of steps.

### Usage with react
```js
import { StepNavigation, StepNavigationItem } from '@wfp/ui';
```

### Default types of state


- warning (warning that there is information missing)

- error (experimental)

- not-started (currently empty, because not yet started)

- locked (can't be accessed at the moment)

- skip (skipped step)

- disabled (disabled step)

- complete (completed step)