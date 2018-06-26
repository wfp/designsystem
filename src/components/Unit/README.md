
The Unit component method returns a component with a language and unit sensitive representation of this number based on the [Reference on developer.mozilla.org](http://cdn.wfp.org/guides/editorial/content/numbers-and-units).


~~~js
import { Unit } from '@wfp/ui';
~~~

~~~js
<Unit
  type="Usd"
  setup={{
    "output":"million",
    "input":"thousand",
    "showZero"
  }}
>
  1000000
</Unit>
~~~


|Setting|Default|Options|Role|
|--- |--- |--- |--- |
|children|`undefined`|`string` |The value which should be displayed|
|type|`None`|`Countries` `Usd` `Partners` `People` `Beneficiaries` `Households` `Months` `Level` `Mt` `None` `Num` `Percentage` `YearMonth` `false`|Select a unit type|
|from|`undefined`|`string` `float`| only used for type `Percentage` will divide `value`/`from`
|minimumFractionDigits|`undefined`|`0-20` | The minimum number of fraction digits to use. Possible values are from 0 to 20.Only used on numeric types [Reference on developer.mozilla.org](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)
|maximumSignificantDigits|`undefined`|`1-21` | The maximum number of significant digits to use. Possible values are from 1 to 21; the default is `minimumSignificantDigits`.[Reference on developer.mozilla.org](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)
|maximumFractionDigits|`undefined`|`1-21` | The maximum number of significant digits to use. Possible values are from 1 to 21; the default is `minimumSignificantDigits`.
|hideEmpty|`false`|`boolean` | Hide the Unit if it's value is zero.
