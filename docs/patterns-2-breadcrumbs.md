---
layout: page
title: Breadcrumbs
permalink: /patterns/breadcrumbs/
resource: true
categories: Patterns
---

_Breadcrumbs_ are simple and minimal way to give users a hint at your site or application's structure. It also provides an important context in relation to user's current location within your content.

Breadcrumbs should be displayed just below the masthead, possibly on their own, with appropriate spacing to stay visible.

<div class="notice">
  <h6 class="title">IMPORTANT</h6>
  <p>Please, ensure the breadcrumbs are only ever used against a <strong>white background</strong> to maintain the appropriate level of contrast. This is important to make sure the page is readable and accessible.</p>
</div>

###### Preview
<div class="preview plain">
  <ul class="breadcrumbs">
    <li class="first"><a href="#" class="home"><img src="{{site.baseurl}}/img/ui/svg/home.svg" width="10" height="10"></a></li>
    <li><a href="#">Our Work</a></li>
    <li><a href="#">Procurement</a></li>
    <li class="last">Food Tender Awards</li>
  </ul>
</div>

###### Markup
{% highlight html %}
<ul class="breadcrumbs">
  <li class="first"><a href="#" class="home"><img src="/img/ui/svg/home.svg" width="10" height="10"></a></li>
  <li><a href="#">Our Work</a></li>
  <li><a href="#">Procurement</a></li>
  <li class="last">Food Tender Awards</li>
</ul>
{% endhighlight %}

<div class="notice">
  <h6 class="title">TIP</h6>
  <p>Breacrumbs use the <code>home</code> icon from the WFP UI icon set. See the <a href="{{site.baseurl}}/resources/ui-icons/">User Interface icons</a> page for more information.</p>
</div>
