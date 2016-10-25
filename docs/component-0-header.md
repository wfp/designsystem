---
layout: page
title: Header
permalink: /components/header/
resource: true
categories: Components
---
{% include base.html %}

This pattern is the single, most important way to indicate to your visitors that they are browsing WFP's online property. Below, you will find most commonly used patterns for your header.

Header patterns will vary slightly, depending on your use case, whether the website, but generally follow the same basic style.

### External
These pages are always available to the public, therefore need to represent WFP's brand appropriately. Please, make sure you always use only the official logos, without any alterations.

Public pages should always use a logo with a caption "World Food Programme". For smaller screens, you can serve a narrower version of the logo, with a two-line caption.

If the vertical space is limited (i.e.: on smaller viewports), you can substitute the logo with a "WFP.org" caption (using strictly white text `#ffffff` on a blue background `#2A93FC`), as per the official guidelines. Refer to the examples below.

<div class="notice">
  <h2 class="title">Subcomponents</h2>
  <p>When implementing mastheads you can make use of <a href="#subcomponents">subcomponents</a>, such as <code>header--search</code>, or <code>header--btn</code>, to add call to actions, or a search input.</p>
</div>

###### Preview
<header class="wfp-header-ext">
  <div class="wfp-grid wfp-wrapper" role="banner">
    <div class="wfp-u-2-3 wfp-u-sm-1-4 header--container">
      <a href="#" class="header--logo db pv2 mv1">
        <picture class="db w-100">
          <source srcset="{{ base }}/img/logos/light/png/1x/en-standard.png 1x, {{ base }}/img/logos/light/png/2x/en-standard.png 2x" media="(max-width: 767px)">
          <source srcset="{{ base }}/img/logos/light/png/1x/en-full.png 1x, {{ base }}/img/logos/light/png/2x/en-full.png 2x" media="(min-width: 768px)">
          <img src="{{ base }}/img/logos/light/png/1x/en-standard.png" alt="UN World Food Programme">
        </picture>
      </a>
    </div>
    <div class="wfp-u-1-3 wfp-u-sm-3-4 header--nav">
      <button class="header--toggle" id="js-menu-ext-trigger">Menu</button>
      <nav class="header--menu" id="js-menu-ext">
        <ul class="menu--group">
          <li class="menu--item"><a href="#" class="menu--link active">Navlink #1</a></li>
          <li class="menu--item"><a href="#" class="menu--link">Navlink #2</a></li>
          <li class="menu--item"><a href="#" class="menu--link">Navlink #3</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>

###### Source
{% highlight html %}
<header class="wfp-header-ext">
  <div class="wfp-grid wfp-wrapper" role="banner">
    <div class="wfp-u-2-3 wfp-u-sm-1-4 header--container">
      <a href="#" class="header--logo db pv2 mv1">
        <picture class="db w-100">
          <source srcset="{{ base }}/img/logos/light/png/1x/en-standard.png 1x, {{ base }}/img/logos/light/png/2x/en-standard.png 2x" media="(max-width: 767px)">
          <source srcset="{{ base }}/img/logos/light/png/1x/en-full.png 1x, {{ base }}/img/logos/light/png/2x/en-full.png 2x" media="(min-width: 768px)">
          <img src="{{ base }}/img/logos/light/png/1x/en-standard.png" alt="UN World Food Programme">
        </picture>
      </a>
    </div>
    <div class="wfp-u-1-3 wfp-u-sm-3-4 header--nav">
      <button class="header--toggle" id="js-menu-ext-trigger">Menu</button>
      <nav class="header--menu" id="js-menu-ext">
        <ul class="menu--group">
          <li class="menu--item"><a href="#" class="menu--link active">Navlink #1</a></li>
          <li class="menu--item"><a href="#" class="menu--link">Navlink #2</a></li>
          <li class="menu--item"><a href="#" class="menu--link">Navlink #3</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>
{% endhighlight %}

