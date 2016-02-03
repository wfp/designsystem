---
layout: page
title: Navigation
permalink: /components/navigation/
resource: true
categories: Components
nav: nav/navigation.html
---
{% include base.html %}

This is one of the most important components for all websites and applications. Without good navigation the content cannot be discovered by the user, nor the user will be able to navigate between your pages with ease. WFP UI offers several navigation patterns, depending on the use case.

### Menu
This menu is very versatile and can use groups. You can use this menu to create blocks of links, i.e.: for the sidebar.

<div class="notice">
  <h6 class="title">Notice</h6>
  <p>This menu can be displayed without surrounding borders by using <code>wfp-menu-plain</code> class, instead of <code>wfp-menu</code>.</p>
</div>

###### Preview
<nav class="wfp-menu">
  <div class="menu--group">
    <h6 class="menu--heading">About</h6>
    <ul class="menu--wrapper">
      <li class="menu--item"><a href="#" class="menu--link">Executive Director</a></li>
      <li class="menu--item"><a href="#" class="menu--link">Senior Leadership</a></li>
      <li class="menu--item"><a href="#" class="menu--link">Corporate Information</a></li>
      <li class="menu--item"><a href="#" class="menu--link">Funding</a></li>
    </ul>
  </div>
</nav>

###### Markup
{% highlight html %}
<nav class="wfp-menu">
  <div class="menu--group">
    <h6 class="menu--heading">About</h6>
    <ul class="menu--wrapper">
      <li class="menu--item"><a href="#" class="menu--link">Executive Director</a></li>
      <li class="menu--item"><a href="#" class="menu--link">Senior Leadership</a></li>
      <li class="menu--item"><a href="#" class="menu--link">Corporate Information</a></li>
      <li class="menu--item"><a href="#" class="menu--link">Funding</a></li>
    </ul>
  </div>
</nav>
{% endhighlight %}

### Inline Menu
The same menu as in previous example, but used together with grids, to create more complex designs, such as horizontal groups of links for the footer.

<div class="notice">
  <h6 class="title">Notice</h6>
  <p>This menu can be displayed without surrounding borders by using <code>wfp-menu-plain</code> class, instead of <code>wfp-menu</code>.</p>
</div>

###### Preview
<nav class="wfp-menu wfp-grid">
  <div class="menu--group wfp-u-1 wfp-u-md-1-3">
    <h6 class="menu--heading">Our Programmes</h6>
    <ul class="menu--wrapper">
      <li class="menu--item"><a href="#" class="menu--link">Cash and Vouchers</a></li>
      <li class="menu--item"><a href="#" class="menu--link">Foods for Assets</a></li>
      <li class="menu--item"><a href="#" class="menu--link">HIV / AIDS</a></li>
      <li class="menu--item"><a href="#" class="menu--link">Purchase for Progress</a></li>
    </ul>
  </div>
  <div class="menu--group wfp-u-1 wfp-u-md-1-3">
    <h6 class="menu--heading">Our Expertise</h6>
    <ul class="menu--wrapper">
      <li class="menu--item"><a href="#" class="menu--link">Preparedness: Being Ready</a></li>
      <li class="menu--item"><a href="#" class="menu--link">Responding to Emergencies</a></li>
      <li class="menu--item"><a href="#" class="menu--link">Food Security Analysis</a></li>
      <li class="menu--item"><a href="#" class="menu--link">Buying the Food</a></li>
    </ul>
  </div>
  <div class="menu--group wfp-u-1 wfp-u-md-1-3">
    <h6 class="menu--heading">Our Operations</h6>
    <ul class="menu--wrapper">
      <li class="menu--item"><a href="#" class="menu--link">Current Emergencies</a></li>
      <li class="menu--item"><a href="#" class="menu--link">Emergency Operations</a></li>
      <li class="menu--item"><a href="#" class="menu--link">Relief & Recovery Operations</a></li>
      <li class="menu--item"><a href="#" class="menu--link">Special Operations</a></li>
    </ul>
  </div>
</nav>

###### Markup
{% highlight html %}
<nav class="wfp-menu wfp-grid">
  <div class="menu--group wfp-u-1 wfp-u-md-1-3">
    <h6 class="menu--heading">Our Programmes</h6>
    <ul class="menu--wrapper">
      <li class="menu--item"><a href="#" class="menu--link">Cash and Vouchers</a></li>
      <li class="menu--item"><a href="#" class="menu--link">Foods for Assets</a></li>
      <li class="menu--item"><a href="#" class="menu--link">HIV / AIDS</a></li>
      <li class="menu--item"><a href="#" class="menu--link">Purchase for Progress</a></li>
    </ul>
  </div>
  <div class="menu--group wfp-u-1 wfp-u-md-1-3">
    <h6 class="menu--heading">Our Expertise</h6>
    <ul class="menu--wrapper">
      <li class="menu--item"><a href="#" class="menu--link">Preparedness: Being Ready</a></li>
      <li class="menu--item"><a href="#" class="menu--link">Responding to Emergencies</a></li>
      <li class="menu--item"><a href="#" class="menu--link">Food Security Analysis</a></li>
      <li class="menu--item"><a href="#" class="menu--link">Buying the Food</a></li>
    </ul>
  </div>
  <div class="menu--group wfp-u-1 wfp-u-md-1-3">
    <h6 class="menu--heading">Our Operations</h6>
    <ul class="menu--wrapper">
      <li class="menu--item"><a href="#" class="menu--link">Current Emergencies</a></li>
      <li class="menu--item"><a href="#" class="menu--link">Emergency Operations</a></li>
      <li class="menu--item"><a href="#" class="menu--link">Relief & Recovery Operations</a></li>
      <li class="menu--item"><a href="#" class="menu--link">Special Operations</a></li>
    </ul>
  </div>
