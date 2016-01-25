---
layout: page
title: Masthead
permalink: /component/masthead/
resource: true
categories: Components
---

This pattern is the single, most important way to indicate to your visitors that they are browsing WFP's online property. Below, you will find most commonly used patterns for your masthead.

Masthead patterns will vary slightly, depending on your use case, whether the website, but generally follow the same basic style.

<!--
### Public Page
These pages are always available to the public, therefore need to represent WFP's brand apropriately. Please, make sure you always use only the official logo, without any alterations.

Public pages should always use a logo with a caption "World Food Programme". For smaller screens, you can serve a narrower version of the logo, with a two-line caption.

If the vertical space is limited, you can substitute the logo with a "WFP.org" caption (using strictly white text `#ffffff` on a blue background `#2A93FC`), as per the official guidelines. Refer to the examples below.

###### Wide Layout
![Wide Layout]({{site.baseurl}}/img/pattern-masthead-public.png)

###### Sample Markup
{% highlight html %}
<header class="masthead-full">
  <div class="grid wrapper">
    <div class="unit-2-3 unit-sm-1-3">
      <h1 class="wfp-logo">
        <a href="#" class="wfp-logo-img"><img src="{{site.baseurl}}/img/logos/wfp_logo_full@256w.png" class="logo-dark" alt="UN World Food Programme"></a>
      </h1>
    </div>
    <div class="unit-1-3 unit-sm-2-3">
      <div class="additional">
        <nav class="component header-lang">
          <ul>
            <li><a href="#">Français</a></li>
            <li><a href="#">Español</a></li>
            <li><a href="#">العربية</a></li>
          </ul>
        </nav>
        <div class="component header-cta">
          <a href="#" class="pure-button small">DONATE</a>
        </div>
        <div class="component header-search">
          <form class="pure-form">
            <input type="search" class="input-search" name="search_theme_form" id="search-form-input" placeholder="Search...">
            <button class="pure-button search small transparent"><i class="ss-icon">search</i></button>
          </form>
        </div>
      </div>
      <nav class="main-nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms Of Use</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>
{% endhighlight %}

###### Small-screen Layout
![Small-screen Layout]({{site.baseurl}}/img/pattern-masthead-public-small.png)

-->

### Internal
When you are building a website or an application that works on your local network (e.g.: on Intranet), you can implement a simplified version of the WFP masthead.

It has been designed specifically for use with Intranet sites and apps, which don't require any extensive branding, since its users are already familiar with the WFP.

Internal masthead features a simple navigation, which works on both smaller and bigger screens. To implement it correctly, use the examples below.

###### Preview
<header class="wfp-masthead-internal">
  <div class="wfp-grid wfp-wrapper">
    <div class="wfp-u-3-5 wfp-u-md-1-3 masthead--container">
      <h1 class="masthead--title">
        <a href="#" class="masthead--logo">Site Title</a>
      </h1>
    </div>
    <div class="wfp-u-2-5 wfp-u-md-2-3 masthead--nav">
      <button class="masthead--toggle pure-button small" id="js-example-menu-trigger">Menu</button>
      <nav class="masthead--menu" id="js-example-menu">
        <ul class="menu--group">
          <li class="menu--item"><a href="#" class="menu--link active">Navlink #1</a></li>
          <li class="menu--item"><a href="#" class="menu--link">Navlink #2</a></li>
          <li class="menu--item"><a href="#" class="menu--link">Navlink #3</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>

###### Markup
{% highlight html %}
<header class="wfp-masthead-internal">
  <div class="wfp-grid wfp-wrapper">
    <div class="wfp-u-3-5 wfp-u-md-1-3 masthead--container">
      <h1 class="masthead--title">
        <a href="#" class="masthead--logo">Site Title</a>
      </h1>
    </div>
    <div class="wfp-u-2-5 wfp-u-md-2-3 masthead--nav">
      <button class="masthead--toggle pure-button small" id="js-nav-trigger">Menu</button>
      <nav class="masthead--menu" id="js-nav">
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
  <h6 class="title">Masthead Position</h6>
  <p>You can also set masthead component to stay fixed to the top of your page, by adding <code>wfp-masthead-spacer--narrow</code> class to your <code>body</code> tag (for extra spacing), and class <code>fixed</code> to <code>masthead-internal</code> element.</p>
</div>

To ensure the navigation works correctly, download and add the following Javascript library to the bottom of your page, before the closing `body` tag.

{% highlight html %}
<script src="/js/lib/responsive-nav.min.js"></script>
<script>
  var nav = responsiveNav("#js-nav", {
    customToggle: "js-nav-trigger",
    navClass: "masthead--menu",
    openPos: "fixed", // `absolute`, or `fixed`
    closedPos: "static"
  });
</script>
{% endhighlight %}
