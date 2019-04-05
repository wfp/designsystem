The Main Navigation is a Horizontal Menu which consists of multiple
clickable items placed at the top of the page. The navigation stays
unchanged when browswing through the site and is present on every page.
The currently selected item is usually highlighted.

The MainNavigation is used across all applications, it is the starting point of the application and offers the top level navigation items.

```js
import {
  MainNavigation,
  MainNavigationItem
} from '@wfp/ui';
```

### SubNavigation

It can be combined with a Dropdown SubNavigation.

```js
import {
  SubNavigation,
  SubNavigationHeader,
  SubNavigationTitle,
  SubNavigationFilter,
  SubNavigationContent,
  SubNavigationList,
  SubNavigationGroup,
  SubNavigationItem 
} from '@wfp/ui';
```

The maximum number of items is 6 to 8 items depending on the average word length.

### Closing the SubNavigation

#### Using `refs`

From outside (using react-router, etc.) using `refs` a function can be triggered every time a route changes.

```js
class Parent extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  closeMenu = () => {
    this.child.current.onChangeSub(undefined, undefined, 'close');
  };

  render() {
    return (
      <div>
        <MainNavigation ref={this.child} />
        <button onClick={this.closeMenu}>Close everything</button>
      </div>
    );
  }
}
```

#### Using function inside `children`

From the `children` any change can be manually triggered by a function

```js
 <MainNavigation>
    {({ onChangeSub }) => {
      return (
        <React.Fragment>
          <MainNavigationItem
            subNavigation={
              <div>
                <Link
                  onClick={() => onChangeSub(undefined, undefined, 'close')}>
                  Close Demo
                </Link>
              </div>
            }>
            <User ellipsis title="Max Mustermann" />
          </MainNavigationItem>
        </React.Fragment>
      );
    }}
  </MainNavigation>
));
```

### SubNavigation for the User

An `User` `MainNavigationItem` consists out of the `User` component and a `SubNavigation`.

```html
  <MainNavigationItem
  className="wfp--main-navigation__user"
  subNavigation={
    <SubNavigation>
      <SubNavigationHeader>
        <SubNavigationTitle>Welcome Max!</SubNavigationTitle>
        <SubNavigationLink>
          <Button secondary small>Logout</Button>
        </SubNavigationLink>
      </SubNavigationHeader>
      <SubNavigationContent>
       {/* Additional content */}
      </SubNavigationContent>
    </SubNavigation>
  }>
  <User ellipsis title="Max Mustermann" />
</MainNavigationItem>
```