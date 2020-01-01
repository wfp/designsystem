Breadcrumb enables users to quickly see their location within a path of navigation and move up to a parent level if desired.

```js
import { Breadcrumb, BreadcrumbItem, BreadcrumbHome } from '@wfp/ui';
```

```js
 <Breadcrumb>
  <BreadcrumbItem>
    <a href="/#">
      <BreadcrumbHome />
    </a>
  </BreadcrumbItem>
  <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem> // Regular link
  <BreadcrumbItem><NavLink to="link">Using NavLink</NavLink></BreadcrumbItem> // Using a custom link with react-router
  <BreadcrumbItem disableLink>Breadcrumb 3</BreadcrumbItem> // disable link
</Breadcrumb>
```