</nav>
{% endhighlight %}

### Segmented Controls
This pattern is useful for when you need to display a set of controls with an indicated active state, or a group of links related to each other.

###### Preview
<div class="preview plain">
  <ul class="wfp-seg-control">
    <li class="seg-control--item">
      <span class="seg-control--link active">Home</span>
    </li>
    <li class="seg-control--item">
      <a class="seg-control--link" href="#">Blog</a>
    </li>
    <li class="seg-control--item">
      <a class="seg-control--link" href="#">About us</a>
    </li>
    <li class="seg-control--item">
      <a class="seg-control--link" href="#">Contact us</a>
    </li>
  </ul>
</div>

###### Markup
{% highlight html %}
<ul class="wfp-seg-control">
  <li class="seg-control--item">
    <a class="seg-control--link" href="#">Home</a>
  </li>
  <li class="seg-control--item">
    <a class="seg-control--link" href="#">Blog</a>
  </li>
  <li class="seg-control--item">
    <a class="seg-control--link" href="#">About us</a>
  </li>
  <li class="seg-control--item">
    <a class="seg-control--link" href="#">Contact us</a>
  </li>
</ul>
{% endhighlight %}

### Breadcrumbs
_Breadcrumbs_ are a special kind of _segmented control_ component; a simple and minimal way to give users a hint at your site or application's structure. They also provide an important context in relation to user's current location within your content. Breadcrumbs should be displayed just below the header, possibly on their own, with appropriate spacing to stay visible.

<!-- <div class="notice">
  <h6 class="title">Note</h6>
  <p>You can use a inversed breadcrumbs, by replacing class <code>breadcrumbs</code> with <code>breadcrumbs-inverse</code>. Inversed breadcrumbs should only ever be used against dark, or unpredictable backgrounds, such as splash screens, etc.</p>
</div> -->

###### Preview
<div class="preview plain">
  <ul class="wfp-breadcrumbs">
    <li class="breadcrumbs--item"><a href="#" class="breadcrumbs--link"><i class="icon-home-dark xsmall"></i></a></li>
    <li class="breadcrumbs--item"><a href="#" class="breadcrumbs--link">Our Work</a></li>
    <li class="breadcrumbs--item"><span class="breadcrumbs--last">Procurement</span></li>
  </ul>
</div>

###### Markup
{% highlight html %}
<ul class="wfp-breadcrumbs">
  <li class="breadcrumbs--item"><a href="#" class="breadcrumbs--link"></a></li>
  <li class="breadcrumbs--item"><a href="#" class="breadcrumbs--link">Our Work</a></li>
  <li class="breadcrumbs--item"><span class="breadcrumbs--last">Procurement</span></li>
</ul>
{% endhighlight %}

<div class="notice">
  <h6 class="title">TIP</h6>
  <p>Breacrumbs use the <code>home</code> icon from the WFP UI icon set. See the <a href="{{ base }}/resources/ui-icons/">User Interface icons</a> page for more information.</p>
</div>

### Pagination
_Pagination_ is very useful pattern that allows users to browse through available content when it is grouped into manageable chunks: pages. You can use any size available for the buttons.

###### Preview
<div class="preview plain">
  <div class="wfp-pagination">
    <ol class="pagination--wrapper">
      <li class="pagination--item">
        <a href="#" class="pagination--btn">Previous</a>
      </li>
      <li class="pagination--item">
        <span class="pagination--btn active">1</span>
      </li>
      <li class="pagination--item">
        <a href="#" class="pagination--btn">2</a>
      </li>
      <li class="pagination--item">
        <a href="#" class="pagination--btn">3</a>
      </li>
      <li class="pagination--item">
        <a href="#" class="pagination--btn">Next</a>
      </li>
    </ol>
  </div>
</div>

###### Markup
{% highlight html %}
<div class="wfp-pagination">
  <ol class="pagination--wrapper">
    <li class="pagination--item">
      <a href="#" class="pagination--btn">Previous</a>
    </li>
    <li class="pagination--item">
      <span class="pagination--btn active">1</span>
    </li>
    <li class="pagination--item">
      <a href="#" class="pagination--btn">2</a>
    </li>
    <li class="pagination--item">
      <a href="#" class="pagination--btn">3</a>
    </li>
    <li class="pagination--item">
      <a href="#" class="pagination--btn">Next</a>
    </li>
  </ol>
</div>
{% endhighlight %}
