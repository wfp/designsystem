**ContentSwitcher** manipulates the content shown following an exclusive or “either/or” pattern. It is used to toggle between two or more content sections within the same space on screen. Only one section can be shown at a time.

### Text

Be concise and specific. Titles have a max of two words.

### Default selection

Based on usage, there should be a default selection. The default selection is always the first option in a switcher.

ContentSwitcher is forked from [Carbon Components](https://www.carbondesignsystem.com/components/content-switcher/code)

### Usage with react

```js
import { ContentSwitcher, Switch } from '@wfp/ui';
import { iconAddGlyph } from '@wfp/icons';
```

```js
<ContentSwitcher onChange={onChangeAction}>
  <Switch
    name="one"
    text="First section"
    onClick={onClickAction}
    kind="anchor"
    href="#"
    icon={iconAddGlyph}
  />
  <Switch name="two" text="Second section" />
  <Switch name="three" text="Third section" />
</ContentSwitcher>
```
