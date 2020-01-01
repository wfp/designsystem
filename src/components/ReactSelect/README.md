We recommend [React Select](https://react-select.com) for multiselect, autocomplete or ajax inputs.

### Usage

To use the WFP UI styling add the following ```className``` and ```classNamePrefix``` props.

```js
 <Select
    className="wfp--react-select-container"
    classNamePrefix="wfp--react-select"
  />
```

### Usage with react-final-forms or redux-forms

[Click here](?path=/story/components-reduxformwrapper--select-react-final-form) for an example on using react-select inside the ```<Field/>``` component.


### Usage inside custom component with a label

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