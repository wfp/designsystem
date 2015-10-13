---
layout: page
title: Form Validation
permalink: /patterns/validation/
resource: true
categories: Patterns
---

<div class="content-nav">
  <h4>Contents</h4>
  <ol>
    <li><a href="#requirements">Requirements</a></li>
    <li><a href="#invalid-pattern">"Invalid" Pattern</a></li>
    <li><a href="#valid-pattern">"Valid" Pattern</a></li>
  </ol>
</div>

When designing forms, you should not forget to apply inline validation to them. This will ensure that whoever is asked to fill it in, will be instantly prompted to correct a mistake, should it occur, before submitting the form.

This will ensure that the experience is smooth and the probablility of the data loss is reduced to a minimum.

<div class="notice">
  <h6 class="title">Notice</h6>
  <p>Inline validation should not be used on its own. Please, make sure there is always server-side validation in place, to minimise the risk of processing invalid data.</p>
</div>

### Requirements
By default, WFP recommends a [jQuery Validation Plugin](http://jqueryvalidation.org/), which is well documented and actively supported. Please, refer to its documentation for ways to implement inline validation for your forms.

To properly mark up your forms, follow the examples below. Make sure to load `forms.css` stylesheet to have all required styles applied to your forms automatically.

<div class="notice">
  <h6 class="title">NOTE</h6>
  <p>You are free to use your own validator script as long as the validation can be done according to the general guidelines and uses the UI styles showcased below.</p>
</div>

Generally all types of fields can follow the same patterns. If you have a very specific case where it would be difficult to apply them, you can use a custom one, as long at it follows general visual guidelines set in the examples below (colours and display).

__Form validation requires generally the following:__
- to add attribute `required` to elements which are mandatory;
- to add a correct value for the `type` attribute (such as `email` or `number`;
- _(optional)_ to add a `pattern` attribute, which will provide a base for native HTML5 validation (only for supported browsers or compatible validation plugins).

For more information about available HTML5 `input` attributes, visit [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#Attributes) pages.

### "Invalid" Pattern
To correctly show an invalid field, add class `invalid` to an input element. Next, insert error description using `span` with a class `error` just below the input.

###### Example
<div class="preview simple pure-form pure-form-stacked clearfix">
  <div class="pure-form-input-1-2">
    <label for="full-name">Full name:</label>
    <input class="invalid" id="full-name" type="text" placeholder="e.g.: John Doe" required>
    <span class="error">Please, enter your full name.</span>
  </div>
  <div class="pure-form-input-1-2">
    <label for="email">Email address:</label>
    <input class="invalid" id="email" type="email" placeholder="e.g.: john@doe.com" value="incorrect@email" required>
    <span class="error">Please, use a correct email address.</span>
  </div>
</div>

###### Sample Markup
{% highlight html %}
<form class="pure-form pure-form-stacked clearfix">
  <div class="pure-form-input-1-2">
    <label for="full-name">Full name:</label>
    <input class="invalid" id="full-name" type="text" placeholder="e.g.: John Doe" required>
    <span class="error">Please, enter your full name.</span>
  </div>
  <div class="pure-form-input-1-2">
    <label for="email">Email address:</label>
    <input class="invalid" id="email" type="email" placeholder="e.g.: john@doe.com" required>
    <span class="error">Please, use a correct email address.</span>
  </div>
</form>
{% endhighlight %}

### "Valid" Pattern
When inputs are validated successfuly, you should replace their `invalid` class with `valid` and remove or hide the error description.

###### Example
<div class="preview simple pure-form pure-form-stacked clearfix">
  <div class="pure-form-input-1-2">
    <label for="full-name">Full name:</label>
    <input class="valid" id="full-name" type="text" placeholder="e.g.: John Doe" value="John Doe" required>
    <span class="error" style="display: none">Please, enter your full name.</span>
  </div>
  <div class="pure-form-input-1-2">
    <label for="email">Email address:</label>
    <input class="valid" id="email" type="email" placeholder="e.g.: john@doe.com" value="john@doe.com" required>
    <span class="error" style="display: none">Please, use a correct email address.</span>
  </div>
</div>

###### Sample Markup
{% highlight html %}
<form class="pure-form pure-form-stacked clearfix">
  <div class="pure-form-input-1-2">
    <label for="full-name">Full name:</label>
    <input class="valid" id="full-name" type="text" placeholder="e.g.: John Doe" value="John Doe" required>
    <span class="error" style="display: none">Please, enter your full name.</span>
  </div>
  <div class="pure-form-input-1-2">
    <label for="email">Email address:</label>
    <input class="valid" id="email" type="email" placeholder="e.g.: john@doe.com" value="john@doe.com" required>
    <span class="error" style="display: none">Please, use a correct email address.</span>
  </div>
</form>
{% endhighlight %}