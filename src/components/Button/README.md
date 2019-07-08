Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience.

Buttons are used primarily on action items. Some examples include Add, Save, Delete, and Sign up. Each page can have one or two primary buttons. Any remaining calls-to-action should be represented as secondary buttons.

Do not use buttons as navigational elements. Instead, use links when the desired action is to take the user to a new page.

[Carbon Design System Usage for Buttons](https://next.carbondesignsystem.com/components/button)

#### Small buttons

Small buttons may be used when there is not enough space for a
regular sized button. This issue is most found in tables. Small button should have three words
or less.

There are several kinds of buttons.

### Primary buttons

Primary buttons should be used for the principle call to action
on the page.

#### Secondary buttons

Secondary buttons should be used for secondary actions on each page.

#### Danger buttons

Danger buttons should be used for a negative action (such as Delete) on the page.

#### Actions
  
When an action required by the user has more than one option, always use a a negative action button (secondary) paired with a positive action button (primary) in that order. Negative action buttons will be on the left. Positive action buttons should be on the right. When these two types buttons are paired in the correct order, they will automatically space themselves apart.

### Icons

When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are
always paired with text.

#### react

Use the `icon` and `iconDescription` prop to add an Icon to the Button. Refer to the [Icon](?selectedKind=Icon) documentation for usage.

To show the Icon on the left side use the `iconReverse` prop.

Using an Button with only an Icon while not beeing recommended can be achieved by leaving the Button text blank.

#### html

All buttons can use icons. It's recommended to inline SVG icons when possible. Simply add the appropriate `svg` image to the button HTML with the `wfp--btn__icon` class. You can also include a `title` tag for better accessibility to describe what the button does.


### Usage with react
```js
import { Button } from '@wfp/ui';
```

```js
<Button href="#">
  This is a button
</Button>
```