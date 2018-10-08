The BannerNavigation is used on internal applications only and allows the user to quickly switch to other important applications.

### Usage with default content

```js
import { BannerNavigationWithContent } from  '@wfp/ui';
```
```js
 <BannerNavigationWithContent pageWidth="narrow" />
```

### Usage with custom content

```js
import { BannerNavigation } from  '@wfp/ui';
```
```js
 <BannerNavigation>
  <BannerNavigationItem>
    <Link href="http://communities.wfp.org" target="_blank">
      Communities
    </Link>
  </BannerNavigationItem>
  <BannerNavigationItem>
    <Search
      banner
      id="search-2"
      labelText="Search"
      placeHolderText="Search"
      onChange={action('onChange')}
    />
  </BannerNavigationItem>
</BannerNavigation>
```
| Setting | Default | Options | Role |
| -------- | ----------- | -------------------- | ---------------------------------------------- |
| alt | `undefined` | `string` | The alt-text of the avatar |
| name | `undefined` | `string`  `undefined` | The user name. If `undefined` only the avatar image will be displayed  |
| ellipsis | `false` | `boolean` | Sets the max-width of the user name to `130px` and shows an ellipsis  |
| image | `undefined` | `string` | Url to an avatar image The size of the image is `25px` * `25px`. Provide at least `50px` * `50px` to support HiDPI displays. |