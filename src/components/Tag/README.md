Tags are used for items that need to be labeled, categorized, or organized using keywords that describe them.

### SCSS

#### Mixins

Mixins specific to tag are located in [src/components/Tag/_mixins.scss]().

| Name      | Params                 | Description                                |
|-----------|------------------------|--------------------------------------------|
| tag-theme | $bg-color, $text-color | Adds given background-color and text color |

#### Modifiers

Use these modifiers with `.wfp--tag` class.

| Selector               | Description                                          |
|------------------------|------------------------------------------------------|
| .wfp--tag--beta         | Apply the colors for a beta service tag.             |
| .wfp--tag--custom       | Apply the colors for a custom tag.                   |