Links are typically used as a means of navigation either within the application, to a place outside, or to a resource. For anything else, especially things that change data and actions, you should be using a button.

Links can have the same properties as a regular `<a>`-element.

### Use with react-router

Use the Link styling by adding the className `wfp--link` to `<NavLink />`

```js
import { Link } from '@wfp/ui';
```

```js
<NavLink className="wfp--link">Link</NavLink>
```
