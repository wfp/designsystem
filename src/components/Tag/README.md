### SCSS

#### Mixins

Mixins specific to tag are located in [src/components/tag/_mixins.scss]().

| Name      | Params                 | Description                                |
|-----------|------------------------|--------------------------------------------|
| tag-theme | $bg-color, $text-color | Adds given background-color and text color |

#### Modifiers

Use these modifiers with `.wfp--tag` class.

| Selector               | Description                                          |
|------------------------|------------------------------------------------------|
| .wfp--tag--ibm          | Apply the colors for an IBM branded service tag.     |
| .wfp--tag--beta         | Apply the colors for a beta service tag.             |
| .wfp--tag--third-party  | Apply the colors for a third-party vendor tag.       |
| .wfp--tag--local        | Apply the colors for a local tag.                    |
| .wfp--tag--dedicated    | Apply the colors for a dedicated tag.                |
| .wfp--tag--custom       | Apply the colors for a custom tag.                   |
| .wfp--tag--experimental | Apply the colors for an experimental tag.            |
| .wfp--tag--community    | Apply the colors for a community-driven service tag. |
| .wfp--tag--private      | Apply the colors for a private tag.                  |
| .wfp--tag--deprecated   | Apply the colors for a deprecated tag.               |
