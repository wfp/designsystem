The **Blockquote** element indicates that the enclosed text is an extended quotation or information. It is rendered visually by a surrounding box. Use it when a notice or information should be displayed. Do not use it for interactive content.

### Text
Be concise and specific. Titles have a max of five words.

```js
import { Blockquote } from '@wfp/ui';
```

```js
<Blockquote 
  title="The title" 
  info 
  withIcon
>
  Content
</Blockquote>
```