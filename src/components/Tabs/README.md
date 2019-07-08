**Tabs** are used to quickly navigate between views within the same context.

### Usage with react
```js
import { Tabs, Tab, TabContent } from '@wfp/ui';
```

### Use a custom Tab Link Component

  A custom `renderAnchor` replaces the Link inside the `<Tab/>` Component
```js
const el = props => {
	return <a href={props.href}>{props.label}</div>;
};
```
  
```js
<Tab
	{...props.tab()}
	label="Tab label 4"
	href="http://www.fr.wfp.org"
	renderAnchor={el}
/>
```

  A custom `renderListElement` replaces the whole tab element inside the `<Tab/>` Component, which is especially relevant if you use `<Tabs/>` with react-router, etc.
```js
const  listEl  = (props) => (
	<NavLink
		{...props}
		activeClassName="wfp--tabs__nav-item--selected"
	>
		{props.label}
	</NavLink>
);
```
  
```js
<Tab
	{...props.tab()}
	label="Tab label 4"
	href="http://www.fr.wfp.org"
	renderListElement={listEl}
/>
```
s
### Use with react-router

Write a custom component to use Tabs with different route handlers like `react-router`.

```js
const listElReactRouter = ({ index, selected, label, to, exact, handleTabClick }) => (
  <Route
    path={to}
    exact={exact}
    children={({ match }) => {
      if (match && !selected) {
        /* handle the Tab changes */
        handleTabClick(index, label);
      }
      return (
        <div className={match ? "wfp--tabs__nav-item wfp--tabs__nav-item--selected" : "wfp--tabs__nav-item"}>
          <Link className="wfp--tabs__nav-link" to={to}>{label}</Link>
        </div>
      )
    }}
  />
);
```

```js
<Tabs customTabContent={true}>
  <Tab
    label="React-Router Example"
    to="/path"
    renderListElement={listElReactRouter}
  />
</Tabs>
```