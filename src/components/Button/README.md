
Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience.

  

### Using icons with buttons

  

#### react

Use the `icon` and `iconDescription` prop to add an Icon to the Button. Refer to the [Icon](?selectedKind=Icon) documentation for usage.

To show the Icon on the left side use the `iconReverse` prop.

Using an Button with only an Icon while not beeing recommended can be achieved by leaving the Button text blank.

#### html

  

All buttons can use icons. It's recommended to inline SVG icons when possible. Simply add the appropriate <svg> to the button HTML with the wfp--btn__icon class. You can also include <title> for better accessibility to describe what the button does.

  

//TODO: Add documentation for Icons