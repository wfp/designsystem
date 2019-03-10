**Tabs** are used to quickly navigate between views within the same context.

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


### Use with react-router

Write a custom component to use Tabs with different route handlers like `react-router`.

```js
const listElReactRouter = ({ anchor, className, to, exact, match }) => (
  <Route
    to={to}
    exact={exact}
    children={({ match }) => (
      <li className={match ? className + " wfp--tabs__nav-item--selected" : className}>
        <Link className={anchor.className} to={to}>{anchor.label}</Link>
      </li>
    )}
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