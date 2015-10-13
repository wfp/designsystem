---
layout: page
title: CSS/SCSS UI Kit
permalink: /resources/scss-ui-kit/
resource: true
categories: Resources
---

To make sure your interface follows WFP guidelines with ease, a dedicated CSS Toolkit has been created which you can reference in your web pages and applications. You can also download and use it locally if your site is not able to access the Internet.

If you are working with SCSS, the toolkit you can download below contains everything you need in both CSS and SCSS formats, with the most important variables, mixins and defaults (such as media queries or colour definitions) which you can use for your themes and websites.

<div class="notice">
  <h6 class="title">NOTE</h6>
  <p>The CSS Toolkit has been crafted to *be plug & play, and integrate seamlessly* with any front-end framework. Thus whether you use _BootStrap_, _Foundation_, _Skeleton_, or any other framework, you will easily be able to apply the CSS Toolkit to your projects.</p>
</div>

The CSS Toolkit should be loaded from WFP's Content Delivery Network:

{% highlight html %}
<link href="http://cdn.wfp.org/libraries/wfpui/master/pure/pure-min.css" rel="stylesheet">
<!--[if lte IE 8]>
<link href="http://cdn.wfp.org/libraries/wfpui/master/pure/grids-responsive-old-ie-min.css" rel="stylesheet">
<![endif]-->
<!--[if gt IE 8]><!-->
<link href="http://cdn.wfp.org/libraries/wfpui/master/pure/grids-responsive-min.css" rel="stylesheet">
<!--<![endif]-->
<link href="http://cdn.wfp.org/libraries/wfpui/master/wfpui.min.css" rel="stylesheet">
{% endhighlight %}

If your application or website is not able to connect to the Internet, you can use the offline CSS Toolkit to host the CSS locally. Download the ZIP file, unpack it and place its contents in the root of your site.

<div class="preview plain">
  <p>
    <a class="pure-button" href="http://cdn.wfp.org/libraries/wfpui/wfp-ui-kit-master.zip" download>Download UI Kit (latest, zip)</a>
  </p>
</div>