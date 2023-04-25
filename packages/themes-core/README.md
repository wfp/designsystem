## Style-dictionary

The themes core generates design tokens by using [Style Dictionary](https://amzn.github.io/style-dictionary/#).

Generate tokens
`npm run build`

### Using existing theme

TODO: Add paragraph
import variables from @wfp/themes-core/scss/variables;

## Building a theme

### Generate Source json on your own

The source can be `json`, preferably generated from Figma using [Design Tokens](https://github.com/lukasoppermann/design-tokens).

An example can be found in `tokens/design-tokens.tokens.json`

```jsx
// Add this to your package.json to generate a theme
scripts: {
    "build:theme": "node buildTheme.js",
}
```

```jsx
// buildTheme.js configuration

const { config } = require('@wfp/themes-core/config.js');

/* config() can be configured

Source: defines the lookup for finding
Example can be found in tokens/design-tokens.tokens.json

source = "tokens/**\/*.json"

BuildPath: Output for the build
buildPath = "dist"
*/

config({ source, buildPath });
```
