### Elements

When applying the story classes the margins between the elements will be calculated automatically so they


```js
<div class="story">
  <h1 class="wfp--story__title">Story Title</h1>
  <h2 class="wfp--story__sub-title">The Sub Title</h2>
  <p>Some text</p>
  <ul>
    <li>A list</li>
    <li>Another list item</li>
  </ul>
</div>
```

### Selectors

| selector     | Options     | Role                                           |
| -------- | ----------- | ----------- | ---------------------------------------------- |
| `.wfp--story__title` | `none` | The main title of the story|
| `.wfp--story__sub-title` | `none` | A subtitle placed directly under the main title |
| `.wfp--story__markup` | `none` | a link to a overview of the MainNavigationItem |
| `.wfp--story__inline-highlight` | `none` | inline highlighted text |
| `.wfp--story__list` | `none` | default story list |
| `p` | `none` | regular p element |
| `ul` | `none` | regular list |
| `img` | `none` | image shown as a block element |


### html Usage

By adding `<div class="wfp--story"></div>` the story styling will be applied to all containing elements.

