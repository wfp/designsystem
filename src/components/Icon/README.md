Icons are used in the product to present common actions and commands. Modify the fill property to change the color of the icon. The name property defines which icon to display. For accessibility, provide a context-rich description with the description prop. For a full list of icon names, see carbondesignsystem.com/style/iconography/library

```js
import { Icon } from '@wfp/ui';
```

```js
<Icon name="search" width={100} height={100} />
```

| Setting     | Default     | Options                                                                                                      | Role                              |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------- |
| className   | `None`      |                                                                                                              | The CSS class name.               |
| description | `None`      |                                                                                                              | The icon description.             |
| name        | `undefined` | `string`                                                                                                     | the icon used                     |
| width       | `None`      | `int`                                                                                                        | The `<svg>` `width` attribute.    |
| height      | `None`      | `int`                                                                                                        | The `<svg>` `height` attribute.   |
| fill        | `None`      | `color`                                                                                                      | The `<svg>` `fill` attribute.     |
| fillRule    | `None`      |                                                                                                              | The `<svg>` `fillRule` attribute. |
| icon        | `None`      | {{<br/>width: string,<br>height: string,<br>viewBox: string.isRequired,<br>svgData: object.isRequired<br/>}} | The icon data for custom icons    |
| name        | `None`      |                                                                                                              | The name in the sprite.           |
| role        | `None`      |                                                                                                              | The `role` attribute.             |
| style       | `None`      |                                                                                                              | The CSS styles.                   |
| viewBox     | `None`      |                                                                                                              | The `<svg>` `viewbox` attribute.  |
| iconRef     | `None`      |                                                                                                              | The `ref` callback for the icon.  |
