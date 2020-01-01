**Text inputs** enable the user to interact with and input data. Use when the application requires long-form content from the user.

[Carbon Design System Usage for text inputs](https://next.carbondesignsystem.com/components/text-input)

### Usage with react
```js
import { TextInput } from '@wfp/ui';
```

```js
<TextInput  
  className="some-class"
  id="test2"
  defaultValue="Default value (defaultValue)"
  labelText="Text Input label"
  placeholder="Placeholder text"
  disabled={false}
  hideLabel={false}
  invalid={false}
  invalidText="A valid value is required"
  helperText="Optional helper text."
  onClick={onClick}
  onChange={onChange}
/>