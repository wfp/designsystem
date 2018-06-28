Wrapper can wrap it's content in a specific width depending on if the application has a full or fixed width.

```js
import { Wrapper } from '@wfp/ui';
```

```js
<Wrapper pageWidth="xs" mobilePageWidth="full">
  Content
</Wrapper>
```

| Setting         | Default     | Options               | Role                                                                                                  |
| --------------- | ----------- | --------------------- | ----------------------------------------------------------------------------------------------------- |
| children        | `undefined` | `string`              | The value which should be displayed                                                                   |
| pageWidth       | `None`      | `xs` `sm` `md` `lg`   | Set the maximum width of the Wrapper content `xs`: `500px` `sm`: `700px` `md`:`1000px` `lg`: `1200px` |
| mobilePageWidth | `None`      | `full` `sm` `md` `lg` | Width on mobile devices `full`: `100%`                                                                |
