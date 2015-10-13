---
layout: page
title: Form Elements
permalink: /components/forms/
resource: true
categories: Components
---

<div class="content-nav">
  <h4>Contents</h4>
  <ol>
    <li><a href="#checkboxes">Checkboxes</a></li>
    <li><a href="#radio-buttons">Radio Buttons</a></li>
    <li><a href="#select-box">Select Box</a></li>
    <li><a href="#input-fields">Input Fields</a></li>
    <li><a href="#textarea">Textarea</a></li>
  </ol>
</div>

Forms are an important part of pages which ask users for input. They should be simple, clear and accessible for all audiences. Below you can find several important components from which the forms are assembled.

<div class="notice">
  <h6>Notice</h6>
  <p>To ensure that WFP UI styles are correctly applied to your form elements, please add a class <code>pure-form</code> to your form wrappers.</p>
</div>

To see how these elements work together, you can have a look at some of the form patterns we use for WFP.

### Checkboxes
Checkboxes are used to represent a boolean field, where the value is either true or false. Checkbox is always wrapped around a label.

<div class="preview plain pure-form">
  <label class="input-checkbox" for="sample-1">
    <input type="checkbox" class="checkbox" id="sample-1">Sample Checkbox
  </label>
</div>

{% highlight html %}
<label class="input-checkbox" for="sample-1">
  <input type="checkbox" id="sample-1">Sample Checkbox
</label>
{% endhighlight %}

### Radio Buttons
Radios are used to allow the user to choose between several options.

<div class="preview plain pure-form">
  <label for="option-one" class="input-radio"><input id="option-one" class="radio" type="radio" name="options">Option #1</label>
  <label for="option-two" class="input-radio"><input id="option-two" class="radio" type="radio" name="options">Option #2</label>
</div>

{% highlight html %}
<label for="option-one" class="input-radio"><input id="option-one" class="radio" type="radio" name="options">Option #1</label>
<label for="option-two" class="input-radio"><input id="option-two" class="radio" type="radio" name="options">Option #2</label>
{% endhighlight %}

### Select Box
This box should only be used for picking an option from a collection of no more than 5-8 items.

<div class="preview plain pure-form">
  <label for="state">Select an option:</label>
  <select id="select" class="select">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>

{% highlight html %}
<label for="state">Select an option:</label>
<select id="select" class="select">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
{% endhighlight %}

### Input Fields
There are several types of input fields: _text_, _num_, _tel_, _email_, _password_, etc. Each of them serves a different purpose and should be used according to this purpose, by specifying a proper input type. Placeholder attribute is totally optional.

<div class="preview plain pure-form">
  <label for="name">Your name:</label>
  <input id="name" type="text" placeholder="Your Name">
</div>

{% highlight html %}
<label for="name">Your name:</label>
<input id="name" type="text" placeholder="Your Name">
{% endhighlight %}

### Textarea
Text areas are large inputs where users can type and view larger blocks of text. They can also have buttons attached to the bottom.

<div class="preview plain pure-form">
  <label for="big-text">Type in your bio:</label>
  <textarea id="big-text" placeholder="This is a text area." class="textarea size-large"></textarea>
</div>

{% highlight html %}
<label for="big-text">Type in your bio:</label>
<textarea id="big-text" placeholder="This is a text area." class="textarea size-large"></textarea>
{% endhighlight %}