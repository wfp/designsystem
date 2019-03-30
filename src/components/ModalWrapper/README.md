
ModalWrapper combines a `Button` with a `Modal`. See `Modal` component for all `props`.

```js
import { ModalWrapper } from '@wfp/ui';
```

```html
 <ModalWrapper
  buttonTriggerText="Open Modal"
  handleSubmit={() => {
    console.log('submit');
    return true;
  }}
>
  Modal Content
</ModalWrapper>
```
