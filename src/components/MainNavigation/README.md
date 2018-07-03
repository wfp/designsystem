The Main Navigation is a Horizontal Menu which consists of multiple
clickable items placed at the top of the page. The navigation stays
unchanged when browswing through the site and is present on every page.
The currently selected item is usually highlighted.

~~~
The maximum number of items is 6 to 8 items depending on the average word length.
~~~


### MainNavigation

| Setting         | Default     | Options               | Role                                                                                                  |
| --------------- | ----------- | --------------------- | ----------------------------------------------------------------------------------------------------- |
| children        | `undefined` | multiple `component`              | Usually multiple `MainNavigationItem` elements                                                                   |
| logo       | `undefined`      | `string` `component`   | The Logo can be either a string or a component |

### MainNavigationItem

| Setting         | Default     | Options               | Role                                                                                                  |
| --------------- | ----------- | --------------------- | ----------------------------------------------------------------------------------------------------- |
| children        | `undefined` | single `component`              | can be a link                                                                   |
| subNavigation       | `undefined`      | `component`   | If defined the MainNaviationItem will have a toggleable SubNavigation. See the `SubNavigation` component for details on usage |
