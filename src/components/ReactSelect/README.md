We recommend [React Select](https://react-select.com) for multiselect, autocomplete or ajax inputs.

### Usage

To use the WFP UI styling add the following className and classNamePrefix props.

```js
 <Select
    className="wfp--react-select-container"
    classNamePrefix="wfp--react-select"
  />
```


Use with Label

```js
<div className="wfp--form-item" style={{ minWidth: '400px' }}>
  <label htmlFor="abc" className="wfp--label">The Label</label>
    <ReactSelect
      className="wfp--react-select-container"
      classNamePrefix="wfp--react-select"
      isMulti
      id="abc"
      options={options}
    />
</div>
```