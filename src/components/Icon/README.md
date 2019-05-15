Icons are used in the product to present common actions and commands. Modify the fill property to change the color of the icon. The name property defines which icon to display. For accessibility, provide a context-rich description with the description prop.
### Full list of Icons and documentation
For a full list of icon names,  [click here](http://cdn.wfp.org/guides/ui/v1.2.0/docs/?selectedKind=%20Documentation&selectedStory=Icons).
```js
import {iconHome} from '@wfp/icons';
import { Icon } from  '@wfp/ui';
```

```js
<Icon
  icon={iconHome}
  width={100}
  height={100}
/>
```

### Use with colors (Java-script)

```js
import {iconHome} from '@wfp/icons';
import { Icon, colors } from  '@wfp/ui';
```

```js
<Icon
  icon={iconHome}
  color={colors.lime.hex}
  width={100}
  height={100}
/>
```