The BannerNavigation is used on internal applications which are actually listed on the bar only to crosslink between the applications. It is hidden on Mobile devices.

### Usage with default content

`BannerNavigationWithContent` will contain the default links.

```js
import { BannerNavigationWithContent } from '@wfp/ui';
```

```js
<BannerNavigationWithContent pageWidth="narrow" />
```

### Usage with custom content

`BannerNavigation` allows you to use custom `BannerNavigationItem` components inside.

```js
import { BannerNavigation } from '@wfp/ui';
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

| Setting   | Default     | Options              | Role                                                               |
| --------- | ----------- | -------------------- | ------------------------------------------------------------------ |
| children  | `undefined` | `string`             | List of `BannerNavigationItem` components                          |
| className | `undefined` | `string` `undefined` | Additional className which will be added to the `BannerNavigation` |
| id        | `false`     | `boolean`            | Sets an `id`                                                       |
| pageWidth | `undefined` | `string`             | See `Wrapper` component for possible arguments                     |
