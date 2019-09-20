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


### Custom icon

The icon can be any react component like a svg image or an icon from FontAwesome.
If you want to use a custom monochrome icon please generate it via Guidelines > Icons page instead.

```js
import { Icon } from  '@wfp/ui';
```

```js

// Any react node
const customIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path d="M5 0h6v2H5zM2 3v3h1v10h10V6h1V3H2zm5 11H5V7h2v7zm4 0H9V7h2v7z" />
  </svg >
);

<Icon
  icon={customIcom}
  color={colors.lime.hex}
  width={100}
  height={100}
/>

// Custom icon inside a Button component
<Button icon={customIcon} kind="secondary">Button with custom icon</Button>

```