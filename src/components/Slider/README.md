**Sliders** provide a visual indication of adjustable content, where the user can move the handle along a horizontal track to increase or decrease the value.

Slider is based on a fork from [Carbon Components](https://www.carbondesignsystem.com/components/slider/code) 

### Usage

```js
import { Slider } from  '@wfp/ui';
```

```html
<Slider
  id="slider"
  name="Name"
  ariaLabelInput="This input is to show a number from 0 - 100"
  min={0}
  max={100}
  labelText="Slider Label"
  minLabel="minimum"
  maxLabel="maximum"
/>
```