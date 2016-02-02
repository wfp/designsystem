---
layout: page
title: Fonts
permalink: /resources/fonts/
resource: true
categories: Resources
---
{% include base.html %}

Fonts should be loaded from WFP's Content Delivery Network:

{% highlight html %}
<link rel="stylesheet" href="http://cdn.wfp.org/libraries/webfonts/lato/lato.css">
<link rel="stylesheet" href="http://cdn.wfp.org/libraries/webfonts/aleo/aleo.css">
{% endhighlight %}

Once the fonts are loaded, you can use them in your CSS:

###### Sans-serif
{% highlight css %}
font-family: "lato", sans-serif;
{% endhighlight %}

###### Slab-serif
{% highlight css %}
font-family: "aleo", serif;
{% endhighlight %}

Our webfonts are also available for offline use, and come bundled with WFP UI, which you can [download from GitHub](https://github.com/wfp/ui/releases). You can reference them from `dist` directory.
