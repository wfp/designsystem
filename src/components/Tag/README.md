Tags are used for items that need to be labeled, categorized, or organized using keywords that describe them.

### Usage with react
```js
import { Tag } from '@wfp/ui';
```

```js
<Tag className="some-class" type="wfp">
  This is a tag
</Tag>
```


### SCSS

#### Mixins

Mixins specific to tag are located in [src/components/Tag/_mixins.scss]().

| Name      | Params                 | Description                                |
|-----------|------------------------|--------------------------------------------|
| tag-theme | $bg-color, $text-color | Adds given background-color and text colour |

#### Modifiers

Use these modifiers with `.wfp--tag` class.

| Selector               | Description                                          |
|------------------------|------------------------------------------------------|
| .wfp--tag--beta         | Apply the colours for a beta service tag.             |
| .wfp--tag--custom       | Apply the colours for a custom tag.                   |