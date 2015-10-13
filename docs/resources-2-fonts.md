---
layout: page
title: Fonts
permalink: /resources/fonts/
resource: true
categories: Resources
---

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

If your application or website is not able to connect to the Internet, you can use our webfonts offline kit to host fonts locally. Download the ZIP file, unpack it and place its contents in the root of your site.

<div class="preview plain">
  <p>
    <a class="pure-button" href="http://cdn.wfp.org/libraries/webfonts/wfp-ui-fonts.zip" download>Download web fonts (zip, ~1 MB)</a>
  </p>
</div>

<div class="notice">
  <h6 class="title">TIP</h6>
  <p>Please read the [Typography page]({{site.baseurl}}/design/typography/) as well.</p>
</div>

