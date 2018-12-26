The User Icon is used inside the MainNavigation and can display an avatar and username.

```js
import { User } from '@wfp/ui';
```

```js
<User
  alt="Image Alt text"
  ellipsis={false}
  name="Max Mustermann"
  image="https//www.example.com/image.jpg"
/>
```

| Setting  | Default     | Options              | Role                                                                                                                         |
| -------- | ----------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| alt      | `undefined` | `string`             | The alt-text of the avatar                                                                                                   |
| name     | `undefined` | `string` `undefined` | The user name. If `undefined` only the avatar image will be displayed                                                        |
| ellipsis | `false`     | `boolean`            | Sets the max-width of the user name to `130px` and shows an ellipsis                                                         |
| image    | `undefined` | `string`             | Url to an avatar image The size of the image is `25px` _ `25px`. Provide at least `50px` _ `50px` to support HiDPI displays. |
