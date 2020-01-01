We recommend [React-Toastify](https://github.com/fkhadra/react-toastify) for toast notifications.

### Use Styling

To use the styling from WFP don't import any css from `react-toastify` and add the `notificationStyle` object as a prop to the `ToastContainer` component.

```js
import { notificationStyle } from '@wfp/ui';
```

```js
const notify = () => {
  toast("A regular message");
};

const notifyAll = () => {
  toast.success("Wow so easy!");
  toast.warn("Please check again!");
  toast.error("Something went terribly wrong!");
};

return (
  <div>
    <Button onClick={notify}>Regular notification</Button>{' '}
    <Button kind="secondary" onClick={notifyAll}>All Notifications</Button>
    <ToastContainer {...notificationStyle} />
  </div>
)
```

<!-- NO PROPS -->