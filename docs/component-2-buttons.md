---
layout: page
title: Buttons
permalink: /components/buttons/
resource: true
categories: Components
nav: nav/buttons.html
---

We use several buttons for you to choose from, make sure you apply only styles intended for a given element, to make sure it doesn't stand out too much or doesn't bear a different meaning.

### Button
Buttons are used as general UI blocks, for pretty much anything that requires an action to be taken. Always ensure a button has an informative label.

<div class="preview plain">
  <p><button class="btn">Button (normal)</button></p>
  <p><button class="btn active">Button (active)</button></p>
  <p><button class="btn disabled">Button (disabled)</button></p>
</div>

{% highlight html %}
<button class="btn">Button</button>
<button class="btn active">Button</button>
<button class="btn disabled">Button</button>
{% endhighlight %}

### Primary Button
Primary buttons are only used when there is a clear need for a call-to-action. An example of this is a Send button on an contact form, or a Subscribe button on a newsletter subscription form.

<div class="preview plain">
  <p><button class="btn--primary">Button (normal)</button></p>
  <p><button class="btn--primary active">Button (active)</button></p>
  <p><button class="btn--primary disabled">Button (disabled)</button></p>
</div>

{% highlight html %}
<button class="btn--primary">Button</button>
<button class="btn--primary active">Button</button>
<button class="btn--primary disabled">Button</button>
{% endhighlight %}

### Special Buttons
Apart from primary and secondary buttons, you can also use action-specific buttons to help people identify certain actions more easily. These buttons should be used with moderation. Examples of usage can be found in _Patterns_ section of this guide.

<div class="preview plain">
  <p><button class="btn--negative">Button (negative)</button></p>
  <p><button class="btn--positive">Button (positive)</button></p>
  <p><button class="btn--warning">Button (warning)</button></p>
</div>

{% highlight html %}
<button class="btn--negative">Button</button>
<button class="btn--positive">Button</button>
<button class="btn--warning">Button</button>
{% endhighlight %}

### Sizing
You can display buttons using a variety of sizes. Below you can find all available button sizes.

<div class="preview plain">
  <p><button class="btn xsmall">Button</button><button class="btn small">Button</button><button class="btn">Button</button><button class="btn large">Button</button><button class="btn xlarge">Button</button></p>
</div>

{% highlight html %}
<button class="btn xsmall">Button</button>
<button class="btn small">Button</button>
<button class="btn">Button</button>
<button class="btn large">Button</button>
<button class="btn xlarge">Button</button>
{% endhighlight %}