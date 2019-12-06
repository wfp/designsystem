## Use with React Final Form (Redux form)

Add `controlled={false}` to allow final-form to hand the state.

```js
<RadioButtonGroup
  controlled={false}
  labelText="Tracking frequency"
  helperText="How often the position will be updated">
  <Field
    component={ReduxFormWrapper}
    inputComponent={RadioButton}
    id="radioButton-1"
    name="radioButton"
    value={5}
    labelText="Radiobutton 1"
    type="radio"
  />
  <Field
    component={ReduxFormWrapper}
    inputComponent={RadioButton}
    id="radioButton-2"
    name="radioButton"
    value={10}
    labelText="Radiobutton 2"
    type="radio"
  />
</RadioButtonGroup>
```
