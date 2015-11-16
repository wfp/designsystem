---
layout: page
title: Navigation
permalink: /patterns/navigation/
resource: true
categories: Patterns
---

This is one of the most important patterns for all websites and applications. Without great navigation the content cannot be discovered by the user. Using our CSS Toolkit, you will have access to several navigation patterns.

### Segmented Controls
This pattern is useful for when you need to display a set of controls with an indicated active state, or a group of links related to each other.

###### Preview
<ul class="segmented-control">
  <li class="segmented-control--item">
    <a class="segmented-control--link active" href="#">Home</a>
  </li>
  <li class="segmented-control--item">
    <a class="segmented-control--link" href="#">Blog</a>
  </li>
  <li class="segmented-control--item">
    <a class="segmented-control--link" href="#">About us</a>
  </li>
  <li class="segmented-control--item">
    <a class="segmented-control--link" href="#">Contact us</a>
  </li>
</ul>

###### Markup
{% highlight html %}
<ul class="segmented-control">
  <li class="segmented-control--item">
    <a class="segmented-control--link" href="#">Home</a>
  </li>
  <li class="segmented-control--item">
    <a class="segmented-control--link" href="#">Blog</a>
  </li>
  <li class="segmented-control--item">
    <a class="segmented-control--link" href="#">About us</a>
  </li>
  <li class="segmented-control--item">
    <a class="segmented-control--link" href="#">Contact us</a>
  </li>
</ul>
{% endhighlight %}

### Stacked Menu
This menu is very versatile and can use groups. You can use this menu to create blocks of links, i.e.: for the sidebar.

<div class="notice">
  <h6 class="title">Notice</h6>
  <p>This menu can be displayed without surrounding borders by using <code>menu-plain</code> class, instead of <code>menu</code>.</p>
</div>

###### Preview
<nav class="menu">
  <div class="menu--group">
    <h6 class="menu--heading">About</h6>
    <ul class="menu--wrapper">
      <li class="menu--link"><a href="#">Executive Director</a></li>
      <li class="menu--link"><a href="#">Senior Leadership</a></li>
      <li class="menu--link"><a href="#">Corporate Information</a></li>
      <li class="menu--link"><a href="#">Funding</a></li>
    </ul>
  </div>
</nav>

###### Markup
{% highlight html %}
<nav class="menu">
  <div class="menu--group">
    <h6 class="menu--heading">About</h6>
    <ul class="menu--wrapper">
      <li class="menu--link"><a href="#">Executive Director</a></li>
      <li class="menu--link"><a href="#">Senior Leadership</a></li>
      <li class="menu--link"><a href="#">Corporate Information</a></li>
      <li class="menu--link"><a href="#">Funding</a></li>
    </ul>
  </div>
</nav>
{% endhighlight %}

### Inline Menu
The same menu as in previous example, but used together with grids, to create more complex designs, such as horizontal groups of links for the footer.

<div class="notice">
  <h6 class="title">Notice</h6>
  <p>This menu can be displayed without surrounding borders by using <code>menu-plain</code> class, instead of <code>menu</code>.</p>
</div>

###### Preview
<nav class="menu pure-g">
  <div class="menu--group pure-u-1 pure-u-md-1-3">
    <h6 class="menu--heading">Our Programmes</h6>
    <ul class="menu--wrapper">
      <li class="menu--link"><a href="#">Cash and Vouchers</a></li>
      <li class="menu--link"><a href="#">Foods for Assets</a></li>
      <li class="menu--link"><a href="#">HIV / AIDS</a></li>
      <li class="menu--link"><a href="#">Purchase for Progress</a></li>
    </ul>
  </div>
  <div class="menu--group pure-u-1 pure-u-md-1-3">
    <h6 class="menu--heading">Our Expertise</h6>
    <ul class="menu--wrapper">
      <li class="menu--link"><a href="#">Preparedness: Being Ready</a></li>
      <li class="menu--link"><a href="#">Responding to Emergencies</a></li>
      <li class="menu--link"><a href="#">Food Security Analysis</a></li>
      <li class="menu--link"><a href="#">Buying the Food</a></li>
    </ul>
  </div>
  <div class="menu--group pure-u-1 pure-u-md-1-3">
    <h6 class="menu--heading">Our Operations</h6>
    <ul class="menu--wrapper">
      <li class="menu--link"><a href="#">Current Emergencies</a></li>
      <li class="menu--link"><a href="#">Emergency Operations</a></li>
      <li class="menu--link"><a href="#">Relief & Recovery Operations</a></li>
      <li class="menu--link"><a href="#">Special Operations</a></li>
    </ul>
  </div>
</nav>

###### Markup
{% highlight html %}
<nav class="menu pure-g">
  <div class="menu--group pure-u-1 pure-u-md-1-3">
    <h6 class="menu--heading">Our Programmes</h6>
    <ul class="menu--wrapper">
      <li class="menu--link"><a href="#">Cash and Vouchers</a></li>
      <li class="menu--link"><a href="#">Foods for Assets</a></li>
      <li class="menu--link"><a href="#">HIV / AIDS</a></li>
      <li class="menu--link"><a href="#">Purchase for Progress</a></li>
    </ul>
  </div>
  <div class="menu--group pure-u-1 pure-u-md-1-3">
    <h6 class="menu--heading">Our Expertise</h6>
    <ul class="menu--wrapper">
      <li class="menu--link"><a href="#">Preparedness: Being Ready</a></li>
      <li class="menu--link"><a href="#">Responding to Emergencies</a></li>
      <li class="menu--link"><a href="#">Food Security Analysis</a></li>
      <li class="menu--link"><a href="#">Buying the Food</a></li>
    </ul>
  </div>
  <div class="menu--group pure-u-1 pure-u-md-1-3">
    <h6 class="menu--heading">Our Operations</h6>
    <ul class="menu--wrapper">
      <li class="menu--link"><a href="#">Current Emergencies</a></li>
      <li class="menu--link"><a href="#">Emergency Operations</a></li>
      <li class="menu--link"><a href="#">Relief & Recovery Operations</a></li>
      <li class="menu--link"><a href="#">Special Operations</a></li>
    </ul>
  </div>
</nav>
{% endhighlight %}