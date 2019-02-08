
Using the **ReadMore** component is a simple way to keep longer content from cluttering up your page, giving you more control over how much content is displayed to visitors.

### Use with custom content for collapsed and expanded state

The `collapsed` props content will be displayed if the content is collapsed.
```js
<ReadMore collapsed="Collapsed content">
  Expanded content
</ReadMore>
```
### Truncate text

Based on the type of content use [react-truncate](https://www.npmjs.com/package/react-truncate) or [react-truncate-html](https://www.npmjs.com/package/react-truncate-html) to truncate the collapsed content.

```js
import Truncate from 'react-truncate';
```

```js
<ReadMore
  collapsed={
    <Truncate lines={1} ellipsis="...">{moreText}</Truncate>
  }
 >
  Expanded content
</ReadMore>
```

### Fade & animate

The `maxHeight` prop will allow the content to be collapsed if it extends a specific height. It will only work without the `collapsed` prop.
```js
<ReadMore  fade  maxHeight={30}>
	The content
</ReadMore>
```