### Internal
When you are building a website or an application that works on your local network (e.g.: on Intranet), you can implement a simplified version of the WFP header.

It has been designed specifically for use with Intranet sites and apps, which don't require any extensive branding, since its users are already familiar with the WFP.

Internal header features a simple navigation, which works on both smaller and bigger screens. To implement it correctly, use the examples below.

###### Preview
<header class="wfp-header-int">
  <div class="wfp-grid wfp-wrapper">
    <div class="wfp-u-3-5 wfp-u-md-1-3 header--container">
      <h1 class="header--title">
        <a href="#" class="header--logo">Site Title</a>
      </h1>
    </div>
    <div class="wfp-u-2-5 wfp-u-md-2-3 header--nav">
      <button class="header--toggle" id="js-menu-int-trigger">Menu</button>
      <nav class="header--menu" id="js-menu-int">
        <ul class="menu--group">
          <li class="menu--item"><a href="#" class="menu--link active">Navlink #1</a></li>
          <li class="menu--item"><a href="#" class="menu--link">Navlink #2</a></li>
          <li class="menu--item"><a href="#" class="menu--link">Navlink #3</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>

###### Source
{% highlight html %}
<header class="wfp-header-int">
  <div class="wfp-grid wfp-wrapper">
    <div class="wfp-u-3-5 wfp-u-md-1-3 header--container">
      <h1 class="header--title">
        <a href="#" class="header--logo">Site Title</a>
      </h1>
    </div>
    <div class="wfp-u-2-5 wfp-u-md-2-3 header--nav">
      <button class="header--toggle" id="js-nav-trigger">Menu</button>
      <nav class="header--menu" id="js-nav">
        <ul class="menu--group">
          <li class="menu--item"><a href="#" class="menu--link active">Navlink #1</a></li>
          <li class="menu--item"><a href="#" class="menu--link">Navlink #2</a></li>
          <li class="menu--item"><a href="#" class="menu--link">Navlink #3</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>
{% endhighlight %}

<div class="notice">
  <h2 class="title">Header Position</h2>
  <p>You can also set header component to stay fixed to the top of your page, by adding <code>hs--int</code> (for <code>header-int</code>) or <code>hs--ext</code> (for <code>header-ext</code>) class to your <code>body</code> tag (for extra spacing), and class <code>fixed</code> to <code>header-int</code> element.</p>
</div>

To ensure the navigation works correctly, include our fork of `responsive-nav` library to the bottom of your page, before the closing `body` tag. You can load it locally, from WFP UI `dist` directory, or from our CDN:

{% highlight html %}
<script src="http://cdn.wfp.org/libraries/wfpui/v0.8.0/js/responsive-nav.min.js" defer></script>
<script>
  var nav = responsiveNav("#js-nav", {
    customToggle: "js-nav-trigger", // menu toggle
    navClass: "header--menu", // menu class
    openPos: "fixed", // `absolute`, or `fixed`
    closedPos: "static"
  });
</script>
{% endhighlight %}


### Subcomponents
In addition to default navigation bundled with each header variant, you can make use of special subcomponents, to add more functionality.

###### `header--btn`
Designed specifically for use with our mastheads, as far as contrast and accessibility goes. It's a general-purpose element, so it can be used for just about anything.

{% highlight html %}
<div class="header--misc">
  <button class="header--btn">Label</button>
</div>
{% endhighlight %}

###### `header--input`
General purpose alphanumerical input, adjusted for use with our header. Adjust input type attribute based on the intended use of your element.

{% highlight html %}
<div class="header--misc">
  <input type="text" class="header--input" placeholder="Text input">
</div>
{% endhighlight %}

###### `header--search`
Text input designated for entering search queries, adjusted for use with our header.

{% highlight html %}
<div class="header--misc">
  <div class="header--search">
    <input type="search" class="header--input" placeholder="Search">
  </div>
</div>
{% endhighlight %}
