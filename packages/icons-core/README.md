## icons-core

This tool generates a optimized icon library from a folder of svg files using [svgo](https://github.com/svg/svgo) and [react-svgr](https://react-svgr.com/).

### Usage with cmd

### Usage with node.js

```js
const iconGenerator = require('@un/icons-core');

iconGenerator({ src: '/folder', output: '/outputFolder' });
```

#### Structure

- index.js
- files/[name].js
- metadata.json
