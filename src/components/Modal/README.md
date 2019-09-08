**Modals** communicate information via a secondary window and allow the user to maintain the context of a particular task.

Use the Modal Wrapper component to encapsulate your Modal within a button.

Modal is forked from [Carbon Components](https://www.carbondesignsystem.com/components/modal/code) 

### Do use

#### Grab the user’s attention
Use when you want to interrupt a user’s current task to catch the user’s full attention to something more important.
#### Need user input
Use when you want to get information from the user. Ex. sign up or login form.
#### Show additional information in context.
Use when you want to show additional information without losing the context of the parent page. Ex. showing larger images or videos.
#### Show additional information (not in context)
Use when you want to show information that is not directly related to the parent page or other options that are “independent” from other pages. Ex. notifications.

Source: [Best Practices for Modals / Overlays / Dialog Windows](https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c) 

 [Modal & Nonmodal Dialogs: When (& When Not) to Use Them](https://www.nngroup.com/articles/modal-nonmodal-dialog/) 


### Do not use

#### Long content
Avoid using modal dialogs when the content needs a scrollbar.

#### Long forms
Do not use when a long form is displayed.

#### Complex decision making
Avoid modal dialogs for complex decision making that requires additional sources of information unavailable in the modal.

### Usage

```js
import { Modal } from  '@wfp/ui';
```
#### Manual footer

If you use the `passive={true}`prop you can add a custom Footer
```js
<div className="wfp--modal-footer">
	<div className="wfp--modal__buttons-container">
		The Modal Footer content
	</div>
</div>
```


#### Full screen Dialog (`Dialog` example)

Full screen dialogs only show the Modal element without any other content like the navigation. They can be used for login, password reset or very important dialogs.

```js
<Modal
  open
  hideClose
  backgroundImage={yourBackgroundImage.jpg}
/>
```

#### Handle the `open` state

Modal allows you to control the `open` State on your own. Use the Modal Wrapper component to use a controlled version of Modal.

```js
class ModalWithControls extends React.Component {
  state = { open: false };

  toggleModal = () => {
    console.log('Toggle the open state');
    this.setState(state => ({
      open: !state.open
    }));
  }

  submitAndClose = () => {
    alert('Submit now and close the modal');
    this.setState(state => ({
      open: false
    }));
  }

  render(){
    const { open } = this.state;

    return (
      <div>
        <button onClick={this.toggleModal}>
          Open Modal
        </button>
        <Modal
          open={open}
          primaryButtonText="Submit"
          onRequestSubmit={this.submitAndClose}
          secondaryButtonText="Cancel Modal"
          onSecondarySubmit={this.toggleModal}
          onRequestClose={this.toggleModal}
        >
        <p className="wfp--modal-content__text">
          Nothing to see here
        </p>
        </Modal>
      </div>
    );
  }
}
```

### Disable closing the Modal if the user clicks on the background

```js
onRequestClose={(evt, trigger) => {
  if (trigger !== 'background') {
    return props.onClose(evt, trigger);
  }
  return null;
}}

<Modal
  onRequestClose={this.onRequestClose}
  {...otherProps}
/>
```