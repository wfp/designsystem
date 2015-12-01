---
layout: page
title: Navigation
permalink: /components/navigation/
resource: true
categories: Components
nav: nav/navigation.html
---

This is one of the most important components for all websites and applications. Without good navigation the content cannot be discovered by the user, nor the user will be able to navigate between your pages with ease. WFP UI offers several navigation patterns, depending on the use case.

### Menu
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
      <li class="menu--item"><a href="#">Executive Director</a></li>
      <li class="menu--item"><a href="#">Senior Leadership</a></li>
      <li class="menu--item"><a href="#">Corporate Information</a></li>
      <li class="menu--item"><a href="#">Funding</a></li>
    </ul>
  </div>
</nav>

###### Markup
{% highlight html %}
<nav class="menu">
  <div class="menu--group">
    <h6 class="menu--heading">About</h6>
    <ul class="menu--wrapper">
      <li class="menu--item"><a href="#">Executive Director</a></li>
      <li class="menu--item"><a href="#">Senior Leadership</a></li>
      <li class="menu--item"><a href="#">Corporate Information</a></li>
      <li class="menu--item"><a href="#">Funding</a></li>
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
      <li class="menu--item"><a href="#">Cash and Vouchers</a></li>
      <li class="menu--item"><a href="#">Foods for Assets</a></li>
      <li class="menu--item"><a href="#">HIV / AIDS</a></li>
      <li class="menu--item"><a href="#">Purchase for Progress</a></li>
    </ul>
  </div>
  <div class="menu--group pure-u-1 pure-u-md-1-3">
    <h6 class="menu--heading">Our Expertise</h6>
    <ul class="menu--wrapper">
      <li class="menu--item"><a href="#">Preparedness: Being Ready</a></li>
      <li class="menu--item"><a href="#">Responding to Emergencies</a></li>
      <li class="menu--item"><a href="#">Food Security Analysis</a></li>
      <li class="menu--item"><a href="#">Buying the Food</a></li>
    </ul>
  </div>
  <div class="menu--group pure-u-1 pure-u-md-1-3">
    <h6 class="menu--heading">Our Operations</h6>
    <ul class="menu--wrapper">
      <li class="menu--item"><a href="#">Current Emergencies</a></li>
      <li class="menu--item"><a href="#">Emergency Operations</a></li>
      <li class="menu--item"><a href="#">Relief & Recovery Operations</a></li>
      <li class="menu--item"><a href="#">Special Operations</a></li>
    </ul>
  </div>
</nav>

###### Markup
{% highlight html %}
<nav class="menu pure-g">
  <div class="menu--group pure-u-1 pure-u-md-1-3">
    <h6 class="menu--heading">Our Programmes</h6>
    <ul class="menu--wrapper">
      <li class="menu--item"><a href="#">Cash and Vouchers</a></li>
      <li class="menu--item"><a href="#">Foods for Assets</a></li>
      <li class="menu--item"><a href="#">HIV / AIDS</a></li>
      <li class="menu--item"><a href="#">Purchase for Progress</a></li>
    </ul>
  </div>
  <div class="menu--group pure-u-1 pure-u-md-1-3">
    <h6 class="menu--heading">Our Expertise</h6>
    <ul class="menu--wrapper">
      <li class="menu--item"><a href="#">Preparedness: Being Ready</a></li>
      <li class="menu--item"><a href="#">Responding to Emergencies</a></li>
      <li class="menu--item"><a href="#">Food Security Analysis</a></li>
      <li class="menu--item"><a href="#">Buying the Food</a></li>
    </ul>
  </div>
  <div class="menu--group pure-u-1 pure-u-md-1-3">
    <h6 class="menu--heading">Our Operations</h6>
    <ul class="menu--wrapper">
      <li class="menu--item"><a href="#">Current Emergencies</a></li>
      <li class="menu--item"><a href="#">Emergency Operations</a></li>
      <li class="menu--item"><a href="#">Relief & Recovery Operations</a></li>
      <li class="menu--item"><a href="#">Special Operations</a></li>
    </ul>
  </div>
</nav>
{% endhighlight %}

### Segmented Controls
This pattern is useful for when you need to display a set of controls with an indicated active state, or a group of links related to each other.

###### Preview
<div class="preview plain">
  <ul class="segmented-control">
    <li class="segmented-control--item">
      <span class="segmented-control--link active">Home</span>
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
</div>

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

### Breadcrumbs
_Breadcrumbs_ are a special kind of _segmented control_ component; a simple and minimal way to give users a hint at your site or application's structure. They also provide an important context in relation to user's current location within your content. Breadcrumbs should be displayed just below the masthead, possibly on their own, with appropriate spacing to stay visible.

<!-- <div class="notice">
  <h6 class="title">Note</h6>
  <p>You can use a inversed breadcrumbs, by replacing class <code>breadcrumbs</code> with <code>breadcrumbs-inverse</code>. Inversed breadcrumbs should only ever be used against dark, or unpredictable backgrounds, such as splash screens, etc.</p>
</div> -->

###### Preview
<div class="preview plain">
  <ul class="breadcrumbs">
    <li class="breadcrumbs--item"><a href="#" class="breadcrumbs--link"><img src="{{site.baseurl}}/img/ui/svg/home.svg" width="16" height="16"></a></li>
    <li class="breadcrumbs--item"><a href="#" class="breadcrumbs--link">Our Work</a></li>
    <li class="breadcrumbs--item"><span class="breadcrumbs--last">Procurement</span></li>
  </ul>
</div>

###### Markup
{% highlight html %}
<ul class="breadcrumbs">
  <li class="breadcrumbs--item"><a href="#" class="breadcrumbs--link"><img src="{{site.baseurl}}/img/ui/svg/home.svg" width="16" height="16"></a></li>
  <li class="breadcrumbs--item"><a href="#" class="breadcrumbs--link">Our Work</a></li>
  <li class="breadcrumbs--item"><span class="breadcrumbs--last">Procurement</span></li>
</ul>
{% endhighlight %}

<div class="notice">
  <h6 class="title">TIP</h6>
  <p>Breacrumbs use the <code>home</code> icon from the WFP UI icon set. See the <a href="{{site.baseurl}}/resources/ui-icons/">User Interface icons</a> page for more information.</p>
</div>

### Pagination
_Pagination_ is very useful pattern that allows users to browse through available content when it is grouped into manageble chunks: pages. You can use any size available for the buttons.

###### Preview
<div class="preview plain">
  <div class="pagination">
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
<div class="pagination">
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