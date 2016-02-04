---
layout: page
title: Forms
permalink: /components/forms/
resource: true
categories: Components
nav: nav/forms.html
---
{% include base.html %}

Forms are an important part of pages which ask users for input. They should be simple, clear and accessible for all audiences. Below you can find several important components from which the forms are assembled.

<div class="notice">
  <h2 class="title">Notice</h2>
  <p>To ensure that WFP UI styles are correctly applied to your form elements, please add a class <code>wfp-form</code> to your form wrappers.</p>
</div>

To see how different form elements work together with our flexible grid system, have a look at one of the form patterns below.

###### Preview
<div class="preview simple wfp-form--stacked">
  <div class="wfp-grid">
    <div class="wfp-u-1-2 wfp-box--flat">
      <label for="first-name">First name:</label>
      <input type="text" id="first-name" name="first-name">
    </div>
    <div class="wfp-u-1-2 wfp-box--flat">
      <label for="email">Email address:</label>
      <input type="email" id="email" name="email">
    </div>
  </div>
  <div class="wfp-form--group">
    <label for="selection">Pick a subject:</label>
    <select id="selection">
      <optgroup label="Tropical Fruits">
        <option value="1" selected>Oranges</option>
        <option value="2">Bananas</option>
        <option value="3">Grapefruits</option>
      </optgroup>
    </select>
  </div>
  <div class="wfp-form--group">
    <label for="message">Your message:</label>
    <textarea name="message" id="message"></textarea>
    <label class="checkbox" for="sample-1">
      <input type="checkbox" id="sample-1">I would like to be contacted, if necessary.
    </label>
  </div>
  <div class="wfp-form--actions">
    <button class="wfp-btn--primary" type="submit">Send message</button>
    <button class="wfp-btn">Cancel</button>
    <span class="wfp-form--msg">By sending this form you agree to our <a href="#">privacy policy</a>.</span>
  </div>
</div>

{% highlight html %}
<form class="wfp-form--stacked wfp-grid" action="self">
  <div class="wfp-grid">
    <div class="wfp-u-1-2 wfp-box--flat">
      <label for="first-name">First name:</label>
      <input type="text" id="first-name" name="first-name">
    </div>
    <div class="wfp-u-1-2 wfp-box--flat">
      <label for="email">Email address:</label>
      <input type="email" id="email" name="email">
    </div>
  </div>
  <div class="wfp-form--group">
    <label for="selection">Pick a subject:</label>
    <select id="selection">
      <option value="1" selected>Option #1</option>
      <option value="2">Option #2</option>
      <option value="3">Option #3</option>
    </select>
  </div>
  <div class="wfp-form--group">
    <label for="message">Your message:</label>
    <textarea name="message" id="message"></textarea>
    <label class="checkbox" for="sample-1">
      <input type="checkbox" id="sample-1">I would like to be contacted, if necessary.
    </label>
  </div>
  <div class="wfp-form--actions">
    <button class="wfp-btn--primary" type="submit">Send message</button>
    <button class="wfp-btn">Cancel</button>
    <span class="wfp-form--msg">By sending this form you agree to our <a href="#">privacy policy</a>.</span>
  </div>
</form>
{% endhighlight %}

### Special Classes
If you want to push your forms to their limit, you can use our special classes, which can help you create more eye-friendly layouts.

`wfp-form--group`
Group contained form elements by giving them extra vertical padding.

`wfp-form--actions`
Wrapper designated to contain all actionable elements, such as buttons. Gives them extra padding and margins, to ensure they stand out from other elements.

`wfp-form--msg`
Small inline messages, that are best suited for notices, or inline tips.
