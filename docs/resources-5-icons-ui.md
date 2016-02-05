---
layout: page
title: UI Icons
permalink: /resources/ui-icons/
resource: true
categories: Resources
---
{% include base.html %}

User Interface Icons should be used to strengthen visual cues; use them wisely and do not overload the interface with icons.

Usually an icon should be shown accompanied by a corresponding text label, for the benefit of users who are unfamiliar with the icon.

Each icon is available in either a dark or a light fill.

### Usage
First thing to do, is to load the icons to your web site or application, by referencing it in `<head>` section. There are three stylesheets to choose from, depending on what browsers you intend on supporting. Two primary files use `base64` encoded SVGs and PNGs, while the third file relies on old-school `background-image: url()` fallback to PNGs available from the filesystem.

You can check [support for `base64`](http://caniuse.com/#feat=atob-btoa) and [SVG in CSS support](http://caniuse.com/#feat=svg-css) on [caniuse.com](http://caniuse.com).

{% highlight html %}
<!-- For modern browsers with SVG support -->
<link rel="stylesheet" href="bower_components/wfp-ui/dist/assets/icons/ui/ui-icons.svg.css">
<!-- For browsers without SVG support -->
<link rel="stylesheet" href="bower_components/wfp-ui/dist/assets/icons/ui/ui-icons.png.css">
<!-- IE8-9 Fallback -->
<link rel="stylesheet" href="bower_components/wfp-ui/dist/assets/icons/ui/ui-icons.fallback.css">
{% endhighlight %}

Add UI icons to your interfaces using `<span>` element with a class `icon-{icon-name}`, where `{icon-name}` means a corresponding name of the icon listed in a preview below (or in the package).

{% highlight html %}
<span class="icon-account-circle-dark"></span>
{% endhighlight %}

<div class="notice">
  <h3 class="title">Notice</h3>
  <p>UI icons can be used alongside other UI elements; within menus, buttons, etc, as long as there is a descriptive label next to it. <strong>Do not use icons on their own on actionable UI elements, such as links or buttons.</strong></p>
</div>


###### Preview
<nav class="wfp-menu">
  <h6 class="menu--heading">Navigation</h6>
  <ul class="menu--wrapper">
    <li class="menu--item">
      <a href="#" class="menu--link"><span class="icon-email-dark"></span> Inbox</a>
    </li>
    <li class="menu--item">
      <a href="#" class="menu--link"><span class="icon-account-circle-dark"></span> Account</a>
    </li>
    <li class="menu--item">
      <a href="#" class="menu--link"><span class="icon-exit-to-app-dark"></span> Sign Out</a>
    </li>
  </ul>
</nav>

{% highlight html %}
<nav class="wfp-menu">
  <h6 class="menu--heading">Navigation</h6>
  <ul class="menu--wrapper">
    <li class="menu--item">
      <a href="#" class="menu--link"><i class="icon-email-dark"></i> Inbox</a>
    </li>
    <li class="menu--item">
      <a href="#" class="menu--link"><i class="icon-account-circle-dark"></i> Account</a>
    </li>
    <li class="menu--item">
      <a href="#" class="menu--link"><i class="icon-exit-to-app-dark"></i> Sign Out</a>
    </li>
  </ul>
</nav>
{% endhighlight %}

### Sizing
By default, all UI icons are displayed in `24 x 24px` size. You can easily adjust that, using special sizing classes.

<table class="wfp-table">
  <thead>
    <th>Sample</th>
    <th>Size</th>
    <th>Class</th>
  </thead>
  <tbody>
    <tr>
      <td><i class="icon-account-circle-dark xsmall"></i></td>
      <td>16px</td>
      <td><code>xsmall</code></td>
    </tr>
    <tr>
      <td><i class="icon-account-circle-dark small"></i></td>
      <td><strong>24px (default)</strong></td>
      <td><code>small</code></td>
    </tr>
    <tr>
      <td><i class="icon-account-circle-dark medium"></i></td>
      <td>32px</td>
      <td><code>medium</code></td>
    </tr>
    <tr>
      <td><i class="icon-account-circle-dark large"></i></td>
      <td>48px</td>
      <td><code>large</code></td>
    </tr>
    <tr>
      <td><i class="icon-account-circle-dark xlarge"></i></td>
      <td>64px</td>
      <td><code>xlarge</code></td>
    </tr>
  </tbody>
</table>

### Available Icons

<div class="notice">
  <h2 class="title">Notice</h2>
  <p>Need a User Interface icon not listed here? Send us a request via <a href="mailto:WFP.PUBLICATIONS@wfp.org?subject=UI%20icon%20request">wfp.publications@wfp.org</a>.</p>
</div>

<ul class="wfp-grid list-view icons">
{% directory path:img/icons/ui/png %}
  <li class="item wfp-u-1-2">
    <div class="desc">
      <div class="desc-img {% cycle 'light', 'dark' %}"><img src="{{ base }}/img/icons/ui/png/{{ file.name }}"></div>
      <div class="desc-label">{{ file.slug }}</div>
    </div>
  </li>
{% enddirectory %}
</ul>
