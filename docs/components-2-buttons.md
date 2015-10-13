---
layout: page
title: Buttons
permalink: /components/buttons/
resource: true
categories: Components
---

We use several buttons for you to choose from, make sure you apply only styles intended for a given element, to make sure it doesn't stand out too much or doesn't bear a different meaning.

###### Primary Button
Primary buttons are only used when there is a clear need for a call-to-action. An example of this is a Send button on an contact form, or a Subscribe button on a newsletter subscription form.

<div class="preview plain">
  <p><button class="pure-button primary">Button (normal)</button></p>
  <p><button class="pure-button primary active">Button (active)</button></p>
  <p><button class="pure-button primary disabled">Button (disabled)</button></p>
</div>

{% highlight html %}
<button class="pure-button primary">Button</button>
<button class="pure-button primary active">Button</button>
<button class="pure-button primary disabled">Button</button>
{% endhighlight %}

###### Regular Button
Buttons are used as general UI blocks, for pretty much anything that requires an action to be taken. Always ensure a button has an informative label.

<div class="preview plain">
  <p><button class="pure-button">Button (normal)</button></p>
  <p><button class="pure-button active">Button (active)</button></p>
  <p><button class="pure-button disabled">Button (disabled)</button></p>
</div>

{% highlight html %}
<button class="pure-button">Button</button>
<button class="pure-button active">Button</button>
<button class="pure-button disabled">Button</button>
{% endhighlight %}

###### Other Buttons
Apart from primary and secondary buttons, you can also use action-specific buttons to help people identify certain actions more easily. These buttons should be used with moderation. Examples of usage can be found in _Patterns_ section of this guide.

<div class="preview plain">
  <p><button class="pure-button warning">Button (warning)</button></p>
  <p><button class="pure-button attention">Button (attention)</button></p>
  <p><button class="pure-button safe">Button (safe)</button></p>
</div>

{% highlight html %}
<button class="pure-button warning">Button</button>
<button class="pure-button attention">Button</button>
<button class="pure-button safe">Button</button>
{% endhighlight %}