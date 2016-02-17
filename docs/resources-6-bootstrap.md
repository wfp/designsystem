---
layout: page
title: Bootstrap Theme
permalink: /resources/bootstrap/
resource: true
categories: Resources
---
{% include base.html %}

As part of WFP UI, we maintain our own `bootstrap-theme.css`, which is a drop-in _skin_ for Bootstrap 3. You can find it alongside `wfpui.css`, under `dist/css/bootstrap-theme.css`.

{% highlight html %}
<!-- Bower -->
<link rel="stylesheet" href="bower_components/wfp-ui/dist/css/bootstrap-theme.css">
<!-- WFP CDN -->
<link rel="stylesheet" href="http://cdn.wfp.org/libraries/wfpui/v0.8.0/css/bootstrap-theme.css">
{% endhighlight %}

<div class="notice">
  <h2 class="title">Notice</h2>
  <p><strong>Bootstrap theme is not a direct replacement for WFP UI.</strong> It only makes use of generic visual styles, colours, typography, and spacing, but keeps native Bootstrap components untouched, in terms of design and structure.</p>
</div>
