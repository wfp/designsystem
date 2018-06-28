Footer is the second most important place where your basic site information and links should live. Users turn often to the footer to look for important information, such as contact details, or links to less prominent sections of the website (privacy policy, terms of use, etc).

```js
import { Footer } from '@wfp/ui';
```

```js
<Footer
  className="some-class" //optional
  logo="url/to/mobile/logo"
  logoExtended="url/to/desktop/logo"
  metaContent="Some Content"
  mobilePageWidth="full" //optional
  pageWidth="md">
  <div className="wfp--footer-info">
    <div className="wfp--footer-info__item">
      <p className="wfp--footer-label">A label</p>
      <Link href="http://www.wfp.org">First Link</Link>
      <Link href="http://www.wfp.org">Second Link</Link>
    </div>
    <div className="wfp--footer-info__item">
      <p className="wfp--footer-label">Another label</p>
      <Link href="http://www.go.wfp.org">WFP go</Link>
      <Link href="http://www.wfp.org">Second Link</Link>
    </div>
  </div>
</Footer>
```

| Setting         | Default                                            | Options               | Role                                                                                                  |
| --------------- | -------------------------------------------------- | --------------------- | ----------------------------------------------------------------------------------------------------- |
| children        | `undefined`                                        | `string`              | The value which should be displayed                                                                   |
| options         | `None`                                             | `xs` `sm` `md` `lg`   | Set the maximum width of the Wrapper content `xs`: `500px` `sm`: `700px` `md`:`1000px` `lg`: `1200px` |
| mobilePageWidth | `None`                                             | `full` `sm` `md` `lg` | Width on mobile devices `full`: `100%`                                                                |
| className       | `None`                                             | `string`              | Set Footer className                                                                                  |
| Logo            | `logos/vertical/en/wfp-logo-vertical-black-en.svg` | `string`              | Footer on Mobile Devices                                                                              |
| Logo            | `logos/extended/en/wfp-logo-extended-black-en.svg` | `string`              | Footer on Desktop Devices                                                                             |
| metaContent     | `undefined`                                        | `string` `component`  | Footer meta text                                                                                      |
